import { SeoHead } from '../components/SeoHead'
import { SectionNavProvider } from '../context/SectionNavContext'
import { Navbar } from '../components/Navbar'
import { FullPageStage } from '../components/FullPageStage'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { ProjectsSection } from '../components/ProjectsSection'
import { SkillsSection } from '../components/SkillsSection'
import { ContactSlide } from '../components/ContactSlide'

const sections = [Hero, About, ProjectsSection, SkillsSection, ContactSlide]

export function Home() {
  return (
    <SectionNavProvider sectionCount={sections.length}>
      <SeoHead />
      <div className="fixed inset-0 z-0 flex flex-col bg-surface">
        <Navbar />
        <div className="relative min-h-0 flex-1">
          <FullPageStage sections={sections} />
        </div>
      </div>
    </SectionNavProvider>
  )
}
