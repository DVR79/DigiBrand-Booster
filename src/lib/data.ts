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
    label: 'Paid Media',
    services: [
      {
        title: 'Meta Ads Management',
        description:
          'Full-funnel Meta advertising for D2C and SaaS brands. We build campaign architecture, run weekly creative testing sprints, and fix tracking, so every rupee you spend is measured and every decision is documented.',
        features: [
          'Cold, warm, and retargeting campaign builds from the ground up',
          'Weekly creative testing sprint with documented wins and losses shared every Monday',
          'Server-side Conversions API setup for accurate post-iOS attribution',
          'First-party data audience architecture across lead tiers, buyers, and LTV segments',
          'Weekly ROAS, CPL, and CPA reports with specific action notes',
        ],
        icon: 'target',
      },
      {
        title: 'Google Ads Management',
        description:
          'Search, Shopping, and Performance Max campaigns built around genuine commercial intent. Tight structure, rigorous negatives, and bidding calibrated to your actual margins, not platform defaults.',
        features: [
          'Full campaign builds or complete account restructure based on audit findings',
          'Performance Max with segmented asset groups and ongoing A/B testing',
          'Negative keyword sculpting and search term review every two weeks',
          'Smart bidding calibration aligned to target CPA or ROAS with margin inputs',
          'Weekly budget pacing reports and monthly strategy review with recorded call',
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
          'A complete audit of your site architecture, Core Web Vitals, crawlability, and structured data, followed by a prioritised fix roadmap. Built to compound over 6 to 12 months and hold through algorithm updates.',
        features: [
          'Full technical audit with issues ranked by traffic and revenue impact',
          'Core Web Vitals improvements: LCP under 2.5s, INP under 200ms, CLS under 0.1',
          'Schema markup for Product, FAQ, HowTo, Article, and Organization',
          'Internal link architecture review and strategic rebuild for authority flow',
          'Crawl budget optimisation and log file analysis for large or complex sites',
        ],
        icon: 'code',
      },
      {
        title: 'AEO: Answer Engine Optimisation',
        description:
          'Structure your content to be cited in AI-generated answers on ChatGPT, Perplexity, Gemini, and Google AI Overviews. AEO is the highest-intent discovery channel for buyers who already know what they need.',
        features: [
          'Question-intent content written specifically to earn AI citation',
          'Featured snippet and AI Overview targeting mapped to your keyword clusters',
          'Entity optimisation and knowledge graph signal building for brand authority',
          'FAQ, speakable, and HowTo schema implementation for AI readability',
          'Monthly AI citation tracking with platform-by-platform visibility report',
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
          'When someone asks ChatGPT or Google Gemini to recommend a product or service in your category, GEO puts your brand in the answer. It is organic brand discovery built for the AI-search era.',
        features: [
          'Brand mention audit across ChatGPT, Claude, Gemini, and Perplexity',
          'Authority content written to match generative AI model training patterns',
          'Topical authority cluster strategy for consistent AI recommendation visibility',
          'Backlink acquisition from domains already cited by major AI platforms',
          'Quarterly GEO visibility score with platform-by-platform breakdown',
        ],
        icon: 'sparkles',
        badge: 'NEW',
      },
      {
        title: 'CRO: Conversion Rate Optimisation',
        description:
          'Heatmaps, session recordings, and structured A/B tests that remove friction from landing pages, product pages, and lead forms. More conversions from the traffic you are already paying for.',
        features: [
          'Above-the-fold wireframe audit and redesign with documented reasoning',
          'A/B tests run to 95% statistical significance before any result is called',
          'Checkout and lead form friction analysis with drop-off point identification',
          'Trust signal, social proof, and urgency element placement testing',
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
          'A cluster-based content strategy that builds genuine topical authority over 6 months. Every piece maps to a search intent, a keyword cluster, and a business goal. Not content for content\'s sake.',
        features: [
          'Keyword cluster mapping, content gap analysis, and competitor teardown',
          'SEO content briefs built with full E-E-A-T and author expertise guidelines',
          'Programmatic SEO for scalable category, location, or comparison pages',
          'Content refresh strategy for pages losing ranking traction or traffic share',
          'Monthly organic traffic, ranking movement, and topical coverage report',
        ],
        icon: 'fileText',
      },
      {
        title: 'Email & Retention Marketing',
        description:
          'Automated lifecycle flows that recover carts, reactivate lapsed customers, and grow repeat purchase revenue without increasing your ad spend. Built on first-party data, not guesswork.',
        features: [
          'Welcome series, abandon cart, post-purchase, and win-back flow builds',
          'RFM-based audience segmentation for personalised timing and messaging',
          'SMS and email channel coordination across the full customer lifecycle',
          'Deliverability audit, domain warmup, and full list hygiene before launch',
          'Monthly retention revenue attribution and flow-by-flow performance report',
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

export const industries: string[] = [
  'D2C and E-commerce',
  'B2B SaaS',
  'EdTech',
  'Health and Wellness',
  'Real Estate',
  'Financial Services',
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

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'What is AEO and how is it different from traditional SEO?',
    answer:
      'Answer Engine Optimisation (AEO) structures your content so AI tools like ChatGPT, Perplexity, Google AI Overviews, and Gemini cite your website when answering user questions. Traditional SEO targets blue-link rankings in search results pages. AEO targets AI-generated answer citations, which is now the primary discovery channel for high-intent buyers who are researching before they purchase.',
  },
  {
    question: 'What is GEO and why does my brand need it now?',
    answer:
      'Generative Engine Optimisation (GEO) ensures your brand is recommended when AI tools like ChatGPT, Claude, or Google Gemini respond to "what is the best [product or service]" queries. A growing share of your potential customers are discovering brands through AI recommendations, not search results. GEO builds that visibility systematically before your competitors do.',
  },
  {
    question: 'What exactly does the 90-day results guarantee cover?',
    answer:
      'Your KPIs are agreed and written into the contract before we start. Depending on the engagement, these are typically ROAS, cost per lead, organic traffic growth, or conversion rate improvement. If we do not hit the agreed targets by day 90, you receive a full refund of management fees. The guarantee covers our fees. Ad spend invested with Meta, Google, or other platforms is not refundable as it is paid directly to those platforms.',
  },
  {
    question: 'How quickly do you start after we sign?',
    answer:
      'Full onboarding takes 48 hours from contract signing. Within that window you receive complete account access, a written audit of your current performance, your kickoff call, and a signed strategy document with your 90-day KPI targets. Most agencies take 2 to 3 weeks for this. We start in 48 hours.',
  },
  {
    question: 'What is your minimum engagement size?',
    answer:
      'For paid media engagements, we work best with brands spending Rs 1.5 lakh or more per month on ads. Below that level, the management fee relative to ad spend rarely makes commercial sense for you. For SEO, AEO, or GEO-only retainers, there is no minimum ad spend requirement. We are happy to discuss what makes sense for your specific situation.',
  },
  {
    question: 'Do you work with brands that already have an in-house team?',
    answer:
      'Yes, regularly. We operate as a specialist execution layer that plugs into your existing team. You retain full strategic oversight and brand decisions. We handle channel execution, technical implementation, weekly testing, and reporting. Your team stays in control of the bigger picture while we run the channels we specialise in.',
  },
  {
    question: 'Which platforms do you actively manage?',
    answer:
      'Paid media: Meta (Facebook and Instagram), Google (Search, Shopping, Performance Max), LinkedIn Ads for B2B brands, and Amazon Ads for e-commerce. Organic: Technical SEO, AEO for AI citation visibility, GEO for generative search brand recommendations, and Content SEO for topical authority. We focus on the channels that drive your specific growth goals, not every platform simultaneously.',
  },
  {
    question: 'How do you keep us informed on performance?',
    answer:
      'You have live dashboard access every day with the same numbers we see. Every Monday you receive a written performance summary covering what changed, why it changed, and what we are doing about it. Once a month we hold a strategy review call to look at the bigger picture, review the 90-day KPI progress, and align on the next sprint. You will never need to chase us for an update.',
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
