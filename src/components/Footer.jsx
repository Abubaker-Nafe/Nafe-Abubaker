export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold text-white">N.A<span className="text-secondary">.</span></a>
            <p className="mt-2 text-gray-400">Crafting digital experiences with passion</p>
          </div>

          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 Nafe Abubaker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
