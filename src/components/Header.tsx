import { Logo } from './Logo'

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'charla', label: 'Charla' },
  { id: 'papers', label: 'Papers' },
  { id: 'contacto', label: 'Contacto' },
] as const

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <Logo size={36} alt />
          <span className="font-semibold text-text text-lg tracking-tight">El Colectivo</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-text-muted hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="https://github.com/itica-lat/eternum-elcolectivo/discussions"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-surface hover:bg-primary/90 transition-all duration-200"
        >
          Unirse
        </a>
      </nav>
    </header>
  )
}
