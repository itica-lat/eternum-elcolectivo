import { Mail, GitBranch, MapPin, Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contacto" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Contacto
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              ¿Querés sumar tu equipo a El Colectivo? Escribinos. Las decisiones de 
              acceso se toman por votación entre los coordinadores de todos los grupos activos.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'colectivo@eternum.lat' },
                { icon: GitBranch, label: 'GitHub', value: 'github.com/itica-lat/eternum-elcolectivo' },
                { icon: MapPin, label: 'Ubicación', value: 'BT Informática 2026 · CETP' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-alt flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted">{label}</p>
                    <p className="text-sm text-text">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 p-6 rounded-2xl bg-surface-alt/50 border border-white/5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Tu nombre o equipo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl bg-surface border border-white/10 text-text text-sm placeholder:text-text-muted/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Contanos sobre tu equipo..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-surface font-semibold hover:bg-primary/90 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
