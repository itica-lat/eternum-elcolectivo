import { motion } from 'framer-motion'
import { Mail, GitBranch, MapPin, Send } from 'lucide-react'
import { fadeUp, fadeUpStagger, fadeUpItem } from '../lib/animations'
import { p } from 'framer-motion/client'

export function Contact() {
  return (
    <motion.section
      id="contacto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div variants={fadeUpStagger}>
            <motion.h2
              variants={fadeUpItem}
              className="text-3xl sm:text-4xl font-bold text-text mb-4"
            >
              Contacto
            </motion.h2>
            <motion.p
              variants={fadeUpItem}
              className="text-text-muted leading-relaxed mb-8"
            >
              ¿Querés sumar tu equipo a El Colectivo? Escribinos. Las decisiones de
              acceso se toman por votación entre los coordinadores de todos los grupos activos.
            </motion.p>

            <motion.div
              variants={fadeUpStagger}
              className="space-y-4"
            >
              {[
                { icon: Mail, label: 'Email', type: 'email', value: 'colectivo@eternum.lat' },
                { icon: GitBranch, label: 'GitHub', type: 'url', value: 'https://github.com/itica-lat/eternum-elcolectivo', display: 'github.com/itica-lat/eternum-elcolectivo' },
                { icon: MapPin, label: 'Ubicación', type: 'text', value: 'Montevideo · Uruguay' },
              ].map(({ icon: Icon, label, type, value, display }) => (
                <motion.div
                  key={label}
                  variants={fadeUpItem}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    className="w-9 h-9 rounded-lg bg-surface-alt flex items-center justify-center shrink-0"
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </motion.div>
                  <div className='contact-way'>
                    <p className="text-xs text-text-muted">{label}</p>
                    <a
                      href={type === 'email' ? `mailto:${value}` : value}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-utm-source="colectivo-website"
                      className="text-sm text-text hover:text-primary transition-colors"
                    >
                      {display || value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 p-6 rounded-2xl bg-surface-alt/50 border border-white/5"
          >
            {[
              { id: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre o equipo' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
            ].map(({ id, label, type, placeholder }) => (
              <motion.div
                key={id}
                whileFocus={{ scale: 1.01 }}
              >
                <label htmlFor={id} className="block text-sm font-medium text-text mb-1.5">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder={placeholder}
                />
              </motion.div>
            ))}
            <motion.div whileFocus={{ scale: 1.01 }}>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Contanos sobre tu equipo..."
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-surface font-semibold hover:bg-primary/90 transition-colors duration-200"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}
