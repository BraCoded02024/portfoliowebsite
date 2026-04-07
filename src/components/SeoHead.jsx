import { useEffect } from 'react'
import { SITE_CANONICAL, PERSON, COMPANY } from '../data/site'
import { contactInfo } from '../data/contact'

function isCompleteSocialUrl(u) {
  if (!u || typeof u !== 'string') return false
  try {
    const { pathname, hostname } = new URL(u)
    const p = pathname.replace(/\/$/, '') || '/'
    if (hostname.includes('linkedin.com')) return /^\/in\/[^/]+$/.test(p)
    if (hostname.includes('github.com')) {
      const seg = p.split('/').filter(Boolean)
      return seg.length >= 1 && seg[0] !== ''
    }
    return false
  } catch {
    return false
  }
}

function buildPersonSchema() {
  const sameAs = [contactInfo.linkedIn, contactInfo.github].filter(isCompleteSocialUrl)
  const base = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    jobTitle: PERSON.jobTitle,
    description: PERSON.description,
    url: SITE_CANONICAL,
    worksFor: {
      '@type': 'Organization',
      name: COMPANY.name,
      url: COMPANY.url,
    },
  }
  if (sameAs.length) base.sameAs = sameAs
  return base
}

function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${PERSON.name} — Portfolio`,
    alternateName: [PERSON.name, 'Bernard Owusu portfolio', 'Bernard Owusu Software Engineer'],
    description: PERSON.description,
    url: SITE_CANONICAL,
    author: { '@type': 'Person', name: PERSON.name, url: SITE_CANONICAL },
    publisher: { '@type': 'Person', name: PERSON.name },
    inLanguage: 'en',
  }
}

function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    url: COMPANY.url,
    founder: {
      '@type': 'Person',
      name: PERSON.name,
      url: SITE_CANONICAL,
    },
  }
}

/**
 * Syncs document title, meta description, canonical, Open Graph, Twitter, and JSON-LD.
 * Helps Google associate searches for "Bernard Owusu" / "Bernard" with this site when combined with your domain and backlinks.
 */
export function SeoHead() {
  const title = `${PERSON.name} | Software Engineer & AI Developer | ${COMPANY.name} Founder`
  const description =
    'Bernard Owusu — Software Engineer, AI & enterprise systems developer, and founder of CODETECHS. Portfolio: enterprise software, AI apps, mobile, and scalable backends.'

  useEffect(() => {
    document.title = title

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('name', 'description', description)
    setMeta('name', 'keywords', [
      'Bernard Owusu',
      'Bernard Owusu software engineer',
      'Bernard Owusu developer',
      'Bernard Owusu CODETECHS',
      'Bernard developer',
      'CODETECHS founder',
      'enterprise software engineer',
      'AI developer portfolio',
    ].join(', '))
    setMeta('name', 'author', PERSON.name)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', `${PERSON.name} — Portfolio`)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', SITE_CANONICAL)
    setMeta('property', 'og:locale', 'en_US')
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', SITE_CANONICAL)

    const schemas = [buildPersonSchema(), buildWebSiteSchema(), buildOrganizationSchema()]
    const id = 'portfolio-jsonld-bernard-owusu'
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement('script')
      script.id = id
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schemas)

    return () => {
      /* keep meta on SPA navigation; no cleanup */
    }
  }, [])

  return null
}
