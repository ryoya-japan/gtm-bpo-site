export type Service = {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: "market-research",
    title: "Market Research & Validation",
    description: "Before you invest, understand the landscape. We conduct deep-dive market research tailored to your category — consumer behavior, competitive dynamics, regulatory context, and channel opportunities specific to Japan.",
    outcomes: [
      "Japan market sizing and opportunity assessment",
      "Competitive landscape mapping",
      "Consumer/buyer persona research",
      "Channel and distribution analysis",
      "Regulatory and compliance overview",
    ],
    icon: "search",
  },
  {
    id: "gtm-strategy",
    title: "Go-to-Market Strategy",
    description: "We build Japan-specific GTM plans grounded in local market realities — not translated versions of your home market playbook. From positioning to pricing to channel sequencing, we design strategies built to work in Japan.",
    outcomes: [
      "Japan positioning and messaging framework",
      "Channel prioritization and sequencing",
      "Pricing and packaging recommendations",
      "Launch roadmap and milestones",
      "KPI framework for Japan traction",
    ],
    icon: "map",
  },
  {
    id: "localization",
    title: "Localization",
    description: "Localization goes far beyond translation. We help you adapt your product, brand, communications, and customer experience to resonate authentically with Japanese audiences — including cultural nuance, UX patterns, and market-specific messaging.",
    outcomes: [
      "Brand and messaging localization",
      "Product and UX localization guidance",
      "Marketing asset and content localization",
      "Customer communication templates",
      "Cultural alignment review",
    ],
    icon: "globe",
  },
  {
    id: "partnerships",
    title: "Partnerships & Business Development",
    description: "In Japan, relationships drive business. We identify, approach, and develop high-value local partnerships on your behalf — distributors, resellers, channel partners, strategic alliances, and enterprise clients.",
    outcomes: [
      "Partner identification and outreach",
      "Relationship-building and negotiation support",
      "Partnership structure recommendations",
      "Distributor / reseller network development",
      "Strategic alliance facilitation",
    ],
    icon: "handshake",
  },
  {
    id: "influencer-community",
    title: "Influencer, Community & PR Support",
    description: "Word of mouth and community trust are critical in Japan. We connect your brand with the right influencers, communities, media outlets, and cultural tastemakers to build authentic local awareness and credibility.",
    outcomes: [
      "Japan influencer identification and management",
      "Community seeding and activation",
      "PR outreach and media relations",
      "Launch campaign coordination",
      "Social proof and testimonial development",
    ],
    icon: "megaphone",
  },
  {
    id: "ecommerce-retail",
    title: "E-commerce & Retail Support",
    description: "Whether you're launching on Rakuten, Amazon Japan, or entering traditional retail channels, we manage the operational complexity of Japan's e-commerce and retail landscape so you can focus on growth.",
    outcomes: [
      "E-commerce platform setup (Rakuten, Amazon JP, etc.)",
      "Retail channel introduction and support",
      "Product listing optimization",
      "Fulfillment and logistics coordination",
      "Sales performance management",
    ],
    icon: "shopping",
  },
  {
    id: "operations-bpo",
    title: "Operations & BPO Support",
    description: "We handle the operational infrastructure needed to run a Japan business — from customer support and vendor management to compliance and reporting — so you can operate efficiently without a large local headcount.",
    outcomes: [
      "Japan entity and compliance support",
      "Customer support operations",
      "Vendor and supplier management",
      "Administrative and back-office functions",
      "Reporting and operational dashboards",
    ],
    icon: "settings",
  },
  {
    id: "launch-execution",
    title: "Launch Execution",
    description: "We coordinate and execute your Japan launch — from pre-launch preparation to go-live and early traction. This is hands-on project management with local knowledge, local contacts, and local accountability.",
    outcomes: [
      "Full launch project management",
      "Vendor and agency coordination",
      "Event and activation support",
      "Media and PR coordination",
      "Post-launch performance review",
    ],
    icon: "rocket",
  },
];
