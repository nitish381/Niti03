/**
 * Every string on the landing page, transcribed from the Figma source of truth
 * (Final Pages › LandingPage, node 105:1062). Sections read from here so copy
 * changes never require touching JSX.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface JourneyStop {
  label: string;
  value: string;
  side: 'left' | 'right';
}

export interface SignalPoint {
  label: string;
  value: string;
  position: 'top' | 'right' | 'bottom' | 'left';
}

export interface FeatureCard {
  title: string;
  body: string;
  /** Figma node of the icon this card owns. */
  iconNode: string;
}

export interface IcebergMarker {
  label: string;
  depth: 'above' | 'below';
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export const nav: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'The Journey', href: '#journey' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'The App', href: '#the-app' },
  { label: 'Philosophy', href: '#philosophy' },
];

export const brand = {
  name: 'Raahi',
  tagline: 'One story. Many lives.',
  installCta: 'Install App',
} as const;

export const hero = {
  title: 'The Map Wasn’t Always Yours',
  body: [
    'The beliefs, fears, and expectations shaping your life didn’t all begin with you.',
    'Raahi helps you see the patterns beneath them - and begin creating a path of your own.',
  ],
  cta: 'Learn More',
  waypoints: [
    { title: 'YOU ARE HERE', meta: 'STORY 01 · THE FOG' },
    { title: 'TARGET IDENTITY', meta: '100 STORIES AHEAD' },
  ],
} as const;

export const statementBand = {
  title: 'No Two People Walk Through Life With The Same Map.',
  body: 'Raahi begins by understanding what you’re facing, how you respond, where you are, and where you want to go.',
} as const;

export const signalDiagram = {
  centreLabel: 'YOU',
  points: [
    { label: 'YOUR STRUGGLE', value: 'Direction', position: 'top' },
    { label: 'YOUR GOAL', value: 'Confident Leader', position: 'right' },
    { label: 'YOUR CONTEXT', value: 'Student 21', position: 'bottom' },
    { label: 'YOUR PATTERNS', value: 'Overthinking', position: 'left' },
  ] satisfies SignalPoint[],
} as const;

export const darkBanner = {
  title: 'Before Helping You Move Forward, Raahi Understands What Moves You',
} as const;

export const library = {
  title: 'We are a self-aware reading app.',
  body: 'We’re a self-awareness engine focused on story, reflection, and building the inner discipline behind real growth.',
  slides: [
    { index: '01', title: 'The Discipline of Attention', cta: 'Explore' },
    { index: '02', title: 'The Work That Matters', cta: 'Explore' },
    { index: '03', title: 'The Ladder Within', cta: 'Explore' },
    { index: '04', title: 'Beyond First Flight', cta: 'Explore' },
    { index: '05', title: 'Code, Courage & Clarity', cta: 'Explore' },
  ],
} as const;

export const journey = {
  eyebrow: 'The Self-Awareness Engine',
  title: 'Turn Your Growth Into a Story You Live',
  stops: [
    { label: 'The Summit', value: 'Leadership', side: 'left' },
    { label: 'Identity Shift', value: 'The Forge', side: 'right' },
    { label: 'The Storm', value: 'Resistance', side: 'left' },
    { label: 'Effort', value: 'The Climb', side: 'right' },
    { label: 'Confusion', value: 'The Fog', side: 'left' },
  ] satisfies JourneyStop[],
} as const;

export const philosophy = {
  eyebrow: 'Our Philosophy',
  title: 'Redesigning the Human Operating System',
  body: [
    'Not therapy. Not another self-help app. Inner engineering with spiritual depth - a return to clarity, discipline, and personal sovereignty.',
    'We’re shifting how the next generation understands the architecture of their own thoughts - and the reality that depression is often not a disease, but a disconnection from true perception.',
    'Raahi is built around inner engineering - the practice of understanding yourself deeply enough to change how you respond to the world.',
  ],
  checks: [
    'Not Therapy. Not Another Self-Help App.',
    'Raahi begins with a different question: What if the way you think can be redesigned?',
  ],
  cta: 'Learn More',
  artCard: {
    title: 'Man Jeetai Jag Jeet.',
    translation: 'One who conquers the mind, conquers the world.',
  },
} as const;

