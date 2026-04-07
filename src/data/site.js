/**
 * SEO & branding — update before production deploy.
 * VITE_SITE_URL in .env overrides SITE_CANONICAL (no trailing slash).
 */
export const SITE_CANONICAL = (
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://bernardowusu.com'
).replace(/\/$/, '')

export const PERSON = {
  name: 'Bernard Owusu',
  alternateName: ['Bernard', 'Bernard Owusu Software Engineer'],
  jobTitle: 'Software Engineer | AI & Enterprise Systems Developer',
  description:
    'Bernard Owusu is a professional software engineer building scalable enterprise systems, AI-powered applications, mobile solutions, and digital platforms. Founder of CODETECHS.',
}

/** Link to your business site — set the exact URL you use publicly. */
export const COMPANY = {
  name: 'CODETECHS',
  url: 'https://codedtechs.com',
}
