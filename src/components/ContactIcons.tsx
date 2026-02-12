import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageProvider'

type Props = {
  className?: string
}

export default function ContactIcons({ className = '' }: Props) {
  const { t } = useLanguage()
  const items = t('contactIcons')

  return (
    <div className={`flex gap-4 ${className}`}>
      {items.map((i: any) => (
        <motion.a key={i.id} href={i.href} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }} className="inline-flex items-center gap-2 bg-white/5 p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <img src={i.icon} alt={i.label} className="w-6 h-6 object-contain" />
          <span className="text-white text-sm">{i.label}</span>
        </motion.a>
      ))}
    </div>
  )
}

