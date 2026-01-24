import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { companyInfo } from "@/content";

export default function CaseStudyDetail() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
           <div className="flex items-center gap-4">
            <Link href="/">
                <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-4 w-4" />
                </Button>
            </Link>
            <span className="font-bold text-lg tracking-tighter hidden sm:inline-block">
                {companyInfo.name}
            </span>
          </div>
          <Link href="/">
             <Button variant="outline" size="sm">Back to Home</Button>
          </Link>
        </div>
      </nav>

      <main className="container py-10">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Tengfit ICT Project</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive ICT infrastructure overhaul for the APAC regional headquarters of a global internet giant.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Network Infrastructure
              </div>
              <div className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-200">
                SD-WAN
              </div>
              <div className="rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                Smart Office
              </div>
              <div className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                Zero Trust Security
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">Executive Summary</h2>
            <p className="leading-relaxed text-muted-foreground">
              Tengfit, a leading global internet technology company with its headquarters in China, established its Asia-Pacific (APAC) regional headquarters in Singapore to drive its international expansion. The "Tengfit ICT Project" was initiated to design and deploy a state-of-the-art, future-proof ICT infrastructure that mirrors the high standards of their global HQ while adapting to the specific connectivity and operational needs of the Southeast Asian market.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Our firm was selected as the primary ICT consultant to oversee the end-to-end solution design, vendor management, and technical delivery assurance. The project scope covered 5 floors of premium office space, accommodating over 500 employees.
            </p>
          </section>

          {/* Challenges Grid */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold">Key Challenges</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cross-Border Connectivity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Ensuring low-latency, stable, and secure data transmission between the Singapore APAC HQ and the Global HQ in China, navigating complex cross-border data regulations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">High-Density Wireless</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Supporting a "mobile-first" workforce with over 1500 concurrent devices (laptops, smartphones, IoT sensors) in an open-plan office without signal interference.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Zero-Trust Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Implementing a rigorous security posture that protects intellectual property without hindering user productivity or collaboration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Smart Office Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Creating a frictionless meeting and workspace experience that integrates disparate systems (room booking, VC, access control) into a unified platform.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Solution Architecture */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold">Solution Architecture</h2>
            
            <div className="space-y-6 border-l-2 border-primary pl-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">1. Network Infrastructure (The Digital Backbone)</h3>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li><strong>Core Networking:</strong> Deployed a fully redundant 100GbE core network architecture using Cisco Nexus 9000 Series switches.</li>
                  <li><strong>SD-WAN Implementation:</strong> Designed a robust SD-WAN solution utilizing Silver Peak (Aruba) EdgeConnect to create an intelligent overlay network.</li>
                  <li><strong>Wi-Fi 6E Deployment:</strong> Implemented a high-density wireless network using Aruba 650 series Access Points with tri-band support.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">2. Cross-Border Connectivity & Acceleration</h3>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li><strong>IEPL Circuits:</strong> Provisioned dual-diverse IEPL circuits (1Gbps each) connecting Singapore Equinix SG1 DC to Beijing and Shenzhen data centers.</li>
                  <li><strong>China Premium Internet:</strong> Integrated China Telecom's CN2 DIA for optimized public internet routing to mainland China.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold">3. Unified Communication & Smart Office</h3>
                <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
                  <li><strong>Zoom Rooms Integration:</strong> Equipped 30+ meeting rooms with Neat Bar Pro and DTEN D7 all-in-one interactive displays.</li>
                  <li><strong>Space Management:</strong> Deployed a custom-integrated IoT platform using Crestron control systems linked to Microsoft Exchange.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Outcomes */}
          <section className="rounded-xl bg-slate-50 p-8 dark:bg-slate-900">
            <h2 className="mb-6 text-2xl font-bold">Project Outcomes</h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 rounded-full bg-green-100 p-3 dark:bg-green-900">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-3xl font-bold">99.999%</div>
                <div className="text-sm text-muted-foreground">Network Uptime</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold">30%</div>
                <div className="text-sm text-muted-foreground">Latency Reduction</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-2 rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                  <CheckCircle2 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold">4.8/5.0</div>
                <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2026 ICT Consulting SG. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
