import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the db module
vi.mock("./db", () => ({
  createContactMessage: vi.fn(),
  getAllContactMessages: vi.fn(),
}));

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

import { createContactMessage } from "./db";
import { notifyOwner } from "./_core/notification";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully submits a contact message", async () => {
    const mockCreateContactMessage = createContactMessage as ReturnType<typeof vi.fn>;
    mockCreateContactMessage.mockResolvedValue({ success: true, id: 1 });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, I would like to inquire about your services.",
    });

    expect(result).toEqual({ success: true, id: 1 });
    expect(mockCreateContactMessage).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      message: "Hello, I would like to inquire about your services.",
    });
    expect(notifyOwner).toHaveBeenCalledWith({
      title: "New Contact Message from John Doe",
      content: "Email: john@example.com\n\nMessage:\nHello, I would like to inquire about your services.",
    });
  });

  it("handles database failure gracefully", async () => {
    const mockCreateContactMessage = createContactMessage as ReturnType<typeof vi.fn>;
    mockCreateContactMessage.mockResolvedValue({ success: false });

    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Test message",
    });

    expect(result).toEqual({ success: false });
    // Should not notify owner on failure
    expect(notifyOwner).not.toHaveBeenCalled();
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "John Doe",
        email: "invalid-email",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("requires name to be non-empty", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "john@example.com",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("requires message to be non-empty", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "John Doe",
        email: "john@example.com",
        message: "",
      })
    ).rejects.toThrow();
  });
});
