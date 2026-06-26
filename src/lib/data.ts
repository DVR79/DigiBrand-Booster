// Single source of truth for all site content

export const siteConfig = {
  name: 'Digi Brand Booster',
  tagline: 'AI-Native Performance Marketing',
  description:
    'We help ambitious brands grow faster with paid media, SEO, and conversion systems built on real data. 90-day guarantee or your money back.',
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
      'We went from 1.2x to 4.1x ROAS in 11 weeks. The team understood our brand voice without us having to repeat ourselves.',
    metric: '4.1x ROAS in 11 weeks',
  },
  {
    name: 'Arjun Mehta',
    title: 'CMO',
    company: 'Vyapar ERP',
    quote:
      'Organic traffic grew 312% in 6 months. No gimmicks, no shortcuts. Just solid content architecture and link building.',
    metric: '312% organic growth in 6 months',
  },
  {
    name: 'Sneha Rao',
    title: 'Head of Growth',
    company: 'FreshCart',
    quote:
      'Our CPL dropped 58% on Meta while maintaining the same lead quality. That kind of efficiency matters when you are spending at scale.',
    metric: '58% lower CPL on Meta',
  },
  {
    name: 'Rohit Desai',
    title: 'Co-founder',
    company: 'Craftsvilla 2.0',
    quote:
      'The 90-day guarantee felt too good to be true. It was not. We saw measurable results by week 6.',
    metric: 'Results by week 6',
  },
];

