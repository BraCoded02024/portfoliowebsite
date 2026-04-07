import { contactInfo, urlWithoutProtocol } from '../data/contact'
import { COMPANY } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-elevated px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-ink">Bernard Owusu</p>
          <p className="mt-0.5 text-sm text-ink-muted">Software Engineer</p>
          <p className="mt-1.5 text-sm text-ink-muted">
            Founder,{' '}
            <a
              href={COMPANY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent hover:underline"
            >
              {COMPANY.name}
            </a>
          </p>
        </div>
        <nav aria-label="Social">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-sm font-medium">
            <li>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="max-w-[min(100%,16rem)] break-all text-ink-muted underline decoration-transparent underline-offset-2 hover:text-ink hover:decoration-border"
              >
                {urlWithoutProtocol(contactInfo.github)}
              </a>
            </li>
            <li>
              <a
                href={contactInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="max-w-[min(100%,16rem)] break-all text-ink-muted underline decoration-transparent underline-offset-2 hover:text-ink hover:decoration-border"
              >
                {urlWithoutProtocol(contactInfo.linkedIn)}
              </a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`} className="text-ink-muted hover:text-ink">
                Email
              </a>
            </li>
            <li>
              <a
                href={COMPANY.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-ink"
              >
                {COMPANY.name}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-[11px] text-ink-muted">
        © {new Date().getFullYear()} Bernard Owusu. All rights reserved.
      </p>
    </footer>
  )
}
