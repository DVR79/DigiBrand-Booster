// Single source of truth - all site content lives here

export const siteConfig = {
  name: 'Digi Brand Booster',
  tagline: 'AI-Native Performance Marketing Agency',
  description:
    "Bangalore-based AI-native performance marketing agency. We help D2C, EdTech, and SaaS brands grow through Meta Ads, Google Ads, SEO, AEO, and GEO, with written KPIs and a 90-day guarantee in every engagement.",
  phone: '+91 79816 32581',
  email: 'venkat.digitalseo@gmail.com',
  whatsapp: '917981632581',
  address: 'BTM 1st Stage, Bangalore, Karnataka, India',
};

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Brands Scaled' },
  { value: 3.8, suffix: 'x', label: 'Average ROAS' },
  { value: 94, suffix: '%', label: 'Client Retention' },
  { value: 48, suffix: 'h', label: 'Audit Delivered' },
];

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  metric: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Meera Krishnan',
    title: 'Founder',
    company: 'Aura Naturals (D2C Skincare)',
    quote:
      'We had been burning budget on Meta for months with no idea why it was not converting. Venkat audited our account in 48 hours and identified three critical issues we had completely missed. Within 9 weeks our ROAS moved from 1.3x to 4.0x with the same spend. The weekly Monday reports meant we always knew exactly what was being tested and why.',
    metric: '4.0x ROAS in 9 weeks',
  },
  {
    name: 'Sanjay Pillai',
    title: 'Head of Growth',
    company: 'SkillBridge (EdTech)',
    quote:
      'Our organic traffic was flat for a year despite publishing content regularly. Digi Brand Booster rebuilt our entire content architecture around topical clusters and fixed 40 technical SEO issues we did not know existed. Traffic grew 260% in 5 months and we now appear in Google AI Overviews for several of our core keywords. That visibility was not achievable with traditional SEO alone.',
    metric: '260% organic growth in 5 months',
  },
  {
    name: 'Vikram Nair',
    title: 'Co-founder',
    company: 'HomNest Realty',
    quote:
      'Google Ads was our biggest spend and worst performing channel. After Venkat restructured our campaigns, removed the broad match waste, and introduced a lead quality feedback loop from our sales team, our cost per qualified lead dropped 41% in 8 weeks. We are now scaling confidently because we understand exactly what is driving qualified enquiries.',
    metric: '41% lower CPL in 8 weeks',
  },
  {
    name: 'Preethi Subramaniam',
    title: 'Marketing Manager',
    company: 'NourishCo (Health and Wellness)',
    quote:
      'The 90-day guarantee made the decision simple. But what impressed us more was the transparency throughout. Live dashboard access, weekly written updates, and a founder who picks up the phone. We hit our ROAS target in week 11 and renewed immediately. The GEO work in month 3 started surfacing our brand in Perplexity recommendations, which was something we did not even know was possible.',
    metric: '3.6x ROAS, AI citations from month 3',
  },
];

export interface ServiceFeature {
  title: string;
  description: string;
  features: string[];
  icon: string;
  badge?: string;
}

export interface ServiceTab {
  label: string;
  services: ServiceFeature[];
}

