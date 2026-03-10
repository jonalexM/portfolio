# GIF Background Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a full-viewport animated GIF background with a dark overlay and frosted glass content styling.

**Architecture:** CSS background-image on the root div with a fixed overlay div for dimming. All sections and cards updated to use semi-transparent backgrounds with backdrop-blur for the frosted glass effect.

**Tech Stack:** React 18, Tailwind CSS v3, `bg-cover bg-center bg-fixed`, `backdrop-blur-*`, `bg-white/[opacity]`

---

## Task 1: Update `App.jsx` — background + overlay + z-index layering

**Files:**
- Modify: `src/App.jsx`

**Step 1: Apply the changes**

Replace the root div and add the overlay. The full file should look like:

```jsx
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
```

Key changes:
- Root div: removed `bg-white dark:bg-gray-950`, added `bg-cover bg-center bg-fixed` + inline `backgroundImage`
- Removed `transition-colors duration-200` (no longer toggling bg color)
- Added fixed overlay div (`z-0`) for dimming
- Wrapped all content in `relative z-10` so it sits above overlay
- `MusicPlayer` stays outside the z-10 wrapper (it uses `z-50` itself)

**Step 2: Verify in browser**

Check that `/bg.gif` is loaded (put any test gif there temporarily). Content should sit above the overlay.

---

## Task 2: Update `Navbar.jsx` — frosted glass

**Files:**
- Modify: `src/components/Navbar.jsx`

**Step 1: Apply the changes**

```jsx
export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-colors duration-200">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-sm tracking-tight text-white">Anxiaive.dev</span>
        <div className="flex items-center gap-6">
          {['About', 'Skills', 'Experience', 'Projects'].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-sm text-gray-300 hover:text-white transition-colors duration-150 hidden sm:block"
            >
              {section}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-md text-gray-300 hover:bg-white/10 transition-colors duration-150"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
```

Key changes:
- `bg-white/80 dark:bg-gray-950/80` → `bg-black/30`
- `backdrop-blur-sm` → `backdrop-blur-md`
- `border-gray-100 dark:border-gray-800` → `border-white/10`
- Nav links: `text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100` → `text-gray-300 hover:text-white`
- Dark toggle button: `hover:bg-gray-100 dark:hover:bg-gray-800` → `hover:bg-white/10`

---

## Task 3: Update `Skills.jsx` — frosted glass pills

**Files:**
- Modify: `src/components/Skills.jsx`

**Step 1: Apply the changes**

```jsx
import useInView from '../hooks/useInView'

const skills = [
  'Flutter', 'React', 'NestJS', 'Java', 'C++', 'Unity',
  'Python', 'Ruby on Rails', 'GCP Virtual Machine', 'Firebase',
  'MongoDB', 'FASTPANEL', 'Cloudflare DNS', 'Figma'
]

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-12 border-t border-white/10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm rounded-full border border-white/10 text-gray-300 bg-white/10"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
```

Key changes:
- Section border: `border-gray-100 dark:border-gray-800` → `border-white/10`
- Pills: `bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300` → `bg-white/10 border-white/10 text-gray-300`
- Heading: removed `dark:text-gray-500` (always on dark bg now)

---

## Task 4: Update `Experience.jsx` — frosted glass timeline

**Files:**
- Modify: `src/components/Experience.jsx`

**Step 1: Apply the changes**

