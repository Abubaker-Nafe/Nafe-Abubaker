export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Education</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="timeline-item">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">Birzeit University</h3>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">2020-2025</span>
                </div>
                <p className="text-secondary font-medium mb-3">Bachelor of Computer Engineering</p>
                <p className="text-gray-600">Relevant coursework: Operating Systems, Database Systems, Data Structures, Object-Oriented Programming, Embedded Systems, Software Engineering.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">ASAL Technologies</h3>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">Sep 2024 - Feb 2025</span>
                </div>
                <p className="text-secondary font-medium mb-3">Backend Engineering Training Program</p>
                <p className="text-gray-600">Developed RESTful APIs using C#/.NET Core, integrated MongoDB for database operations, and collaborated with cross-functional teams to build scalable backend solutions.</p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">ASAL Technologies</h3>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-sm">Feb 2025 - Jul 2025</span>
                </div>
                <p className="text-secondary font-medium mb-3">Data Engineering Training Program</p>
                <p className="text-gray-600">Built ETL pipelines with Python/Prefect, processed NDJSON/CSV data from AWS S3, implemented data validation with Pydantic, and created aggregation reports with MongoDB and Pandas dashboards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
