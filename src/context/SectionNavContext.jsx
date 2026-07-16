import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

export const SECTION_LABELS = ['Intro', 'About', 'Experience', 'Work', 'Skills', 'Contact']

const SectionNavContext = createContext(null)

export function SectionNavProvider({ children, sectionCount = SECTION_LABELS.length }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const locked = useRef(false)
  const activeRef = useRef(0)
  const lockTimer = useRef(null)

  const releaseLock = useCallback(() => {
    if (lockTimer.current) clearTimeout(lockTimer.current)
    lockTimer.current = setTimeout(() => {
      locked.current = false
      lockTimer.current = null
    }, 780)
  }, [])

  const goTo = useCallback(
    (index) => {
      if (locked.current) return
      if (index < 0 || index >= sectionCount) return
      if (index === activeRef.current) return

      setDirection(index > activeRef.current ? 1 : -1)
      activeRef.current = index
      locked.current = true
      releaseLock()
      setActiveIndex(index)
    },
    [sectionCount, releaseLock],
  )

  const next = useCallback(() => goTo(activeRef.current + 1), [goTo])
  const prev = useCallback(() => goTo(activeRef.current - 1), [goTo])

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
      if (lockTimer.current) clearTimeout(lockTimer.current)
    }
  }, [])

  const value = useMemo(
    () => ({
      activeIndex,
      direction,
      sectionCount,
      goTo,
      next,
      prev,
      labels: SECTION_LABELS,
    }),
    [activeIndex, direction, sectionCount, goTo, next, prev],
  )

  return <SectionNavContext.Provider value={value}>{children}</SectionNavContext.Provider>
}

export function useSectionNav() {
  const ctx = useContext(SectionNavContext)
  if (!ctx) throw new Error('useSectionNav must be used within SectionNavProvider')
  return ctx
}
