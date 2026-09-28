import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import About from './components/About'
import Experience from './components/Experience'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './animations/gsapSetup'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <WhyWorkWithMe />
        <About />
        <Experience />
        <Technologies />
        <Contact />
      </main>
      <a
        className="whatsapp-float"
        href="https://wa.me/923257676105?text=Hello%20Nimra%2C%20I%20want%20to%20talk%20about%20a%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M20.52 3.48A11.77 11.77 0 0 0 12.06 0C5.47 0 .09 5.38.09 12.02c0 2.12.56 4.18 1.62 5.99L0 24l6.14-1.61a11.9 11.9 0 0 0 5.92 1.87h.01c6.6 0 11.97-5.38 11.97-12.02 0-3.2-1.24-6.22-3.52-8.77Zm-8.46 18.4h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.63.95 1-3.53-.24-.37a9.86 9.86 0 0 1-1.5-5.2c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.98c0 5.45-4.43 9.89-9.89 9.89Zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.28-.09-.48-.15-.69.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.08-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.8-1.68-2.1-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.08-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52l-.58-.01a1.11 1.11 0 0 0-.8.37c-.28.3-1.05 1.03-1.05 2.52 0 1.49 1.08 2.92 1.23 3.12.15.2 2.12 3.24 5.13 4.54.72.31 1.28.5 1.72.64.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z" fill="currentColor"/>
          </svg>
        </span>
        <span className="whatsapp-text">0325 7676105</span>
      </a>
      <Footer />
    </>
  )
}

export default App
