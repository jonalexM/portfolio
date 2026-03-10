import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'

export default function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored ? stored === 'dark' : true
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-gray-100"
      style={{ backgroundImage: "url('/bg.gif')" }}
    >
      <div className="fixed inset-0 z-0 bg-gray-950/70 pointer-events-none" />
      <div className="relative z-10">
        <Navbar dark={dark} setDark={setDark} />
        <main className="max-w-3xl mx-auto px-6 pt-24">
          <Hero />
          <Skills />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
      <MusicPlayer />
    </div>
  )
}
