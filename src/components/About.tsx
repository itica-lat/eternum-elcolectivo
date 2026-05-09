import { motion } from "framer-motion";
import { Lightbulb, Shield, Users } from "lucide-react";
import { fadeUp, fadeUpStagger, fadeUpItem } from "../lib/animations";

const highlights = [
  {
    icon: Lightbulb,
    title: "Qué es",
    text: "Una red de documentación colectiva entre equipos. Cada contribución queda atribuida al equipo que la generó, con marca de tiempo y sin edición retroactiva posible.",
  },
  {
    icon: Users,
    title: "Por qué se creó",
    text: "Para que ningún equipo enfrente solo los mismos problemas. Lo que un equipo descubre hoy, queda disponible para todos mañana. El conocimiento circula, los entregables no.",
  },
  {
    icon: Shield,
    title: "Gobernanza",
    text: "Las decisiones de acceso y moderación se toman por votación entre los coordinadores de todos los grupos activos. El nivel de participación depende de contribución medible.",
  },
];

export function About() {
  return (
    <motion.section
      id="sobre"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Sobre El Colectivo
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            BT Informática 2026 · El Colectivo · Eternum
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {highlights.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group p-6 rounded-2xl bg-surface-raised border border-border hover:border-bright/20 transition-colors duration-300"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.4 } }}
                className="w-10 h-10 rounded-xl bg-mid/10 flex items-center justify-center mb-4 group-hover:bg-mid/20 transition-colors"
              >
                <Icon className="w-5 h-5 text-mid" />
              </motion.div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
