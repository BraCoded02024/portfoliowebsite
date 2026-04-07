const skillGroups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs'],
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    title: 'AI / Mobile',
    items: ['Machine Learning', 'Computer Vision', 'Flutter', 'React Native'],
  },
  {
    title: 'Other',
    items: ['System Architecture', 'SaaS Development', 'Enterprise Systems'],
  },
]

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex h-full min-h-0 flex-col bg-surface-elevated"
    >
      <div
        className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain px-4 py-8 sm:px-6"
        data-section-scroll
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
            Skills
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Tools &amp; technologies
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted">
            Stack across product surfaces, platforms, and intelligent systems.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-lg border border-border bg-surface p-5"
              >
                <h3 className="font-display text-lg text-ink">{group.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border bg-surface-elevated px-2.5 py-1.5 text-xs font-medium text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
