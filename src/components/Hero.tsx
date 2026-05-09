import { motion } from "framer-motion";
import { BookOpen, Users, GitBranch } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Atmospheric radial gradient — centered behind the headline */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(1,135,144,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid texture — 1px lines at 4% opacity */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,183,181,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,183,181,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.42, 0, 0.58, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-strong bg-bright/10 text-bright text-sm font-medium mb-8"
        >
          <BookOpen className="w-4 h-4" />
          Red de conocimiento entre equipos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.42, 0, 0.58, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6"
        >
          El Colectivo
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.42, 0, 0.58, 1] }}
          className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-10 max-w-xl mx-auto"
        >
          Un espacio donde los equipos del proyecto SGRSI 2026 documentan errores, decisiones
          técnicas y procesos de razonamiento. No soluciones. Registro de cómo se llegó a ellas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://github.com/itica-lat/eternum-elcolectivo/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mid text-white dark:bg-bright dark:text-text-on-accent font-medium hover:bg-mid/90 dark:hover:filter-[brightness(1.1)_saturate(1.1)] transition-all duration-200"
          >
            <Users className="w-5 h-5" />
            Participar en la Charla
          </a>
          <a
            href="#sobre"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border dark:border-border-strong text-text-primary hover:bg-mid/5 dark:hover:bg-bright/8 dark:hover:border-bright transition-all duration-200"
          >
            <GitBranch className="w-5 h-5" />
            Conocer más
          </a>
        </motion.div>
      </div>
    </section>
  );
}
