export const companyInfo = {
  name: "ICT Consulting SG",
  tagline: "Bridging Technology & Business Strategy",
  description: "We are a premier Singapore-based ICT consulting firm established in 2020. We specialize in delivering end-to-end ICT solutions, management consulting, and technical expertise to carriers, master contractors, and engineering firms. We don't just build systems; we architect the future of your digital infrastructure.",
  stats: [
    { label: "Founded", value: "2020" },
    { label: "Experts", value: "10" },
    { label: "Successful Projects", value: "50+" },
  ]
};

export const services = [
  {
    title: "ICT Solution Architecture",
    description: "Comprehensive design of network, security, and cloud infrastructures tailored to enterprise needs.",
    icon: "Network"
  },
  {
    title: "Project Management",
    description: "End-to-end management of complex ICT projects, ensuring on-time and on-budget delivery.",
    icon: "ClipboardCheck"
  },
  {
    title: "Technical Consultancy",
    description: "Deep-dive technical expertise in Cybersecurity, Cloud Computing, and Telecommunications.",
    icon: "Server"
  },
  {
    title: "Vendor Management",
    description: "Strategic coordination with carriers, contractors, and hardware vendors to optimize costs and performance.",
    icon: "Users"
  }
];

export const team = [
  {
    role: "Leadership",
    members: [
      { name: "Peter Qiu", title: "CEO & Founder", bio: "Former CTO with 15+ years in regional ICT leadership." }
    ]
  },
  {
    role: "Project Management",
    members: [
      { name: "Sarah Lim", title: "Senior ICT Project Manager", bio: "PMP certified, expert in agile delivery." },
      { name: "David Chen", title: "ICT Project Manager", bio: "Specialist in infrastructure rollout." },
      { name: "Michael Wu", title: "ICT Project Manager", bio: "Focus on carrier relations and compliance." }
    ]
  },
  {
    role: "Solutions",
    members: [
      { name: "James Lee", title: "Lead Solution Expert", bio: "Architecting scalable enterprise networks." },
      { name: "Priya Kumar", title: "Solution Expert", bio: "Expert in smart office integrations." },
      { name: "Wei Zhang", title: "Solution Expert", bio: "Focus on data center technologies." }
    ]
  },
  {
    role: "Technical Experts",
    members: [
      { name: "Raja Singh", title: "Network Security Expert", bio: "CISSP certified, zero-trust architecture specialist." },
      { name: "Lily Wong", title: "Cloud Expert", bio: "AWS & Azure certified solution architect." },
      { name: "Kenji Sato", title: "Communications Expert", bio: "Specialist in VoIP, SIP, and unified comms." }
    ]
  }
];

export const caseStudy = {
  title: "Tengfit ICT Project",
  subtitle: "Next-Gen Regional HQ Infrastructure for a Global Internet Giant",
  client: "Tengfit (Global Internet Tech Leader)",
  location: "Singapore APAC HQ",
  summary: "A flagship project delivering a future-proof, high-availability ICT ecosystem for Tengfit's APAC headquarters, serving 500+ employees with seamless cross-border connectivity.",
  challenges: [
    "Cross-border low-latency connectivity (China-Singapore)",
    "High-density Wi-Fi 6E for 1500+ concurrent devices",
    "Zero-Trust security implementation",
    "Unified smart office integration"
  ],
  solutions: [
    {
      title: "SD-WAN & Core Network",
      detail: "Cisco Nexus 9000 core + Silver Peak SD-WAN for optimized cross-border traffic."
    },
    {
      title: "High-Density Wireless",
      detail: "Aruba Wi-Fi 6E deployment with predictive heatmapping for 100% coverage."
    },
    {
      title: "Smart Workplace",
      detail: "Zoom Rooms with AI directors, IoT occupancy sensors, and centralized control."
    }
  ],
  results: [
    "99.999% Network Uptime achieved",
    "30% reduction in cross-border latency",
    "4.8/5.0 Employee Satisfaction Score"
  ]
};
