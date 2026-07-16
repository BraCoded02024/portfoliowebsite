import { ContactSection } from './ContactSection'
import { Footer } from './Footer'

/** Contact + footer in one full-page slide with internal scroll when needed. */
export function ContactSlide() {
  return (
    <div className="flex h-full min-h-0 flex-col bg-surface">
      <div
        className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain pb-16 sm:pb-0"
        data-section-scroll
      >
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}
