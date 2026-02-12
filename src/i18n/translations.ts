export const translations = {
  pt: {
    hero: {
      greeting: '<strong>Olá</strong>, me chamo',
      name: 'Gabriel\nMourão',
      roles: ['UI/UX Designer', 'Ilustrador'],
      projectsButton: 'Projetos e Contato'
    },
    about: {
      title: 'Sobre mim',
      paragraph: 'Sou Gabriel Mourão, designer multidisciplinar com experiência em ilustração digital, design de interfaces e criação de conteúdo visual para mídias sociais. Atuo combinando pensamento criativo, estética refinada e conhecimento técnico para desenvolver soluções visuais envolventes e funcionais. Com formação em Análise e Desenvolvimento de Sistemas, tenho base sólida em desenvolvimento web, lógica de programação e estrutura de dados. Atualmente, foco minha atuação no design, especialmente em UI/UX e comunicação visual, criando interfaces intuitivas, materiais gráficos impactantes e conteúdos digitais que fortalecem marcas e experiências de usuário. Tenho domínio de ferramentas como Figma, Photoshop e Illustrator, além de conhecimentos em HTML, CSS e JavaScript que ampliam minha compreensão de como o design se transforma em produto.',
      resume: 'Currículo'
    },
    experience: {
      title: 'Experiência',
      items: [
        { id: 'e1', role: 'Técnico', company: 'Secretaria Municipal da Educação de Ararendá', from: 'Ago 2025', to: 'Atualmente', description: 'Produção de materiais gráficos e digitais para comunicação interna e pedagógica Criação de layouts para documentos, relatórios, apresentações e materiais pedagógicos Padronização de identidade visual e elementos gráficos institucionais Organização de informações visuais para facilitar entendimento por diferentes públicos Apoio na comunicação entre setores por meio de design claro e funcional Edição e refinamento de conteúdos visuais para clareza, legibilidade e consistência' },
        { id: 'e2', role: 'Freelancer', company: 'Projetos Pessoais', from: 'Jan 2023', to: '', description: 'Ilustrações, branding e design de produto.' }
      ]
    },
    projects: {
      title: 'Projetos',
      items: [
        { id: 'p1', title: 'Projeto Um', description: 'Landing page responsiva com foco em performance.' },
        { id: 'p2', title: 'Projeto Dois', description: 'Aplicação web com interações avançadas.' }
      ]
    },
    contact: {
      title: 'Contato',
      prompt: 'Vamos criar algo incrível juntos. Me mande uma mensagem!'
    },
    skills: [
      { id: 's1', name: 'Photoshop', icon: '/assets/images/ps.png' },
      { id: 's2', name: 'Illustrator', icon: '/assets/images/ai.png' },
      { id: 's3', name: 'InDesign', icon: '/assets/images/id.png' },
      { id: 's4', name: 'Figma', icon: '/assets/images/figma.png' },
      { id: 's5', name: 'HTML', icon: '/assets/images/html.png' },
      { id: 's6', name: 'CSS', icon: '/assets/images/css.png' },
      { id: 's7', name: 'JavaScript', icon: '/assets/images/js.png' },
      { id: 's8', name: 'React', icon: '/assets/images/react.png' }
    ],
    contactIcons: [
      { id: 'c1', label: 'GitHub', href: '#', icon: '/assets/images/github.png' },
      { id: 'c2', label: 'WhatsApp', href: '#', icon: '/assets/images/whatsapp.png' },
      { id: 'c3', label: 'Email', href: 'mailto:example@example.com', icon: '/assets/images/email.png' }
    ]
  },
  en: {
    hero: {
      greeting: '<strong>Hi</strong>, my name is',
      name: 'Gabriel\nMourão',
      roles: ['UI/UX Designer', 'Illustrator'],
      projectsButton: 'Projects & Contact'
    },
    about: {
      title: 'About me',
      paragraph: 'I am a designer focused on intuitive experiences and attractive visuals. I create digital products emphasizing usability and aesthetics.',
      resume: 'Resume'
    },
    experience: {
      title: 'Experience',
      items: [
        { id: 'e1', role: 'UI/UX Designer', company: 'Sample Agency', from: 'Jan 2021', to: 'Dec 2022', description: 'Interface creation, prototyping and design systems.' },
        { id: 'e2', role: 'Freelancer', company: 'Personal Projects', from: 'Jan 2023', to: '', description: 'Illustrations, branding and product design.' }
      ]
    },
    projects: {
      title: 'Projects',
      items: [
        { id: 'p1', title: 'Project One', description: 'Responsive landing page focused on performance.' },
        { id: 'p2', title: 'Project Two', description: 'Web application with advanced interactions.' }
      ]
    },
    contact: {
      title: 'Contact',
      prompt: 'Let’s create something amazing together. Send me a message!'
    },
    skills: [
      { id: 's1', name: 'Photoshop', icon: '/assets/images/ps.png' },
      { id: 's2', name: 'Illustrator', icon: '/assets/images/ai.png' },
      { id: 's3', name: 'InDesign', icon: '/assets/images/id.png' },
      { id: 's4', name: 'Figma', icon: '/assets/images/figma.png' },
      { id: 's5', name: 'HTML', icon: '/assets/images/html.png' },
      { id: 's6', name: 'CSS', icon: '/assets/images/css.png' },
      { id: 's7', name: 'JavaScript', icon: '/assets/images/js.png' },
      { id: 's8', name: 'React', icon: '/assets/images/react.png' }
    ],
    contactIcons: [
      { id: 'c1', label: 'GitHub', href: '#', icon: '/assets/images/github.png' },
      { id: 'c2', label: 'WhatsApp', href: '#', icon: '/assets/images/whatsapp.png' },
      { id: 'c3', label: 'Email', href: 'mailto:example@example.com', icon: '/assets/images/email.png' }
    ]
  }
}

export type Lang = 'pt' | 'en'
