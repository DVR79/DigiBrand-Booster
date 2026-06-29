// Single source of truth - all site content lives here

export const siteConfig = {
  name: 'Digi Brand Booster',
  tagline: 'AI-Native Performance Marketing Agency',
  description:
    "India's AI-native performance marketing agency in Bangalore. We specialise in Meta Ads, Google Ads, SEO, AEO, GEO and CRO for D2C and SaaS brands. 90-day results guarantee or full refund.",
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
  { value: 120, suffix: '+', label: 'Brands Grown' },
  { value: 3.8, suffix: 'x', label: 'Average ROAS' },
  { value: 92, suffix: '%', label: 'Client Retention' },
  { value: 48, suffix: 'h', label: 'Onboarding Time' },
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
    name: 'Rahul Menon',
    title: 'Founder',
    company: 'NaturaNest Skincare',
    quote:
      'Our Meta ROAS was stuck at 1.4x for months. Digi Brand Booster rebuilt our entire ad funnel from scratch, introduced weekly creative sprints, and fixed our tracking via Conversions API. We hit 4.2x ROAS by week 10 without touching the budget.',
    metric: '4.2x ROAS in 10 weeks',
  },
  {
    name: 'Deepika Nair',
    title: 'Head of Marketing',
    company: 'SwiftLearn EdTech',
    quote:
      'We went from virtually zero organic visibility to ranking on page one for 38 high-intent keywords in 5 months. Their AEO strategy also got our brand cited in Perplexity and Google AI Overviews. The lead quality from organic is significantly better than paid.',
    metric: '280% organic traffic growth in 5 months',
  },
  {
    name: 'Karthik Sundaram',
    title: 'Co-founder',
    company: 'Zestify Foods',
    quote:
      'After iOS tracking changes, our Meta CPL nearly doubled. Digi Brand Booster migrated us to server-side tracking, rebuilt our first-party audiences, and restructured our campaigns. CPL dropped 52% within 6 weeks and conversion quality held strong.',
    metric: '52% lower CPL in 6 weeks',
  },
  {
    name: 'Anitha Reddy',
    title: 'Director of Growth',
    company: 'PropVista Realty',
    quote:
      'We were spending heavily on Google Ads with mediocre results. They audited our account, identified massive wasted spend in broad match terms, restructured everything, and within 8 weeks our cost per qualified lead dropped by 44%. The 90-day guarantee gave us the confidence to commit.',
    metric: '44% lower CPL on Google Ads',
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
    label: 'Paid Media',
    services: [
      {
        title: 'Meta Ads Management',
        description:
          'Full-funnel Meta advertising built for D2C and SaaS brands. We architect your campaigns, manage creative testing, and fix tracking, so every rupee you spend is accounted for and optimised.',
        features: [
          'Cold, warm, and retargeting campaign builds from the ground up',
          'Weekly creative testing sprint with documented wins and losses',
          'Server-side Conversions API setup for post-iOS accurate tracking',
          'First-party data audience architecture (leads, buyers, LTV tiers)',
          'Weekly ROAS, CPL, and CPA performance reports with action notes',
        ],
        icon: 'target',
      },
      {
        title: 'Google Ads Management',
        description:
          'Search, Shopping, and Performance Max campaigns built around commercial intent. We keep structure tight, negatives rigorous, and bidding strategies calibrated to your actual margins.',
        features: [
          'Search and Shopping campaign builds from scratch or full restructure',
          'Performance Max with segmented asset groups and A/B testing',
          'Negative keyword sculpting, search term audits every two weeks',
          'Smart bidding calibration aligned to your target CPA or ROAS',
          'Weekly budget pacing reports and monthly strategy review calls',
        ],
        icon: 'search',
      },
    ],
  },
  {
    label: 'SEO & AEO',
    services: [
      {
        title: 'Technical SEO',
        description:
          'A full audit of your site architecture, Core Web Vitals, crawlability, and structured data, followed by a prioritised fix roadmap that compounds over 6 to 12 months and holds through Google core updates.',
        features: [
          'Complete technical audit with severity-ranked fix roadmap',
          'Core Web Vitals optimisation: LCP, INP, and CLS improvements',
          'Schema markup: Product, FAQ, HowTo, Article, and Organization',
          'Internal link architecture review and strategic rebuild',
          'Crawl budget optimisation and log file analysis for large sites',
        ],
        icon: 'code',
      },
      {
        title: 'AEO: Answer Engine Optimisation',
        description:
          'Structure your content to appear in AI-generated answers on ChatGPT, Perplexity, Gemini, and Google AI Overviews. AEO is now the highest-intent discovery channel for B2B and D2C brands in 2025.',
        features: [
          'Question-intent content structured specifically for AI citation',
          'Featured snippet and AI Overview targeting by keyword cluster',
          'Entity optimisation and knowledge graph signal building',
          'FAQ schema, speakable schema, and HowTo markup implementation',
          'Monthly AI citation tracking across Perplexity, ChatGPT, and Gemini',
        ],
        icon: 'brain',
        badge: 'NEW',
      },
    ],
  },
  {
    label: 'GEO & Growth',
    services: [
      {
        title: 'GEO: Generative Engine Optimisation',
        description:
          'When someone asks ChatGPT, Claude, or Google Gemini to recommend a product or service in your category, GEO ensures your brand is in the answer. It is organic brand discovery for the AI-search era.',
        features: [
          'Brand mention audit across ChatGPT, Claude, Gemini, and Perplexity',
          'Authority content written to match AI model training signal patterns',
          'Topical authority cluster strategy built for generative search visibility',
          'Backlink acquisition from sources already cited by AI platforms',
          'Quarterly GEO visibility score with platform-by-platform breakdown',
        ],
        icon: 'sparkles',
        badge: 'NEW',
      },
      {
        title: 'CRO: Conversion Rate Optimisation',
        description:
          'Heatmaps, session recordings, and structured A/B tests that eliminate friction on landing pages, product pages, and checkout flows. More conversions from the traffic you already pay for.',
        features: [
          'Above-the-fold wireframe audit and redesign recommendations',
          'A/B tests run to 95% statistical significance before calling results',
          'Checkout and lead form friction analysis with specific drop-off fixes',
          'Trust signal, social proof, and urgency placement optimisation',
          'Monthly CRO experiment roadmap with prioritised test backlog',
        ],
        icon: 'trendingUp',
      },
    ],
  },
  {
    label: 'Content & Email',
    services: [
      {
        title: 'Content SEO & Topical Authority',
        description:
          'A cluster-based content strategy that builds genuine topical authority over 6 months. Every piece maps to a search intent, a keyword cluster, and a measurable business outcome, not just traffic.',
        features: [
          'Keyword cluster mapping, content gap analysis, and competitor teardown',
          'SEO content briefs with full E-E-A-T and author expertise guidelines',
          'Programmatic SEO templates for scalable category or location pages',
          'Content refresh strategy for existing pages losing ranking traction',
          'Monthly organic traffic, ranking, and topical coverage progress reports',
        ],
        icon: 'fileText',
      },
      {
        title: 'Email & Retention Marketing',
        description:
          'Automated lifecycle flows that recover abandoned carts, reactivate lapsed customers, and grow repeat purchase revenue without adding a single rupee to your ad budget.',
        features: [
          'Welcome, abandon cart, post-purchase, and win-back flow builds',
          'RFM-based audience segmentation for personalised send logic',
          'SMS and email channel coordination for multi-touch sequences',
          'Deliverability audit, domain warmup, and full list hygiene',
          'Monthly retention revenue attribution and flow performance report',
        ],
        icon: 'mail',
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
    brand: 'NaturaNest Skincare',
    industry: 'D2C Beauty',
    challenge:
      'Meta ROAS plateaued at 1.4x for four months despite steadily increasing spend. The root issues were creative fatigue across all ad sets, broken pixel tracking post-iOS, and no structured audience segmentation beyond broad interests.',
    result:
      'Rebuilt the campaign architecture across cold, warm, and retargeting tiers. Set up server-side Conversions API to restore tracking accuracy. Launched a weekly creative testing sprint with clear hypotheses and documented learnings each Monday.',
    metrics: [
      { label: 'ROAS', value: '4.2x' },
      { label: 'Timeline', value: '10 weeks' },
      { label: 'Spend change', value: '0%' },
    ],
  },
  {
    brand: 'SwiftLearn EdTech',
    industry: 'EdTech',
    challenge:
      'Organic traffic was negligible despite a well-funded paid media programme. No topical authority, thin blog content written for social sharing rather than search intent, and 30+ broken backlinks from outdated partnerships.',
    result:
      'Built a full topical authority cluster around core EdTech and professional upskilling keywords. Published 35 structured content pieces over 5 months. Earned 90 high-authority backlinks. AEO implementation led to citations on Perplexity and Google AI Overviews.',
    metrics: [
      { label: 'Organic growth', value: '280%' },
      { label: 'New backlinks', value: '90' },
      { label: 'Timeline', value: '5 months' },
    ],
  },
  {
    brand: 'PropVista Realty',
    industry: 'Real Estate',
    challenge:
      'Google Ads spend had crept up to Rs 4 lakh per month with a cost per qualified lead of Rs 3,800 and a 28% lead quality rate. Broad match keywords and an unmaintained negative list were bleeding the budget on irrelevant searches.',
    result:
      'Ran a full account audit, eliminated broad match waste, rebuilt search campaigns by intent tier, and added 600+ negative keywords. Introduced a lead quality feedback loop from the sales team to optimize for qualified leads directly.',
    metrics: [
      { label: 'CPL reduction', value: '44%' },
      { label: 'Lead quality', value: '+31%' },
      { label: 'Timeline', value: '8 weeks' },
    ],
  },
];

export const industries: string[] = [
  'D2C and E-commerce',
  'B2B SaaS',
  'EdTech',
  'Health and Wellness',
  'Real Estate',
  'Financial Services (BFSI)',
  'Fashion and Apparel',
  'Food and Beverage',
  'Travel and Hospitality',
  'Consumer Electronics',
  'Quick Commerce',
  'Professional Services',
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
      'A 48-hour deep-dive into your ad accounts, analytics, SEO profile, and competitor landscape. We document exactly where budget leaks, where growth is being left on the table, and what to fix first before spending anything.',
  },
  {
    step: 2,
    title: 'Strategy',
    description:
      'A written growth plan with channel priorities, creative direction, 90-day KPI targets, and a content roadmap. Every target is signed into the contract. You know what we are accountable for before we start.',
  },
  {
    step: 3,
    title: 'Build',
    description:
      'Campaign architecture, landing page improvements, tracking infrastructure, and creative production. Everything is built to your brand standards and tested for technical accuracy before any budget goes live.',
  },
  {
    step: 4,
    title: 'Optimise',
    description:
      'Weekly sprints with documented hypotheses, test results, and learnings shared every Monday. Every decision traces to a data point. No "we are running tests" without showing you what changed and why.',
  },
  {
    step: 5,
    title: 'Scale',
    description:
      'Once your unit economics are proven and repeatable, we scale spend methodically across Meta, Google, and organic channels. We protect what is working while systematically expanding what can grow.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What is AEO and how is it different from traditional SEO?',
    answer:
      'Answer Engine Optimisation (AEO) structures your content so AI tools like ChatGPT, Perplexity, Google AI Overviews, and Gemini cite your website when answering user questions. Traditional SEO targets blue-link rankings in search results. AEO targets AI-generated answer citations, which is now the primary discovery channel for high-intent users researching products and services.',
  },
  {
    question: 'What is GEO and why does my brand need it in 2025?',
    answer:
      'Generative Engine Optimisation (GEO) ensures your brand is recommended when AI chatbots like ChatGPT, Claude, or Google Gemini respond to "what is the best [product or service]" queries. As AI search replaces traditional search for product and service discovery, brands not visible in generative engines are losing share to competitors who are. GEO builds that visibility systematically.',
  },
  {
    question: 'What does the 90-day results guarantee cover?',
    answer:
      'The KPIs are written into your contract before we start. Typically these are ROAS, CPL, organic traffic growth, or conversion rate improvement depending on your engagement. If we do not hit the agreed targets by day 90, you receive a full refund of management fees. The guarantee covers our fees only, not ad spend invested with the platforms.',
  },
  {
    question: 'How quickly can you onboard a new client?',
    answer:
      'Full onboarding takes 48 hours from contract signing. Within that window you receive complete account access, a written technical and performance audit, your kickoff call, and a signed strategy alignment document with your 90-day KPI targets.',
  },
  {
    question: 'What is your minimum ad spend requirement?',
    answer:
      'For paid media engagements, the ideal starting point is Rs 1.5 lakh per month or more. Below that level, the management fee to ad spend ratio rarely makes commercial sense for you. For SEO, AEO, or GEO-only engagements, there is no minimum ad spend requirement.',
  },
  {
    question: 'Do you work alongside existing in-house marketing teams?',
    answer:
      'Yes, regularly. We function as a specialist execution layer plugged into your team. You retain strategic oversight and brand decisions. We handle channel execution, technical implementation, testing, and weekly reporting. Your team stays in control of the bigger picture.',
  },
  {
    question: 'Which advertising platforms do you manage?',
    answer:
      'Meta (Facebook and Instagram Ads), Google (Search, Shopping, and Performance Max), LinkedIn Ads for B2B, and Amazon Ads for e-commerce brands. On organic side, we cover Technical SEO, AEO for AI citation, and GEO for generative search visibility. We do not spread across every channel at once.',
  },
  {
    question: 'How do you report on performance?',
    answer:
      'You have live dashboard access every day so you always see the same numbers we see. You receive a written weekly summary every Monday morning covering what changed, why, and what we are doing about it. We hold a monthly strategy call to review the bigger picture and align on the next 30-day sprint.',
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
    title: 'Founder and SEO Strategist',
    bio: 'Technical SEO and AI search specialist with hands-on experience building organic growth programs for B2B and EdTech brands. Certified in SEO, Analytics, and Digital Marketing. Focused on AEO and GEO for AI-era visibility.',
    initials: 'DV',
  },
  {
    name: 'Paid Media Lead',
    title: 'Performance Advertising Specialist',
    bio: 'Manages Meta and Google Ads across D2C, EdTech, and Real Estate verticals. Specialises in post-iOS tracking architecture, server-side Conversions API, and creative testing frameworks that improve ROAS without increasing spend.',
    initials: 'PM',
  },
  {
    name: 'Content and CRO Specialist',
    title: 'Content Strategy and Conversion',
    bio: 'Builds topical authority content programs and runs structured A/B testing on landing pages and product flows. Bridges content SEO and conversion optimisation to drive qualified traffic that actually converts.',
    initials: 'CC',
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
    title: 'AEO vs SEO in 2025: How to get your content cited by ChatGPT, Perplexity, and Google AI Overviews',
    slug: 'aeo-vs-seo-2025-ai-citations',
    category: 'AEO',
    readTime: '7 min read',
    excerpt:
      'Answer Engine Optimisation is no longer optional for brands targeting high-intent buyers. Here is the exact content structure we use to earn AI citations for our clients across the major platforms.',
  },
  {
    title: 'GEO strategy: How to make your brand appear in ChatGPT and Gemini product recommendations',
    slug: 'geo-strategy-chatgpt-gemini-brand-visibility',
    category: 'GEO',
    readTime: '8 min read',
    excerpt:
      'Generative Engine Optimisation is the fastest-growing organic brand discovery channel in 2025. This is the authority-building framework we use to earn AI recommendations for clients in competitive categories.',
  },
  {
    title: 'Why your Meta CPL spiked after iOS changes and the server-side fix that actually works',
    slug: 'meta-cpl-ios-server-side-conversions-api-fix',
    category: 'Paid Media',
    readTime: '6 min read',
    excerpt:
      'Server-side Conversions API is not optional for Meta advertisers anymore. Here is a practical migration guide that covers what most agencies still get wrong about first-party data setup and audience rebuilding.',
  },
];

export const awards: string[] = [
  'Google Partner Certified',
  'Meta Business Partner',
  'SEMrush Certified Agency',
  'HubSpot Marketing Partner',
];
