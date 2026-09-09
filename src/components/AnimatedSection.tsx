import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const container: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
}

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.6 } }
}

export const motionVariants = { container, item }

type Props = {
  children: ReactNode
  className?: string
}

export default function AnimatedSection({ children, className = '' }: Props) {
  return (
    <motion.section
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.section>
  )
}
