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
