import { COMPANY } from '../data/site'
import { leadershipSignals } from '../data/experience'

export function About() {
  return (
    <section
      id="about"
      className="flex h-full min-h-0 flex-col justify-center overflow-hidden bg-surface-elevated px-4 py-8 sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
          About
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Senior engineer. Founder. Delivery owner.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          <strong className="font-semibold text-ink">Bernard Owusu</strong> is a senior software
          engineer who designs and delivers enterprise systems, AI applications, and scalable
          product architectures. As founder of{' '}
          <a
            href={COMPANY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            {COMPANY.name}
          </a>
          , he leads projects from technical strategy through production — not just implementation.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {leadershipSignals.map((signal) => (
            <li
              key={signal.title}
              className="rounded-lg border border-border bg-surface px-4 py-4"
            >
              <p className="text-sm font-semibold text-ink">{signal.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {signal.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
