import AnimatedSection, { motionVariants } from "../../../../../components/AnimatedSection"
import Button from "../../../../../components/Button"
import { motion } from 'framer-motion'
import { useLanguage } from '../../../../../contexts/LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <AnimatedSection className="w-full bg-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid w-full grid-cols-1 md:grid-cols-12 gap-[clamp(20px,2vw,40px)] translate-y-[clamp(10px,8vw,100px)]">
          <div className="col-span-full md:col-start-4 md:col-span-6 flex flex-col items-center justify-center">
          <div className="relative">
            {/* Background image (large screens) positioned behind the text */}
              <motion.img
                src="/Image1.png"
                alt="Imagem principal"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 0.95, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none fixed left-1/2 -translate-x-1/2 top-[calc(50% - clamp(100px,15vw,210px))] -translate-y-1/2 z-0 w-[clamp(250px,25vw,350px)] rounded-2xl object-cover"
            />

          {/* Texto */}
          <motion.div variants={motionVariants.item} className="px-4 relative z-10 flex flex-col items-center text-center">
            <h2 className="text-[clamp(18px,2vw,24px)] text-white" dangerouslySetInnerHTML={{ __html: t('hero.greeting') }}></h2>

            <h1 className="text-[clamp(83px,10vw,130px)] font-normal text-white leading-[clamp(70px,8vw,120px)] mt-[clamp(8px,1vw,12px)] font-righteous md:whitespace-nowrap">
              Gabriel Mourão
            </h1>

            <div className="mt-[clamp(16px,2vw,16px)] flex gap-[clamp(4px,0.5vw,8px)]">
              <span className="px-[clamp(9px,0.5vw,17px)] py-1 bg-transparent border border-[#13EACD] text-[#13EACD] rounded-md text-[clamp(17px,2.5vw,31px)]">{t('hero.roles')[0]}</span>
              <span className="px-[clamp(9px,0.5vw,17px)] py-1 bg-transparent border border-[#00A6FF] text-[#00A6FF] rounded-md text-[clamp(17px,2.5vw,31px)]">{t('hero.roles')[1]}</span>
            </div>

            <div className="mt-[clamp(24px,3vw,24px)] flex gap-3">
              <Button
                onClick={() => {
                  const el = document.getElementById('projects')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="bg-white/10 text-[20px] border border-white/20"
              >
                {t('hero.projectsButton')}
              </Button>
            </div>
          </motion.div>


          </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

