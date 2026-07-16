import { motion } from 'framer-motion'
import { contactInfo, cvPath } from '../data/contact'
import { COMPANY, PERSON } from '../data/site'
import profilePhoto from '../assets/profile.jpeg'
import { useSectionNav } from '../context/SectionNavContext'

const ease = [0.22, 1, 0.36, 1]

export function Hero() {
  const { goTo } = useSectionNav()

  return (
    <section
      id="home"
      className="relative flex h-full min-h-0 flex-col overflow-hidden bg-surface"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,var(--color-accent-soft),transparent)] opacity-60 dark:opacity-40"
        aria-hidden
      />

      <div
        className="relative flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain px-4 py-8 pb-20 sm:px-6 sm:pb-8"
        data-section-scroll
      >
        <div className="mx-auto my-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
              Portfolio
            </p>

            <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
              {PERSON.name.split(' ')[0]}{' '}
              <span className="text-accent">{PERSON.name.split(' ').slice(1).join(' ')}</span>
            </h1>

            <p className="mt-5 text-base font-medium leading-snug text-ink sm:text-lg">
              {PERSON.jobTitle}
            </p>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
              I architect and ship scalable enterprise platforms, AI-powered products, and
              production systems — from database design to client delivery. Founder of{' '}
              <a
                href={COMPANY.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {COMPANY.name}
              </a>
              .
            </p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Highlights">
              {['4 years experience', 'Enterprise & AI', 'Founder @ CODETECHS'].map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-surface-elevated px-3 py-1.5 text-xs font-medium text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => goTo(3)}
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                View projects
              </button>
              <a
                href={cvPath}
                download
                className="inline-flex items-center justify-center rounded-md border border-border bg-surface-elevated px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/20"
              >
                Download CV
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                Contact
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            className="mx-auto flex w-full max-w-[280px] justify-center sm:max-w-[320px] lg:mx-0 lg:max-w-none lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-[20rem] overflow-hidden rounded-lg border border-border bg-surface-elevated shadow-sm">
              <img
                src={profilePhoto}
                alt={`${PERSON.name}, ${PERSON.jobTitle}`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
