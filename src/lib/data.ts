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
  { value: 260, suffix: '%', label: 'Avg organic traffic growth (SEO clients)' },
  { value: 4.0, suffix: 'x', label: 'Best paid ROAS achieved' },
  { value: 41, suffix: '%', label: 'Avg CPL reduction (paid media clients)' },
  { value: 15, suffix: '+', label: 'AI citations earned (AEO clients)' },
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

export interface Service {
  title: string;
  icon: string;
  outcome: string;
  points: string[];
  plan: 'Starter' | 'Growth' | 'Scale';
  badge?: string;
  color: string;
}

export const services: Service[] = [
  {
    title: 'Technical SEO',
    icon: 'code',
    outcome: 'Fix the hidden issues stopping Google from ranking your site.',
    points: [
      'Full crawl and indexation audit with priority fix list',
      'Core Web Vitals optimisation for speed and user experience',
      'Schema markup so Google understands every page clearly',
    ],
    plan: 'Starter',
    color: 'blue',
  },
  {
    title: 'On-Page and Content SEO',
    icon: 'fileText',
    outcome: 'Rank for the exact keywords your buyers search before they buy.',
    points: [
      'Keyword research mapped to buyer intent stages',
      'Title tags, headings, and page structure optimised per page',
      'Content gap analysis: rank for what your competitors already do',
    ],
    plan: 'Starter',
    color: 'cyan',
  },
  {
    title: 'Meta Ads',
    icon: 'trendingUp',
    outcome: 'Turn ad spend into measurable revenue with full-funnel Meta campaigns.',
    points: [
      'Campaign builds across prospecting, warm, and retargeting audiences',
      'Weekly creative testing so your ads do not go stale',
      'Server-side Conversions API for accurate post-iOS tracking',
    ],
    plan: 'Starter',
    color: 'purple',
  },
  {
    title: 'Google Ads',
    icon: 'search',
    outcome: 'Capture buyers who are actively searching for what you sell.',
    points: [
      'Search, Shopping, and Performance Max campaign builds',
      'Tight negative keyword lists to stop budget going to wrong searches',
      'Smart bidding calibrated to your actual margins, not platform defaults',
    ],
    plan: 'Growth',
    color: 'amber',
  },
  {
    title: 'Link Building',
    icon: 'target',
    outcome: 'Build the authority signals that push your rankings past competitors.',
    points: [
      'Manual outreach to real, high-authority sites in your industry',
      'Digital PR to earn editorial mentions and news links',
      'Monthly report with every link earned, its authority, and its relevance',
    ],
    plan: 'Growth',
    color: 'green',
  },
  {
    title: 'Local SEO',
    icon: 'mapPin',
    outcome: 'Show up at the top of Google Maps when nearby customers search.',
    points: [
      'Google Business Profile setup and full optimisation',
      'Citation building across 50+ directories for consistent NAP data',
      'Review generation strategy to improve local pack rankings',
    ],
    plan: 'Starter',
    color: 'cyan',
  },
  {
    title: 'AEO: Answer Engine Optimisation',
    icon: 'brain',
    outcome: 'Get your content cited by ChatGPT, Perplexity, and Google AI Overviews.',
    points: [
      'Content restructured specifically to earn AI platform citations',
      'Featured snippet and AI Overview targeting by keyword cluster',
      'Monthly citation tracking across all major AI search platforms',
    ],
    plan: 'Scale',
    badge: 'NEW',
    color: 'purple',
  },
  {
    title: 'GEO: Generative Engine Optimisation',
    icon: 'sparkles',
    outcome: 'Get recommended by AI when buyers ask for the best in your category.',
    points: [
      'Brand visibility audit across ChatGPT, Gemini, and Perplexity',
      'Authority content built to align with how AI models cite sources',
      'Quarterly GEO visibility score with brand mention tracking',
    ],
    plan: 'Scale',
    badge: 'NEW',
    color: 'blue',
  },
  {
    title: 'Social Media Marketing',
    icon: 'share',
    outcome: 'Build an active, converting social presence across Instagram and LinkedIn.',
    points: [
      'Content calendar planning and post scheduling every month',
      'Branded creatives and copy aligned to your campaign goals',
      'Engagement tracking and monthly performance report',
    ],
    plan: 'Growth',
    color: 'amber',
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
    price: '₹15,000',
    priceNote: '/month onwards',
    tagline: 'One channel. Real work. Clear results.',
    ideal: 'Brands starting with SEO, paid media, or SMM for the first time.',
    features: [
      'One channel: SEO, Meta Ads, Google Ads, or SMM',
      'Month 1: full account or site audit',
      'Ongoing: technical fixes, page optimisation, or campaign management every month',
      'Weekly performance report every Monday',
      'Monthly strategy call',
      'Written KPIs in the contract before we start',
      '90-day results guarantee',
    ],
    cta: 'Book free audit',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '₹22,000',
    priceNote: '/month onwards',
    tagline: 'Two channels working together.',
    ideal: 'Brands ready to combine SEO with paid media or SMM for compounding growth.',
    features: [
      'Two channels: any combination of SEO, Paid Media, and SMM',
      'Month 1: full audit across both channels',
      'SEO: technical fixes, on-page optimisation, content planning, and link building',
      'Paid Media: campaign management, creative testing, and audience refinement',
      'SMM: content calendar, branded creatives, and scheduling',
      'Weekly report + bi-weekly strategy call',
      'Written KPIs across both channels',
      '90-day results guarantee',
    ],
    cta: 'Book free audit',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '₹29,000',
    priceNote: '/month onwards',
    tagline: 'Full stack. Every channel. One accountable team.',
    ideal: 'Growing brands that need SEO, paid media, SMM, and AI search all working as one system.',
    features: [
      'All channels: SEO, Paid Media, SMM, AEO, and GEO',
      'Month 1: deep-dive audit across every channel',
      'SEO: technical, on-page, content, and link building every month',
      'Paid Media: full campaign management with weekly creative testing',
      'SMM: content calendar, creatives, and community engagement',
      'AEO and GEO: AI citation content and monthly citation tracking',
      'Weekly report + weekly strategy call',
      'Written KPIs across every channel, 90-day guarantee',
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
      'We charge a flat monthly retainer, not a percentage of ad spend. Starter plans for a single channel begin at Rs 15,000 per month. Growth plans covering two channels start at Rs 22,000 per month. Full-stack Scale plans covering all channels including AEO and GEO start at Rs 29,000 per month. Every plan includes weekly reports, written KPIs, 48-hour onboarding, and the 90-day results guarantee. Ad spend is separate and paid directly to the platform.',
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
      'Three ways. First, a live dashboard you can check any time with the same data we see. Second, a written Monday update every week covering what we tested, what the numbers showed, and what we are doing next. Third, a strategy call on the cadence agreed in your plan: monthly for Starter, bi-weekly for Growth, weekly for Scale. You will never need to ask us what is happening.',
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
  date: string;
  excerpt: string;
  metaTitle: string;      // ≤60 chars for Google SERP title
  metaDescription: string; // ≤155 chars for Google SERP description
  sections: { heading: string; body: string }[];
}

export const insightPosts: InsightPost[] = [
  {
    title: 'AEO in 2025: The exact content structure that gets cited by ChatGPT, Perplexity, and Google AI Overviews',
    slug: 'aeo-content-structure-ai-citations-2025',
    category: 'AEO',
    readTime: '7 min read',
    date: 'June 2025',
    metaTitle: 'AEO 2025: Content Structure for AI Citations',
    metaDescription: 'Learn the exact content format that gets your brand cited by ChatGPT, Perplexity, and Google AI Overviews. Practical AEO guide with real examples.',
    excerpt:
      'Most brands are still optimising for blue-link rankings while their competitors are getting cited in AI-generated answers. Here is the exact structure we use to earn those citations for our clients.',
    sections: [
      {
        heading: 'Why AEO is not optional anymore',
        body: 'In 2025, over 60 percent of Google searches end without a click on a blue link. Google AI Overviews, Perplexity, and ChatGPT Search now answer the query directly on the results page. If your content is not the source being cited, you are invisible to that buyer at the most important moment of their research. AEO is not a nice-to-have. It is the difference between being found and being skipped.',
      },
      {
        heading: 'The three content formats AI platforms prefer to cite',
        body: 'After analysing citation patterns across 50+ client pages, we have found that AI platforms consistently prefer three formats. First, direct-answer paragraphs that open with the exact question as a subheading and answer it in two to three sentences. Second, numbered or bulleted step-by-step guides for process queries. Third, comparison tables for "X vs Y" queries. Pages that mix long paragraphs without clear structure almost never get cited regardless of their ranking position.',
      },
      {
        heading: 'The question-first structure that earns AI citations',
        body: 'Every page targeting an AI citation should open its key sections with the user question as an H2 or H3 heading, followed immediately by a two-sentence answer, then expanded explanation. For example: "What is AEO?" followed by "Answer Engine Optimisation is the practice of structuring content so AI tools like ChatGPT and Perplexity cite it when answering user queries. Unlike traditional SEO which targets blue-link rankings, AEO targets AI-generated answers that now appear before search results." This format makes it easy for AI models to extract and cite your answer.',
      },
      {
        heading: 'Schema markup and entity signals that amplify citations',
        body: 'Structured data accelerates AI citation acquisition. FAQ schema tells AI crawlers exactly which questions a page answers. HowTo schema signals step-by-step processes. Speakable schema marks the paragraphs most suitable for AI extraction. Beyond schema, entity optimisation matters significantly. Publishing author credentials, linking to authoritative sources, and ensuring your brand entity is consistent across Wikipedia, LinkedIn, and press mentions all strengthen the trust signals AI models use when deciding which sources to cite.',
      },
      {
        heading: 'How to track whether your AEO is working',
        body: 'Traditional SEO metrics do not capture AEO performance. You need to track AI citations directly. We use a combination of manual prompt testing across ChatGPT, Perplexity, Gemini, and Google AI Overviews, and tools like Profound and Otterly.ai for automated citation monitoring. Track your brand mention rate, citation frequency, and the specific pages being cited. A page earning AI citations typically shows increased branded search volume even without a corresponding change in blue-link rank.',
      },
    ],
  },
  {
    title: 'GEO strategy: How to get your brand recommended by ChatGPT and Google Gemini',
    slug: 'geo-strategy-chatgpt-gemini-brand-recommendations',
    category: 'GEO',
    readTime: '8 min read',
    date: 'May 2025',
    metaTitle: 'GEO Strategy: Get Recommended by ChatGPT & Gemini',
    metaDescription: 'Is your brand appearing when buyers ask AI tools for recommendations? Here is the four-pillar GEO framework we use to build AI brand visibility.',
    excerpt:
      'When a potential customer asks an AI tool to recommend the best product or service in your category, is your brand in the answer? Here is the authority-building framework that determines that.',
    sections: [
      {
        heading: 'The shift from search rankings to AI recommendations',
        body: 'A growing share of high-intent buyers now ask AI tools directly: "What is the best SEO agency in Bangalore?" or "Which D2C skincare brand should I try?" These recommendation queries bypass Google entirely. The brands that appear in those answers are not necessarily the ones that rank highest in traditional search. They are the ones that have built the right authority signals across the right sources. That is what GEO addresses.',
      },
      {
        heading: 'How large language models decide what to recommend',
        body: 'AI models like ChatGPT, Claude, and Gemini form their recommendations based on training data and real-time retrieval. For training-data-based recommendations, the signals that matter are: frequency of brand mentions across authoritative sources, consistent positive association between your brand and your category, and structured information about what your brand does. For retrieval-based recommendations (where the AI searches before answering), the signals are closer to AEO: structured content, citation-worthy pages, and strong domain authority.',
      },
      {
        heading: 'The four pillars of a GEO strategy',
        body: 'First, brand entity establishment: ensure your brand is described consistently across your website, LinkedIn, Crunchbase, press mentions, and any industry directories. Second, topical authority: publish in-depth content on your core category so AI models associate your brand with expertise in that area. Third, citation acquisition from AI-cited sources: identify which domains and publications AI platforms already cite for your category and earn mentions or backlinks from those sources. Fourth, review and case study visibility: real-world proof in formats AI models can easily retrieve and summarise.',
      },
      {
        heading: 'The content types that drive AI brand recommendations',
        body: 'Comparison content consistently performs well in GEO. Pages titled "Best [category] in [city]" or "[Brand A] vs [Brand B]" that objectively assess options earn citations when users ask recommendation queries. Expert opinion pieces, original research with proprietary data, and detailed case studies with specific numbers also earn strong GEO visibility. Generic blog posts without specific claims or original insights rarely appear in AI recommendations regardless of their SEO performance.',
      },
      {
        heading: 'Measuring GEO visibility over time',
        body: 'GEO measurement is still evolving but there are practical approaches. Run a monthly brand visibility audit: ask the same 20 recommendation queries across ChatGPT, Gemini, and Perplexity and track whether your brand appears. Monitor branded search volume in Google Search Console as a proxy for AI-driven discovery. Track referral traffic from Perplexity directly in your analytics. Over time, brands with strong GEO strategies see branded search grow independently of paid media investment.',
      },
    ],
  },
  {
    title: 'Why your Meta CPL spiked after iOS and the server-side fix that actually works',
    slug: 'meta-cpl-ios-server-side-conversions-api',
    category: 'Paid Media',
    readTime: '6 min read',
    date: 'April 2025',
    metaTitle: 'Meta CPL Spike After iOS? Server-Side API Fix',
    metaDescription: 'Meta pixel undercounts conversions post-iOS 14. Learn how server-side Conversions API restores attribution accuracy and cuts your cost per lead.',
    excerpt:
      'Server-side Conversions API is not a nice-to-have anymore. Most agencies are still getting it wrong. Here is a practical guide to the migration that actually restores attribution accuracy.',
    sections: [
      {
        heading: 'What actually broke after iOS 14',
        body: 'Apple\'s App Tracking Transparency framework, launched in April 2021, required apps to ask users for permission before tracking. Most users said no. This broke the Meta pixel\'s ability to track conversions from iOS devices, which typically account for 40 to 60 percent of mobile traffic for most Indian D2C brands. Meta\'s attribution window shrank from 28 days to 7 days. Reported ROAS dropped. CPL appeared to spike. In most cases the ads were not actually performing worse, but the data was severely undercounting what was being attributed to Meta.',
      },
      {
        heading: 'Why the browser pixel alone is no longer sufficient',
        body: 'The Meta browser pixel fires from the user\'s device and relies on third-party cookies to match events to ad impressions. Post-iOS, this matching fails on a large portion of traffic. The result is that Meta\'s algorithm receives incomplete conversion data, which degrades its ability to optimise campaigns for the right users. The algorithm is only as smart as the data it receives. Degraded signals mean the algorithm optimises toward the users it can see, not the users most likely to convert.',
      },
      {
        heading: 'What server-side Conversions API actually does',
        body: 'Conversions API (CAPI) sends conversion events directly from your server to Meta\'s servers, bypassing the browser entirely. It does not rely on cookies or device-level tracking. When a purchase happens on your site, your server fires the event to Meta with the order details, customer email (hashed), and event parameters. Meta matches this against its user data on its side. This restores a significant portion of the attribution that the pixel alone was missing, giving Meta\'s algorithm better signals to optimise on.',
      },
      {
        heading: 'The correct implementation: deduplication is critical',
        body: 'The most common mistake we see when auditing accounts is running both the browser pixel and CAPI without proper deduplication. This results in the same conversion event being reported twice, which inflates reported ROAS and causes over-bidding. Proper deduplication requires passing a unique event ID from both the pixel and the CAPI event for the same conversion. Meta matches on the event ID and counts it only once. Without this, you are solving one problem (undercounting) and creating another (double counting).',
      },
      {
        heading: 'What to expect after a proper CAPI implementation',
        body: 'After a correctly implemented server-side CAPI migration with deduplication, most of our clients see reported conversions increase by 25 to 40 percent within the first two weeks. This does not mean more sales happened. It means Meta is now seeing conversions it was previously missing. The algorithm then has better data to optimise campaigns, which typically leads to gradual ROAS improvement over the following 4 to 8 weeks as the campaign learning phase resets with the improved signals.',
      },
    ],
  },
  {
    title: 'Technical SEO Audit in 2025: 8 Fixes That Drove 260% Organic Traffic Growth',
    slug: 'technical-seo-audit-organic-traffic-growth-2025',
    category: 'SEO',
    readTime: '9 min read',
    date: 'June 2025',
    metaTitle: 'Technical SEO Audit 2025: 8 Fixes for More Traffic',
    metaDescription: '8 technical SEO fixes that drove 260% organic traffic growth for our clients. Core Web Vitals, crawl budget, schema markup and more, with real results.',
    excerpt:
      'Most brands publish content, build links, and still wonder why their organic traffic is flat. The answer is almost always a technical SEO problem. Here are the eight issues we fix in every client audit, and what they did to rankings.',
    sections: [
      {
        heading: 'Why publishing more content is not fixing your rankings',
        body: 'A common mistake we see from brands who invest in content marketing is assuming that more content equals more traffic. It does not. If your site has technical SEO problems, new content compounds the issue rather than solving it. Googlebot may not be crawling your pages efficiently, your Core Web Vitals may be signalling a poor user experience, or your internal structure may be diluting authority across hundreds of thin pages. In every one of our 260 percent organic traffic growth engagements, the breakthrough came from fixing the technical foundation first, before adding a single new article.',
      },
      {
        heading: 'Fix 1: Core Web Vitals, the ranking factor most brands fail',
        body: 'Google confirmed Core Web Vitals as a ranking signal in 2021 and has steadily increased their weight since. Largest Contentful Paint (LCP) measures how fast your main content loads. Interaction to Next Paint (INP) measures how quickly your page responds to user input. Cumulative Layout Shift (CLS) measures visual stability. The benchmark for each is LCP under 2.5 seconds, INP under 200 milliseconds, and CLS under 0.1. Across the audits we have run on Indian D2C and SaaS sites, over 70 percent failed at least one of these benchmarks, most commonly LCP due to uncompressed hero images and render-blocking scripts.',
      },
      {
        heading: 'Fix 2: Crawl budget waste and why Google skips your best pages',
        body: 'Search engines have a finite crawl budget per site, meaning Googlebot will not crawl every URL on your domain at every visit. If your site generates thousands of URL variants through filters, session parameters, or paginated category pages without proper canonicalisation, Googlebot wastes its budget on low-value URLs and never reaches your money pages. The fix involves combining canonical tags, robots.txt disallow rules, and URL parameter handling in Google Search Console. One client reduced crawlable URLs by 62 percent and saw their core product pages indexed and ranked within three weeks.',
      },
      {
        heading: 'Fix 3: Internal linking architecture that builds ranking authority',
        body: 'PageRank, the original Google algorithm, still works. Authority flows through internal links from high-authority pages to the pages you want to rank. Most sites get this backwards: their homepage and category pages have strong external backlinks but no internal links pointing to their most commercially important content. A proper internal linking audit identifies orphaned pages (pages with zero internal links pointing to them), pages with strong authority that are not passing it forward, and opportunities to create logical content clusters. For one EdTech client, adding 80 internal links from existing high-traffic blog posts to their course landing pages produced a 38 percent increase in landing page impressions within six weeks.',
      },
      {
        heading: 'Fix 4: Index bloat and the pages that are diluting your rankings',
        body: 'Google assesses your overall domain quality partly based on the quality of every indexed page. If your site has hundreds of thin, duplicate, or low-value pages indexed, it pulls down the perceived quality of your entire domain. Common sources of index bloat include tag and category archive pages, author pages, search result pages that accidentally get indexed, old blog posts that were never updated, and product pages for out-of-stock inventory. The fix is a systematic indexation audit: for every indexed URL, determine whether it should be indexed, canonicalised to another page, or blocked. We typically reduce indexable page counts by 30 to 50 percent during a first audit, which consistently improves domain-level ranking performance.',
      },
      {
        heading: 'Fix 5: Schema markup for featured snippets and AI Overviews',
        body: 'Structured data in the form of JSON-LD schema is one of the highest-ROI technical SEO investments available in 2025. FAQ schema on your key landing pages increases the chance of earning a featured snippet. HowTo schema on process-oriented content gets surfaced in rich results. Product schema on ecommerce pages enables Google Shopping eligibility. Article schema on blog posts signals publishedDate and author credibility. Beyond traditional rich results, schema markup now directly influences which pages Google cites in AI Overviews, since structured data helps Googlebot understand exactly what questions a page answers. Every client we work with gets full schema implementation as part of the technical audit.',
      },
      {
        heading: 'Fix 6: Broken redirect chains that silently kill link authority',
        body: 'When a page is permanently moved, a 301 redirect passes approximately 99 percent of the original page authority to the new URL. But a redirect chain, where URL A redirects to URL B which redirects to URL C, passes progressively less authority at each hop. A three-step redirect chain can lose up to 15 percent of the original link equity. Worse, chains that include a 302 (temporary) redirect pass almost no authority at all. We regularly audit sites that have accumulated redirect chains of four or five hops from years of domain migrations, URL restructuring, and CMS changes. Cleaning these into direct 301 redirects is a low-effort, high-impact fix that recovers authority that was previously leaking.',
      },
      {
        heading: 'Fix 7: Page title and meta description optimisation for click-through rate',
        body: 'Ranking on page one is only half the battle. If your title tag does not match the search intent or your meta description does not give the user a reason to click, you lose traffic to lower-ranked competitors with more compelling copy. Google uses click-through rate as a ranking signal, meaning poor CTR from page one can cause a ranking drop over time. Effective title tags lead with the primary keyword, include a specific proof point or benefit (a number, a time frame, an outcome), and stay under 60 characters. Meta descriptions should be 140 to 155 characters, answer the implicit user question, and end with a soft call to action. Rewriting title tags alone increased organic clicks by 22 percent for one client without any change in ranking position.',
      },
      {
        heading: 'How to prioritise these fixes: the three-tier framework',
        body: 'Not all technical SEO fixes deliver the same return in the same timeframe. We categorise every fix into three tiers. Tier one is quick wins: fixes that take under two hours and show results within two to four weeks. These include title tag rewrites, adding missing schema markup, and fixing broken redirects. Tier two is medium effort: fixes that take days and show results within four to eight weeks. These include internal linking restructuring, crawl budget optimisation, and index bloat cleanup. Tier three is structural: fixes that require development work and show results in eight to sixteen weeks. These include Core Web Vitals improvements, site architecture changes, and JavaScript rendering issues. A well-run technical SEO audit sequences these tiers so the quick wins fund stakeholder confidence while the structural work delivers compounding long-term returns.',
      },
    ],
  },

  // ── Blog 5 ──────────────────────────────────────────────────────────────
  {
    title: 'Google Performance Max in 2025: What Is Actually Working for Indian Brands',
    slug: 'google-performance-max-india-2025',
    category: 'Paid Media',
    readTime: '8 min read',
    date: 'June 2025',
    metaTitle: 'Google Performance Max 2025: What Works in India',
    metaDescription: 'Performance Max is powerful but misunderstood. Here is what signal inputs, asset quality, and budget allocation actually determine results for Indian brands.',
    excerpt: 'Performance Max campaigns give Google almost full control over where and how your ads show. Most Indian brands are either ignoring it or running it wrong. Here is what the data from our accounts actually shows.',
    sections: [
      {
        heading: 'Why Performance Max is not just "Smart Shopping 2.0"',
        body: 'When Google launched Performance Max in 2022, most advertisers treated it as an upgraded Smart Shopping campaign. It is not. PMax runs across Search, Display, YouTube, Gmail, Maps, and Discover simultaneously from a single campaign. The algorithm decides placements, bidding, and audience targeting based on the asset groups and conversion signals you provide. The quality of what you feed the campaign determines almost everything. Poor creative assets and weak conversion tracking produce poor results regardless of budget, which is why many Indian brands have written off PMax after one bad test.',
      },
      {
        heading: 'The asset group structure that consistently outperforms',
        body: 'Most agencies create one asset group per PMax campaign and throw in everything they have. We structure asset groups by audience intent instead. One asset group for cold audiences (broad interest targeting with awareness-focused creative), one for warm audiences (remarketing signals with comparison or proof-based creative), and one for high-intent bottom-of-funnel (existing customer lists excluded, strong CTA creative). This separation gives the algorithm distinct signals for each funnel stage and prevents low-intent display clicks from burning budget that should be going to high-intent search placements.',
      },
      {
        heading: 'Conversion signals: the input that most Indian advertisers get wrong',
        body: 'PMax is only as smart as the conversion data you feed it. If you are optimising for form fills that include tyre-kickers and spam leads, the algorithm will find more tyre-kickers. We always push higher-quality conversion events to Google: qualified leads marked after a sales team review, purchase events with revenue values, and free trial activations that historically convert to paid. For one SaaS client in Bangalore, switching the optimisation goal from "lead form submitted" to "trial activated" reduced cost per acquisition by 34 percent in six weeks while the total lead volume dropped by only 18 percent.',
      },
      {
        heading: 'Brand vs non-brand: the bidding conflict no one talks about',
        body: 'Performance Max will bid on your branded keywords. If you are also running a separate brand campaign, PMax and your brand campaign compete in the same auction, which inflates CPCs for your own brand terms. The fix is to add your brand terms as campaign-level negative keywords in PMax so branded traffic is captured exclusively by your dedicated brand campaign at a lower bid. Google does not make this easy, and the interface for adding campaign-level negatives in PMax has changed multiple times. As of mid-2025, you need to request brand exclusions through your Google rep or via the campaign settings under "Brand exclusions".',
      },
      {
        heading: 'Search Themes: the control lever most advertisers are not using',
        body: 'Google added Search Themes to PMax in 2023 as a way for advertisers to guide the algorithm toward specific search queries. Think of them as broad match keywords without bids. You can add up to 25 search themes per asset group. We use them to steer PMax toward high-intent, high-revenue query patterns we have validated in regular Search campaigns first. For example, if "SEO agency Bangalore for D2C brands" converts at a much lower CPA in Search than "digital marketing company India", we add the specific phrase as a search theme to bias PMax toward that intent. This alone improved conversion quality significantly for two of our Google Ads clients.',
      },
      {
        heading: 'When to use PMax and when to use standard campaigns instead',
        body: 'PMax is not the right choice for every situation. It works best when you have significant conversion volume (at least 30 to 50 conversions per month), clean conversion tracking with revenue data, and sufficient creative assets across formats. For new accounts with limited data, standard Search campaigns build a cleaner conversion history first. For brand awareness goals, standard Display or YouTube campaigns give more placement control. For highly specific B2B queries with small audiences, exact match Search campaigns outperform PMax because the algorithm does not have enough signal to operate efficiently at low search volumes.',
      },
    ],
  },

  // ── Blog 6 ──────────────────────────────────────────────────────────────
  {
    title: 'WhatsApp Marketing for D2C Brands in India: The Channel Most Are Under-Using',
    slug: 'whatsapp-marketing-d2c-brands-india',
    category: 'Paid Media',
    readTime: '7 min read',
    date: 'June 2025',
    metaTitle: 'WhatsApp Marketing for D2C India: Full Strategy Guide',
    metaDescription: 'WhatsApp has 500M+ Indian users. Here is how D2C brands are using WhatsApp Business API for retargeting, abandoned cart recovery, and post-purchase LTV.',
    excerpt: 'India has over 500 million WhatsApp users and open rates above 90 percent. Most D2C brands are not using it strategically. Here is what the top performers are doing differently.',
    sections: [
      {
        heading: 'Why WhatsApp outperforms email for Indian D2C audiences',
        body: 'Email open rates for Indian D2C brands average 18 to 22 percent on a good day. WhatsApp messages average over 90 percent open rates and are typically read within three minutes of delivery. For a country where a significant portion of online shoppers still primarily use mobile and communicate almost entirely through WhatsApp, treating it as a secondary channel after email is a structural mistake. The brands scaling fastest in Indian D2C, from skincare to edtech to furniture, have built WhatsApp as their primary retention and re-engagement channel.',
      },
      {
        heading: 'WhatsApp Business API vs the regular Business app: what you actually need',
        body: 'The free WhatsApp Business app works for very small operations but has hard limits: one device, no automation, no bulk messaging, and no integration with your CRM or ecommerce platform. WhatsApp Business API (now accessed through Meta\'s Cloud API or approved Business Solution Providers like Interakt, Gupshup, or Wati) unlocks automated flows, multi-agent support, broadcast messaging to opted-in users, and deep integration with Shopify, WooCommerce, or your custom stack. The monthly cost for a mid-scale D2C brand running 10,000 to 50,000 conversations typically falls between 8,000 and 25,000 rupees depending on conversation volume and the BSP you choose.',
      },
      {
        heading: 'The four flows that generate measurable revenue',
        body: 'Based on our work with Indian D2C clients, four WhatsApp flows consistently produce positive ROI. First, abandoned cart recovery: a three-message sequence sent at one hour, six hours, and 24 hours after cart abandonment, with the third message including a time-limited offer. Second, post-purchase onboarding: a flow that delivers order confirmation, shipping updates, and product usage tips that reduces return rates and builds brand loyalty. Third, reorder reminders for consumable products: triggered 15 to 20 days after the expected product finish date with a personalised restock link. Fourth, win-back campaigns for lapsed customers: sent to buyers who have not purchased in 60 to 90 days with a category-specific incentive.',
      },
      {
        heading: 'Opt-in strategy: building a list that actually converts',
        body: 'WhatsApp marketing is permission-based. You cannot message users who have not explicitly opted in. The opt-in moment is critical and often underestimated. High-performing opt-in placements we have tested include: the checkout page ("Get order updates and exclusive offers on WhatsApp"), the post-purchase thank-you page, the product detail page for high-consideration purchases, and Meta lead form ads with WhatsApp opt-in as the CTA. Avoid generic opt-in prompts like "Subscribe for updates." Specific value propositions like "Get restocking alerts for sold-out sizes" or "Receive exclusive subscriber-only pricing" convert 3 to 5 times better.',
      },
      {
        heading: 'Measuring WhatsApp marketing ROI properly',
        body: 'The most common mistake with WhatsApp attribution is last-click. A customer who received a WhatsApp reorder reminder and then searched your brand name on Google before purchasing will show as an organic or paid search conversion in most analytics setups. To measure WhatsApp accurately, use UTM parameters on all WhatsApp links and track them in GA4, set up revenue attribution in your BSP dashboard against sent messages, and run periodic holdout tests where a percentage of your WhatsApp list does not receive a campaign so you can measure true incremental revenue. One of our D2C clients found that WhatsApp-attributed revenue was 34 percent higher when measured with holdout testing versus standard last-click attribution.',
      },
    ],
  },

  // ── Blog 7 ──────────────────────────────────────────────────────────────
  {
    title: 'First-Party Data Strategy for Indian Ecommerce Brands: How to Prepare for a Cookie-Free World',
    slug: 'first-party-data-strategy-india-ecommerce',
    category: 'SEO',
    readTime: '8 min read',
    date: 'May 2025',
    metaTitle: 'First-Party Data Strategy for Indian Ecommerce 2025',
    metaDescription: 'Third-party cookies are fading. Indian ecommerce brands need a first-party data strategy now. Here is how to collect, activate, and protect it compliantly.',
    excerpt: 'Third-party cookies are being phased out and iOS tracking restrictions are permanent. Indian ecommerce brands that have not built a first-party data strategy are making every paid media decision on incomplete information.',
    sections: [
      {
        heading: 'What first-party data actually means and why it matters now',
        body: 'First-party data is information your customers give you directly: email addresses, phone numbers, purchase history, on-site behaviour, survey responses, and quiz completions. It lives in your systems and you own it entirely. Third-party data, by contrast, is collected by external platforms and shared with advertisers through cookies and tracking pixels. With Apple blocking cross-app tracking, Google progressively restricting third-party cookies, and India\'s Digital Personal Data Protection Act (DPDP Act, 2023) introducing consent requirements, the advertising infrastructure that most Indian brands built their growth on is systematically degrading. First-party data is the only durable alternative.',
      },
      {
        heading: 'Building your data collection infrastructure: the practical setup',
        body: 'A functional first-party data stack for an Indian ecommerce brand needs four components. First, a Customer Data Platform (CDP) or at minimum a CRM that unifies customer data across touchpoints. Clevertap, MoEngage, and WebEngage are popular choices for Indian D2C brands at the mid-market level. Second, server-side event tracking that sends conversion data directly from your servers to Meta, Google, and other ad platforms without relying on browser-based pixels. Third, zero-party data collection mechanisms like post-purchase surveys, quizzes, and preference centres that capture declared intent. Fourth, identity resolution that ties together a customer\'s email, phone, device IDs, and on-site behaviour into a unified profile.',
      },
      {
        heading: 'DPDP Act compliance: what Indian brands need to know before they collect',
        body: 'India\'s Digital Personal Data Protection Act came into force in 2023 and imposes strict requirements on how personal data is collected, stored, and used. Key obligations include obtaining explicit, informed consent before collecting personal data, providing a clear privacy notice explaining how data will be used, giving users the right to withdraw consent and request data deletion, and notifying users in the event of a data breach. For marketing purposes, this means your opt-in flows need an affirmative action (not pre-ticked boxes), your privacy policy must explain data use in plain language, and you need a mechanism to honour deletion requests. Brands that collect data without proper consent architecture are taking on regulatory risk that will increase as enforcement ramps up.',
      },
      {
        heading: 'Activating first-party data in your paid media campaigns',
        body: 'Collecting data is only half the value. Activation is where the ROI comes from. Customer email and phone lists uploaded to Meta Custom Audiences and Google Customer Match allow you to target existing customers directly, suppressing them from acquisition campaigns to reduce wasted spend. Lookalike audiences built from high-value customer segments (customers who purchased twice or more, customers above a certain order value) consistently outperform interest-based targeting once the seed audience reaches 1,000 or more users. First-party purchase history fed back into Google Ads via enhanced conversions with revenue values gives the Smart Bidding algorithm the signals it needs to find more high-LTV customers rather than optimising purely for conversion volume.',
      },
      {
        heading: 'The compounding advantage: why first-party data improves over time',
        body: 'Unlike third-party data that you buy or rent, first-party data compounds. Each transaction, interaction, and consent event makes your dataset richer and your models more accurate. Brands that invested in first-party data infrastructure in 2022 and 2023 are now seeing measurably lower customer acquisition costs than competitors still reliant on platform-level targeting. Their suppression lists reduce wasted retargeting spend. Their lookalikes convert at higher rates. Their personalised email and WhatsApp flows generate revenue that does not show up in any ad platform. Building this infrastructure is a three to six month project, but the competitive moat it creates lasts years.',
      },
    ],
  },

  // ── Blog 8 ──────────────────────────────────────────────────────────────
  {
    title: 'LinkedIn Ads for B2B SaaS in India: The Setup That Actually Generates Qualified Leads',
    slug: 'linkedin-ads-b2b-saas-india-lead-generation',
    category: 'Paid Media',
    readTime: '7 min read',
    date: 'May 2025',
    metaTitle: 'LinkedIn Ads for B2B SaaS India: Lead Gen Guide',
    metaDescription: 'LinkedIn Ads cost more in India but convert better for B2B SaaS. Here is the exact campaign structure, targeting, and creative approach that lowers CPL.',
    excerpt: 'LinkedIn Ads have a reputation for being expensive in India. The brands saying that are usually running them wrong. Here is the campaign structure and targeting approach that brings CPL down to a number that makes sense for B2B SaaS.',
    sections: [
      {
        heading: 'Why LinkedIn Ads cost more but often deliver better ROI for SaaS',
        body: 'LinkedIn CPCs in India typically run between 200 and 800 rupees depending on audience seniority and industry. That sounds expensive compared to Meta at 20 to 80 rupees per click. But the comparison breaks down when you look at lead quality. A LinkedIn lead from a verified Senior Manager at a Series B SaaS company is worth categorically more than a Meta lead from someone who clicked out of curiosity. For B2B SaaS products with deal values above 50,000 rupees annually, a LinkedIn CPL of 3,000 to 8,000 rupees is often more profitable than a Meta CPL of 800 rupees if the LinkedIn lead converts to a paid customer at 5 to 10 times the rate.',
      },
      {
        heading: 'Audience targeting: job function over job title',
        body: 'The most common LinkedIn targeting mistake is over-reliance on job titles. Job titles vary wildly across Indian companies: the person making software purchasing decisions at a 500-person company might be a "Technology Head", "CTO", "VP Engineering", or "IT Manager" depending on company culture and naming conventions. Job Function targeting (Engineering, IT, Finance, Operations) combined with Seniority level (Senior, Manager, Director, VP, C-Suite) reaches the right people regardless of what their title says. Layer this with company size (50 to 500 employees for mid-market SaaS, 500 to 5000 for enterprise) and industry filters to narrow to your ideal customer profile.',
      },
      {
        heading: 'The three-stage funnel that LinkedIn rewards',
        body: 'Running lead gen forms cold to a completely unaware audience wastes budget. We structure LinkedIn campaigns in three stages. At the top of the funnel, Thought Leadership ads (single image or document ads with genuinely useful content, no product pitch) build awareness and generate profile visits and engagement. In the middle, retargeting audiences who engaged with the top-of-funnel content with a case study or social proof ad. At the bottom, Lead Gen Forms retargeting those who engaged with the case study. This three-stage approach typically reduces CPL by 30 to 45 percent compared to running Lead Gen Forms cold, because each subsequent stage audience has already demonstrated category interest.',
      },
      {
        heading: 'Thought Leadership ads: the format that earns trust before asking for anything',
        body: 'LinkedIn\'s Thought Leadership ad format, which lets you sponsor individual posts from your company page or an employee\'s personal profile, consistently outperforms standard sponsored content for B2B SaaS in India. A post from the CEO or CTO with a genuine observation about an industry problem reaches the same audience as a company ad but feels like peer-to-peer communication rather than advertising. The engagement rates on Thought Leadership ads typically run 2 to 4 times higher than equivalent company page posts, and the social proof of likes and comments from other senior professionals builds credibility with each impression. We recommend publishing three to five organic thought leadership posts per week from your founder or key executives before activating paid amplification.',
      },
      {
        heading: 'Measuring LinkedIn Ads correctly: offline conversion tracking',
        body: 'Most LinkedIn advertisers measure CPL and stop there. For SaaS, CPL is a vanity metric unless you track through to pipeline and revenue. LinkedIn\'s Offline Conversions feature lets you upload a CSV of CRM events (qualified opportunity created, demo completed, contract signed) matched against LinkedIn campaign data by email address. This closes the attribution loop and reveals which campaigns and creatives are actually generating pipeline, not just leads. In our experience running LinkedIn campaigns for Indian SaaS clients, the campaign that generates the lowest CPL is almost never the one that generates the lowest cost per qualified opportunity. Optimising for CPL without offline conversion data leads to volume over quality every time.',
      },
    ],
  },

  // ── Blog 9 ──────────────────────────────────────────────────────────────
  {
    title: 'Google AI Overviews and SEO in India: How to Protect and Grow Your Organic Traffic in 2025',
    slug: 'google-ai-overviews-seo-india-organic-traffic-2025',
    category: 'SEO',
    readTime: '8 min read',
    date: 'June 2025',
    metaTitle: 'Google AI Overviews & SEO India 2025: Traffic Guide',
    metaDescription: 'Google AI Overviews are reshaping organic traffic in India. Learn which query types are affected, which are safe, and how to get cited instead of replaced.',
    excerpt: 'Google AI Overviews have reached India and they are changing which pages get traffic and which get skipped entirely. Here is what we are seeing in our client accounts and how to respond.',
    sections: [
      {
        heading: 'What Google AI Overviews are doing to organic click-through rates',
        body: 'Since Google rolled out AI Overviews in India in 2024, we have tracked their impact across client accounts in multiple categories. The pattern is consistent: informational queries that previously drove significant organic traffic to blog posts and guide pages are now generating AI Overview responses that answer the question without the user needing to click. In categories like healthcare, finance, and technology how-to queries, organic CTR on positions 1 to 3 has dropped by 15 to 30 percent year-over-year for queries that trigger an AI Overview. This does not mean SEO is dead. It means the type of content worth investing in has shifted significantly.',
      },
      {
        heading: 'Which query types are losing traffic and which are gaining',
        body: 'Not all queries are equally affected. Informational queries with a single clear answer ("What is the GST rate on software subscriptions?") are heavily cannabilised by AI Overviews. How-to queries ("How to set up a Shopify store in India") are frequently answered in-Overview with no click needed. But commercial investigation queries ("best CRM for Indian SMEs", "Shopify vs WooCommerce India 2025"), navigational queries (branded searches), and transactional queries ("buy noise cancelling headphones under 3000") trigger AI Overviews far less frequently. Local queries ("SEO agency in Koramangala") almost never show an AI Overview. Mapping your keyword portfolio against these intent categories reveals where your traffic risk actually sits.',
      },
      {
        heading: 'Getting cited in AI Overviews: the content signals that work',
        body: 'Being cited in an AI Overview generates a different kind of traffic than a blue-link click, but the citation itself is a strong brand trust signal and does drive some direct visits. Pages that earn AI Overview citations consistently share these characteristics: they answer a specific question in the first two to three sentences of a section without burying the answer in preamble, they use clear H2 and H3 headings that mirror how users phrase the question, they include supporting data or examples that the AI can pull directly, and they have sufficient domain authority from backlinks and brand signals to be considered a trustworthy source. Adding FAQ sections to your existing high-ranking pages is one of the fastest paths to earning citations.',
      },
      {
        heading: 'Shifting your content strategy from traffic volume to traffic intent',
        body: 'The correct response to AI Overviews is not to write less content. It is to write content that serves queries AI Overviews do not fully satisfy. Deep comparison content ("Razorpay vs Cashfree for Indian SaaS: a detailed breakdown") earns clicks because the user wants a perspective, not just facts. Original research and proprietary data cannot be synthesised from existing sources, so it survives AI abstraction. Highly specific, localised content ("how to run Meta ads for a Tier 2 city D2C brand in India") serves a niche the AI cannot adequately address from generic sources. Long-form case studies with real numbers drive bottom-of-funnel traffic that converts, even as top-of-funnel informational content bleeds clicks to AI answers.',
      },
      {
        heading: 'The technical setup that maximises AI Overview citation potential',
        body: 'Beyond content strategy, several technical implementations increase citation probability. FAQ schema markup using structured JSON-LD signals to Googlebot exactly which questions your page answers and what the answer is. Speakable schema marks specific passages as suitable for AI extraction. A clear site architecture where your most authoritative pages pass link equity to your content hub pages strengthens domain-level trust signals that influence which sources Google chooses to cite. Keep your page load speed fast: Google\'s AI Overview citations are observed to favour pages that load in under 2.5 seconds on mobile, consistent with Core Web Vitals standards. Finally, ensure your page is crawled and indexed frequently by updating your sitemap and linking to important content from your homepage.',
      },
    ],
  },
];

export const awards: string[] = [
  'Google Partner Certified',
  'Meta Business Partner',
  'SEMrush Certified Agency',
  'HubSpot Marketing Certified',
];
