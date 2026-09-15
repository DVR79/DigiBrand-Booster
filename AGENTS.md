# AGENTS.md

Project-specific guidance for AI coding agents working on Digi Brand Booster.

<!-- BEGIN:nextjs-agent-rules -->
> **Heads up on Next.js version.** This project uses Next.js 16 with the App Router and Turbopack. APIs, conventions, and file structure may differ from older training data. Check `node_modules/next/dist/docs/` before writing code that touches Next-specific APIs.
<!-- END:nextjs-agent-rules -->

## Project context

Digi Brand Booster is the marketing website for a senior-led performance marketing agency in Bangalore, serving D2C, SaaS, and EdTech brands. It is a marketing site, not an app. The goal is to convert visitors into leads via the contact form, WhatsApp, or a free 48-hour audit booking.

Positioning: a senior specialist works every account (no junior handoffs), KPIs are written into the contract, reporting is transparent and weekly, and engagements are month-to-month with no lock-in. Services span SEO, Meta Ads, and Google Ads, plus AEO (getting cited in AI answers) and GEO (getting recommended by AI). There is no results guarantee.

Tech stack:
- Next.js 16 with App Router and Turbopack
- React 19
- TypeScript (strict)
- Tailwind CSS v4 (uses the `@theme` block, not a config file)
- Framer Motion for animations
- Lucide React for icons

## Project structure

```
src/
  app/                Next.js App Router pages
    layout.tsx        Root layout, fonts, metadata, Organization JSON-LD
    page.tsx          Homepage (assembles every section) + FAQPage JSON-LD
    about/page.tsx    About page
    blog/             Blog index + [slug] post pages
    not-found.tsx     Custom 404
    robots.ts, sitemap.ts
    globals.css       Theme tokens, animations, button/utility classes
  components/
    layout/           Header, Footer
    sections/         Each homepage section
    ui/               Reusable: GlassCard, ShimmerButton, SectionHeader, SearchModal
    effects/          CursorFollower
    conversion/       StickyCTA, WhatsAppButton, ExitIntent, BackToTop
  lib/
    data.ts           Most site content lives here. Single source of truth.
    utils.ts          Tiny helpers (cn, formatCurrency)
```

Homepage section order (in `page.tsx`): Hero, Services, CaseStudies, ProblemSection, MarketResults, AgencyComparison, Industries, BoosterFramework, Guarantee (renders the "How We Work" section, id `how-we-work`), Pricing, Testimonials, Insights, FAQ, Contact.

## Content rules

1. **Most copy lives in `src/lib/data.ts`.** Prefer adding strings there over hardcoding into components. Some section-level copy (headings, hero) is inline; keep it consistent with the data.ts tone.

2. **No em dashes.** Use periods, commas, parentheses, or restructure. Bad: `88% of goals — quarter after quarter.` Good: `88% of goals, quarter after quarter.`

3. **Avoid corporate clichés:** "data-driven", "results-driven", "360°", "full-funnel", "ROI-focused", "synergy". The site is positioned against these on purpose.

4. **Keep claims specific and honest.** Numbers and time windows beat adjectives (`4.0x ROAS in 9 weeks`, not `massive growth`). Label best-case results as best-case, not averages. Do not invent client names, metrics, or certifications; use a `[CONFIRM]` placeholder if a real value is unknown.

5. **Say "senior-led / senior strategist / senior specialists", not repeated "founder".** "Founder" appears only as a job title in the About bio and testimonial/author credits.

6. **British/Indian spelling** (optimisation, optimise, etc.).

## Design system

