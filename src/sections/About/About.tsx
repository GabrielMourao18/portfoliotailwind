// React import not required with the new JSX runtime
import AnimatedSection from '../../components/AnimatedSection'
import { useLanguage } from '../../contexts/LanguageProvider'

export default function About() {
  const { t } = useLanguage()

  return (
    <AnimatedSection className="w-full py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-normal text-white font-righteous text-center mb-8">{t('about.title')}</h2>
        <div className="md:grid md:grid-cols-12 md:gap-8 md:items-center flex flex-col items-center gap-8">
          <div className="md:col-span-5 flex justify-center lg:justify-start">
            <img src="/Image2.png" alt="Imagem principal" className="w-80 rounded-xl" />
          </div>
          <div className="md:col-span-7 text-center md:text-left">
            <p className="text-white/80">{t('about.paragraph')}</p>
            <div className="mt-6 flex justify-center md:justify-start">
              <a href="/assets/documents/curriculo.pdf" download className="inline-flex items-center bg-white text-[#093656] px-4 py-2 rounded-md shadow-md">
                {t('about.resume')}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
