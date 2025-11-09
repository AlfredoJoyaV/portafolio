type Technology = {
  name: string
  icon: string
  color: string
  url: string
  useWordmark?: boolean
}

export const SkillsCard = () => {
  const technologies = {
    frontend: [
      { name: 'HTML', icon: 'html5', color: 'E34F26', url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
      { name: 'CSS', icon: 'css3', color: '1572B6', url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '06B6D4', url: 'https://tailwindcss.com' },
      { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E', url: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'typescript', color: '3178C6', url: 'https://www.typescriptlang.org' },
      { name: 'React', icon: 'react', color: '61DAFB', url: 'https://react.dev' },
      { name: 'Next.js', icon: 'nextjs', color: '000000', url: 'https://nextjs.org' },
    ] as Technology[],
    backend: [
      { name: 'PHP', icon: 'php', color: '777BB4', url: 'https://www.php.net' },
      { name: 'Laravel', icon: 'laravel', color: 'FF2D20', url: 'https://laravel.com' },
      { name: 'Firebase', icon: 'firebase', color: 'FFCA28', url: 'https://firebase.google.com', useWordmark: true },
      { name: 'MySQL', icon: 'mysql', color: '4479A1', url: 'https://www.mysql.com', useWordmark: true },
    ] as Technology[],
    tools: [
      { name: 'Git', icon: 'git', color: 'F05032', url: 'https://git-scm.com' },
      { name: 'GitHub', icon: 'github', color: '181717', url: 'https://github.com' },
      { name: 'VSCode', icon: 'vscode', color: '007ACC', url: 'https://code.visualstudio.com' },
      { name: 'npm', icon: 'npm', color: 'CB3837', url: 'https://www.npmjs.com', useWordmark: true },
      { name: 'pnpm', icon: 'pnpm', color: 'F69220', url: 'https://pnpm.io' },
      { name: 'Terminal', icon: 'bash', color: '4EAA25', url: 'https://es.wikipedia.org/wiki/Terminal_(inform%C3%A1tica)' },
      { name: 'HTTPie', icon: 'python', color: '73DC8C', url: 'https://httpie.io' },
    ] as Technology[],
  }

  return (
    <section id="tecnologias" className="flex items-center justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-7xl w-full">
        <div className="space-y-10">
          {/* Título de la sección */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-3xl">💻</span>
            <h2 className="text-4xl md:text-5xl font-bold text-purple-400">
              Tecnologías
            </h2>
          </div>

          {/* Grid de categorías */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Herramientas Card */}
            <div className="bg-[rgba(20,25,45,0.6)] backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 lg:col-span-2 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🛠️</span>
                <h3 className="text-2xl font-bold text-cyan-300">HERRAMIENTAS</h3>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-7 gap-6 max-w-5xl mx-auto">
                {technologies.tools.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-${tech.useWordmark ? 'original-wordmark' : 'original'}.svg`}
                      alt={tech.name}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.shields.io/badge/-${tech.name}-${tech.color}?style=for-the-badge&logo=${tech.icon}&logoColor=white`
                      }}
                    />
                    <span className="text-sm text-white/80 text-center group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Frontend Card */}
            <div className="bg-[rgba(20,25,45,0.6)] backdrop-blur-md rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">⚛️</span>
                <h3 className="text-2xl font-bold text-purple-300">FRONTEND</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {technologies.frontend.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-original.svg`}
                      alt={tech.name}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.shields.io/badge/-${tech.name}-${tech.color}?style=for-the-badge&logo=${tech.icon}&logoColor=white`
                      }}
                    />
                    <span className="text-sm text-white/80 text-center group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Backend Card */}
            <div className="bg-[rgba(20,25,45,0.6)] backdrop-blur-md rounded-2xl p-8 border border-pink-500/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🔧</span>
                <h3 className="text-2xl font-bold text-pink-300">BACKEND</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {technologies.backend.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-${tech.useWordmark ? 'original-wordmark' : 'original'}.svg`}
                      alt={tech.name}
                      className="w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.shields.io/badge/-${tech.name}-${tech.color}?style=for-the-badge&logo=${tech.icon}&logoColor=white`
                      }}
                    />
                    <span className="text-sm text-white/80 text-center group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
