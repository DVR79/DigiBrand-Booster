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
  { value: 350, suffix: '+', label: 'Brands Grown' },
  { value: 3.5, suffix: 'x', label: 'Average ROAS' },
  { value: 90, suffix: '%', label: 'Client Retention' },
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
    name: 'Priya Sharma',
    title: 'Founder',
    company: 'Bloom Skincare',
    quote:
      'We went from 1.2x to 4.1x ROAS in 11 weeks. Digi Brand Booster restructured our entire Meta Ads funnel and introduced a weekly creative testing sprint. The difference was immediate.',
    metric: '4.1x ROAS in 11 weeks',
  },
  {
    name: 'Arjun Mehta',
    title: 'CMO',
    company: 'Vyapar ERP',
    quote:
      'Organic traffic grew 312% in 6 months through topical authority building and technical SEO fixes. Their AEO strategy also got us featured in AI search answers on Perplexity and ChatGPT.',
    metric: '312% organic growth in 6 months',
  },
  {
    name: 'Sneha Rao',
    title: 'Head of Growth',
    company: 'FreshCart',
    quote:
      'Our Meta CPL dropped 58% after they migrated us to server-side tracking and rebuilt our audience segments using first-party data. Lead quality stayed the same. That efficiency matters at scale.',
    metric: '58% lower CPL on Meta',
  },
  {
    name: 'Rohit Desai',
    title: 'Co-founder',
    company: 'Craftsvilla 2.0',
    quote:
      'The 90-day guarantee made the decision easy. We saw measurable ROAS improvement by week 6, and their GEO work started surfacing our brand in Google AI Overviews by month 3.',
    metric: 'Results by week 6',
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
          'Full-funnel Meta advertising for D2C and SaaS brands. We handle creative strategy, audience architecture, and bid management so you stop guessing what converts.',
        features: [
          'Prospecting, retargeting and catalog campaign builds',
          'Weekly creative testing sprint with documented learnings',
          'First-party data audience setup post iOS privacy changes',
          'Server-side Conversions API tracking implementation',
          'Monthly ROAS and CPL performance reports',
        ],
        icon: 'target',
      },
      {
        title: 'Google Ads Management',
        description:
          'Search, Shopping and Performance Max campaigns built for the right commercial intent. Tight negative keyword structure, no broad match without controls.',
        features: [
          'Search and Shopping campaign architecture from scratch',
          'Performance Max with asset group A/B testing',
          'Negative keyword sculpting and search term audits',
          'Smart bidding strategy selection and calibration',
          'Weekly budget pacing and monthly strategy reviews',
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
          'Core Web Vitals, crawl budget management, structured data, and site architecture improvements that compound over 6 to 12 months. Built to last through Google core updates.',
        features: [
          'Full technical audit with prioritised fix roadmap',
          'Core Web Vitals optimisation (LCP, INP, CLS)',
          'Schema markup: Product, FAQ, HowTo, Organization',
          'Internal link architecture overhaul',
          'Log file analysis and crawl budget optimisation',
        ],
        icon: 'code',
      },
      {
        title: 'AEO: Answer Engine Optimisation',
        description:
          'AEO optimises your content to appear in AI-generated answers on ChatGPT, Perplexity, Gemini, and Google AI Overviews. The fastest-growing organic traffic channel in 2025.',
        features: [
          'Question-based content structured for AI citations',
          'Featured snippet and AI Overview targeting',
          'Entity optimisation and knowledge graph building',
          'FAQ schema and speakable schema implementation',
          'Monthly AI citation tracking and reporting',
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
          'GEO ensures your brand is recommended by AI tools like ChatGPT, Claude, and Google Gemini when users ask for service or product recommendations in your category.',
        features: [
          'Brand mention audit across AI platforms',
          'Authority content written to match AI training signals',
          'Topical authority cluster strategy for generative search',
          'Backlink profile building from AI-cited sources',
          'Quarterly GEO visibility score tracking',
        ],
        icon: 'sparkles',
        badge: 'NEW',
      },
      {
        title: 'CRO: Conversion Rate Optimisation',
        description:
          'Heatmaps, session recordings, and structured A/B tests that improve conversion rates on landing pages, product pages, and checkout flows.',
        features: [
          'Above-the-fold audit and wireframe rebuild',
          'A/B testing with 95%+ statistical significance',
          'Checkout and lead form friction analysis',
          'Trust signal and social proof placement',
          'Monthly CRO experiment calendar',
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
          'Cluster-based content strategy that builds topical authority over 6 months, not isolated blog posts. Every piece maps to a search intent and a business goal.',
        features: [
          'Keyword cluster mapping and content gap analysis',
          'SEO content briefs with E-E-A-T guidelines',
          'Programmatic SEO for scalable organic reach',
          'Content refresh strategy for existing pages',
          'Monthly organic traffic and ranking reports',
        ],
        icon: 'fileText',
      },
      {
        title: 'Email & Retention Marketing',
        description:
          'Automated flows that recover abandoned carts, win back lapsed buyers, and grow lifetime value without adding ad spend.',
        features: [
          'Welcome series, abandon cart, and win-back flows',
          'RFM-based audience segmentation',
          'SMS and email channel coordination',
          'Deliverability audit and list hygiene',
          'Monthly retention revenue attribution report',
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
    brand: 'Bloom Skincare',
    industry: 'D2C Beauty',
    challenge:
      'ROAS stuck at 1.2x for 8 months despite a 40% increase in Meta ad spend. Creative fatigue and poor audience segmentation were the root causes.',
    result:
      'Rebuilt creative strategy with a weekly testing sprint. Restructured audience architecture across cold, warm, and hot segments. Implemented Conversions API for accurate post-iOS tracking.',
    metrics: [
      { label: 'ROAS', value: '4.1x' },
      { label: 'Timeline', value: '11 weeks' },
      { label: 'Spend change', value: '0%' },
    ],
  },
  {
    brand: 'Vyapar ERP',
    industry: 'B2B SaaS',
    challenge:
      'Minimal organic visibility in a crowded SMB accounting software market. No topical authority, thin content, and 42 broken backlinks.',
    result:
      'Built a full topical authority cluster around SMB finance keywords. Published 40 content pieces over 6 months. Earned 120 backlinks from authoritative sources. AEO work led to Perplexity citations.',
    metrics: [
      { label: 'Organic growth', value: '312%' },
      { label: 'Backlinks', value: '120' },
      { label: 'Timeline', value: '6 months' },
    ],
  },
  {
    brand: 'FreshCart',
    industry: 'Quick Commerce',
    challenge:
      'CPL on Meta tripled after iOS 17 changes. Audience quality dropped and remarketing pools shrank by 60% due to tracking loss.',
    result:
      'Migrated to server-side Conversions API, rebuilt first-party data audiences, and restructured campaign hierarchy. Introduced LinkedIn Ads for B2B buyer acquisition.',
    metrics: [
      { label: 'CPL reduction', value: '58%' },
      { label: 'Lead quality', value: 'Maintained' },
      { label: 'Timeline', value: '8 weeks' },
    ],
  },
];

export const industries: string[] = [
  'D2C and E-commerce',
  'B2B SaaS',
  'Ed-Tech',
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
      'A 48-hour deep-dive into your ad accounts, analytics, SEO profile, and competitor landscape. We identify exactly where budget leaks and growth opportunities exist before touching anything.',
  },
  {
    step: 2,
    title: 'Strategy',
    description:
      'A written growth plan with channel priorities, 90-day KPI targets, and a creative roadmap. Targets are signed into the contract. No generic agency playbooks.',
  },
  {
    step: 3,
    title: 'Build',
    description:
      'Campaign architecture, landing page optimisation, tracking implementation, and creative production. Everything is built to your brand standards and performance benchmarks.',
  },
  {
    step: 4,
    title: 'Optimise',
    description:
      'Weekly sprints with clear hypotheses, documented tests, and learnings shared with you every Monday. Every decision is traceable to a data point.',
  },
  {
    step: 5,
    title: 'Scale',
    description:
      'Once unit economics are proven, we scale spend methodically across Meta, Google, and organic channels without breaking what is working.',
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
      'Answer Engine Optimisation (AEO) is the practice of structuring content so AI tools like ChatGPT, Perplexity, Google AI Overviews, and Gemini pull from your website when answering user questions. Traditional SEO targets blue-link rankings. AEO targets AI-generated answer citations, which is now the dominant discovery channel for high-intent users.',
  },
  {
    question: 'What is GEO and why does my brand need it in 2025?',
    answer:
      'Generative Engine Optimisation (GEO) ensures your brand appears as a recommended option when AI chatbots like ChatGPT, Claude, or Google Gemini respond to "what is the best [product/service]" queries. As AI search replaces traditional search for discovery, brands not optimised for generative engines are becoming invisible to a growing share of their target audience.',
  },
  {
    question: 'What does the 90-day results guarantee cover?',
    answer:
      'The KPIs are written into your contract before we start, typically ROAS, CPL, organic traffic, or conversion rate depending on the engagement. If we do not hit the agreed targets by day 90, you receive a full refund of management fees. No ambiguity, no small print.',
  },
  {
    question: 'How quickly can you onboard a new client?',
    answer:
      'Full onboarding takes 48 hours from contract signing. That covers account access, technical audit, kickoff call, and written strategy alignment document.',
  },
  {
    question: 'What is your minimum ad spend requirement?',
    answer:
      'Our sweet spot is brands spending Rs 2 lakh or more per month on paid media. Below that threshold, the budget-to-management-fee ratio rarely makes commercial sense for you. For SEO and AEO-only engagements, there is no minimum ad spend requirement.',
  },
  {
    question: 'Do you work alongside existing in-house marketing teams?',
    answer:
      'Yes, regularly. We operate as a specialist execution unit plugged into your team. You retain strategy oversight and brand decisions, we handle channel execution, testing, and optimisation.',
  },
  {
    question: 'Which platforms do you manage?',
    answer:
      'Meta (Facebook and Instagram), Google (Search, Shopping, Performance Max), LinkedIn Ads for B2B, Amazon Ads for e-commerce, and organic channels including SEO, AEO, and GEO. We do not spread thin across every channel simultaneously.',
  },
  {
    question: 'How do you report on performance?',
    answer:
      'Live dashboard access every day, a written weekly summary every Monday morning, and a monthly strategy call. You will never need to chase us for numbers.',
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
    name: 'Karan Bhatia',
    title: 'Founder and Growth Strategist',
    bio: '12 years managing paid media and growth strategy for D2C and SaaS brands. Formerly at WATConsult and iProspect. Certified Google Partner and Meta Blueprint professional.',
    initials: 'KB',
  },
  {
    name: 'Ananya Iyer',
    title: 'Head of SEO, AEO and GEO',
    bio: 'Built topical authority programs for three unicorn-stage startups. Specialist in Answer Engine Optimisation and Generative Engine Optimisation for AI search visibility.',
    initials: 'AI',
  },
  {
    name: 'Dev Kapoor',
    title: 'Lead Paid Media Strategist',
    bio: 'Managed over Rs 50 crore in annual ad spend across Meta and Google. Expert in creative testing frameworks and post-iOS tracking architecture.',
    initials: 'DK',
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
    title: 'AEO vs SEO in 2025: How to get cited by ChatGPT, Perplexity and Google AI Overviews',
    slug: 'aeo-vs-seo-2025-ai-citations',
    category: 'AEO',
    readTime: '7 min read',
    excerpt:
      'Answer Engine Optimisation is not optional anymore. Here is the exact content structure we use to get our clients cited in AI-generated answers across major platforms.',
  },
  {
    title: 'GEO strategy: How to make your brand appear in ChatGPT and Gemini recommendations',
    slug: 'geo-strategy-chatgpt-gemini-brand-visibility',
    category: 'GEO',
    readTime: '8 min read',
    excerpt:
      'Generative Engine Optimisation is the fastest-growing organic channel in 2025. This is the authority-building framework we use to earn AI recommendations for our clients.',
  },
  {
    title: 'Why your Meta CPL jumped after iOS 17 and the server-side fix that works',
    slug: 'meta-cpl-ios17-server-side-fix',
    category: 'Paid Media',
    readTime: '6 min read',
    excerpt:
      'Server-side Conversions API is not optional for Meta advertisers anymore. Here is a practical migration guide that most agencies are still getting wrong.',
  },
];

export const awards: string[] = [
  'Google Partner 2024',
  'Meta Business Partner',
  'Top Digital Agency, Clutch 2024',
  'Best Performance Marketing Agency, Adgully 2023',
];
