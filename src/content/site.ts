// Approved copy — source of truth per the Portfolio PRD. Do not paraphrase.

export const meta = {
  name: 'Nitish Kumar',
  role: 'Senior UI/UX & Product Designer',
  years: '8.5+ Years',
};

export const hero = {
  headline: 'I DESIGN COMPLEX PRODUCTS TO FEEL SIMPLE.',
  role: 'Senior UI/UX & Product Designer · 8.5+ Years',
  description:
    'I design digital products across Web3, FinTech, HealthTech, SaaS, and emerging technology, turning complex requirements and workflows into clear, intuitive experiences.',
  capabilities: 'Product Design · UX · UI · Design Systems · AI-Assisted Design',
};

export const intro = {
  heading: 'DESIGNING BEYOND THE INTERFACE.',
  description:
    'I work across the product journey, from requirements, user flows and information architecture to UI, design systems, prototyping and developer collaboration.',
  statement: 'Understand the complexity. Structure the experience. Make it easier to use.',
};

export const expertise = [
  {
    title: 'Product Design',
    tags: 'Strategy · MVP Thinking · Product Decisions',
  },
  {
    title: 'UX',
    tags: 'Architecture · User Flows · Information Architecture · User Journeys',
  },
  {
    title: 'UI',
    tags: 'Visual Systems · Responsive Design · Interaction · Motion',
  },
  {
    title: 'Design Systems',
    tags: 'Components · Patterns · Consistency · Developer Handoff',
  },
  {
    title: 'Complex Products',
    tags: 'Dashboards · Business Platforms · Web & Mobile Products',
  },
  {
    title: 'Industries',
    tags: 'Web3 · Blockchain · RWA · FinTech · HealthTech · SaaS',
  },
];

export interface Project {
  index: string;
  slug: string;
  name: string;
  subtitle: string;
  tags: string;
  description: string;
  cover: string;
}

export const projects: Project[] = [
  {
    index: '01',
    slug: 'healthaera',
    name: 'Healthaera',
    subtitle: 'AI-Powered Healthcare Ecosystem',
    tags: 'HealthTech · Product Design · UX · AI',
    description:
      'Connected healthcare experience across personal health information, planning, family care, community and AI-assisted support.',
    cover: 'project-healthaera.jpg',
  },
  {
    index: '02',
    slug: 'blocknexus',
    name: 'BlockNexus',
    subtitle: 'Crypto Card & Payments',
    tags: 'FinTech · Web3 · Product Design',
    description:
      'Wallets, crypto balances, fiat on-ramp, card spending and transaction journeys.',
    cover: 'project-blocknexus.jpg',
  },
  {
    index: '03',
    slug: 'rwa',
    name: 'RWA',
    subtitle: 'Real-World Asset Tokenization',
    tags: 'Web3 · RWA · Product Strategy · UX',
    description:
      'Clearer experiences for asset-backed products, investment journeys and tokenization workflows.',
    cover: 'project-rwa.jpg',
  },
  {
    index: '04',
    slug: 'gem-pocket',
    name: 'Gem Pocket',
    subtitle: 'Multi-Chain Crypto Wallet',
    tags: 'Web3 · Blockchain · Wallet UX',
    description:
      'Non-custodial wallet experience for managing multiple blockchain addresses through a single identity.',
    cover: 'project-gempocket.jpg',
  },
];

export const experienceYears = '8.5+ YEARS';

export const experienceProgression = [
  'Graphic Design',
  'UI/UX',
  'Product Design',
  'Complex Products',
  'AI-Assisted Design',
];

export const experience = [
  {
    period: '2022–Present',
    company: 'Antier Solutions',
    role: 'Senior UI/UX & Product Designer',
    tags: 'Web3 · FinTech · SaaS · RWA · HealthTech',
    detail: '100+ projects · Product Design · UX · Design Systems · Collaboration',
  },
  {
    period: '2021–2022',
    company: 'RV Technologies',
    role: 'UI/UX Designer',
    tags: '',
    detail: '',
  },
  {
    period: '2018–2021',
    company: 'Qodemaker',
    role: 'Graphics & UI/UX Designer',
    tags: '',
    detail: '',
  },
  {
    period: '2016–2017',
    company: 'Fast Linux Service',
    role: 'Graphic Designer',
    tags: '',
    detail: '',
  },
];

export const aiDesign = {
  heading: 'DESIGN × AI',
  statement: 'Faster exploration. Smarter workflows. Human-led decisions.',
  description:
    'I use AI-assisted workflows to accelerate exploration, synthesis, documentation, prototyping and visual experimentation, while keeping product thinking, UX judgment and final design decisions human-led.',
  workflow: [
    { stage: 'THINK', detail: 'Requirements · Research · Problem Exploration' },
    { stage: 'EXPLORE', detail: 'Concepts · UX Directions · UI Exploration' },
    { stage: 'BUILD', detail: 'Prototype · Design · Documentation · Design-to-Code' },
    { stage: 'REFINE', detail: 'Iteration · Validation · Communication' },
  ],
  tools: 'Claude · Stitch · Cursor · Higgsfield · Notion · Fable 5.1 · GPT Astra 6',
};

export const process = {
  heading: 'FROM PROBLEM TO PRODUCT',
  steps: [
    { index: '01', title: 'DISCOVER', detail: 'Requirements · Context · Users' },
    { index: '02', title: 'STRUCTURE', detail: 'Flows · IA · Product Logic' },
    { index: '03', title: 'EXPLORE', detail: 'Wireframes · Concepts · AI-assisted exploration' },
    { index: '04', title: 'DESIGN', detail: 'UI · Systems · Prototypes' },
    { index: '05', title: 'SHIP', detail: 'Handoff · Collaboration · Iteration' },
  ],
};

export const philosophy = {
  headline: 'COMPLEXITY IS NOT THE PROBLEM. CONFUSION IS.',
  statement: 'Good product design makes complex technology easier to understand, use and trust.',
};

export const industries =
  'Web3 · Blockchain · RWA · FinTech · HealthTech · SaaS · Consumer Products · Mobile · Web';

export const about = {
  heading: 'ABOUT',
  body: "I'm a Product Designer with 8.5+ years of experience designing digital products across different industries and levels of complexity. I started in graphic design and gradually moved into UI/UX and product design, building experience across mobile applications, websites, dashboards and complex digital platforms. Today, I combine UX thinking, visual design, systems thinking and AI-assisted workflows to create products that are practical, scalable and easier to use.",
};

export const finalCta = {
  headline: 'HAVE A COMPLEX PRODUCT WORTH SOLVING?',
  subheadline: "LET'S MAKE IT SIMPLE.",
  action: 'Start a conversation',
  links: {
    linkedin: 'https://www.linkedin.com/in/nitish-kumar',
    email: 'mailto:hello@nitishkumar.design',
    resume: '/resume.pdf',
  },
};

export const footer = {
  name: 'NITISH KUMAR',
  role: 'Senior UI/UX & Product Designer',
  tags: 'Product · UX · UI · AI',
  copyright: '© 2026 Nitish Kumar',
};
