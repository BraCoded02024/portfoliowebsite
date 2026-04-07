import realEstateImg from '../assets/real-estate.png'
import mineTrackImg from '../assets/mine-track.png'
import aiBeansImg from '../assets/ai-beans.png'
import inmateImg from '../assets/inmate.png'
import movieStreamImg from '../assets/movie-stream.png'
import { contactInfo } from './contact.js'

/** GitHub button on each card opens your profile (same as footer / contact). */
const githubProfileUrl = contactInfo.github

/**
 * Demo in the modal: set `demoEmbedUrl` (Loom / ScreenRec / etc.) and/or `demoVideoId` (YouTube ID).
 * Loom: prefer /embed/... (same ID as /share/...). ScreenRec: share URL is usually fine in the iframe.
 */
export const projects = [
  {
    id: 'real-estate',
    title: 'Real Estate Management System',
    description:
      'Enterprise real estate platform for managing properties, tenants, payments, and reports.',
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
  },
  {
    id: 'mine-track',
    title: 'Mine Track Assets Management System',
    description:
      'Industrial asset tracking and equipment monitoring system.',
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
  },
  {
    id: 'ai-beans',
    title: 'Mobile AI Beans Detection App',
    description:
      'AI-powered mobile app for beans quality detection using computer vision.',
    features: [
      'AI detection',
      'Image classification',
      'Mobile interface',
      'Real-time results',
    ],
    tech: ['Flutter / React Native', 'Python', 'AI'],
    image: aiBeansImg,
    /** https://www.loom.com/share/201f8d12390a42439995000fca527f01 */
    demoEmbedUrl:
      'https://www.loom.com/embed/201f8d12390a42439995000fca527f01',
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
  },
  {
    id: 'inmate',
    title: 'Digital Inmate Management System',
    description: 'Correctional facility management system.',
    features: [
      'Inmate tracking',
      'Records management',
      'Reporting dashboard',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: inmateImg,
    /** https://screenrec.com/share/qGwv8ATDLt */
    demoEmbedUrl: 'https://screenrec.com/share/qGwv8ATDLt',
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
  },
  {
    id: 'movie-stream',
    title: 'Movie Streaming Application',
    description:
      'Video streaming platform with movie browsing and playback.',
    features: [
      'Movie browsing',
      'Video player',
      'Upload dashboard',
      'Authentication',
    ],
    tech: ['React', 'Node.js', 'Express'],
    image: movieStreamImg,
    /** https://www.loom.com/share/1d11041035834b4d86a45b7418297b3d */
    demoEmbedUrl:
      'https://www.loom.com/embed/1d11041035834b4d86a45b7418297b3d',
    demoVideoId: null,
    liveUrl: '#',
    githubUrl: githubProfileUrl,
  },
]

export function projectHasDemo(project) {
  return Boolean(project?.demoEmbedUrl || project?.demoVideoId)
}

export function getProjectDemoEmbedUrl(project) {
  if (project?.demoEmbedUrl) return project.demoEmbedUrl
  if (project?.demoVideoId) {
    return `https://www.youtube-nocookie.com/embed/${project.demoVideoId}?rel=0`
  }
  return null
}
