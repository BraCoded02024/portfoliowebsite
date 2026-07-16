import realEstateImg from '../assets/real-estate.png'
import mineTrackImg from '../assets/mine-track.png'
import aiBeansImg from '../assets/ai-beans.png'
import inmateImg from '../assets/inmate.png'
import movieStreamImg from '../assets/movie-stream.png'
import choplifeeLoginImg from '../assets/choplifee-login.png'
import choplifeeVideo from '../assets/full recording Choplifee.compressed.mp4'
import mamapeaceminiMartImg from '../assets/mamapeacemini_mart.webp'
import { contactInfo } from './contact.js'

/** GitHub button on each card opens your profile (same as footer / contact). */
const githubProfileUrl = contactInfo.github

/**
 * Demo in the modal: set `demoEmbedUrl` (Loom / ScreenRec / etc.) and/or `demoVideoId` (YouTube ID).
 * Case studies: set `caseStudy` for featured deep-dive content in the project modal.
 */
export const projects = [
  {
    id: 'choplifee',
    title: 'Choplifee',
    featured: true,
    description:
      'Food ordering product focused on frictionless login, clear menu discovery, and a smooth checkout path.',
    impact: 'Auth + ordering flow · Production-ready UX',
    features: ['User login', 'Food browsing', 'Order flow', 'Mobile-friendly layout'],
    tech: ['React', 'JavaScript', 'UI Design'],
    image: choplifeeLoginImg,
    cardVideo: choplifeeVideo,
    cardVideoDelayMs: 800,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
  },
  {
    id: 'mamapeacemini-mart',
    title: 'Mamapeacemini Mart',
    featured: true,
    description:
      'Mini-mart storefront experience with clean product presentation and straightforward shopping navigation.',
    impact: 'Retail storefront · Conversion-focused layout',
    features: ['Product display', 'Storefront layout', 'Clean UI', 'Easy navigation'],
    tech: ['React', 'JavaScript', 'Frontend UI'],
    image: mamapeaceminiMartImg,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
  },
  {
    id: 'real-estate',
    title: 'Real Estate Management System',
    featured: true,
    description:
      'Enterprise platform unifying property, tenant, payment, and reporting workflows for operations teams.',
    impact: 'Multi-module SaaS · End-to-end ownership',
    features: [
      'Property management',
      'Tenant management',
      'Payment tracking',
      'Reports dashboard',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: realEstateImg,
    demoEmbedUrl:
      'https://www.loom.com/embed/80c9d5453b3b48ca8e2d904882f278a2',
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
    caseStudy: {
      problem:
        'Property operators needed one system to manage listings, tenants, payments, and reporting instead of fragmented spreadsheets and manual follow-ups.',
      role: 'Lead Developer & System Architect',
      architecture:
        'React dashboard + Node.js REST services + PostgreSQL, with modular domain services for properties, tenants, payments, and analytics.',
      decisions: [
        'Separated reporting queries from transactional writes to keep dashboards responsive as data grew.',
        'Designed role-based workflows so admins, agents, and finance teams each see only what they need.',
        'Structured the backend around domain modules to add features without rewriting core services.',
      ],
      results: [
        'Unified property, tenant, and payment operations in a single platform',
        'Reduced manual reporting effort for day-to-day operations',
        'Created a scalable foundation for new modules and client-specific features',
      ],
    },
  },
  {
    id: 'mine-track',
    title: 'Mine Track Assets Management System',
    featured: true,
    description:
      'Industrial asset tracking platform for inventory visibility, equipment monitoring, and operational reporting.',
    impact: 'Asset lifecycle tracking · Operations dashboard',
    features: [
      'Asset tracking',
      'Inventory management',
      'Equipment monitoring',
      'Reporting dashboard',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    image: mineTrackImg,
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
    caseStudy: {
      problem:
        'Mining and industrial teams lacked real-time visibility into equipment location, status, and inventory movement across sites.',
      role: 'Lead Full-Stack Engineer',
      architecture:
        'React operations UI with Express APIs and PostgreSQL, organized around asset records, status events, and reporting views.',
      decisions: [
        'Modeled assets as first-class entities with audit-friendly status history.',
        'Built dashboard views around operational questions — what is where, what needs attention, what changed recently.',
        'Kept API boundaries clear so monitoring and inventory modules could evolve independently.',
      ],
      results: [
        'Centralized asset and inventory visibility for operations teams',
        'Improved traceability of equipment movement and status changes',
        'Delivered reporting views leadership could use without exporting raw data',
      ],
    },
  },
  {
    id: 'ai-beans',
    title: 'Mobile AI Beans Detection App',
    featured: true,
    description:
      'Computer-vision mobile app that classifies bean quality in real time for field and quality-control use.',
    impact: 'Real-time AI inference · Mobile-first UX',
    features: [
      'AI detection',
      'Image classification',
      'Mobile interface',
      'Real-time results',
    ],
    tech: ['Flutter / React Native', 'Python', 'AI'],
    image: aiBeansImg,
    demoEmbedUrl:
      'https://www.loom.com/embed/201f8d12390a42439995000fca527f01',
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
    caseStudy: {
      problem:
        'Manual bean quality checks were slow, inconsistent, and difficult to scale across mobile field workflows.',
      role: 'AI Application Developer & Product Engineer',
      architecture:
        'Mobile client for capture and feedback, Python inference layer for classification, and a lightweight API for result handling.',
      decisions: [
        'Optimized for fast user feedback loops so operators get results during inspection, not after export.',
        'Designed the UI around confidence and clarity — useful outputs even when model certainty varies.',
        'Kept the ML pipeline separate from product UI so models can improve without rewriting the app.',
      ],
      results: [
        'Delivered real-time quality detection in a mobile-friendly workflow',
        'Reduced reliance on manual visual inspection for routine checks',
        'Created a practical AI product pattern reusable for other vision tasks',
      ],
    },
  },
  {
    id: 'inmate',
    title: 'Digital Inmate Management System',
    description:
      'Institutional management system for inmate records, operational tracking, and administrative reporting.',
    impact: 'Records management · Secure workflows',
    features: [
      'Inmate tracking',
      'Records management',
      'Reporting dashboard',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: inmateImg,
    demoEmbedUrl: 'https://screenrec.com/share/qGwv8ATDLt',
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
  },
  {
    id: 'movie-stream',
    title: 'Movie Streaming Application',
    description:
      'Streaming platform with content browsing, secure authentication, and upload management for media teams.',
    impact: 'Video delivery · Auth + content admin',
    features: [
      'Movie browsing',
      'Video player',
      'Upload dashboard',
      'Authentication',
    ],
    tech: ['React', 'Node.js', 'Express'],
    image: movieStreamImg,
    demoEmbedUrl:
      'https://www.loom.com/embed/1d11041035834b4d86a45b7418297b3d',
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
  },
]

export function projectHasCaseStudy(project) {
  return Boolean(project?.caseStudy)
}

export function projectHasDemo(project) {
  return Boolean(project?.demoEmbedUrl || project?.demoVideoId || project?.cardVideo)
}

export function projectHasDetail(project) {
  return projectHasCaseStudy(project) || projectHasDemo(project)
}

export function getProjectDemoEmbedUrl(project) {
  if (project?.demoEmbedUrl) return project.demoEmbedUrl
  if (project?.demoVideoId) {
    return `https://www.youtube-nocookie.com/embed/${project.demoVideoId}?rel=0`
  }
  return null
}

export const featuredProjects = projects.filter((p) => p.featured)
export const moreProjects = projects.filter((p) => !p.featured)
