import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { createContactMessage, getAllContactMessages } from "./db";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Contact form API
  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Name is required").max(255),
          email: z.string().email("Invalid email address").max(320),
          message: z.string().min(1, "Message is required").max(5000),
        })
      )
      .mutation(async ({ input }) => {
        const result = await createContactMessage({
          name: input.name,
          email: input.email,
          message: input.message,
        });

        if (result.success) {
          // Notify owner about new contact message
          await notifyOwner({
            title: `New Contact Message from ${input.name}`,
            content: `Email: ${input.email}\n\nMessage:\n${input.message}`,
          });
        }

        return result;
      }),
  }),
});

export type AppRouter = typeof appRouter;
