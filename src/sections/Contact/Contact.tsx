// React import not required with the new JSX runtime
import AnimatedSection from '../../components/AnimatedSection'
import ContactIcons from '../../components/ContactIcons'
import { useLanguage } from '../../contexts/LanguageProvider'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <AnimatedSection className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white text-[#093656] rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-center">{t('contact.title')}</h2>
          <p className="text-[#093656]/90 mb-6">{t('contact.prompt')}</p>
          <ContactIcons className="justify-center" />
        </div>
      </div>
    </AnimatedSection>
  )
}
