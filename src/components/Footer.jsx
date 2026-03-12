export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-8 mt-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-400">
        <span>Jon Alexander N. Maravilla</span>
        <a
          href="mailto:jonalexmrvs@gmail.com"
          className="hover:text-gray-200 transition-colors duration-150"
        >
          jonalexmrvs@gmail.com
        </a>
      </div>
    </footer>
  )
}
