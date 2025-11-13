import { Users, Globe2, ExternalLink, Code, Heart, Sparkles, Database } from 'lucide-react'

export default function PersonalProjects() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-green-900 to-teal-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Projects</h1>
          <p className="text-xl text-gray-100">
            Building technology that empowers communities and bridges cultural divides
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* TOM:ATL Project */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-teal-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Users size={36} />
                <h2 className="text-3xl font-bold">TOM:ATL Makeathon Website Development</h2>
              </div>
              <p className="text-xl text-green-100">Full-Stack Development | Assistive Technology Platform</p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  I am currently developing a production-ready website for TOM:ATL (Tikkun Olam Makers: Atlanta), connecting 
                  makers across Georgia Tech, Emory University, and Kennesaw State University with individuals in need of 
                  assistive technology solutions. This platform serves as a hub for collaboration, innovation, and community 
                  empowerment.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4 my-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">Universal Accessibility</h4>
                    <p className="text-gray-700 text-sm">
                      Full WCAG compliance with text-to-speech, color inversion, and dynamic text sizing
                    </p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-bold text-teal-900 mb-2">Dynamic Content</h4>
                    <p className="text-gray-700 text-sm">
                      Google Sheets integration for easy content updates without code deployment
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Multi-University Network</h4>
                    <p className="text-gray-700 text-sm">
                      Connecting makers from Georgia Tech, Emory, and Kennesaw State
                    </p>
                  </div>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-bold text-indigo-900 mb-2">Community Focus</h4>
                    <p className="text-gray-700 text-sm">
                      Platform for collaboration on real-world assistive technology projects
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  The platform empowers communities to collaborate on inclusive, real-world engineering solutions for individuals 
                  with disabilities. By lowering barriers to participation and emphasizing universal design principles, TOM:ATL 
                  demonstrates how technology can foster meaningful connections and create tangible improvements in people's lives.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Technical Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Google Sheets API', 'Vercel', 'Git/GitHub'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                  href="https://tomatl-theta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
                      <ExternalLink size={20} />
                      Visit TOM:ATL Website
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* DocuBridge.ai */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Database size={36} />
                <h2 className="text-3xl font-bold">DocuBridge.ai</h2>
              </div>
              <p className="text-xl text-orange-100">Secure Local OCR | HackGT 12 </p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Project Inspiration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Inspired by a personal experience as a research assistant, we saw how doctors spent hours retyping faxed EMRs into pathology reports.
                  Existing OCR tools couldn’t be used due to patient privacy. We wanted a secure, lightweight, local platform to speed up reporting while keeping data private.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">What It Does</h3>
                <p className="text-gray-700 leading-relaxed">
                  DocuBridge.ai converts faxed EMRs into editable text, allowing doctors to view the original alongside the editable version, refine content using an interactive AI tool, and export finalized reports as PDFs. 
                  The system scales across multiple EMRs, reduces redundant typing, and improves report accuracy.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Technical Implementation</h3>
                <ul className="text-gray-700 space-y-3">
                  <li>
                    <strong>Local OCR:</strong> Used Tesseract.js to process all patient records locally for maximum privacy
                  </li>
                  <li>
                    <strong>AI-Powered Refinement:</strong> Lightweight prompt-based editing to improve report sections without relying on large LLMs
                  </li>
                  <li>
                    <strong>Custom Regex Mapping:</strong> Designed regex patterns to accurately extract fields from varied EMR formats
                  </li>
                  <li>
                    <strong>UI & Templates:</strong> Built in TypeScript on Cedar OS for intuitive, fast reporting workflows
                  </li>
                  <li>
                    <strong>Secure PDF Export:</strong> Users can export finalized reports without uploading any sensitive data
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Impact & Achievements</h3>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-gray-700">Processing done locally—no patient data leaves the computer</div>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">Fast</div>
                    <div className="text-gray-700">Reduces redundant typing and report turnaround time</div>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-pink-600 mb-2">Customizable</div>
                    <div className="text-gray-700">Adaptable OCR mapping for various EMR formats</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Learnings</h3>
                <p className="text-gray-700 leading-relaxed">
                  We learned to balance speed, accuracy, and security in a lightweight platform. This project gave hands-on experience with React.js, TypeScript, regex design, UI/UX, and building fully local AI-powered tools, all under tight timelines.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Built With</h3>
                <div className="flex flex-wrap gap-2">
                  {['Cedar OS', 'Next.js', 'Ollama', 'React', 'Regex', 'Tesseract.js', 'TypeScript'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">{tech}</span>
                  ))}
                </div>

                <div className="mt-8">
                  <a
                  href="https://devpost.com/software/medreport-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center gap-2">
                      <ExternalLink size={20} />
                      Visit DocuBridge.ai
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>


          {/* Personal Development Philosophy */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-purple-600" size={36} />
              <h2 className="text-3xl font-bold text-gray-900">Development Philosophy</h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                My personal projects reflect a core belief: <strong>technology should empower people, bridge divides, and 
                solve real-world problems.</strong> Whether building accessible platforms for assistive technology collaboration 
                or developing translation tools for underserved medical missions, I prioritize:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="text-blue-600" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">User-Centered Design</h3>
                  </div>
                  <p className="text-gray-700">
                    Understanding real user needs through direct engagement and iterative feedback
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="text-green-600" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">Accessibility First</h3>
                  </div>
                  <p className="text-gray-700">
                    Building inclusive solutions that work for everyone, regardless of abilities or circumstances
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe2 className="text-orange-600" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">Global Impact</h3>
                  </div>
                  <p className="text-gray-700">
                    Creating solutions that work in resource-constrained environments and diverse cultural contexts
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="text-purple-600" size={24} />
                    <h3 className="text-xl font-bold text-gray-900">Technical Excellence</h3>
                  </div>
                  <p className="text-gray-700">
                    Leveraging modern frameworks and best practices to build scalable, maintainable solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
