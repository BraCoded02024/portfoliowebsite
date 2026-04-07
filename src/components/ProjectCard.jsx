import { motion } from 'framer-motion'
import { projectHasDemo } from '../data/projects'

export function ProjectCard({ project, onWatchDemo, index }) {
  const hasVideo = projectHasDemo(project)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface-elevated transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg tracking-tight text-ink">{project.title}</h3>
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
            disabled={!hasVideo}
            onClick={() => hasVideo && onWatchDemo(project)}
            title={!hasVideo ? 'Demo video not linked yet' : 'Open demo video'}
            className="inline-flex flex-1 min-w-[7rem] items-center justify-center rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            Demo
          </button>
          <a
            href={project.githubUrl}
            className="inline-flex flex-1 min-w-[7rem] items-center justify-center rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/25"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
