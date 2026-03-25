import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who we are and why we built a Japan-focused execution partner for overseas companies.",
};

const differentiators = [
  {
    title: "Local execution, not just advice",
    description:
      "We don't stop at strategy decks. We have the local network, language capability, and operational infrastructure to actually implement — from partnership development to e-commerce operations.",
  },
  {
    title: "International communication",
    description:
      "We communicate exclusively in English with our overseas clients. We understand how international businesses think, make decisions, and measure success.",
  },
  {
    title: "Commercial alignment",
    description:
      "We measure our work by business outcomes. Not reports delivered or hours logged. Our goal is to help your Japan business grow.",
  },
  {
    title: "Flexibility over rigidity",
    description:
      "We don't have a fixed playbook. Japan is diverse, and your business is unique. We design approaches that fit your market, stage, and goals.",
  },
];

const team = [
  { name: siteConfig.contact.name, role: "Founder & CEO", email: siteConfig.contact.email },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px]" />
        
        <Container className="relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground font-mono">About {siteConfig.name}</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-foreground">Built for companies that want to</span>
              <br />
              <span className="text-gradient">actually win in Japan.</span>
            </h1>
            
            <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
              We exist because there&apos;s a gap between &quot;Japan strategy&quot; and &quot;Japan results.&quot; We bridge it.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-card">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <SectionHeader
                eyebrow="Who We Are"
                title="A Japan-focused execution partner."
              />
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We are a go-to-market and business process outsourcing (BPO) partner built specifically for overseas companies entering and growing in Japan. Our team combines deep local market knowledge with the international business fluency needed to make cross-border expansion work.
                </p>
                <p>
                  We&apos;re not a traditional consulting firm. We don&apos;t hand you a market report and move on. We build and execute Japan market strategies alongside you — from initial research and positioning to live partnerships, operational infrastructure, and ongoing growth support.
                </p>
                <p>
                  Our clients include SaaS companies, consumer brands, fintech companies, marketplace platforms, AI companies, and more — all with the same challenge: how to build real traction in Japan without building a large local organization from scratch.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-muted rounded-2xl p-8 border border-border pixel-corners">
                <p className="text-xs font-mono tracking-widest uppercase text-accent mb-6">
                  // What we are
                </p>
                <ul className="space-y-3">
                  {[
                    "A Japan GTM and BPO execution partner",
                    "A bridge between overseas companies and Japan",
                    "A flexible, practical team that gets things done",
                    "A long-term partner aligned with your growth",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-muted rounded-2xl p-8 border border-border">
                <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6">
                  // What we are not
                </p>
                <ul className="space-y-3">
                  {[
                    "A traditional consulting firm (strategy only)",
                    "A distributor or reseller",
                    "A creative or branding agency",
                    "A translation service",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <svg
                        className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        
        <Container className="relative">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet the people behind GTJ."
            description="A dedicated team passionate about connecting global businesses with Japanese opportunities."
            align="center"
          />
          <div className="mt-16 flex justify-center">
            {team.map((member, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl p-8 text-center transition-all duration-500 card-hover hover:border-accent/50 max-w-sm"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center border border-accent/30">
                  <span className="font-display text-3xl font-bold text-gradient">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="text-sm text-accent hover:text-secondary transition-colors anime-underline"
                >
                  {member.email}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 bg-card">
        <Container>
          <SectionHeader
            eyebrow="What Makes Us Different"
            title="Execution capability, not just market knowledge."
            description="Japan market knowledge is table stakes. What matters is translating that knowledge into real business outcomes."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <div
                key={i}
                className="group bg-muted border border-border rounded-2xl p-8 transition-all duration-500 card-hover hover:border-accent/50"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:border-accent transition-all">
                  <span className="font-mono text-sm text-accent group-hover:text-accent-foreground transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-card-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-32 relative overflow-hidden">
        <Container size="narrow" className="relative">
          <SectionHeader
            eyebrow="Why Japan Needs Local Execution"
            title="The gap between knowing Japan and succeeding in Japan."
            align="center"
          />
          <div className="mt-12 space-y-6 text-muted-foreground leading-relaxed text-center">
            <p>
              Japan is a market where trust, relationships, and cultural alignment matter enormously. Business moves through introductions. Decisions take longer. Customers expect higher standards.
            </p>
            <p>
              This means that overseas companies entering Japan without local execution capability — real local presence, real local relationships, real knowledge of how things actually work — tend to either fail quietly or waste significant time and budget.
            </p>
            <p>
              We&apos;re built to be that partner — giving you local execution capability without requiring you to build a Japan organization from scratch on day one.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-32 bg-accent relative overflow-hidden">
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}
          />
        </div>
        
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="text-xs font-mono tracking-widest uppercase text-accent-foreground/60 mb-6">
              // Our Approach
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-accent-foreground mb-8">
              Practical. Commercial. Long-term.
            </h2>
            <div className="space-y-6 text-accent-foreground/70 leading-relaxed">
              <p>
                We don&apos;t optimize for impressive slide decks. We optimize for business results. That means we&apos;re comfortable telling clients when an approach won&apos;t work in Japan, when a timeline is unrealistic, or when a hypothesis needs refinement.
              </p>
              <p>
                We work as a genuine partner — sharing honest assessment, building plans based on real market dynamics, and staying accountable to outcomes we agree on together.
              </p>
              <p>
                Japan is a long game. The companies that win here build carefully, adapt continuously, and invest in the right local relationships over time. We&apos;re here to help you do exactly that.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's talk about your Japan ambitions."
        description="Book a call and let's find out how we can help."
        primaryCTA={{ label: "Book a Call", href: "/contact" }}
        secondaryCTA={{ label: "Explore Services", href: "/services" }}
        theme="dark"
      />
    </>
  );
}
