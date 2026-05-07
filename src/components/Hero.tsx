import { BookOpen, Users, GitBranch } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#32E0C4 1px, transparent 1px), linear-gradient(90deg, #32E0C4 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8 animate-fade-up">
          <BookOpen className="w-4 h-4" />
          Red de conocimiento entre equipos
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6 animate-fade-up animate-fade-up-delay-1">
          El Colectivo
        </h1>

        <p className="text-lg sm:text-xl text-text-muted leading-relaxed mb-10 max-w-xl mx-auto animate-fade-up animate-fade-up-delay-2">
          Un espacio donde los equipos del proyecto SGRSI 2026 documentan errores, decisiones técnicas y procesos de razonamiento. No soluciones. Registro de cómo se llegó a ellas.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up animate-fade-up-delay-3">
          <a
            href="https://github.com/itica-lat/eternum-elcolectivo/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-surface font-semibold hover:bg-primary/90 transition-all duration-200"
          >
            <Users className="w-5 h-5" />
            Participar en la Charla
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-alt text-text hover:bg-surface-alt transition-all duration-200"
          >
            <GitBranch className="w-5 h-5" />
            Conocer más
          </a>
        </div>
      </div>
    </section>
  )
}