```jsx
import useInView from '../hooks/useInView'

const experiences = [
  {
    company: 'Freelance',
    role: 'Associate Full Stack Developer',
    period: 'Present',
    current: true,
    bullets: [
      'Developing and maintaining web and mobile applications for a client.',
      'Working across the full stack using modern frameworks and deployment tools.',
    ],
  },
  {
    company: 'BEECALL Technology Business Incubator',
    role: 'IT Intern',
    period: 'Feb 2025 – May 2025',
    bullets: [
      'Built a website for Metro Naga Chamber of Commerce and Industry (mncci.biz) using GoDaddy.',
      'Developed a turtle tracking mobile app as a full stack developer.',
      'Published a workshop about AI for grade 1 to 12.',
    ],
  },
  {
    company: 'Ateneo De Naga University',
    role: 'Work Immersion',
    period: 'Nov 2019',
    bullets: [
      'Explored the importance of technopreneurship and business analytics.',
      'Exposed to Cybersecurity fundamentals.',
      'Developed and presented a CRUD web program using Ruby on Rails.',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section
      id="experience"
      ref={ref}
      className={`py-12 border-t border-white/10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${exp.current ? 'bg-green-400' : 'bg-white/40'}`} />
              <div className="w-px flex-1 bg-white/10 mt-2" />
            </div>
            <div className="pb-4">
              <div className="flex flex-wrap items-baseline gap-2 mb-1">
                <h3 className="font-semibold text-sm text-gray-100">{exp.company}</h3>
                <span className={`text-xs ${exp.current ? 'text-green-400' : 'text-gray-400'}`}>{exp.period}</span>
              </div>
              <p className="text-sm text-gray-400 mb-3">{exp.role}</p>
              <ul className="space-y-1">
                {exp.bullets.map((b) => (
                  <li key={b} className="text-sm text-gray-300 flex gap-2">
                    <span className="text-white/20 shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

Key changes:
- Section border: `border-white/10`
- Timeline dot (non-current): `bg-gray-400 dark:bg-gray-500` → `bg-white/40`
- Timeline line: `bg-gray-100 dark:bg-gray-800` → `bg-white/10`
- Text colors: removed `dark:` variants, unified to single values on dark bg

---

## Task 5: Update `Projects.jsx` — frosted glass cards

**Files:**
- Modify: `src/components/Projects.jsx`

**Step 1: Apply the changes**

```jsx
import useInView from '../hooks/useInView'

const projects = [
  {
    name: 'Trackle',
    description: 'Fully developed a turtle data tracking mobile application as a full stack developer.',
    tags: ['Flutter', 'Firebase'],
  },
  {
    name: 'mncci.biz',
    description: 'Built a website for Metro Naga Chamber of Commerce and Industry in collaboration with copywriters.',
    tags: ['GoDaddy', 'Web'],
    link: 'https://mncci.biz',
  },
  {
    name: 'WeFit',
    description: 'Part of the development of a mobile application for fitness enthusiasts.',
    tags: ['Flutter', 'Firebase'],
  },
  {
    name: 'PigKeep',
    description: 'Mobile and web application for pig farmers to computerize their farm data. Capstone project.',
    tags: ['Flutter', 'NestJS', 'MongoDB'],
    link: 'https://pigkeep.web.app/login',
  },
  {
    name: 'LMS',
    description: 'Designed and developed a library management system as a group thesis project for senior high school.',
    tags: ['Java', 'MySQL'],
  },
  {
    name: 'BlackJack Card Game',
    description: 'Educational BlackJack card game built as a final requirement in senior high school.',
    tags: ['Unity', 'C#'],
  },
]

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-12 border-t border-white/10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors duration-150"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-sm text-gray-100">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline underline-offset-2"
                  >
                    {project.name} ↗
                  </a>
                ) : project.name}
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

Key changes:
- Section border: `border-white/10`
- Cards: `bg-gray-50 dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700` → `bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20`
- Tags: `bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400` → `bg-white/10 text-gray-400`

---

## Task 6: Update `Footer.jsx` — frosted glass border

**Files:**
- Modify: `src/components/Footer.jsx`

**Step 1: Apply the changes**

```jsx
export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <span>Jon Alexander N. Maravilla</span>
        <a
          href="https://github.com/jlexm"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-200 transition-colors duration-150"
        >
          github.com/jlexm
        </a>
      </div>
    </footer>
  )
}
```

Key changes:
- Border: `border-gray-100 dark:border-gray-800` → `border-white/10`
- Text/hover: removed `dark:` variants, unified

---

## Task 7: Add placeholder GIF + verify

**Step 1: Ensure a GIF exists at `public/bg.gif`**

The user will replace this with their chosen GIF. For testing, any GIF works.

**Step 2: Start dev server and verify**

```bash
npm run dev
```

Check:
- GIF plays as background
- Dark overlay visible (content readable)
- Navbar has blur + glass effect
- Project cards show frosted glass
- Skills pills are semi-transparent
- Timeline looks correct
- No console errors
