import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function ProjectsSection() {
  const [demoProject, setDemoProject] = useState(null)

  return (
    <section id="projects" className="flex h-full min-h-0 flex-col bg-surface">
      <div
        className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain px-4 pb-10 pt-4 sm:px-6"
        data-section-scroll
      >
        <div className="mx-auto w-full max-w-6xl shrink-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
            Work
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Featured projects
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted">
            Enterprise platforms, AI tooling, and production-grade applications built
            end-to-end.
          </p>
        </div>

        <div className="mx-auto mt-10 grid w-full max-w-6xl gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onWatchDemo={setDemoProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {demoProject && (
          <ProjectModal
            key={demoProject.id}
            project={demoProject}
            onClose={() => setDemoProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
