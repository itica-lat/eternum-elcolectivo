import { motion } from 'framer-motion'
import { BookOpen, Users, GitBranch } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#32E0C4 1px, transparent 1px), linear-gradient(90deg, #32E0C4 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-8"
        >
          <BookOpen className="w-4 h-4" />
          Red de conocimiento entre equipos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6"
        >
          El Colectivo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg sm:text-xl text-text-muted leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Un espacio donde los equipos del proyecto SGRSI 2026 documentan errores, decisiones técnicas y procesos de razonamiento. No soluciones. Registro de cómo se llegó a ellas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
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
        </motion.div>
      </div>
    </section>
  )
}
