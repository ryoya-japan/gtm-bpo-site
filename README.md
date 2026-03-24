# GTJ — Go-To Japan | Japan Market Entry Partner
### by Sekaichi.inc

A production-ready marketing website for GTJ (Go-To Japan), a GTM-BPO business by Sekaichi.inc helping overseas companies launch and grow in Japan.

**Contact:** Hirai Momo — momo@sekaichi.org

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (deployment target)
- **Google Fonts:** Syne (headings) + Inter (body)

## Design System

GTJ uses a premium Japanese cyberpunk/anime aesthetic:
- **Background:** Deep black `#0a0a0f` and dark navy `#080b14`
- **Primary accent:** Electric red `#ff2d55`
- **Secondary accent:** Electric cyan `#00d4ff`
- **Tertiary:** Gold/amber `#ffd60a`
- **Text:** White `#ffffff` and gray `#a0aec0`
- **Cards/surfaces:** `#0f1420` with borders `#1a2040`

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and import the repository
3. No additional configuration needed — Vercel will detect Next.js automatically
4. Add any environment variables (see below)

### Environment Variables

For the contact form to send notifications, set these in your Vercel dashboard:

```
# Option A: Resend (email)
RESEND_API_KEY=your_resend_api_key

# Option B: Slack notification
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

See `app/api/contact/route.ts` for integration instructions.

## Where to Edit Copy

All user-facing text content is centralized:

| File | Contents |
|------|----------|
| `content/site.ts` | Site name, company, email, contact person, navigation links |
| `content/services.ts` | All 8 service definitions (title, description, outcomes) |
| `content/caseStudies.ts` | 6 case study entries (replace with real client stories) |
| `content/faq.ts` | 12 FAQ question/answer pairs |
| `app/page.tsx` | Home page copy (hero, why Japan, differentiators, process) |
| `app/about/page.tsx` | About page copy |
| `app/how-we-work/page.tsx` | Process and engagement model descriptions |
| `app/contact/page.tsx` | Contact page copy and tips |

## Placeholder Content to Replace

The following content is illustrative and should be replaced before launch:

- **`content/caseStudies.ts`** — All 6 case studies are sample/placeholder. Replace with real client stories (keeping clients anonymous if needed).
- **`content/site.ts`** — Update `siteConfig.url` and social links.
- **`app/layout.tsx`** — Update Open Graph `url` field to your real domain.
- **`public/favicon.ico`** — Replace with your real favicon.
- **Contact form** (`app/api/contact/route.ts`) — Connect to Resend, Formspree, Slack, or another notification method.

## Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer (Syne + Inter fonts)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles + anime/cyberpunk animations
│   ├── services/page.tsx       # Services page
│   ├── how-we-work/page.tsx    # Process page
│   ├── about/page.tsx          # About page
│   ├── case-studies/page.tsx   # Case studies page
│   ├── faq/page.tsx            # FAQ page
│   ├── contact/page.tsx        # Contact page
│   └── api/contact/route.ts    # Contact form API
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Glass morphism nav with mobile overlay
│   │   └── Footer.tsx          # Dark footer with decorative JP text
│   ├── ui/
│   │   ├── Button.tsx          # Neon red/cyan/gradient variants
│   │   ├── Container.tsx
│   │   ├── SectionHeader.tsx   # With accent bar decoration
│   │   └── Badge.tsx           # Neon border pill badges
│   ├── sections/
│   │   ├── CTASection.tsx      # Dark CTA with grid + glow
│   │   ├── ServiceCard.tsx     # Corner brackets + step numbers
│   │   ├── CaseStudyCard.tsx   # Cyan corner brackets variant
│   │   ├── ProcessStep.tsx     # Game UI numbered steps
│   │   └── FAQAccordion.tsx    # Dark accordion
│   └── forms/
│       └── ContactForm.tsx     # Dark theme form
├── content/
│   ├── site.ts                 # GTJ / Sekaichi.inc config
│   ├── services.ts             # Service definitions
│   ├── caseStudies.ts          # Case study content
│   └── faq.ts                  # FAQ content
├── lib/
│   ├── utils.ts
│   └── useInView.ts            # IntersectionObserver hook for scroll animations
├── public/
│   └── favicon.ico
├── next.config.mjs
├── tailwind.config.ts          # Custom GTJ color palette + animations
├── tsconfig.json
└── README.md
```