export const serviceTabs: ServiceTab[] = [
  {
    label: 'SEO',
    services: [
      {
        title: 'Technical SEO',
        description:
          'Your website cannot rank if search engines cannot properly crawl, index, and understand it. We audit every technical layer, fix what is broken, and build a site architecture that compounds in organic rankings over 6 to 12 months.',
        features: [
          'Complete site audit: crawlability, indexation, redirect chains, duplicate content, and page speed',
          'Core Web Vitals optimisation: LCP under 2.5s, INP under 200ms, CLS under 0.1',
          'Schema markup for Product, FAQ, HowTo, Article, LocalBusiness, and Organization',
          'Internal link architecture rebuild to flow authority to your highest-value pages',
          'XML sitemap, robots.txt, canonical tags, and hreflang setup and ongoing management',
        ],
        icon: 'code',
      },
      {
        title: 'On-Page and Content SEO',
        description:
          'On-page SEO tells Google exactly what each page is about and why it deserves to rank. Paired with a topical authority content strategy, it builds compounding organic traffic that grows month after month.',
        features: [
          'Keyword research and mapping: primary, secondary, and semantic keywords per page',
          'Title tags, meta descriptions, heading structure, and URL slug optimisation',
          'Content gap analysis: identifying what competitors rank for that you are missing',
          'E-E-A-T improvements: author credentials, trust signals, and content depth enrichment',
          'Topical authority clusters: 6-month content roadmap mapped to buyer intent stages',
        ],
        icon: 'fileText',
      },
    ],
  },
  {
    label: 'Off-Page and Local',
    services: [
      {
        title: 'Link Building and Off-Page SEO',
        description:
          'Backlinks remain one of the top three Google ranking factors. We build genuine, relevant links from authoritative domains in your industry through manual outreach and digital PR, not link farms or shortcuts.',
        features: [
          'Backlink profile audit: toxic link identification, disavow file creation, and competitor gap analysis',
          'Manual outreach link building from industry-relevant, high-authority domains',
          'Digital PR: earning editorial mentions and links from news sites and niche publications',
          'Guest posting on vetted, topically relevant websites with real organic traffic',
          'Monthly backlink report with DA, organic traffic, and topical relevance metrics per link',
        ],
        icon: 'target',
      },
      {
        title: 'Local SEO',
        description:
          'When your customers search for services near them, Local SEO puts your business at the top of Google Maps and local search results. We optimise your entire local presence, from your Google Business Profile to directory citations.',
        features: [
          'Google Business Profile setup, full optimisation, and ongoing posting and management',
          'Local keyword research: "near me", city-specific, and neighbourhood-level intent targeting',
          'NAP consistency audit and citation building across 50+ directories and platforms',
          'LocalBusiness schema markup with address, opening hours, reviews, and service areas',
          'Review generation strategy: earning genuine 5-star reviews that improve local pack rankings',
        ],
        icon: 'search',
      },
    ],
  },
  {
    label: 'AI Search',
    services: [
      {
        title: 'AEO: Answer Engine Optimisation',
        description:
          'When users search on Perplexity, use ChatGPT Search, or see a Google AI Overview, AEO ensures your content is the source that gets cited. It is the highest-intent organic channel available today for brands that want to be found before their competitors.',
        features: [
          'Question-intent content restructured specifically to earn AI platform citations',
          'Featured snippet and Google AI Overview targeting by keyword cluster and intent',
          'Entity optimisation and knowledge graph building for strong brand authority signals',
          'FAQ, speakable, and structured data schema for AI platform readability',
          'Monthly AI citation tracking across ChatGPT, Perplexity, Gemini, and Google AI Overviews',
        ],
        icon: 'brain',
        badge: 'NEW',
      },
      {
        title: 'GEO: Generative Engine Optimisation',
        description:
          'GEO ensures your brand gets recommended when someone asks ChatGPT, Claude, or Google Gemini to suggest the best product or service in your category. It is organic brand discovery built for the AI-search era.',
        features: [
          'Brand visibility audit across ChatGPT, Claude, Gemini, and Perplexity',
          'Authority content written to align with generative AI model training and citation patterns',
          'Topical authority cluster strategy for consistent AI recommendation visibility',
          'Backlink acquisition from domains and publications already cited by major AI platforms',
          'Quarterly GEO visibility score with brand mention tracking per platform',
        ],
        icon: 'sparkles',
        badge: 'NEW',
      },
    ],
  },
  {
    label: 'Paid Media',
    services: [
      {
        title: 'Meta Ads Management',
        description:
          'Full-funnel Meta advertising for D2C and SaaS brands. We build campaign architecture, run weekly creative testing sprints, and fix attribution tracking so every rupee you spend is measured and every decision is documented.',
        features: [
          'Prospecting, warm audience, and retargeting campaign builds from the ground up',
          'Weekly creative testing sprint with clear hypotheses and documented Monday learnings',
          'Server-side Conversions API setup for accurate post-iOS attribution',
          'First-party data audience architecture: lead tiers, buyer segments, and LTV cohorts',
          'Weekly ROAS, CPL, and CPA performance reports with specific next-action notes',
        ],
        icon: 'trendingUp',
      },
      {
        title: 'Google Ads Management',
        description:
          'Search, Shopping, and Performance Max campaigns built around genuine commercial intent. Tight structure, rigorous negatives, and bidding calibrated to your actual margins, not platform defaults.',
        features: [
          'Full campaign builds from scratch or complete account restructure based on audit findings',
          'Performance Max with segmented asset groups and ongoing creative A/B testing',
          'Negative keyword sculpting and search term audit every two weeks',
          'Smart bidding calibration: target CPA or target ROAS aligned to your margin inputs',
          'Weekly budget pacing reports and monthly strategy review call with recording',
        ],
        icon: 'search',
      },
    ],
  },
];

