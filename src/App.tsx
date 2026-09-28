import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <Header name="Manu Zafra" />
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
