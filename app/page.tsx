import Link from 'next/link'
import { ArrowRight, Code2, Heart, Microscope, Users } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold">
              Yeaeun (Caroline) Song
            </h1>
            <p className="text-xl md:text-2xl text-gray-100">
              Designing technology that empower people and inspires progress.
            </p>
            <p className="text-lg md:text-xl text-gray-200 max-w-4xl mx-auto">
              Hello! I'm Caroline, a Computer Engineering student at Georgia Tech passionate about 
              <br />
              AI/ML engineering and full-stack development. 
              <br />
              I specialize in developing deep learning models and building scalable applications
              <br />
              that solve real-world problems across diverse domains.
              <br /><br />
              Explore my portfolio to learn about my projects, research, leadership, 
              <br />
              and technical expertise in AI/ML and software development.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Link 
                href="/about" 
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                More About Me <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800">
            "Technology is best when it brings people together."
          </blockquote>
          <p className="text-gray-600 mt-4 text-lg">— Matt Mullenweg</p>
        </div>
      </section> */}

      {/* Quick Highlights */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Engineering Compassion through Human-centered Innovation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg card-hover">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Microscope className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI/ML Research</h3>
              <p className="text-gray-700">
                Developing deep learning models for medical imaging applications, 
                particularly in nuclear medicine and PET/CT scan analysis.
              </p>
              <Link href="/research" className="text-blue-600 font-semibold mt-4 inline-flex items-center hover:underline">
                View Research <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg card-hover">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Projects</h3>
              <p className="text-gray-700">
                Building full-stack web applications and accessibility tools that empower communities 
                and bridge cultural divides.
              </p>
              <Link href="/projects" className="text-purple-600 font-semibold mt-4 inline-flex items-center hover:underline">
                View Projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="p-6 bg-green-50 rounded-lg card-hover">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gallery</h3>
              <p className="text-gray-700">
                Step behind the scenes of my work - the process, people, 
                and purpsoe behind ach project and research endeavor.
              </p>
              <Link href="/gallery" className="text-green-600 font-semibold mt-4 inline-flex items-center hover:underline">
                View Gallery <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stats/Achievements */}
      <section className="section-padding bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.0</div>
              <div className="text-blue-200">GPA</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-blue-200">Clinical Datasets Analyzed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">ISBI 2024</div>
              <div className="text-blue-200">International Conference</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Service Hours Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Let's Build the Future Together!
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm actively seeking Summer 2026 internships in AI/ML engineering, 
            <br />
            healthcare technology, and assistive systems development.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/resume" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View Resume
            </Link>
            <Link 
              href="/career-goals" 
              className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors"
            >
              Career Roadmap
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
