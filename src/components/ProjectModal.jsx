import { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { getProjectDemoEmbedUrl } from '../data/projects'

export function ProjectModal({ project, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  const embedUrl = project ? getProjectDemoEmbedUrl(project) : null
  const localVideo = project?.cardVideo ?? null
  const caseStudy = project?.caseStudy ?? null
  const hasMedia = Boolean(embedUrl || localVideo)
  const titleSuffix = caseStudy ? 'Case Study' : 'Demo'

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = prev
    }
  }, [handleKey, onClose])

  if (!project) return null

  return (
    <motion.div
      data-project-modal
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-demo-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border px-4 py-3 sm:px-6">
          <div>
            <h3 id="project-demo-title" className="font-display text-lg text-ink">
              {project.title} — {titleSuffix}
            </h3>
            {project.impact && (
              <p className="mt-0.5 text-xs font-medium text-accent">{project.impact}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-ink-muted transition-colors hover:bg-accent-soft hover:text-ink"
            aria-label="Close"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto">
          {caseStudy && (
            <div className="space-y-6 p-4 sm:p-6">
              <CaseStudyBlock label="Problem" content={caseStudy.problem} />
              <CaseStudyBlock label="My role" content={caseStudy.role} />
              <CaseStudyBlock label="Architecture" content={caseStudy.architecture} />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  Key decisions
                </p>
                <ul className="mt-3 space-y-2">
                  {caseStudy.decisions.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  Results
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {caseStudy.results.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-surface px-4 py-3 text-sm leading-relaxed text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2" aria-label="Tech stack">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-border px-2 py-1 text-xs font-medium text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {hasMedia && (
            <div className={caseStudy ? 'border-t border-border p-4 sm:p-6' : ''}>
              {caseStudy && (
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  Demo
                </p>
              )}

              {embedUrl ? (
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-ink">
                  <iframe
                    title={`${project.title} demo video`}
                    src={embedUrl}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-xl border border-border bg-surface">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl border border-border bg-ink">
                    <video
                      title={`${project.title} demo video`}
                      src={localVideo}
                      className="h-full w-full"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

function CaseStudyBlock({ label, content }) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{content}</p>
    </div>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  )
}
