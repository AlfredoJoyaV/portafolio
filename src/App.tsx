import Navbar from './components/Navbar'
import ContactCard from './components/ContactCard'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section id="inicio" className="min-h-screen flex flex-col items-center justify-center px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Bienvenido a mi Portafolio</h1>
          <p className="text-xl text-white/80">Contenido del portafolio aquí...</p>
        </section>
        <ContactCard />
      </main>
    </div>
  )
}

export default App
