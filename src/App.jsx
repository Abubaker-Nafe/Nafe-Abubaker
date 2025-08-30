import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'
import BackToTop from './components/BackToTop'

export default function App() {
  console.log('App rendered')
  return (
    <>
      <ScrollProgressBar />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <a href="#home" className="back-to-top" id="back-to-top" aria-label="Back to top">
        <i className="fas fa-chevron-up"></i>
      </a>
      <BackToTop />
    </>
  )
}
