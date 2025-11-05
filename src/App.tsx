import './App.css'
import Navbar from './components/Navbar'
import ContactCard from './components/ContactCard'

function App() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '80px', padding: '2rem' }}>
        <h1>Bienvenido a mi Portafolio</h1>
        <p>Contenido del portafolio aquí...</p>
      </div>
      <ContactCard />
    </>
  )
}

export default App
