import { experience, leadershipSignals } from '../data/experience'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex h-full min-h-0 flex-col bg-surface"
    >
      <div
        className="flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-y-contain px-4 py-8 pb-20 sm:px-6 sm:pb-8"
        data-section-scroll
      >
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
            Experience
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Building and leading at scale
          </h2>
          <p className="mt-4 max-w-2xl text-base text-ink-muted">
            Hands-on senior engineering with ownership from architecture through production — as
            founder, lead developer, and delivery partner for enterprise and AI products.
          </p>

          <div className="mt-10 space-y-5">
            {experience.map((item) => (
              <article
                key={item.id}
                className="rounded-lg border border-border bg-surface-elevated p-5 sm:p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg text-ink sm:text-xl">{item.role}</h3>
                    {item.companyUrl ? (
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-sm font-medium text-accent hover:underline"
                      >
                        {item.company}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-ink-muted">{item.company}</p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md border border-border bg-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                      {item.type}
                    </span>
                    {item.period && (
                      <span className="text-sm font-medium text-ink-muted">{item.period}</span>
                    )}
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="font-display text-xl text-ink sm:text-2xl">How I operate at senior level</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {leadershipSignals.map((signal) => (
                <div
                  key={signal.title}
                  className="rounded-lg border border-border bg-surface-elevated p-5"
                >
                  <h4 className="text-sm font-semibold text-ink">{signal.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {signal.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
