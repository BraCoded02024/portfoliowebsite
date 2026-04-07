import { useCallback, useSyncExternalStore } from 'react'

function getSnapshot() {
  return document.documentElement.classList.contains('dark')
}

function subscribe(callback) {
  const obs = new MutationObserver(callback)
  obs.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  })
  return () => obs.disconnect()
}

export function useTheme() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, () => false)

  const toggle = useCallback(() => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      /* ignore */
    }
  }, [])

  return { dark, toggle }
}
