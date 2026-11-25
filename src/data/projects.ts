export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tagline: string;
  type: 'web' | 'mobile';
  description: string;
  technologies: string[];
  features: string[];
  accentColor: string; // neo-brutalist accent hex
  secondaryColor: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  category: string;
  highlightBadge: string;
  previewDetails: {
    badgeText: string;
    metrics?: { label: string; value: string }[];
    mockupType: 'dashboard' | 'queue-triage' | 'mobile-assistant';
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'fintrack',
    number: '01',
    title: 'FINTRACK',
    subtitle: 'AI-POWERED EXPENSE TRACKER',
    tagline: 'Smart Personal Finance with Real-time AI Insights',
    type: 'web',
    description:
      'A full-stack expense management application for tracking income, expenses, budgets and financial activity, with AI-powered insights.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Gemini API'
    ],
    features: [
      'Authentication & Session Security',
      'Real-time Expense & Income Tracking',
      'Dynamic Budget Management & Thresholds',
      'Interactive Analytics & Visual Breakdown',
      'AI-Generated Financial Insights & Forecasts',
      'Dark & Light Mode Adaptation'
    ],
    accentColor: '#FFD84D', // Accent Yellow
    secondaryColor: '#111111',
    demoUrl: 'https://b-expense-tracker-2026.vercel.app', // Placeholder URL
    category: 'Full-Stack Web Application',
    highlightBadge: 'FULL-STACK + GEMINI AI',
    previewDetails: {
      badgeText: 'Live Financial Analytics',
      metrics: [
        { label: 'Tracked Spending', value: '$4,280' },
        { label: 'Budget Target', value: '$5,000' },
        { label: 'AI Alert', value: '14% Dining Surge' }
      ],
      mockupType: 'dashboard'
    }

  }
];

export interface Achievement {
  title: string;
  subtitle: string;

  iconName: string;
  description: string;
  accentColor: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'SAP Hackfest',
    subtitle: 'Top 10 Teams → State Level',

    iconName: 'Trophy',
    description: 'Recognized among the Top 10 teams at the Regional round and proceeded to the state round',
    accentColor: '#FFD84D'
  },
  {
    title: 'Synergia Hackathon',
    subtitle: 'Competitive Participant',

    iconName: 'Award',
    description: 'Collaborated in intensive sprint development, pitching practical technical solutions under strict deadline constraints.',
    accentColor: '#6EA8FE'
  },
  {
    title: 'LeetCode Problem Solving',
    subtitle: '70+ Problems Solved',

    iconName: 'Code2',
    description: 'Continuous hands-on problem solving focusing on Java Data Structures, Algorithms, arrays, trees, and dynamic programming.',
    accentColor: '#A7E86B'
  }
];

export interface SkillCategory {
  title: string;
  tag: string;
  accent: string;
  skills: string[];
}

export const TECH_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    tag: 'CORE',
    accent: '#FFD84D',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C']
  },
  {
    title: 'Frontend',
    tag: 'UI & CLIENT',
    accent: '#6EA8FE',
    skills: ['HTML', 'CSS', 'Javascript', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    tag: 'APIs & ARCHITECTURE',
    accent: '#FF6B6B',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    title: 'Databases',
    tag: 'STORAGE & MODELING',
    accent: '#A7E86B',
    skills: ['MongoDB','Supabase','Firebase']
  },
  {
    title: 'Tools',
    tag: 'WORKFLOW & DEV',
    accent: '#F5F0E8',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code']
  }
];


export const MINDSET_STEPS = [
  {
    step: '01',
    phase: 'PROBLEM',
    title: 'Understand the real-world problem',
    desc: 'Never write a single line of code until the pain point, constraints, and target users are crystal clear. Real problems demand practical clarity.',
    accent: '#FF6B6B'
  },
  {
    step: '02',
    phase: 'BUILD',
    title: 'Design and implement a practical solution',
    desc: 'Architect resilient systems using modern, battle-tested tools. Keep components clean, types strict, and state predictable.',
    accent: '#FFD84D'
  },
  {
    step: '03',
    phase: 'IMPROVE',
    title: 'Test, debug and continuously improve',
    desc: 'Software is a living product. Measure performance, gather user feedback, squash edge-case bugs, and iterate toward excellence.',
    accent: '#A7E86B'
  }
];
