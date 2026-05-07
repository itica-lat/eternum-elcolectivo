import { MessageSquare, ExternalLink, Globe, BookOpen } from 'lucide-react'

export function Talk() {
  return (
    <section id="charla" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              GitHub Discussions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              La Charla
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              Todo el conocimiento circula a través de GitHub Discussions. Cada hilo 
              queda atribuido, fechado y sin edición retroactiva. Participá con preguntas, 
              resoluciones o ideas sobre arquitectura y proceso.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Razonamientos y decisiones de diseño',
                'Errores encontrados y cómo se resolvieron',
                'Preguntas técnicas abiertas',
                'Ideas sobre arquitectura o proceso',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-text-muted">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/itica-lat/eternum-elcolectivo/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-surface font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              Ir a la Charla
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                <Globe className="w-24 h-24 text-primary/30" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-surface-alt border border-white/5 flex items-center justify-center p-4">
                <BookOpen className="w-8 h-8 text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
