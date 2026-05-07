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
    <section id="proyectos" className="py-24 px-4 sm:px-6 lg:px-8 bg-surface-alt/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Equipos participantes
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Los equipos del BT Informática 2026 que construyen esta red de conocimiento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teams.map(({ name, role }, i) => (
            <div
              key={name}
              className="group p-5 rounded-xl bg-surface border border-white/5 hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary/20 transition-colors">
                  {name[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-text text-sm">{name}</h3>
                  <p className="text-xs text-text-muted">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