export interface ServiceFeature {
  title: string;
  description: string;
  features: string[];
  icon: string;
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
        title: 'Meta Ads',
        description:
          'Prospecting, retargeting, and catalog campaigns built for scale. We manage creative testing so you stop guessing what works.',
        features: [
          'Creative strategy and testing framework',
          'Audience architecture (cold, warm, hot)',
          'Dynamic product ads for e-commerce',
          'Weekly performance reviews',
        ],
        icon: 'target',
      },
      {
        title: 'Google Ads',
        description:
          'Search, Shopping, and Performance Max campaigns tuned for the right intent. No wasted spend on broad match without control.',
        features: [
          'Search and Shopping campaign builds',
          'Negative keyword sculpting',
          'Performance Max with asset testing',
          'Monthly budget pacing reports',
        ],
        icon: 'search',
      },
    ],
  },
  {
    label: 'SEO',
    services: [
      {
        title: 'Technical SEO',
        description:
          'Core Web Vitals, crawl budgets, structured data, and site architecture fixes that compound over time.',
        features: [
          'Full technical audit and prioritized fix list',
          'Schema markup (Product, FAQ, Organization)',
          'Core Web Vitals optimization',
          'Internal link structure overhaul',
        ],
        icon: 'code',
      },
      {
        title: 'Content SEO',
        description:
          'Topical authority built through cluster content, not isolated blog posts. Every piece maps to a conversion intent.',
        features: [
          'Keyword cluster mapping',
          'Content briefs for writers',
          'Programmatic SEO for scale',
          'Featured snippet optimization',
        ],
        icon: 'fileText',
      },
    ],
  },
  {
    label: 'Conversion',
    services: [
      {
        title: 'Landing Page Optimization',
        description:
          'Heatmaps, session recordings, and A/B tests that move conversion rates, not vanity metrics.',
        features: [
          'Above-the-fold audit and rebuild',
          'A/B testing with statistical significance',
          'Checkout flow friction removal',
          'Trust signal placement',
        ],
        icon: 'trendingUp',
      },
      {
        title: 'Email and Retention',
        description:
          'Flows that recover carts, win back lapsed buyers, and grow LTV without adding ad spend.',
        features: [
          'Welcome, abandon, win-back flows',
          'Segmentation by RFM model',
          'SMS + email coordination',
          'Monthly list hygiene',
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
      'Stagnant ROAS at 1.2x for 8 months despite increasing ad spend month over month.',
    result:
      'Rebuilt creative strategy and audience architecture from scratch. Introduced a weekly creative testing sprint.',
    metrics: [
      { label: 'ROAS', value: '4.1x' },
      { label: 'Time', value: '11 weeks' },
      { label: 'Spend increase', value: '0%' },
    ],
  },
  {
    brand: 'Vyapar ERP',
    industry: 'B2B SaaS',
    challenge: 'Low organic visibility in a crowded SMB software market.',
    result:
      'Mapped a full topical authority cluster, published 40 pieces over 6 months, built 120 high-quality backlinks.',
    metrics: [
      { label: 'Organic growth', value: '312%' },
      { label: 'Backlinks built', value: '120' },
      { label: 'Timeline', value: '6 months' },
    ],
  },
  {
    brand: 'FreshCart',
    industry: 'Quick Commerce',
    challenge: 'CPL on Meta had ballooned to 3x the target after iOS 17 changes.',
    result:
      'Migrated tracking to server-side events, rebuilt audiences using first-party data, and restructured campaign hierarchy.',
    metrics: [
      { label: 'CPL reduction', value: '58%' },
      { label: 'Lead quality', value: 'Maintained' },
      { label: 'Time', value: '8 weeks' },
    ],
  },
];

export const industries: string[] = [
  'D2C and E-commerce',
  'B2B SaaS',
  'Ed-tech',
  'Health and Wellness',
  'Real Estate',
  'Financial Services',
  'Fashion and Apparel',
  'Food and Beverage',
  'Travel and Hospitality',
  'Consumer Electronics',
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
      'A 48-hour deep dive into your accounts, analytics, and competitors. We find the gaps before we touch the budget.',
  },
  {
    step: 2,
    title: 'Strategy',
    description:
      'A written growth plan with channel priorities, 90-day targets, and a creative roadmap. No generic playbooks.',
  },
  {
    step: 3,
    title: 'Build',
    description:
      'Campaign architecture, landing pages, tracking, and creative production. Everything built to your brand standards.',
  },
  {
    step: 4,
    title: 'Optimise',
    description:
      'Weekly sprints with clear hypotheses, tests, and documented learnings. Every decision is traceable.',
  },
  {
    step: 5,
    title: 'Scale',
    description:
      'Once unit economics are proven, we scale spend methodically without breaking what is working.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What does the 90-day guarantee actually mean?',
    answer:
      'If we do not hit the agreed KPIs by day 90, you get a full refund of management fees. The targets are written into the contract before we start, so there is no ambiguity.',
  },
  {
    question: 'How quickly can you onboard a new client?',
    answer:
      'Full onboarding takes 48 hours from contract signing. That covers access, audits, kickoff call, and strategy alignment.',
  },
  {
    question: 'Do you work with early-stage startups?',
    answer:
      'Yes, but our sweet spot is brands spending at least Rs 2 lakh per month on paid media. Below that, the budget-to-management-fee ratio rarely makes sense for you.',
  },
  {
    question: 'Can you work alongside our in-house marketing team?',
    answer:
      'We do it regularly. We plug into your team as a specialist unit. You keep strategy oversight, we handle execution and optimization.',
  },
  {
    question: 'Which platforms do you specialize in?',
    answer:
      'Meta (Facebook and Instagram), Google (Search, Shopping, PMax), LinkedIn for B2B, and Amazon for e-commerce. We do not spread thin across every channel.',
  },
  {
    question: 'How do you report performance?',
    answer:
      'Live dashboard access every day, a weekly written summary every Monday, and a monthly strategy call. You never have to chase us for numbers.',
  },
];

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Karan Bhatia',
    title: 'Founder and Growth Strategist',
    bio: '12 years running paid media for D2C and SaaS brands. Formerly at WATConsult and iProspect.',
  },
  {
    name: 'Ananya Iyer',
    title: 'Head of SEO',
    bio: 'Built topical authority programs for 3 unicorn-stage startups. Speaks fluent Search Console.',
  },
  {
    name: 'Dev Kapoor',
    title: 'Lead Paid Media Strategist',
    bio:
      'Managed Rs 50 Cr in annual ad spend across Meta and Google. Obsessed with creative testing frameworks.',
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
    title: 'Why your Meta CPL jumped after iOS 17 (and how to fix it)',
    slug: 'meta-cpl-ios17-fix',
    category: 'Paid Media',
    readTime: '6 min read',
    excerpt:
      'Server-side tracking is not optional anymore. Here is a practical migration guide that takes less than a week.',
  },
  {
    title: 'The content cluster strategy we used to triple organic traffic',
    slug: 'content-cluster-organic-traffic',
    category: 'SEO',
    readTime: '8 min read',
    excerpt:
      'Stop publishing isolated blog posts. This is the topical authority framework that compounds over 6 months.',
  },
  {
    title: 'How to audit a Performance Max campaign in 30 minutes',
    slug: 'performance-max-audit',
    category: 'Google Ads',
    readTime: '5 min read',
    excerpt:
      'Most PMax campaigns leak budget in the first 30 days. This checklist catches the five most common issues.',
  },
];

export const awards: string[] = [
  'Google Partner 2024',
  'Meta Business Partner',
  'Top Digital Agency, Clutch 2024',
  'Best Performance Marketing Agency, Adgully 2023',
];