export const features = {
  eyebrow: 'The Self-Awareness Engine',
  title: 'Turn Your Growth Into a Story You Live',
  cards: [
    {
      title: 'Adaptive Literature',
      body: 'Universal lessons translated instantly into your culture, language, and generation.',
      iconNode: '117:939',
    },
    {
      title: 'Playable Decision Points',
      body: 'Stories branch. Choose the harder path for speed, or the safer path for gradual growth.',
      iconNode: '117:958',
    },
    {
      title: 'Moments That Matter',
      body: 'The engine nudges you to act in the real world - hard conversations, breaking habits.',
      iconNode: '117:977',
    },
    {
      title: 'Reflective Calibration',
      body: 'Write or speak your thoughts post-story. Reflection reshapes the next node on your mountain.',
      iconNode: '117:996',
    },
  ] satisfies FeatureCard[],
} as const;

export const iceberg = {
  eyebrow: 'The Invisible Map',
  title: 'What You See is Only The Surface',
  body: [
    'But beneath every reaction, decision, and habit lies something deeper - beliefs, fears, expectations, and mental models that may have been shaping you long before you learned to question them.',
    'Many of these patterns were formed long before you consciously chose them. They may have come from your upbringing, environment, past experiences, or the expectations you learned to carry. Over time, they become an invisible map - quietly influencing what you believe is possible, what you fear, and which paths you choose to follow.',
    'Raahi helps you look beneath the surface. To notice the mental models shaping your journey, question the patterns that no longer serve you, and begin choosing your path with greater awareness and intention.',
  ],
  cta: 'Reserve My Seat',
  aboveHeading: 'What you see',
  belowHeading: 'What shapes you',
  markers: [
    { label: 'Your Actions', depth: 'above' },
    { label: 'Your Choices', depth: 'above' },
    { label: 'Your Results', depth: 'above' },
    { label: 'Your Habits', depth: 'above' },
    { label: 'Beliefs', depth: 'below' },
    { label: 'Fears', depth: 'below' },
    { label: 'Expectations', depth: 'below' },
    { label: 'Inherited Patterns', depth: 'below' },
    { label: 'Past Experiences', depth: 'below' },
    { label: 'Mental Models', depth: 'below' },
  ] satisfies IcebergMarker[],
} as const;

export const seminar = {
  meta: ['Monthly', 'Hybrid', 'Mohali, India'],
  title: 'Raahi isn’t only an app. It’s a room full of people writing their next chapter.',
  body: [
    'Every month, students, working professionals, entrepreneurs and authors gather - in Mohali and online - to tell the stories behind their growth, and to listen to someone else’s.',
    'Students figuring out a first career move. Professionals rewriting their next one. Entrepreneurs mid-struggle. Authors deciding what to write next. Raahi’s seminar is where all of them compare notes.',
  ],
  cta: 'Reserve My Seat',
} as const;

export const founder = {
  title: 'A Message from the Founder',
  name: 'Vikram R Singh',
  role: 'CEO @Antier',
  quote: [
    'I have built businesses and led teams. But more than outer growth, I have felt the weight of internal fragmentation around me - gifted youths inheriting invisible fear from generations above.',
    'I am walking this path first - not as a preacher, but as a man who built outside, and is now building within.',
  ],
} as const;

/**
 * NOTE: the answer bodies in Figma are Lorem ipsum placeholder text
 * (node 163:45). Flagged in the Phase 01 report; real copy is still pending, so
 * only the questions are carried over here.
 */
export const faq = {
  eyebrow: 'FAQ',
  title: 'Before There Was a Journey, There Were Questions.',
  entries: [
    { question: 'Where does it come from?', answer: '' },
    { question: 'Where can I get some?', answer: '' },
    { question: 'What is the price?', answer: '' },
    { question: 'Are there any discounts available?', answer: '' },
    { question: 'Can I return it if needed?', answer: '' },
  ] satisfies FaqEntry[],
} as const;

export const appDownload = {
  titleLead: 'Your roadmap is waiting.',
  titleMain: 'Start walking it today.',
  body: 'Tell Raahi who you are and who you’re becoming. Every day, read or listen to the next story on your path personalised to feel like it was written for you.',
} as const;

export const newsletter = {
  eyebrow: 'You don’t have to destroy the map you inherited.',
  title: 'You Just Have To Start Drawing Your Own',
  placeholder: 'Enter Email',
  cta: 'Subscribe',
} as const;

export const footer = {
  tagline: 'One story. Many lives.',
  description:
    'Every month, students, working professionals, entrepreneurs and authors gather in Mohali and online',
  columns: [
    {
      title: 'Address',
      items: ['The Castle', '345 2500 Castle Dr.', 'Port Douglas, Queensland'],
    },
    {
      title: 'Connect',
      items: ['T: +216 (0)40 3629 4753', 'E: hello@raahi.com'],
    },
  ],
  copyright: '© 2026 Raahi World',
  legal: [
    { label: 'Terms & Conditions', href: '#terms' },
    { label: 'Privacy Policy', href: '#privacy' },
  ],
} as const;
