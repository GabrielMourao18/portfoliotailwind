import type { Project, Experience, Skill } from "../types"

export const skills: Skill[] = [
  { id: 's1', name: 'Photoshop', icon: '/assets/images/ps.png' },
  { id: 's2', name: 'Illustrator', icon: '/assets/images/ai.png' },
  { id: 's3', name: 'InDesign', icon: '/assets/images/id.png' },
  { id: 's4', name: 'Figma', icon: '/assets/images/figma.png' },
  { id: 's5', name: 'HTML', icon: '/assets/images/html.png' },
  { id: 's6', name: 'CSS', icon: '/assets/images/css.png' },
  { id: 's7', name: 'JavaScript', icon: '/assets/images/js.png' },
  { id: 's8', name: 'React', icon: '/assets/images/react.png' },
]

export const experiences: Experience[] = [
  {
    id: 'e1',
    role: 'UI/UX Designer',
    company: 'Agência Exemplo',
    from: 'Jan 2021',
    to: 'Dez 2022',
    description: 'Criação de interfaces, prototipagem e design system.'
  },
  {
    id: 'e2',
    role: 'Freelancer',
    company: 'Projetos Pessoais',
    from: 'Jan 2023',
    description: 'Ilustrações, branding e design de produto.'
  }
]

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Projeto Um',
    description: 'Landing page responsiva com foco em performance.',
    image: '/assets/images/projeto1.jpg',
    link: '#'
  },
  {
    id: 'p2',
    title: 'Projeto Dois',
    description: 'Aplicação web com interações avançadas.',
    image: '/assets/images/projeto2.jpg',
    link: '#'
  }
]
