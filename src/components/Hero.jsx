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
      <p className="text-lg text-gray-500 dark:text-gray-400 mb-5">Junior Developer</p>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
        Not the best dev but trying hard to be the most consistent one.
        Just a noob seeking to further develop technical skills and contribute to meaningful projects.
      </p>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/jlexm"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150 flex items-center gap-1.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          github.com/jlexm
        </a>
        <a
          href="tel:+639765761015"
          className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150"
        >
          (+63) 976-5761-015
        </a>
      </div>
    </section>
  )
}
