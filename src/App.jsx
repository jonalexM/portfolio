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
    <div className="min-h-screen text-gray-100">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src="https://res.cloudinary.com/dy5th0iv4/video/upload/v1773324636/asd_zpwpqu.mp4"
      />
      <div className="fixed inset-0 bg-gray-950/70 pointer-events-none -z-10" />
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
