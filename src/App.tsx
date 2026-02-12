import './App.css'
import { LanguageProvider } from './contexts/LanguageProvider'
import LanguageToggle from './components/LanguageToggle'
import Hero from './assets/pages/home/sections/Hero/hero'
import SkillsStrip from './sections/SkillsStrip/SkillsStrip'
import About from './sections/About/About'
import ExperienceSection from './sections/Experience/Experience'
import Projects from './sections/Projects/Projects'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans">
        <LanguageToggle />
        <Hero />
        <SkillsStrip />
        <About />
        <ExperienceSection />
        <Projects />
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App
