import { useEffect, useRef } from 'react'

function Bar({ label, pct }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.style.width = pct + '%'
        }
      })
    }
    const io = new IntersectionObserver(onIntersect, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [pct])

  return (
    <div>
      <div className="flex justify-between mb-2"><span>{label}</span><span>{pct}%</span></div>
      <div className="progress-bar"><div className="progress-fill" ref={ref} /></div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Technical Skills</h3>
            <div className="space-y-6">
              <Bar label="C/C#/Java/Python" pct={90} />
              <Bar label="Verilog/SystemVerilog" pct={85} />
              <Bar label="SQL/MongoDB" pct={90} />
              <Bar label="RESTful APIs/.NET Core" pct={90} />
              <Bar label="MIPS/x86 Assembly" pct={80} />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-comments text-primary text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">Communication</h4>
                <p className="text-gray-600">Clear articulation of ideas and active listening</p>
              </div>

              <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-primary text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">Problem Solving</h4>
                <p className="text-gray-600">Analytical approach to complex challenges</p>
              </div>

              <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-primary text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">Teamwork</h4>
                <p className="text-gray-600">Collaborative and supportive team player</p>
              </div>

              <div className="skill-card bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-tasks text-primary text-2xl"></i>
                </div>
                <h4 className="font-bold mb-2">Time Management</h4>
                <p className="text-gray-600">Efficient prioritization and deadline adherence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
