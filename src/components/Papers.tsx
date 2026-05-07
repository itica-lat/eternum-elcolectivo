import { FileText, Download, ExternalLink, Search } from 'lucide-react'

const papers = [
  {
    title: 'Registro de decisiones técnicas',
    desc: 'Metodología para documentar decisiones de diseño y arquitectura entre equipos.',
    type: 'PDF',
    size: '—',
  },
  {
    title: 'Errores frecuentes y resoluciones',
    desc: 'Compilación de errores encontrados durante el desarrollo y cómo se resolvieron.',
    type: 'PDF',
    size: '—',
  },
  {
    title: 'Guía de participación',
    desc: 'Cómo contribuir a El Colectivo: qué circula, qué no, y cómo atribuir correctamente.',
    type: 'Markdown',
    size: '—',
  },
]

export function Papers() {
  return (
    <section id="papers" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-alt/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Papers
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Documentación compartida entre equipos. Próximamente disponible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {papers.map(({ title, desc, type, size }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-text mb-2">{title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">{type} · {size}</span>
                <span className="text-xs text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download className="w-3 h-3" />
                  Descargar
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/itica-lat/eternum-elcolectivo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-alt text-text hover:bg-surface-alt transition-all duration-200"
          >
            <Search className="w-5 h-5" />
            Explorar el repositorio
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
