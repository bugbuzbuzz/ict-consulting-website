import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { companyInfo, services, team, caseStudy } from "@/content";
import { ArrowRight, CheckCircle2, ClipboardCheck, Globe, Mail, MapPin, Menu, Network, Server, Users, Loader2 } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const submitContact = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send message. Please try again.");
    },
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContact.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Desktop Logo & Nav */}
          <div className="hidden md:flex items-center w-full">
            <a className="mr-8 flex items-center space-x-2" href="/">
              <span className="font-bold text-xl tracking-tighter">
                {companyInfo.name}
              </span>
            </a>
            {/* Horizontal Menu for Desktop */}
            <nav className="flex items-center space-x-8 text-sm font-medium flex-1">
              <button onClick={() => scrollToSection('services')} className="transition-colors hover:text-primary text-foreground/70">Services</button>
              <button onClick={() => scrollToSection('case-study')} className="transition-colors hover:text-primary text-foreground/70">Case Study</button>
              <button onClick={() => scrollToSection('team')} className="transition-colors hover:text-primary text-foreground/70">Team</button>
              <button onClick={() => scrollToSection('contact')} className="transition-colors hover:text-primary text-foreground/70">Contact</button>
            </nav>
            <Button onClick={() => scrollToSection('contact')}>Get in Touch</Button>
          </div>

          {/* Mobile Nav */}
          <div className="flex md:hidden items-center justify-between w-full">
            <a className="font-bold text-lg tracking-tighter" href="/">
              {companyInfo.name}
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-10">
                  <a href="/" className="font-bold text-xl tracking-tighter mb-4">
                    {companyInfo.name}
                  </a>
                  <button onClick={() => scrollToSection('services')} className="text-left text-lg font-medium hover:text-primary transition-colors">
                    Services
                  </button>
                  <button onClick={() => scrollToSection('case-study')} className="text-left text-lg font-medium hover:text-primary transition-colors">
                    Case Study
                  </button>
                  <button onClick={() => scrollToSection('team')} className="text-left text-lg font-medium hover:text-primary transition-colors">
                    Team
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="text-left text-lg font-medium hover:text-primary transition-colors">
                    Contact
                  </button>
                  <div className="pt-6">
                    <Button className="w-full" onClick={() => scrollToSection('contact')}>
                      Get in Touch
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 bg-slate-50 dark:bg-slate-950">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Established 2020 • Singapore
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
              {companyInfo.tagline}
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {companyInfo.description}
            </p>
            <div className="space-x-4">
              <Button size="lg" onClick={() => scrollToSection('case-study')}>
                View Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => scrollToSection('services')}>
                Our Services
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
              Expertise & Services
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We provide specialized ICT consulting, bridging the gap between business strategy and technical execution.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {service.title}
                  </CardTitle>
                  {service.icon === "Network" && <Network className="h-4 w-4 text-muted-foreground" />}
                  {service.icon === "ClipboardCheck" && <ClipboardCheck className="h-4 w-4 text-muted-foreground" />}
                  {service.icon === "Server" && <Server className="h-4 w-4 text-muted-foreground" />}
                  {service.icon === "Users" && <Users className="h-4 w-4 text-muted-foreground" />}
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">{service.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Study Section */}
        <section id="case-study" className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24">
          <div className="container">
            <div className="mb-12 flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                Featured Project
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">{caseStudy.title}</h2>
              <p className="text-muted-foreground max-w-[800px] text-lg">{caseStudy.subtitle}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary shadow-md">
                  <CardHeader>
                    <CardTitle>Project Scope</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Client</p>
                        <p className="font-semibold">{caseStudy.client}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p className="font-semibold">{caseStudy.location}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground pt-2">{caseStudy.summary}</p>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Key Challenges</h3>
                  <ul className="space-y-2">
                    {caseStudy.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1 rounded-full bg-red-100 p-1 dark:bg-red-900">
                          <div className="h-2 w-2 rounded-full bg-red-600 dark:bg-red-400" />
                        </div>
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Solution Architecture</h3>
                  <div className="grid gap-4">
                    {caseStudy.solutions.map((sol, i) => (
                      <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                        <div className="font-semibold mb-1">{sol.title}</div>
                        <div className="text-sm text-muted-foreground">{sol.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Key Outcomes</h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {caseStudy.results.map((res, i) => (
                      <div key={i} className="flex flex-col items-center justify-center rounded-lg bg-primary/5 p-4 text-center">
                        <CheckCircle2 className="h-8 w-8 text-primary mb-2" />
                        <span className="text-xs font-medium">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-end">
                   <Link href="/case-study/tengfit">
                      <Button variant="outline">Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" /></Button>
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="container py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg">
              A specialized team of {companyInfo.stats.find(s => s.label === "Experts")?.value} experts dedicated to your success.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((group, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-semibold border-b pb-2">{group.role}</h3>
                <div className="space-y-4">
                  {group.members.map((member, j) => (
                    <div key={j} className="flex items-start space-x-3">
                      <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-sm">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-medium leading-none">{member.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{member.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 italic">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container py-16 md:py-24 border-t">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to transform your ICT infrastructure? Contact us for a consultation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>10 Anson Road, International Plaza, Singapore</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>contact@ict-consulting.sg</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span>www.ict-consulting.sg</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input 
                      id="name" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      placeholder="m@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                      id="message" 
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                      placeholder="How can we help you?" 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={submitContact.isPending}>
                    {submitContact.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2026 {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
