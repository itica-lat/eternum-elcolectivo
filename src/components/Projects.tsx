import { motion } from 'framer-motion'
import { fadeUp, fadeUpStagger, fadeUpItem } from '../lib/animations'

const teams = [
  { name: 'Eternum', role: 'Fundador · Administrador' },
  { name: 'DataMiners', role: 'Participante' },
  { name: 'Nexus', role: 'Participante' },
  { name: 'TechFlow Solutions', role: 'Participante' },
  { name: 'PixelMind', role: 'Participante' },
  { name: 'InfoSquad', role: 'Participante' },
]

export function Projects() {
  return (
    <motion.section
      id="proyectos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-alt/30"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Equipos participantes
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Los equipos del BT Informática 2026 que construyen esta red de conocimiento
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {teams.map(({ name, role }) => (
            <motion.div
              key={name}
              variants={fadeUpItem}
              whileHover={{ y: -3, scale: 1.02 }}
              className="group p-5 rounded-xl bg-surface border border-white/5 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary/20 transition-colors shrink-0"
                >
                  <p>{name[0]}</p>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-text text-sm">{name}</h3>
                  <p className="text-xs text-text-muted">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
