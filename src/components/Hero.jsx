import useInView from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView()

  return (
    <section
      id="about"
      ref={ref}
      className={`py-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
    >
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-3">Based in Naga City, Philippines</p>
      <h1 className="text-3xl font-bold tracking-tight mb-2">Jon Alexander N. Maravilla</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-5">Software Developer</p>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
        Not the best dev but trying hard to be the most consistent one.
        Just a noob seeking to further develop technical skills and contribute to meaningful projects.
      </p>
      <div className="flex items-center gap-5">
        <a
          href="mailto:jonalexmrvs@gmail.com"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
        >
          jonalexmrvs@gmail.com
        </a>
      </div>
    </section>
  )
}
