import './App.css'
import Education from './components/Education'
import Footer from './components/Footer'
import Experience from './components/Experience'
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
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  )
}

export default App
