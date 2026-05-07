import { BookOpen, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded border border-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span className="font-semibold text-text">El Colectivo</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Red de conocimiento entre equipos · BT Informática 2026
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'GitHub', href: 'https://github.com/itica-lat/eternum-elcolectivo' },
                { label: 'Discussions', href: 'https://github.com/itica-lat/eternum-elcolectivo/discussions' },
                { label: 'Eternum', href: 'https://eternum.lat' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">
              Legal
            </h4>
            <p className="text-xs text-text-muted leading-relaxed mb-2">
              Todo el contenido está bajo licencia{' '}
              <a
                href="https://creativecommons.org/licenses/by-sa/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                CC BY-SA 4.0
              </a>
              .
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              Si tomás una idea de una discusión, atribuís al equipo original en tu entrega.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted flex items-center gap-1">
            Hecho con <Heart className="w-3 h-3 text-primary" /> por Eternum
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            CC BY-SA 4.0 · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
