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
