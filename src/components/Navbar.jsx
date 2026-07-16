import { motion } from 'framer-motion'
import { useTheme } from '../hooks/useTheme'
import { COMPANY } from '../data/site'
import { useSectionNav } from '../context/SectionNavContext'

const navItems = [
  { index: 0, label: 'Home' },
  { index: 1, label: 'About' },
  { index: 2, label: 'Experience' },
  { index: 3, label: 'Projects' },
  { index: 4, label: 'Skills' },
  { index: 5, label: 'Contact' },
]

export function Navbar() {
  const { dark, toggle } = useTheme()
  const { goTo, activeIndex } = useSectionNav()

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed left-0 right-0 top-0 z-[70] border-b border-border/90 bg-surface-elevated/95 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={() => goTo(0)}
          className="font-display text-left text-xl tracking-tight text-ink transition-opacity hover:opacity-80"
        >
          BO<span className="text-accent">.</span>
        </button>

        <ul className="hidden items-center gap-0.5 md:flex">
          {navItems.map(({ index, label }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => goTo(index)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  activeIndex === index
                    ? 'bg-surface text-ink'
                    : 'text-ink-muted hover:bg-surface hover:text-ink'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={COMPANY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 text-sm font-medium text-accent hover:bg-surface"
            >
              {COMPANY.name}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-ink-muted transition-colors hover:text-ink"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {dark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>

          <button
            type="button"
            onClick={() => goTo(5)}
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90 sm:inline-block"
          >
            Let&apos;s talk
          </button>
        </div>
      </nav>

      <div className="border-t border-border/70 bg-surface-elevated/98 px-2 py-2 md:hidden">
        <ul className="flex flex-wrap justify-center gap-1">
          {navItems.map(({ index, label }) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => goTo(index)}
                className={`rounded-md px-2.5 py-1.5 text-xs font-medium ${
                  activeIndex === index ? 'bg-surface text-ink' : 'text-ink-muted hover:bg-surface'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={COMPANY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-md px-2.5 py-1.5 text-xs font-medium text-accent"
            >
              {COMPANY.name}
            </a>
          </li>
        </ul>
      </div>
    </motion.header>
  )
}

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
