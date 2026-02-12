import type { Experience } from '../types'
import { motion } from 'framer-motion'

type Props = { items: Experience[] }

export default function Timeline({ items }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full lg:block hidden" />
      <div className="space-y-8">
        {items.map((it, idx) => (
          <motion.div
            key={it.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`w-full flex justify-center lg:${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className="w-full max-w-md bg-white/5 p-4 rounded-lg shadow-md relative">
              {idx < items.length - 1 && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-8 bg-white/20 lg:hidden" />
              )}
              <h4 className="font-semibold text-white">{it.role} <span className="text-sm text-white/70">@ {it.company}</span></h4>
              <span className="text-xs text-white/60">{it.from} • {it.to ?? 'Atual'}</span>
              <p className="text-sm text-white/80 mt-2">{it.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
