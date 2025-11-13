import { Sparkles, Globe, Heart, Users } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-100">
            Discover my journey from Seoul to Atlanta,  
            <br />
            a journey of building, learning, and leading through technology
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-yellow-500" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Who I am</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                My name is Yeaeun Song-though I go by Caroline-and I'm an international student from South Korea
                studying Computer Engineering with a minor in Nuclear & Radiological Engineering at Georgia Tech.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-blue-500" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">The Journey</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                My path to computer engineering came into focus when I watched my dad, a healthcare professional, 
                using AI tools to improve patient outcomes. Seeing him blend human care with data-driven solutions 
                showed me how technology can transform not just industries—but lives. It was the moment I realized 
                I wanted to be on the side of building those tools.
              </p>
              <p>
                I began by exploring AI research, developing deep learning models for computer vision and medical imaging, 
                which taught me how to translate abstract ideas into measurable impact. From there, I expanded into 
                software engineering, working on web platforms and real-time translation tools that make information 
                more accessible to people in different environments.
              </p>
              <p>
                Through these experiences, I've come to see engineering as both a creative pursuit and a way to empower others.
                 Whether I'm leading a project, optimizing a neural network, or mentoring students, my goal remains the same—to 
                 create technology that is human-centered, scalable, and meaningful.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-red-500" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">Beyond the Code</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Outside of engineering, I balance my work with creative and hands-on pursuits. I enjoy crocheting, 
                knitting, and playing the cello and bass, activities that remind me that building something worthwhile 
                takes patience, iteration, and attention to detail—values I bring to software development and project design.
              </p>
              <p>
                I also believe in lifting others as I climb. As President of Phi Theta Kappa, I directed over 500 service hours, 
                learning that leadership is about empowering others to contribute their strengths. As President of the
                International Student Ambassadors, I fostered a sense of community for students from around the world. 
                Through tutoring 20+ students in the TRIO program, I’ve learned that the best technology, like good teaching, 
                serves everyone—not just those with privileged access.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-indigo-600" size={32} />
              <h2 className="text-3xl font-bold text-gray-900">My Approach</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p className="text-lg font-medium text-gray-900">
                I believe that creativity—whether through art, music, or technology—should create value and solve 
                meaningful problems. The best engineering is elegant, scalable, and built with the end user in mind.
              </p>
              <p>
                This drives everything I do. When I'm training a neural network, I'm thinking about real-world 
                applicability. When I'm building web applications, I'm architecting for maintainability and user 
                experience. When I'm implementing accessibility features, I'm ensuring technology works for everyone,
                regardless of their abilities or circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}