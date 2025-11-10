export const ProjectsCard = () => {
  const projects = [
    {
      name: 'Portafolio Personal',
      description: 'Mi portafolio web profesional desarrollado con React, TypeScript y Tailwind CSS. Incluye animaciones modernas y diseño responsive.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/AlfredoJoyaV/portafolio',
      demo: 'https://alfredojoyav.github.io/portafolio',
      stars: 0,
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Citas Médicas',
      description: 'Sistema de gestión de citas médicas con funcionalidades para pacientes y doctores. Incluye programación de citas, historial médico y notificaciones.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MySQL'],
      github: 'https://github.com/AlfredoJoyaV/CitasMedicas',
      demo: '#',
      stars: 0,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'API REST',
      description: 'API RESTful robusta con autenticación JWT, documentación Swagger y endpoints optimizados para aplicaciones móviles.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JWT'],
      github: '#',
      demo: '#',
      stars: 0,
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section id="proyectos" className="flex items-center justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-7xl w-full">
        <div className="space-y-12">
          {/* Título de la sección */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">📁</span>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Proyectos
              </h2>
            </div>
            <p className="text-xl text-white/70">
              Algunos de mis trabajos destacados
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="group relative bg-[rgba(20,25,45,0.8)] backdrop-blur-md rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradiente de fondo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Contenido */}
                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {project.name}
                      </h3>
                    </div>
                    {project.stars > 0 && (
                      <div className="flex items-center gap-1 text-yellow-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm">{project.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Descripción */}
                  <p className="text-white/70 text-sm leading-relaxed min-h-[60px]">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white text-sm rounded-lg transition-all duration-300 border border-white/10 hover:border-white/30"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-500/50"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Efecto de esquina */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Link a GitHub */}
          <div className="text-center pt-8">
            <a
              href="https://github.com/AlfredoJoyaV?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Ver más proyectos en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
