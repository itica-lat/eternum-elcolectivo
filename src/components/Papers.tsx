import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, Search } from "lucide-react";
import { fadeUp, fadeUpStagger, fadeUpItem } from "../lib/animations";

const papers = [
  {
    title: "Registro de decisiones técnicas",
    desc: "Metodología para documentar decisiones de diseño y arquitectura entre equipos.",
    type: "PDF",
    size: "—",
  },
  {
    title: "Errores frecuentes y resoluciones",
    desc: "Compilación de errores encontrados durante el desarrollo y cómo se resolvieron.",
    type: "PDF",
    size: "—",
  },
  {
    title: "Guía de participación",
    desc: "Cómo contribuir a El Colectivo: qué circula, qué no, y cómo atribuir correctamente.",
    type: "Markdown",
    size: "—",
  },
];

export function Papers() {
  return (
    <motion.section
      id="papers"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-alt/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">Papers</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Documentación compartida entre equipos. Próximamente disponible.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {papers.map(({ title, desc, type, size }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -5, scale: 1.01 }}
              className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/20 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -15, 15, 0], transition: { duration: 0.5 } }}
                className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <FileText className="w-5 h-5 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-text mb-2">{title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">{desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted">
                  {type} · {size}
                </span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-xs text-primary flex items-center gap-1"
                >
                  <button className="flex hover:cursor-pointer hover:bg-green-400/20 p-2 rounded-lg">
                    <Download className="w-3 h-3 mr-1" />
                    Descargar
                  </button>
                </motion.span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/itica-lat/eternum-elcolectivo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-alt text-text hover:bg-surface-alt transition-colors duration-200"
          >
            <Search className="w-5 h-5" />
            Explorar el repositorio
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
