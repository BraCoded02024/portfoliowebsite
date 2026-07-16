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
  jobTitle: 'Senior Software Engineer | Enterprise Systems & AI',
  description:
    'Bernard Owusu is a senior software engineer and founder of CODETECHS, building scalable enterprise platforms, AI-powered applications, and production-grade digital products end to end.',
}

/** Link to your business site — set the exact URL you use publicly. */
export const COMPANY = {
  name: 'CODETECHS',
  url: 'https://codedtechs.com',
}
