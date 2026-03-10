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
