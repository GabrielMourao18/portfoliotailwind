import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SkillsStrip() {
  const logos = [
    '/Group 13951.png',
    '/Group 13952.png',
    '/Group 13953.png',
    '/Group 13954.png',
    '/Group 13955.png',
    '/Group 13956.png',
    '/Group 13957.png',
    '/Group 13958.png'
  ]

  const x = useMotionValue(0)
  const [isDragging, setIsDragging] = useState(false)

  // Width per logo including gap (56px width + 32px gap)
  const logoWidth = 88
  const totalWidth = logoWidth * logos.length

  // Create multiple copies for seamless infinite scroll
  const infiniteLogos = [...logos, ...logos, ...logos, ...logos]

  useEffect(() => {
    const speed = totalWidth / 1200 // Speed for 20s duration at 60fps
    const interval = setInterval(() => {
      if (!isDragging) {
        x.set(x.get() - speed)
        if (x.get() <= -totalWidth) {
          x.set(x.get() + totalWidth)
        }
      }
    }, 16)
    return () => clearInterval(interval)
  }, [isDragging, totalWidth, x])

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    // Prevent page scrolling when starting drag
    e.stopPropagation()
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    // Prevent page scrolling during drag
    e.stopPropagation()
  }

  return (
    <section className="w-full py-12 overflow-hidden max-w-screen -mx-4 md:mx-0">
      {/* Desktop layout */}
      <div className="hidden md:block mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden py-6 px-0">
          <div className="flex justify-between items-center">
            {logos.map((logo, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3 + idx * 0.2, delay: idx * 0.2 }}
                className="flex-shrink-0"
              >
                <img src={logo} alt={`Logo ${idx + 1}`} className="w-12 h-12 object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile layout with infinite scroll - full width within section */}
      <div className="md:hidden relative py-6 -mx-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-8 -mx-4"
            style={{ x, touchAction: 'pan-x' }}
            drag="x"
            dragMomentum={false}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {infiniteLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={logo} alt={`Logo ${idx + 1}`} className="w-14 h-14 object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
