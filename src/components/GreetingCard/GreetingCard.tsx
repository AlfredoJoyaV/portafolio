export const GreetingCard = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-32 py-12">
      <div className="max-w-7xl w-full">
        <div className="space-y-6">
          {/* Saludo y nombre */}
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hola, <span className="text-purple-300">mi nombre es Erick Joya</span>
          </h1>
          
          {/* Titulo de la carrera y año de estudio */}
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl">
            Soy estudiante de 3er año de Ingeniería en Desarrollo de Software
          </p>
          
          {/* Descripción */}
          <div className="text-lg md:text-xl text-white/80 max-w-3xl space-y-4 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Doy vida a la visión digital</span> desarrollando{' '}
              <span className="text-white font-semibold">aplicaciones y sistemas escalables,</span> garantizando una experiencia de usuario impecable a través de la{' '}
              <span className="text-white font-semibold">optimización del rendimiento y la elegancia del código.</span>
            </p>
            {/*Pensamiento*/}
            <p>
              Creo que la programación es el{' '}
              <span className="text-white font-semibold">lenguaje del futuro:</span> nos da el poder de{' '}
              <span className="text-white font-semibold">convertir ideas abstractas en realidades funcionales,</span> transformando el mundo, línea por línea, con{' '}
              <span className="text-white font-semibold">precisión y creatividad.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

