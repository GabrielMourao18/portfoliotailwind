// React import not required with the new JSX runtime
import AnimatedSection from '../../components/AnimatedSection'
import Timeline from '../../components/Timeline'
import { useLanguage } from '../../contexts/LanguageProvider'

export default function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <AnimatedSection className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-white mb-8 font-righteous text-center">{t('experience.title')}</h2>
        <div className="relative">
          <Timeline items={t('experience.items')} />
        </div>
      </div>
    </AnimatedSection>
  )
}
