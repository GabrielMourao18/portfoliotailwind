import AnimatedSection from '../../components/AnimatedSection'
import ProjectCard from '../../components/ProjectCard'
import { useLanguage } from '../../contexts/LanguageProvider'

export default function Projects() {
  const { t } = useLanguage()
  const projects = t('projects.items') || []

  return (
    <AnimatedSection className="w-full py-16">
      <div id="projects" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-white mb-8 font-righteous text-center">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p: any) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