export interface CaseStudy {
  brand: string;
  industry: string;
  challenge: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    brand: 'D2C Skincare Brand',
    industry: 'Direct-to-Consumer Beauty',
    challenge:
      'Meta ROAS had been stuck at 1.3x for four months despite increasing spend by 30%. The real problems were creative fatigue across all active ad sets, broken pixel tracking following iOS changes, and zero audience segmentation beyond broad interest targeting.',
    result:
      'Rebuilt the full campaign architecture across prospecting, warm, and retargeting segments. Deployed server-side Conversions API to restore attribution accuracy. Introduced a weekly creative testing sprint with clear hypotheses and Monday learnings shared with the client team.',
    metrics: [
      { label: 'ROAS achieved', value: '4.0x' },
      { label: 'Timeline', value: '9 weeks' },
      { label: 'Spend change', value: '0%' },
    ],
  },
  {
    brand: 'EdTech Upskilling Platform',
    industry: 'Education Technology',
    challenge:
      'Organic traffic was flat despite 18 months of content publishing. The content had no topical structure, targeted the wrong search intent, and the site had 40+ unresolved technical SEO issues suppressing crawl and indexation.',
    result:
      'Rebuilt the entire content architecture around keyword clusters mapped to buyer intent. Fixed all 40 technical issues in priority order. Launched an AEO content layer that earned citations in Google AI Overviews and Perplexity within 3 months.',
    metrics: [
      { label: 'Organic growth', value: '260%' },
      { label: 'AI citations earned', value: '15+' },
      { label: 'Timeline', value: '5 months' },
    ],
  },
  {
    brand: 'Residential Real Estate Agency',
    industry: 'Real Estate',
    challenge:
      'Google Ads spend of Rs 3.5 lakh per month was generating leads at Rs 4,200 per lead with a 22% qualified rate. The account was running mostly broad match keywords with a thin negative list and no connection between ad performance and sales team lead quality data.',
    result:
      'Full account audit identified 60% of spend going to irrelevant searches. Rebuilt campaigns by intent tier, added 700+ negatives, and created a weekly lead quality feedback loop between the sales team and campaign optimisation.',
    metrics: [
      { label: 'CPL reduction', value: '41%' },
      { label: 'Qualified lead rate', value: '+34%' },
      { label: 'Timeline', value: '8 weeks' },
    ],
  },
];

export interface Industry {
  name: string;
  icon: string;
  pain: string;
  channels: string[];
}

export const industries: Industry[] = [
  {
    name: 'D2C and E-commerce',
    icon: 'shopping',
    pain: 'High Meta CPL, post-iOS attribution gaps, and creative fatigue eating into ROAS.',
    channels: ['Meta Ads', 'Google Shopping', 'SEO', 'GEO'],
  },
  {
    name: 'EdTech and Upskilling',
    icon: 'graduation',
    pain: 'Organic traffic flat despite content investment. AI search driving discovery you are not capturing.',
    channels: ['AEO', 'Technical SEO', 'Google Ads', 'Meta Ads'],
  },
  {
    name: 'Real Estate',
    icon: 'building',
    pain: 'High ad spend, poor lead quality, and no feedback loop between sales and marketing.',
    channels: ['Google Ads', 'Meta Ads', 'Local SEO', 'Landing Page CRO'],
  },
  {
    name: 'B2B SaaS',
    icon: 'cpu',
    pain: 'Long sales cycles, low organic visibility for high-intent keywords, and no AI search presence.',
    channels: ['Technical SEO', 'AEO', 'GEO', 'LinkedIn Ads'],
  },
  {
    name: 'Health and Wellness',
    icon: 'heart',
    pain: 'Meta ad policy restrictions, trust-building challenges, and competitive paid media landscape.',
    channels: ['SEO', 'AEO', 'Meta Ads', 'Google Ads'],
  },
  {
    name: 'Financial Services',
    icon: 'chart',
    pain: 'Strict compliance requirements, low quality scores, and difficulty standing out in paid search.',
    channels: ['Technical SEO', 'Google Ads', 'AEO', 'Content SEO'],
  },
];

export interface FrameworkStep {
  step: number;
  title: string;
  description: string;
}

