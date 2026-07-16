import { useState } from 'react'
import { contactInfo, phoneTelHref, urlWithoutProtocol } from '../data/contact'

export function ContactSection() {
  const [status, setStatus] = useState('idle')

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()
    if (!name || !email || !message) {
      setStatus('error')
      return
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="bg-surface px-4 pb-8 pt-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-muted">
          Contact
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Let&apos;s build something remarkable
        </h2>
        <p className="mt-4 max-w-2xl text-base text-ink-muted">
          Open to senior engineering roles, technical leadership, and high-impact product work.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <ul className="flex flex-col gap-6 lg:col-span-2">
            <li>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                Email
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-1 block text-base font-medium text-ink hover:text-accent"
              >
                {contactInfo.email}
              </a>
            </li>
            <li>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                Phone
              </p>
              <a
                href={`tel:${phoneTelHref(contactInfo.phone)}`}
                className="mt-1 block text-base font-medium text-ink hover:text-accent"
              >
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                LinkedIn
              </p>
              <a
                href={contactInfo.linkedIn}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block break-all text-base font-medium text-ink underline decoration-border underline-offset-2 hover:text-accent hover:decoration-accent"
              >
                {urlWithoutProtocol(contactInfo.linkedIn)}
              </a>
            </li>
            <li>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                GitHub
              </p>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block break-all text-base font-medium text-ink underline decoration-border underline-offset-2 hover:text-accent hover:decoration-accent"
              >
                {urlWithoutProtocol(contactInfo.github)}
              </a>
            </li>
          </ul>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-surface-elevated p-6 lg:col-span-3 lg:p-8"
          >
            <label className="block">
              <span className="text-sm font-medium text-ink">Name</span>
              <input
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent/25"
                placeholder="Your name"
              />
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-medium text-ink">Email</span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-md border border-border bg-surface px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent/25"
                placeholder="you@company.com"
              />
            </label>
            <label className="mt-5 block">
              <span className="text-sm font-medium text-ink">Message</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-y rounded-md border border-border bg-surface px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-accent/25"
                placeholder="Tell me about your project or role…"
              />
            </label>

            {status === 'error' && (
              <p className="mt-3 text-sm text-red-600 dark:text-red-400" role="alert">
                Please fill in all fields.
              </p>
            )}
            {status === 'sent' && (
              <p className="mt-3 text-sm text-accent" role="status">
                Opening your email client…
              </p>
            )}

            <button
              type="submit"
              className="mt-6 w-full rounded-md bg-accent py-3 text-sm font-semibold text-white hover:opacity-90 sm:w-auto sm:px-10"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
