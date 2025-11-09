import {Navbar, GreetingCard, AboutMeCard, SkillsCard, AiCard, ProjectsCard, ContactCard} from './components'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <GreetingCard />
        <AboutMeCard />
        <ProjectsCard />
        <SkillsCard />
        <AiCard />
        <ContactCard />
      </main>
    </div>
  )
}

export default App
