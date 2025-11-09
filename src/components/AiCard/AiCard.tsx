export const AiCard = () => {
  const aiTools = [
    {
      name: 'GitHub Copilot',
      description: 'Asistente de IA integrado en el editor que sugiere código en tiempo real mientras programas.',
      strengths: [
        'Autocompletado inteligente de código',
        'Generación de funciones completas',
        'Integración perfecta con VS Code',
        'Aprende de tu estilo de código'
      ],
      color: 'from-purple-500 to-blue-500',
      icon: '🚀',
      url: 'https://github.com/features/copilot'
    },
    {
      name: 'Microsoft Copilot',
      description: 'IA conversacional de Microsoft que ayuda con tareas diarias, búsquedas y productividad general.',
      strengths: [
        'Búsqueda inteligente web',
        'Generación de contenido',
        'Integración con Microsoft 365',
        'Asistente multiuso versátil'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: '💡',
      url: 'https://copilot.microsoft.com'
    },
    {
      name: 'Google Gemini',
      description: 'Modelo de IA avanzado de Google con capacidades multimodales para texto, imágenes y código.',
      strengths: [
        'Análisis multimodal avanzado',
        'Integración con Google Workspace',
        'Comprensión contextual profunda',
        'Generación de código optimizado'
      ],
      color: 'from-blue-400 to-purple-600',
      icon: '✨',
      url: 'https://gemini.google.com'
    },
    {
      name: 'ChatGPT',
      description: 'IA conversacional de OpenAI líder en procesamiento de lenguaje natural y asistencia general.',
      strengths: [
        'Conversaciones naturales fluidas',
        'Explicaciones detalladas',
        'Resolución de problemas complejos',
        'Amplio conocimiento general'
      ],
      color: 'from-green-400 to-emerald-600',
      icon: '🤖',
      url: 'https://chat.openai.com'
    }
  ]

  return (
    <section id="ai" className="flex items-center justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-7xl w-full">
        <div className="space-y-12">
          {/* Título de la sección */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl">🤖</span>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Inteligencia Artificial
              </h2>
            </div>
            <p className="text-xl text-white/70">
              Herramientas de IA que potencian mi desarrollo
            </p>
          </div>

          {/* Grid de tarjetas AI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiTools.map((ai, index) => (
              <a
                key={ai.name}
                href={ai.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-[rgba(20,25,45,0.8)] backdrop-blur-md rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Gradiente animado de fondo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${ai.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Efecto de brillo */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                  
                  {/* Contenido */}
                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
                        {ai.icon}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {ai.name}
                      </h3>
                    </div>

                    {/* Descripción */}
                    <p className="text-white/70 leading-relaxed">
                      {ai.description}
                    </p>

                    {/* Fortalezas */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-purple-300">Fortalezas:</p>
                      <ul className="space-y-1.5">
                        {ai.strengths.map((strength, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                            <span className="text-purple-400 mt-0.5">▸</span>
                            <span>{strength}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Indicador de link */}
                    <div className="flex items-center gap-2 text-purple-400 text-sm font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explorar</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Partículas decorativas */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
