import { motion } from 'framer-motion'
import { BookOpen, Heart } from 'lucide-react'
import { fadeUp, fadeUpStagger, fadeUpItem } from '../lib/animations'

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="border-t border-white/5 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUpStagger}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <motion.div variants={fadeUpItem}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded flex items-center justify-center">
                <img src="/img/logo-alt.png" alt="El Colectivo Logo" />
              </div>
              <span className="font-semibold text-text">El Colectivo</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              Red de conocimiento entre equipos · BT Informática 2026
            </p>
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <h4 className="text-xs font-semibold text-text uppercase tracking-wider mb-3">
              Enlaces
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'GitHub', href: 'https://github.com/itica-lat/eternum-elcolectivo' },
                { label: 'Discussions', href: 'https://github.com/itica-lat/eternum-elcolectivo/discussions' },
                { label: 'Eternum', href: 'https://eternum.lat' },
              ].map(({ label, href }) => (
                <motion.li key={label} whileHover={{ x: 3 }}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-text-muted hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpItem}>
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
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="text-xs text-text-muted flex items-center gap-1"
          >
            Hecho con <Heart className="w-3 h-3 text-primary" /> por Eternum
          </motion.p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            CC BY-SA 4.0 · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
