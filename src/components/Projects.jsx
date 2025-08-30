import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Reveal>
            <div className="project-card bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-hidden">
              <div className="project-image h-48 bg-gray-200">
                <img src="https://i.ibb.co/67yrLgCk/palstorehub.png" alt="PalStoreHub - Multi-vendor e-commerce platform" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">PalStoreHub</h3>
              <p className="text-gray-600 mb-4">A full-stack, multi-vendor e-commerce platform that lets Palestinian entrepreneurs spin up their own online stores and list products from a single hub. Also allows tourists to discover various stores in palestine.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">.Net</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex space-x-4 items-center justify-center mt-4">
                <a href="https://github.com/Abubaker-Nafe/PalStoreHub" target="_blank" rel="noreferrer" aria-label="PalStoreHub on GitHub" className="text-primary hover:opacity-90">
                  <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://palstorehub.azurewebsites.net/" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline">Website →</a>
              </div>
            </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="project-card bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-hidden">
              <div className="project-image h-48 bg-gray-200">
                <img src="https://i.ibb.co/p6CpxVnD/to-explain-from.png" alt="Traffic Light Management System" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Traffic Light Management & Violation Detection</h3>
              <p className="text-gray-600 mb-4">Capstone project processing drone videos at 30 FPS using YOLOv8 + SORT tracking to detect vehicles and traffic-light states. Implemented congestion metrics, adaptive signal timing (25% queue reduction in tests), and red-light violation detection. Results were shown on a website built with FastAPI backend and React dashboard.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Computer Vision</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">YOLOv8</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MongoDB</span>
              </div>
              <div className="flex space-x-4 items-center justify-center mt-4">
                <a href="https://github.com/Abubaker-Nafe/Traffic-Management-and-Red-Light-Violation" target="_blank" rel="noreferrer" aria-label="Traffic Management project on GitHub" className="text-primary hover:opacity-90">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>
            </div>
          </Reveal>
        </div>

        <div className="text-center mt-12">
          <a href="https://github.com/Abubaker-Nafe?tab=repositories" target="_blank" rel="noreferrer" className="px-6 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition">View All Projects</a>
        </div>
      </div>
    </section>
  )
}
