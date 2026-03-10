export default function Navbar({ dark, setDark }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10 transition-colors duration-200">
      <nav className="max-w-3xl mx-auto px-6 h-[75px] flex items-center justify-between">
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
