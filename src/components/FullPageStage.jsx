import { useEffect, useCallback, useRef, useState } from 'react'
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
  enter: (dir) => ({
    opacity: 0,
    y: dir >= 0 ? 28 : -28,
  }),
  center: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: bookEase },
  },
  exit: (dir) => ({
    opacity: 0,
    y: dir >= 0 ? -20 : 20,
    transition: { duration: 0.24, ease: bookEase },
  }),
}

function findScrollHost(target) {
  if (!(target instanceof Element)) return null
  return target.closest('[data-section-scroll]')
}

/** True only when the page content is already at the edge in that direction. */
function canFlipFromScrollHost(host, goingNext) {
  if (!host) return true
  const { scrollTop, scrollHeight, clientHeight } = host
  const overflows = scrollHeight > clientHeight + 4
  const atTop = scrollTop <= 2
  const atBottom = scrollTop + clientHeight >= scrollHeight - 3

  // Short page that fits on screen: allow flip either way
  if (!overflows) return true

  // Tall page: only flip after user finishes scrolling that page
  if (goingNext) return atBottom
  return atTop
}

function canChangeSectionFromTarget(target, goingNext) {
  if (document.querySelector('[data-project-modal]')) return false
  const host = findScrollHost(target)
  return canFlipFromScrollHost(host, goingNext)
}

export function FullPageStage({ sections }) {
  const { activeIndex, direction, goTo, next, prev, labels, sectionCount } = useSectionNav()
  const reduceMotion = useReducedMotion()
  const touchStart = useRef(null)
  const [isCoarsePointer, setIsCoarsePointer] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)')
    const update = () => setIsCoarsePointer(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])

  // Reset in-page scroll when landing on a new section
  useEffect(() => {
    const host = document.querySelector('[data-section-scroll]')
    if (host) host.scrollTop = 0
  }, [activeIndex])

  const useSimpleMotion = reduceMotion || isCoarsePointer
  const variants = useSimpleMotion ? fadeVariants : bookVariants

  const onWheel = useCallback(
    (e) => {
      const goingNext = e.deltaY > 0
      if (!canChangeSectionFromTarget(e.target, goingNext)) return
      if (Math.abs(e.deltaY) < 8) return
      e.preventDefault()
      if (goingNext) next()
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
        const host = document.querySelector('[data-section-scroll]')
        if (host && !canFlipFromScrollHost(host, true)) {
          host.scrollBy({ top: Math.min(120, host.clientHeight * 0.35), behavior: 'smooth' })
          return
        }
        next()
      }
      if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        const host = document.querySelector('[data-section-scroll]')
        if (host && !canFlipFromScrollHost(host, false)) {
          host.scrollBy({ top: -Math.min(120, host.clientHeight * 0.35), behavior: 'smooth' })
          return
        }
        prev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  useEffect(() => {
    const onTouchStart = (e) => {
      if (document.querySelector('[data-project-modal]')) return
      if (e.touches.length !== 1) return
      const t = e.touches[0]
      const host = findScrollHost(e.target)
      touchStart.current = {
        x: t.clientX,
        y: t.clientY,
        target: e.target,
        host,
        scrollTop: host?.scrollTop ?? 0,
        time: Date.now(),
        movedWhileScrolling: false,
      }
    }

    const onTouchMove = (e) => {
      const start = touchStart.current
      if (!start || !start.host) return
      // If the page scrolled during this gesture, treat it as in-page scroll, not a flip
      if (Math.abs(start.host.scrollTop - start.scrollTop) > 2) {
        start.movedWhileScrolling = true
      }
    }

    const onTouchEnd = (e) => {
      const start = touchStart.current
      touchStart.current = null
      if (!start || !e.changedTouches.length) return

      // User was scrolling content on this page — do not flip
      if (start.movedWhileScrolling) return

      const t = e.changedTouches[0]
      const dx = t.clientX - start.x
      const dy = t.clientY - start.y
      const elapsed = Date.now() - start.time
      const goingNext = dy < 0

      // Need a clear vertical flick at the edge to change pages
      if (elapsed > 650) return
      if (Math.abs(dy) < 70) return
      if (Math.abs(dy) < Math.abs(dx) * 1.35) return

      const host = start.host ?? findScrollHost(start.target) ?? document.querySelector('[data-section-scroll]')
      if (!canFlipFromScrollHost(host, goingNext)) return

      if (goingNext) next()
      else prev()
    }

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
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
          style={
            useSimpleMotion
              ? undefined
              : {
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                  backfaceVisibility: 'hidden',
                }
          }
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

      <div className="pointer-events-auto absolute bottom-3 left-0 right-0 z-20 flex flex-col items-center gap-2 sm:hidden">
        <nav className="flex items-center gap-2" aria-label="Section navigation">
          {Array.from({ length: sectionCount }, (_, i) => (
            <button
              key={labels[i] ?? i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={labels[i] ?? `Section ${i + 1}`}
              aria-current={i === activeIndex ? 'true' : undefined}
              className={`h-2 rounded-full transition-all ${
                i === activeIndex ? 'w-5 bg-accent' : 'w-2 bg-border'
              }`}
            />
          ))}
        </nav>
        <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted/80">
          Scroll page · Edge swipe to switch
        </p>
      </div>

      <p className="pointer-events-none absolute bottom-3 left-1/2 z-20 hidden max-w-[90%] -translate-x-1/2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted/70 sm:block">
        Scroll or arrow keys · Section links
      </p>
    </div>
  )
}