export const frameworkSteps: FrameworkStep[] = [
  {
    step: 1,
    title: 'Audit',
    description:
      'A 48-hour deep-dive into your ad accounts, analytics, SEO profile, and top three competitors. We document every budget leak, every missed opportunity, and every technical issue before recommending anything.',
  },
  {
    step: 2,
    title: 'Strategy',
    description:
      'A written growth plan with channel priorities, creative direction, and 90-day KPI targets. Every target goes into the contract before we spend a rupee. You know exactly what we are accountable for.',
  },
  {
    step: 3,
    title: 'Build',
    description:
      'Campaign architecture, tracking infrastructure, landing page improvements, and creative production. Every element is tested for technical accuracy and aligned to your brand standards before going live.',
  },
  {
    step: 4,
    title: 'Optimise',
    description:
      'Weekly sprints with documented hypotheses, test results, and learnings delivered every Monday. Every decision traces to a data point. You always know what we tested, what worked, and what we are doing next.',
  },
  {
    step: 5,
    title: 'Scale',
    description:
      'Once unit economics are proven and repeatable, we scale spend methodically across Meta, Google, and organic channels. We protect what is working while systematically identifying what can grow further.',
  },
];

export interface PricingTier {
  name: string;
  price: string;
  priceNote: string;
  tagline: string;
  ideal: string;
  features: string[];
  cta: string;
  highlight: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '₹18,000',
    priceNote: '/month onwards',
    tagline: 'One channel. Documented results.',
    ideal: 'Brands starting with SEO or paid media for the first time.',
    features: [
      'One channel: SEO or Paid Media (Meta or Google)',
      '48-hour onboarding and audit',
      'Written KPIs in the contract',
      'Weekly Monday performance update',
      'Live dashboard access',
      'Monthly strategy call',
      '90-day results guarantee',
    ],
    cta: 'Book free audit',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹35,000',
    priceNote: '/month onwards',
    tagline: 'SEO plus paid media, working together.',
    ideal: 'Brands ready to combine organic and paid for faster, compounding growth.',
    features: [
      'Two channels: SEO plus Paid Media (Meta or Google)',
      '48-hour onboarding and full audit',
      'Written KPIs and signed 90-day plan',
      'Weekly Monday performance report',
      'Live dashboard access',
      'Bi-weekly strategy call',
      'Creative testing framework included',
      '90-day results guarantee',
    ],
    cta: 'Book free audit',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '₹60,000',
    priceNote: '/month onwards',
    tagline: 'Full-stack. Every channel. One team.',
    ideal: 'Growing brands that need SEO, paid media, AEO, GEO, and CRO working as one system.',
    features: [
      'All channels: SEO, Paid Media, AEO and GEO',
      'Landing page and conversion rate optimisation',
      '48-hour onboarding and deep-dive audit',
      'Written KPIs across every channel in the contract',
      'Weekly Monday report plus live Slack updates',
      'Weekly strategy call',
      'AI citation tracking and GEO visibility score',
      '90-day results guarantee',
    ],
    cta: 'Book free audit',
    highlight: false,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What exactly does the 90-day results guarantee cover?',
    answer:
      'Your KPIs are agreed and written into the contract before we start. Depending on the engagement, these are typically ROAS, cost per lead, organic traffic growth, or conversion rate improvement. If we do not hit the agreed targets by day 90, you receive a full refund of management fees. The guarantee covers our fees only. Ad spend paid directly to Meta or Google is not refundable as it is between you and the platform.',
  },
  {
    question: 'How is this different from hiring a large agency?',
    answer:
      'At a large agency, your account is won by a senior person and then handed to a junior team you never meet. At Digi Brand Booster, Venkat personally leads strategy and reviews every campaign. You always speak with the person doing the work. We also limit client intake deliberately, so you are never in a queue waiting for attention. Most of our clients have left larger agencies for exactly this reason.',
  },
  {
    question: 'What are your fees? How does pricing work?',
    answer:
      'We charge a flat monthly retainer, not a percentage of ad spend. Single-channel Starter plans begin at Rs 18,000 per month. Growth plans combining SEO and paid media start at Rs 35,000 per month. Full-stack Scale engagements covering all channels start at Rs 60,000 per month. All plans include the 90-day guarantee, written KPIs, and 48-hour onboarding. Ad spend is separate and paid directly to the platform.',
  },
  {
    question: 'Can we cancel at any time?',
    answer:
      'Yes. We work on monthly rolling contracts with 30 days notice to exit. There is no lock-in beyond the initial 90-day guarantee period, which exists so we have enough time to hit the targets we sign. Most clients renew because the results keep improving, not because they are contractually obligated to.',
  },
  {
    question: 'How quickly do you start after we sign?',
    answer:
      'Full onboarding takes 48 hours from contract signing. Within that window you receive complete account access, a written audit of your current performance, your kickoff call, and a signed strategy document with your 90-day KPI targets. Most agencies take 2 to 3 weeks for this. We start in 48 hours.',
  },
  {
    question: 'What is AEO and how is it different from traditional SEO?',
    answer:
      'Answer Engine Optimisation (AEO) structures your content so AI tools like ChatGPT, Perplexity, Google AI Overviews, and Gemini cite your website when answering user questions. Traditional SEO targets blue-link rankings. AEO targets the AI-generated answers that are increasingly the first thing a buyer sees. If your content is not structured for citation, you are invisible in that channel regardless of your ranking.',
  },
  {
    question: 'What is GEO and why does my brand need it now?',
    answer:
      'Generative Engine Optimisation (GEO) ensures your brand is recommended when AI tools respond to "what is the best [product or service]" queries. A growing share of high-intent buyers discover brands through AI recommendations rather than search results. GEO builds that visibility systematically. Brands that invest in it now will have a significant head start over competitors who wait.',
  },
  {
    question: 'What is your minimum ad spend requirement?',
    answer:
      'For paid media engagements, we work best with brands spending Rs 1.5 lakh or more per month on ads. Below that level, the management fee relative to ad spend rarely makes commercial sense. For SEO, AEO, or GEO-only retainers, there is no minimum ad spend. We are happy to discuss what makes sense for your specific situation on a free audit call.',
  },
  {
    question: 'Do you work with brands that have an in-house team?',
    answer:
      'Yes, regularly. We operate as a specialist execution layer alongside your team. You keep strategic oversight and brand decisions. We handle channel execution, technical implementation, weekly testing, and reporting. Your team stays in control of the bigger picture while we run the channels we specialise in.',
  },
  {
    question: 'How do you keep us informed on performance?',
    answer:
      'You have live dashboard access every day with the same numbers we see. Every Monday you receive a written performance summary covering what changed, why it changed, and what comes next. Once a month we hold a strategy review call. You will never need to chase us for an update.',
  },
];

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: 'D Venkataramana',
    title: 'Founder, SEO and Growth Strategist',
    bio: 'Founder of Digi Brand Booster and the lead strategist on every account. Technical SEO and AI search specialist with 3+ years building organic growth programs for D2C, EdTech, and B2B brands. Every strategy, audit, and KPI target comes through him personally.',
    initials: 'DV',
  },
  {
    name: 'Performance Media Specialist',
    title: 'Meta Ads and Google Ads',
    bio: 'Manages all paid media execution across Meta and Google Ads. Specialist in post-iOS server-side tracking, Conversions API setup, creative testing frameworks, and Performance Max campaign architecture for D2C and lead generation brands.',
    initials: 'PM',
  },
  {
    name: 'Content and CRO Strategist',
    title: 'Content SEO and Conversion Optimisation',
    bio: 'Builds topical authority content programs and runs structured A/B testing on landing pages. Connects content strategy to conversion outcomes so organic traffic converts, not just grows.',
    initials: 'CS',
  },
];

