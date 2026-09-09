import { motion } from 'framer-motion'
import type { Project } from '../types'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      className="bg-white/5 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-2"
      whileHover={{ scale: 1.01 }}
    >
      <div className="overflow-hidden">
        <img src={project.image ?? '/assets/images/projeto1.jpg'} alt={project.title} className="w-full h-48 object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-sm text-white/80 mt-2">{project.description}</p>
      </div>
    </motion.article>
  )
}
