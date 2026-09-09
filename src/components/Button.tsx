import { motion } from 'framer-motion'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const MotionButton: any = motion.button

export default function Button({ children, className = '', ...rest }: Props) {
  return (
    <MotionButton
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 shadow-md hover:shadow-lg transition-shadow ${className}`}
      {...rest}
    >
      {children}
    </MotionButton>
  )
}
