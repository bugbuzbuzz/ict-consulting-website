import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { companyInfo, services, team, caseStudy } from "@/content";
import { ArrowRight, CheckCircle2, ClipboardCheck, Globe, Mail, MapPin, Menu, Network, Server, Users, Loader2, Shield, Cloud, Wifi } from "lucide-react";
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

  // Service icons mapping with images
  const serviceImages: Record<string, string> = {
    "Network": "/images/datacenter.jpg",
    "ClipboardCheck": "/images/team-meeting.jpg",
    "Server": "/images/cloud-computing.webp",
    "Users": "/images/cybersecurity.jpg",
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
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Technology background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-900/80" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 space-y-6 pb-16 pt-16 md:pb-24 md:pt-20 lg:py-40">
            <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-sm font-medium text-white">
                Established 2020 • Singapore
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                {companyInfo.tagline}
              </h1>
              <p className="max-w-[42rem] leading-normal text-slate-200 sm:text-xl sm:leading-8">
                {companyInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('case-study')} className="bg-white text-slate-900 hover:bg-slate-100">
                  View Our Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('services')} className="border-white/30 text-white hover:bg-white/10">
                  Our Services
                </Button>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-8 border-t border-white/20 w-full max-w-3xl">
                {companyInfo.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section with Images */}
        <section id="services" className="container space-y-8 py-16 md:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl font-bold">
              Expertise & Services
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We provide specialized ICT consulting, bridging the gap between business strategy and technical execution.
            </p>
          </div>
          
          <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className="group relative overflow-hidden rounded-xl border bg-background transition-all hover:shadow-xl hover:-translate-y-1">
                {/* Service Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={serviceImages[service.icon] || "/images/datacenter.jpg"} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-white/90 backdrop-blur-sm">
                    {service.icon === "Network" && <Network className="h-5 w-5 text-blue-600" />}
                    {service.icon === "ClipboardCheck" && <ClipboardCheck className="h-5 w-5 text-green-600" />}
                    {service.icon === "Server" && <Server className="h-5 w-5 text-purple-600" />}
                    {service.icon === "Users" && <Users className="h-5 w-5 text-orange-600" />}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Study Section with Enhanced Visual */}
        <section id="case-study" className="relative bg-slate-50 dark:bg-slate-900 py-16 md:py-24 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <img src="/images/datacenter.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="container relative z-10">
            <div className="mb-12 flex flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                Featured Project
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">{caseStudy.title}</h2>
              <p className="text-muted-foreground max-w-[800px] text-lg">{caseStudy.subtitle}</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-6">
                {/* Project Image Card */}
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/datacenter.jpg" 
                    alt="Data Center Infrastructure" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <Globe className="h-5 w-5" />
                      <span className="font-medium">Enterprise-Grade Infrastructure</span>
                    </div>
                  </div>
                </div>
                
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
                      <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            {i === 0 && <Network className="h-5 w-5 text-primary" />}
                            {i === 1 && <Cloud className="h-5 w-5 text-primary" />}
                            {i === 2 && <Shield className="h-5 w-5 text-primary" />}
                            {i === 3 && <Wifi className="h-5 w-5 text-primary" />}
                            {i > 3 && <Server className="h-5 w-5 text-primary" />}
                          </div>
                          <div>
                            <div className="font-semibold mb-1">{sol.title}</div>
                            <div className="text-sm text-muted-foreground">{sol.detail}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Key Outcomes</h3>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {caseStudy.results.map((res, i) => (
                      <div key={i} className="flex flex-col items-center justify-center rounded-lg bg-primary/5 p-4 text-center hover:bg-primary/10 transition-colors">
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

        {/* Team Section with Enhanced Avatars */}
        <section id="team" className="container py-16 md:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">Our Team</h2>
            <p className="text-muted-foreground text-lg">
              A specialized team of {companyInfo.stats.find(s => s.label === "Experts")?.value} experts dedicated to your success.
            </p>
          </div>
          
          {/* Team Image Banner */}
          <div className="relative rounded-xl overflow-hidden mb-12 h-64">
            <img 
              src="/images/team-meeting.jpg" 
              alt="Our professional team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Professional Excellence</h3>
              <p className="text-slate-200 max-w-md">Our diverse team brings together decades of experience in ICT consulting across APAC.</p>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((group, i) => (
              <Card key={i} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900">
                  <CardTitle className="text-lg">{group.role}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-5">
                    {group.members.map((member, j) => (
                      <div key={j} className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold leading-none">{member.name}</p>
                          <p className="text-xs text-primary mt-1">{member.title}</p>
                          <p className="text-xs text-muted-foreground mt-2">{member.bio}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section with Image */}
        <section id="contact" className="relative py-16 md:py-24 border-t overflow-hidden">
          {/* Background decorative image */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 hidden lg:block">
            <img src="/images/cybersecurity.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          
          <div className="container relative z-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to transform your ICT infrastructure? Contact us for a consultation.
                </p>
                
                {/* Contact Image */}
                <div className="relative rounded-xl overflow-hidden mb-8 h-48 hidden md:block">
                  <img 
                    src="/images/cybersecurity.jpg" 
                    alt="Secure communications" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">Secure & Confidential</p>
                    <p className="text-xs text-slate-300">Your inquiries are protected</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                    <div className="p-2 rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <span>10 Anson Road, International Plaza, Singapore</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <span>contact@ict-consulting.sg</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <span>www.ict-consulting.sg</span>
                  </div>
                </div>
              </div>
              <Card className="shadow-lg">
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
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-0 bg-slate-50 dark:bg-slate-900">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2026 {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Singapore • APAC</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
