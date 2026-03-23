export type CaseStudy = {
  id: string;
  client: string;
  category: string;
  region: string;
  challenge: string;
  support: string[];
  outcome: string;
  tags: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "consumer-brand",
    client: "Global Consumer Brand",
    category: "Consumer Goods",
    region: "North America",
    challenge: "A US-based consumer brand with strong DTC performance in its home market wanted to enter Japan, but lacked local distribution contacts, localized product packaging, and any knowledge of Japan e-commerce platforms.",
    support: [
      "Market entry strategy and channel mapping",
      "Product localization and packaging review",
      "Rakuten and Amazon Japan store setup",
      "Influencer seeding with Japan lifestyle community",
      "Local distributor introductions",
    ],
    outcome: "Achieved first sales within 90 days of launch. Established two distribution partnerships and built an active social following in the lifestyle category.",
    tags: ["E-commerce", "Localization", "Partnerships", "Consumer"],
  },
  {
    id: "fintech-company",
    client: "Fintech Infrastructure Company",
    category: "Fintech / B2B SaaS",
    region: "Europe",
    challenge: "A European fintech company offering payment infrastructure needed to understand Japan's regulatory environment and identify enterprise clients and banking partners willing to pilot their technology.",
    support: [
      "Japan regulatory landscape assessment",
      "Enterprise and financial institution outreach",
      "GTM messaging localization for Japan financial sector",
      "Partnership and pilot negotiation support",
    ],
    outcome: "Completed regulatory review and initiated two enterprise pilot agreements within the engagement period. Established a clear Japan go-to-market roadmap.",
    tags: ["Partnerships", "GTM Strategy", "B2B", "Fintech"],
  },
  {
    id: "saas-platform",
    client: "SaaS Platform",
    category: "B2B SaaS",
    region: "Southeast Asia",
    challenge: "A fast-growing SaaS company from Southeast Asia wanted to expand into Japan as its next major market, but had no local presence, no Japan-facing messaging, and no existing relationships in the market.",
    support: [
      "Japan market validation and sizing",
      "Buyer persona development for Japan enterprise segment",
      "Full product and marketing localization",
      "Sales outreach and pipeline development",
      "Ongoing BPO support for Japan customer success",
    ],
    outcome: "Generated qualified pipeline within the first engagement phase. Localized product shipped to Japan customers with measurably higher trial conversion than unlocalized version.",
    tags: ["GTM Strategy", "Localization", "BPO", "SaaS"],
  },
  {
    id: "ai-company",
    client: "AI Product Company",
    category: "AI / Technology",
    region: "United States",
    challenge: "An AI company with a strong US user base wanted to explore the Japan market but was uncertain about product-market fit, local competition, and how to position AI tools for Japanese enterprise buyers.",
    support: [
      "Japan AI market landscape research",
      "Competitor and positioning analysis",
      "Japan-specific messaging and narrative development",
      "Community and media seeding in Japan tech ecosystem",
      "Partnership development with Japan enterprise software resellers",
    ],
    outcome: "Developed a clear Japan-specific positioning strategy. Initiated community presence and secured introductions to two strategic reseller partners.",
    tags: ["Market Research", "GTM Strategy", "AI", "Partnerships"],
  },
  {
    id: "marketplace",
    client: "Cross-Border Marketplace",
    category: "Marketplace / Platform",
    region: "Australia",
    challenge: "An Australian marketplace platform needed to build supply-side (Japan sellers) and demand-side (Japan buyers) simultaneously, requiring both localized operations and trust-building with local merchants.",
    support: [
      "Japan merchant acquisition strategy",
      "Localized onboarding content and flows",
      "Customer support operations in Japanese",
      "Community development and seller education",
      "PR and media outreach for Japan launch",
    ],
    outcome: "Onboarded initial cohort of Japan-based merchants. Established operational support infrastructure for Japan customer queries with Japan-based team support.",
    tags: ["Operations", "Localization", "Community", "Marketplace"],
  },
  {
    id: "wellness-brand",
    client: "D2C Wellness Brand",
    category: "Health & Wellness",
    region: "United Kingdom",
    challenge: "A UK wellness brand with a strong subscription base wanted to test Japan as a new market before committing to a full local entity, seeking a low-risk pilot approach.",
    support: [
      "Japan market feasibility assessment",
      "Pilot launch design and scoping",
      "Product localization and regulatory check",
      "Influencer pilot with Japan wellness community",
      "Performance analysis and scale recommendations",
    ],
    outcome: "Completed a structured 3-month pilot with measurable learnings. Identified strongest-performing channels and customer segment, with clear go/no-go criteria for full market investment.",
    tags: ["Pilot", "Market Research", "Consumer", "Influencer"],
  },
];