export interface InsightPost {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
}

export const insightPosts: InsightPost[] = [
  {
    title: 'AEO in 2025: The exact content structure that gets cited by ChatGPT, Perplexity, and Google AI Overviews',
    slug: 'aeo-content-structure-ai-citations-2025',
    category: 'AEO',
    readTime: '7 min read',
    excerpt:
      'Most brands are still optimising for blue-link rankings while their competitors are getting cited in AI-generated answers. Here is the exact structure we use to earn those citations for our clients.',
  },
  {
    title: 'GEO strategy: How to get your brand recommended by ChatGPT and Google Gemini',
    slug: 'geo-strategy-chatgpt-gemini-brand-recommendations',
    category: 'GEO',
    readTime: '8 min read',
    excerpt:
      'When a potential customer asks an AI tool to recommend the best product or service in your category, is your brand in the answer? Here is the authority-building framework that determines that.',
  },
  {
    title: 'Why your Meta CPL spiked after iOS and the server-side fix that actually works',
    slug: 'meta-cpl-ios-server-side-conversions-api',
    category: 'Paid Media',
    readTime: '6 min read',
    excerpt:
      'Server-side Conversions API is not a nice-to-have anymore. Most agencies are still getting it wrong. Here is a practical guide to the migration that actually restores attribution accuracy.',
  },
];

export const awards: string[] = [
  'Google Partner Certified',
  'Meta Business Partner',
  'SEMrush Certified Agency',
  'HubSpot Marketing Certified',
];
