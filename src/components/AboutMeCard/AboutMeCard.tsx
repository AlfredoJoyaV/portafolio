export const AboutMeCard = () => {
  return (
    <section id="sobre-mi" className="flex items-center justify-center px-8 md:px-16 lg:px-32 py-20">
      <div className="max-w-7xl w-full">
        <div className="flex justify-end">
          <div className="max-w-3xl space-y-6">
            {/* Título de la sección */}
            <div className="flex items-center gap-3 justify-end">
              <h2 className="text-4xl md:text-5xl font-bold text-purple-400">Te contare un poco sobre mi</h2>
            </div>

            {/* Presentación */}
            <div className="text-lg md:text-xl text-white/80 space-y-4 leading-relaxed text-right">
              <p>
                <span className="text-white font-semibold">¡Soy Erick Joya!,</span> soy estudiante de 3er. año en la carrera de{' '}
                <span className="text-white font-semibold">Ingenieria en Desarrollo de Software,</span> tambien me prepare en el Bootcamp{' '}
                <span className="text-white font-semibold">Full Stack Junior con Kodigo.</span>
              </p>

              {/* Expertise */}
              <p>
                <span className="text-white font-semibold">Desarrollador Full-Stack</span>{' '} con una sólida habilidad para
                <span className="text-white font-semibold"> integrar la experiencia completa del usuario,</span>{' '}desde la construcción de interfaces dinámicas con{' '}
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img 
                    src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white" 
                    alt="React" 
                    className="inline-block align-middle rounded-md hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
                {' '}/ {' '}
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img 
                    src="https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white" 
                    alt="Next.js" 
                    className="inline-block align-middle rounded-md hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
                {' '}hasta la creación de{' '}
                <span className="text-white font-semibold">APIs escalables</span>{' '}en{' '}<span className="text-white font-semibold">APIs escalables</span>{' '}
                <a href="https://www.php.net" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img 
                    src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=white" 
                    alt="PHP" 
                    className="inline-block align-middle rounded-md hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
                {' '}/ {' '}
                <a href="https://laravel.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <img 
                    src="https://img.shields.io/badge/-Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white" 
                    alt="Laravel" 
                    className="inline-block align-middle rounded-md hover:opacity-80 transition-opacity cursor-pointer"
                  />
                </a>
                . Mi especialidad es optimizar la interacción entre front-end y back-end para entregar{' '}
                <span className="text-white font-semibold">aplicaciones rápidas y de alto rendimiento.</span>
              </p>

              {/* Logros */}
              <div className="space-y-3 pt-4">
                <p className="text-white font-semibold text-xl">Entre mis logros destacados están:</p>
                <ul className="space-y-2 text-right list-none">
                  <li className="flex items-start justify-end gap-2">
                    <span>✓ Desarrollo de soluciones full-stack para <span className="text-white font-semibold">automatización</span> de procesos</span>
                  </li>
                  <li className="flex items-start justify-end gap-2">
                    <span>✓ Implementación de interfaces modernas con <span className="text-white font-semibold">React</span> y <span className="text-white font-semibold">Next.js</span></span>
                  </li>
                  <li className="flex items-start justify-end gap-2">
                    <span>✓ Creación de APIs eficientes con <span className="text-white font-semibold">Python</span> y <span className="text-white font-semibold">FastAPI</span></span>
                  </li>
                  <li className="flex items-start justify-end gap-2">
                    <span>✓ Transferencia de conocimiento técnico mediante <span className="text-white font-semibold">mentorías</span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
