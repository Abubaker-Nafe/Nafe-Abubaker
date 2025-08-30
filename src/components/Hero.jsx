import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import Typewriter from './Typewriter'

function TechTicker() {
  const marqueeRef = useRef(null)
  const trackRef = useRef(null)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const marquee = marqueeRef.current
    const track = trackRef.current
    if (!marquee || !track) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let x = 0, rafId = 0

    const io = new IntersectionObserver((entries) => {
      setPlaying(entries[0]?.isIntersecting ?? true)
    }, { threshold: 0.1 })
    io.observe(marquee)

    const step = () => {
      if (playing) {
        x -= 0.7
        track.style.transform = `translateX(${x}px)`
        const firstRow = track.firstElementChild
        if (firstRow && Math.abs(x) > firstRow.scrollWidth) x = 0
      }
      rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)

    const stop = () => cancelAnimationFrame(rafId)
    marquee.addEventListener('mouseenter', () => setPlaying(false))
    marquee.addEventListener('mouseleave', () => setPlaying(true))

    return () => { stop(); io.disconnect() }
  }, [playing])

  return (
    <div
      id="tech-marquee"
      ref={marqueeRef}
      className="mt-16 rounded-2xl bg-gray-100/80 dark:bg-gray-800/40 ring-1 ring-gray-200/70 dark:ring-white/10 px-4 overflow-x-hidden"
    >
      <div className="flex gap-10 whitespace-nowrap will-change-transform" id="tech-track" ref={trackRef}>
        <div className="flex items-center gap-10 text-gray-500 text-lg py-3">
          <span>.NET</span><span>React</span><span>MongoDB</span><span>SQL</span>
          <span>Python</span><span>YOLOv8</span><span>FastAPI</span>
          <span>SystemVerilog</span><span>GitHub</span><span>Azure</span>
        </div>
        <div className="flex items-center gap-10 text-gray-500 text-lg py-3" aria-hidden="true">
          <span>.NET</span><span>React</span><span>MongoDB</span><span>SQL</span>
          <span>Python</span><span>YOLOv8</span><span>FastAPI</span>
          <span>SystemVerilog</span><span>GitHub</span><span>Azure</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero pt-20">
      {/* decorative blobs */}
      <div className="blob blob-1" aria-hidden="true"></div>
      <div className="blob blob-2" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 md:pt-20 md:pb-12">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm <span className="text-primary">Nafe Abubaker</span></h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                <Typewriter words={["Computer Engineering Graduate","Backend Developer","AI / ML / CV Enthusiast", "Design Verification Engineer", "Data Analytics"]} />
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">A dedicated Computer Engineering graduate from Birzeit University with hands-on experience through technical training, pursuing opportunities to contribute to impactful projects and further develop my expertise.</p>
              <div className="flex space-x-4">
                <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:opacity-90 transition">View Projects</a>
                <a href="#contact" className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition">Contact Me</a>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img src="https://i.ibb.co/9H9mDBP8/n.jpg" alt="Nafe Abubaker - Computer Engineering Graduate" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -top-4 -left-4 bg-primary text-white p-3 rounded-full">
                  <i className="fas fa-code text-xl"></i>
                </div>
                <div className="absolute top-20 -right-10 bg-secondary text-white p-3 rounded-full floating">
                  <i className="fas fa-star text-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <TechTicker />
        </Reveal>
      </div>
    </section>
  )
}
