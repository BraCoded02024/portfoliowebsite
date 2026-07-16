import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { featuredProjects, moreProjects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function ProjectsSection() {
  const [detailProject, setDetailProject] = useState(null)

  return (
    <section id="projects" className="flex h-full min-h-0 flex-col bg-surface">
      <div
        className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain px-4 pb-20 pt-4 sm:px-6 sm:pb-10"
        data-section-scroll
      >
        <div className="mx-auto w-full max-w-6xl shrink-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
            Work
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Featured case studies
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted">
            Selected projects with architecture decisions, business impact, and production
            delivery — the kind of work I lead as a senior engineer.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-2 md:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetail={setDetailProject}
              featured
            />
          ))}
        </div>

        <div className="mx-auto mt-14 w-full max-w-6xl shrink-0">
          <h3 className="font-display text-2xl tracking-tight text-ink">More projects</h3>
          <p className="mt-3 max-w-2xl text-sm text-ink-muted">
            Additional products across food ordering, retail, streaming, and institutional
            systems.
          </p>
        </div>

        <div className="mx-auto mt-8 grid w-full max-w-6xl gap-6 md:grid-cols-2 md:gap-8">
          {moreProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index + featuredProjects.length}
              onViewDetail={setDetailProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {detailProject && (
          <ProjectModal
            key={detailProject.id}
            project={detailProject}
            onClose={() => setDetailProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
