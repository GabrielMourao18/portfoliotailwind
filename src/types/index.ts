export interface Skill {
  id: string
  name: string
  icon?: string // path like /assets/images/skill-figma.png
}

export interface Experience {
  id: string
  role: string
  company: string
  from: string
  to?: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string // path like /assets/images/projeto1.jpg
  link?: string
  tags?: string[]
}
