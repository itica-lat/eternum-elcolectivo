import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre", label: "Sobre" },
  { id: "proyectos", label: "Proyectos" },
  { id: "charla", label: "Charla" },
  { id: "papers", label: "Papers" },
  { id: "contacto", label: "Contacto" },
] as const;

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nav-bg backdrop-blur-md border-b border-border">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <Logo size={36} alt />
          <span className="font-medium text-text-primary text-lg tracking-tight">El Colectivo</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group relative text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              {label}
              {/* Active-indicator dot: add `after:scale-x-100` when section is in view */}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-bright scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="https://github.com/itica-lat/eternum-elcolectivo/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-bright text-text-on-accent hover:filter-[brightness(1.1)_saturate(1.1)] transition-all duration-200"
          >
            Unirse
          </a>
        </div>
      </nav>
    </header>
  );
}
