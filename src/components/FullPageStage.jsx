import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useSectionNav } from '../context/SectionNavContext'

const bookEase = [0.22, 1, 0.36, 1]

const bookVariants = {
  enter: (dir) => ({
    rotateY: dir >= 0 ? -22 : 22,
    opacity: 0,
    scale: 0.97,
    filter: 'brightness(0.85)',
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    filter: 'brightness(1)',
    transition: {
      duration: 0.62,
      ease: bookEase,
    },
  },
  exit: (dir) => ({
    rotateY: dir >= 0 ? 18 : -18,
    opacity: 0,
    scale: 0.98,
    filter: 'brightness(0.9)',
    transition: { duration: 0.48, ease: bookEase },
  }),
}

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.28 } },
}

export function FullPageStage({ sections }) {
  const { activeIndex, direction, goTo, next, prev, labels } = useSectionNav()
  const reduceMotion = useReducedMotion()
  const variants = reduceMotion ? fadeVariants : bookVariants

  const onWheel = useCallback(
    (e) => {
      if (document.querySelector('[data-project-modal]')) return

      const target = e.target
      if (target instanceof Element) {
        const host = target.closest('[data-section-scroll]')
        if (host) {
          const { scrollTop, scrollHeight, clientHeight } = host
          const atTop = scrollTop <= 2
          const atBottom = scrollTop + clientHeight >= scrollHeight - 3
          if (e.deltaY > 0 && !atBottom) return
          if (e.deltaY < 0 && !atTop) return
        }
      }

      if (Math.abs(e.deltaY) < 8) return
      e.preventDefault()
      if (e.deltaY > 0) next()
      else prev()
    },
    [next, prev],
  )

  useEffect(() => {
    const opts = { passive: false }
    const wheel = (e) => onWheel(e)
    window.addEventListener('wheel', wheel, opts)
    return () => window.removeEventListener('wheel', wheel, opts)
  }, [onWheel])

  useEffect(() => {
    const onKey = (e) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        next()
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const Active = sections[activeIndex]

  return (
    <div
      className="relative h-full min-h-0 [perspective:1400px]"
      role="main"
      aria-roledescription="carousel"
      aria-label="Portfolio sections"
    >
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            transformStyle: 'preserve-3d',
            transformOrigin: 'center center',
            backfaceVisibility: 'hidden',
          }}
          className="absolute inset-0 flex flex-col overflow-hidden bg-surface"
        >
          <div className="flex min-h-0 flex-1 flex-col pt-28 md:pt-20">
            <Active />
          </div>
        </motion.div>
      </AnimatePresence>

      <nav
        className="pointer-events-auto absolute bottom-4 right-4 z-20 hidden flex-col items-end gap-2 sm:flex"
        aria-label="Section navigation"
      >
        {labels.map((label, i) => (
          <button
            key={label}
            type="button"
            onClick={() => goTo(i)}
            className={`group flex items-center gap-2 text-right text-xs font-medium transition-colors ${
              i === activeIndex ? 'text-ink' : 'text-ink-muted hover:text-ink'
            }`}
          >
            <span
              className={`h-px transition-all ${
                i === activeIndex ? 'w-8 bg-accent' : 'w-4 bg-border group-hover:w-6 group-hover:bg-ink-muted'
              }`}
            />
            {label}
          </button>
        ))}
      </nav>

      <p className="pointer-events-none absolute bottom-3 left-1/2 z-20 hidden max-w-[90%] -translate-x-1/2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted/70 sm:block">
        Scroll or arrow keys · Section links
      </p>
    </div>
  )
}
