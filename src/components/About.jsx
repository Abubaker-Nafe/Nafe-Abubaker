export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-full">
            <h3 className="text-2xl font-bold mb-4">A Passionate Developer Ready for New Challenges</h3>
            <p className="text-gray-600 mb-6">
              Hello! I'm Nafe Abubaker, a dedicated Computer Engineering graduate from Birzeit University (B.Sc., July 2025). Having gained hands-on experience through internships and technical training at ASAL Technologies, I'm now pursuing entry-level opportunities to contribute to impactful projects, collaborate with multidisciplinary teams, and further develop my expertise in a professional setting.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="font-bold mb-1">Name:</p>
                <p className="text-gray-600">Nafe Abubaker</p>
              </div>
              <div>
                <p className="font-bold mb-1">Email:</p>
                <p className="text-gray-600">nafeabubaker@gmail.com</p>
              </div>
              <div>
                <p className="font-bold mb-1">From:</p>
                <p className="text-gray-600">Palestine, Ramallah</p>
              </div>
              <div>
                <p className="font-bold mb-1">Degree:</p>
                <p className="text-gray-600">B.S. Computer Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