Light theme only. Colours are defined as tokens in `src/app/globals.css` (`@theme` block and `:root`).

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-primary` | `#0058be` | Brand blue: buttons, eyebrows, emphasis, icons |
| `--accent-secondary` | `#2170e4` | Secondary blue (two-tone accents) |
| `--accent-navy` | `#11161e` | Near-black: headings, dark cards, footer |
| `--bg-dark` / `--bg-card` | `#ffffff` | Page and card background |
| `--bg-section-alt` | `#f3f3f4` | Alternating section background |
| `--text-primary` | `#11161e` | Headings, key text |
| `--text-secondary` | `#55585f` | Body text |
| `--text-muted` | `#777777` | Captions, muted text |
| `--border` | `#e6e6e6` | Borders |

Sections deliberately alternate white and `#f3f3f4` down the page so boundaries stay visible. Prefer the token colours; some components use these hex values inline, which is acceptable.

### Typography
- Headings: `font-heading` = **Oswald** (uppercase, condensed), loaded via `next/font`
- Body: **Open Sans**
- The `.font-heading` utility applies Oswald + uppercase; do not add a `font-weight` to it (utility classes set weight).

### Component patterns
- **CTA buttons:** `<ShimmerButton variant="cta" | "primary" | "outline" size="md" | "lg" />`. Solid button, uppercase Oswald label, an arrow that slides on hover, and a shine sweep. No detached accent block.
- **Section headers:** `<SectionHeader eyebrow="..." title="..." description="..." />`. The eyebrow renders via the `.pill` class (blue, wide-tracked caps).
- **Cards:** the `.card` class (white, `#e6e6e6` border, subtle shadow, ~3px radius). `<GlassCard>` wraps it.
- **Scroll-in animations:** Framer Motion `whileInView` inline. Don't build wrapper components for this.
- **Icons:** Lucide only. If Lucide lacks an icon, use an inline SVG. Do not add `react-icons` or a material-symbols font.

## Images

- Use `next/image` with explicit `width`/`height`. No raw `<img>` tags.
- Optimise to **WebP under 100KB**, roughly 1000px on the long edge, before adding to `public/images/`.
- Full-resolution source folders (e.g. `Digi Photos/`, `logos/`) are gitignored; only the optimised WebPs are committed.

## Contact form

The contact form (`Contact.tsx`) posts to EmailJS using these public env vars, with a WhatsApp fallback if they are missing:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Set them in `.env.local` and in Vercel. Restrict allowed domains in the EmailJS dashboard so the public key cannot be reused elsewhere.

## SEO & performance

1. The homepage is fully SSG. Do not add `'use client'` to `page.tsx` or `layout.tsx`.
2. Titles lead with the primary keyword ("performance marketing agency Bangalore") and keep the AEO/GEO (AI search) angle visible. Keep the title near 60 characters and the description near 155.
3. JSON-LD: Organization in `layout.tsx`, FAQPage in `page.tsx` (reads from the `faqs` array), Article on blog posts. Update these if company info or FAQs change.
4. One `<h1>` per page (the Hero owns the homepage h1). Section titles are `<h2>`.
5. Images: `next/image`, explicit `width`/`height`, descriptive `alt`.

## Coding conventions

1. **Client vs server components.** Default to server. Add `'use client'` only when needed (state, effects, browser APIs, motion).
2. **Imports.** Use the `@/` alias for `src/`. Order: React/Next, third-party, lucide-react, `@/lib`, `@/components`.
3. **No new dependencies** without checking with the user first. Current set (Next, React, Tailwind, Framer Motion, Lucide) is intentionally minimal.
4. **Tailwind only.** No CSS-in-JS libraries. Inline `<style jsx>` is fine for small component-scoped tricks.

## Don'ts

- No em dashes in copy.
- No results-guarantee language (the guarantee was removed on purpose).
- No state management library (Redux, Zustand); the site does not need one.
- No tracking scripts beyond the existing GA without explicit user instruction.
- No npm packages without user approval.

## Deploy

Vercel auto-deploys on push to `main`. Verify a production build first:

```bash
npm run dev      # Start dev server (Turbopack), http://localhost:3000
npm run build    # Production build (run before deploy)
npm run lint     # ESLint
```
