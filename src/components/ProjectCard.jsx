import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { projectHasCaseStudy, projectHasDemo, projectHasDetail } from '../data/projects'

export function ProjectCard({ project, onViewDetail, index, featured = false }) {
  const hasDetail = projectHasDetail(project)
  const hasCaseStudy = projectHasCaseStudy(project)
  const hasDemo = projectHasDemo(project)
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (!project.cardVideo) {
      setShowVideo(false)
      return
    }

    const timer = window.setTimeout(() => {
      setShowVideo(true)
    }, project.cardVideoDelayMs ?? 2000)

    return () => window.clearTimeout(timer)
  }, [project.cardVideo, project.cardVideoDelayMs])

  const detailLabel = hasCaseStudy ? 'Case study' : hasDemo ? 'Demo' : 'Details'

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex h-full flex-col overflow-hidden rounded-lg border bg-surface-elevated transition-shadow hover:shadow-md ${
        featured ? 'border-accent/30 ring-1 ring-accent/10' : 'border-border'
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        {featured && (
          <span className="absolute left-3 top-3 z-10 rounded-md bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Featured
          </span>
        )}

        {!showVideo && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-contain object-center"
          />
        )}

        {project.cardVideo && (
          <video
            src={project.cardVideo}
            className={`h-full w-full object-contain object-center transition-opacity duration-500 ${
              showVideo ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={`${project.title} preview video`}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg tracking-tight text-ink">{project.title}</h3>

        {project.impact && (
          <p className="mt-2 text-xs font-medium text-accent">{project.impact}</p>
        )}

        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Features">
          {project.features.slice(0, 3).map((f) => (
            <li
              key={f}
              className="rounded-md border border-border bg-surface px-2 py-0.5 text-[11px] font-medium text-ink-muted"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-border px-2 py-1 text-xs font-medium text-ink-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!hasDetail}
            onClick={() => hasDetail && onViewDetail(project)}
            title={!hasDetail ? 'Details not available yet' : `Open ${detailLabel.toLowerCase()}`}
            className="inline-flex flex-1 min-w-[7rem] items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {detailLabel}
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 min-w-[7rem] items-center justify-center rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/25"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
