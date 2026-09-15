# Digi Brand Booster

Senior-led performance marketing agency website for D2C, SaaS, and EdTech brands. Built with Next.js 16, React 19, Tailwind CSS v4, Framer Motion, and TypeScript.

**Live:** https://www.digibrandbooster.tech
**Repo:** https://github.com/DVR79/DigiBrand-Booster

## What's inside

- Homepage sections: Hero, Services, Case Studies, Problem, Market Results, Agency Comparison, Industries, Booster Framework, How We Work, Pricing, Testimonials, Insights, FAQ, Contact
- Positioning: senior specialist on every account, KPIs written into the contract, transparent weekly reporting, month-to-month with no lock-in
- Services: SEO, Meta Ads, Google Ads, plus AEO (getting cited in AI answers) and GEO (getting recommended by AI)
- Conversion features: sticky CTA, exit-intent popup, WhatsApp button, back-to-top, contact form (EmailJS with a WhatsApp fallback)
- Cmd/Ctrl+K search modal indexing services, FAQs, case studies, and industries
- Real photography optimised to WebP, delivered through `next/image`
- Full SEO setup: OG image, sitemap, robots.txt, JSON-LD (Organization, FAQPage, Article)
- Blog with per-post pages and static legal pages (`/privacy`, `/terms`)

## Tech stack

- **Next.js 16** with App Router and Turbopack
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** with the `@theme` directive
- **Framer Motion** for animations
- **Lucide React** for icons
- **Fonts:** Oswald (headings) and Open Sans (body), loaded via `next/font`

## Design system

- Accent blue `#0058be`, near-black `#11161e`, on white and `#f3f3f4` surfaces
- Uppercase Oswald headings, Open Sans body, sharp-cornered cards
- Design tokens and component patterns live in `src/app/globals.css` (see [`AGENTS.md`](./AGENTS.md))

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

The contact form sends through EmailJS. Set these in `.env.local` (and in your Vercel project) for email delivery; without them the form falls back to WhatsApp:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=...
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...
```

Restrict allowed domains in the EmailJS dashboard so the public key cannot be reused elsewhere.

## Production build

```bash
npm run build
npm run start
```

All routes are statically generated (SSG) at build time.

## Lint

```bash
npm run lint
```

## Project conventions

See [`AGENTS.md`](./AGENTS.md) for the full guide: content rules, colour tokens, and component patterns.

## Deploy

Zero-config on Vercel: import this repo and push to `main` to deploy. Also runs on any Node host that supports Next.js.
