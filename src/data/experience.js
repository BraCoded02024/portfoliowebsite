import { COMPANY } from './site'

export const experience = [
  {
    id: 'codetechs-founder',
    role: 'Founder & Lead Software Engineer',
    company: COMPANY.name,
    companyUrl: COMPANY.url,
    period: '2026',
    type: 'Leadership',
    highlights: [
      'Founded CODETECHS and led delivery of enterprise web, mobile, and AI products for clients in real estate, mining, retail, and public-sector operations.',
      'Owned system architecture, technical direction, client delivery, and production releases across the full stack.',
      'Established reusable patterns for React frontends, Node.js APIs, and PostgreSQL data models to ship faster without sacrificing quality.',
    ],
  },
  {
    id: 'enterprise-systems',
    role: 'Senior Software Engineer — Enterprise Systems',
    company: 'Client & in-house platforms',
    type: 'Engineering',
    highlights: [
      'Designed and built multi-module platforms for property management, asset tracking, and institutional record systems.',
      'Delivered role-based dashboards, reporting pipelines, and operational workflows used by non-technical teams daily.',
      'Improved maintainability by separating domain logic, API layers, and presentation concerns in production codebases.',
    ],
  },
  {
    id: 'ai-mobile',
    role: 'AI & Mobile Application Developer',
    company: 'Product R&D',
    type: 'Specialization',
    highlights: [
      'Built computer-vision tooling for real-world quality detection with mobile-first UX and fast on-device feedback.',
      'Integrated ML inference pipelines with product flows so results are actionable for end users, not just experimental.',
      'Applied practical AI engineering — data handling, model integration, and reliable UI around uncertain outputs.',
    ],
  },
]

export const leadershipSignals = [
  {
    title: 'Architecture ownership',
    description: 'Designs scalable system boundaries, API contracts, and data models before implementation.',
  },
  {
    title: 'Production delivery',
    description: 'Ships complete products — auth, dashboards, deployments, and client-ready demos.',
  },
  {
    title: 'Technical leadership',
    description: 'Guides implementation standards, code quality, and pragmatic tradeoffs across projects.',
  },
  {
    title: 'Cross-functional impact',
    description: 'Translates business requirements into software that operations teams can actually use.',
  },
]
