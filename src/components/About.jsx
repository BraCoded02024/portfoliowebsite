import { COMPANY } from '../data/site'

const highlights = [
  'Full Stack Developer',
  'Enterprise Systems Developer',
  'AI Application Developer',
  'Mobile App Developer',
]

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
          Engineering systems that scale
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
          <strong className="font-semibold text-ink">Bernard Owusu</strong> is a professional
          software engineer with experience building enterprise systems, AI-powered
          applications, mobile solutions, and scalable backend architectures. He is the
          founder of{' '}
          <a
            href={COMPANY.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            {COMPANY.name}
          </a>
          , helping organizations ship reliable digital products.
        </p>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((text) => (
            <li
              key={text}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3.5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border text-accent">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm font-medium text-ink">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
