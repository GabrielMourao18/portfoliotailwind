import { motion } from 'framer-motion'

type Props = {
  name: string
  icon?: string
  delay?: number
}

export default function SkillIcon({ name, icon, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ repeat: Infinity, duration: 3 + delay, delay }}
      className="flex flex-col items-center justify-center w-20 h-20 p-2"
      title={name}
    >
      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm shadow-sm hover:scale-105 transition-transform">
        {icon ? <img src={icon} alt={name} className="w-8 h-8 object-contain" /> : <span className="text-white">{name[0]}</span>}
      </div>
      <span className="text-xs text-white mt-2">{name}</span>
    </motion.div>
  )
}
