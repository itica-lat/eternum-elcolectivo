import { motion } from 'framer-motion'
import { MessageSquare, ExternalLink, Globe, BookOpen } from 'lucide-react'
import { fadeUpItem, fadeUpStagger, scaleIn } from '../lib/animations'

export function Talk() {
  return (
    <motion.section
      id="charla"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUpStagger}>
            <motion.div
              variants={fadeUpItem}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              GitHub Discussions
            </motion.div>
            <motion.h2
              variants={fadeUpItem}
              className="text-3xl sm:text-4xl font-bold text-text mb-4"
            >
              La Charla
            </motion.h2>
            <motion.p
              variants={fadeUpItem}
              className="text-text-muted leading-relaxed mb-6"
            >
              Todo el conocimiento circula a través de GitHub Discussions. Cada hilo
              queda atribuido, fechado y sin edición retroactiva. Participá con preguntas,
              resoluciones o ideas sobre arquitectura y proceso.
            </motion.p>
            <motion.ul
              variants={fadeUpStagger}
              className="space-y-3 mb-8"
            >
              {[
                'Razonamientos y decisiones de diseño',
                'Errores encontrados y cómo se resolvieron',
                'Preguntas técnicas abiertas',
                'Ideas sobre arquitectura o proceso',
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUpItem}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"
                    whileHover={{ scale: 2 }}
                  />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              variants={fadeUpItem}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://github.com/itica-lat/eternum-elcolectivo/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-surface font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              Ir a la Charla
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={scaleIn}
            className="hidden lg:flex items-center justify-center"
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
            >
              <div className="w-64 h-64 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                <div className="w-24 h-24" style={{ opacity: 0.3 }}>
                  <Globe className="w-full h-full text-primary" />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-surface-alt border border-white/5 flex items-center justify-center p-4"
                animate={{ rotate: [0, 5, -5, 0], transition: { duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] } }}
              >
                <div className="w-8 h-8" style={{ opacity: 0.4 }}>
                  <BookOpen className="w-full h-full text-primary" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
