import { Target, TrendingUp, Calendar, BookOpen, Briefcase, GraduationCap } from 'lucide-react'

export default function CareerGoals() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Goals</h1>
          <p className="text-xl text-gray-100">
            Strategic roadmap for success
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4">
          {/* Short-Term Goals */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-blue-600" size={36} />
              <h2 className="text-3xl font-bold text-gray-900">Short-Term Goals (2024-2027)</h2>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Deepen Technical Foundation</h3>
                <p className="text-gray-700">
                  Continue building expertise through advanced coursework in machine learning, computer vision, and 
                  embedded systems at Georgia Tech. Focus on courses like Deep Learning, Medical Image Analysis, and 
                  Real-Time Systems that directly support my career aspirations.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Expand Research Portfolio</h3>
                <p className="text-gray-700">
                  Continue refining my medical imaging research through undergraduate research opportunities or lab involvement. 
                  Explore opportunities to publish expanded findings from my striatum segmentation work and investigate new 
                  applications of deep learning in nuclear medicine and radiology.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Secure Summer 2026 Internship</h3>
                <p className="text-gray-700">
                  Target internship positions in AI/ML healthcare, biomedical engineering, or assistive technology companies. 
                  Ideal companies include medical device manufacturers, health tech startups, research institutions (NIH, Mayo Clinic), 
                  or tech companies with healthcare divisions (Google Health, Microsoft Healthcare, Amazon AWS Healthcare).
                </p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Contribute to Open Source</h3>
                <p className="text-gray-700">
                  Develop and contribute to open-source AI tools for clinical data analysis, medical image processing, 
                  or healthcare accessibility. Build a portfolio of reusable components and frameworks that demonstrate 
                  both technical skill and commitment to advancing the field.
                </p>
              </div>
            </div>
          </div>

          {/* Long-Term Vision */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-amber-600" size={36} />
              <h2 className="text-3xl font-bold text-gray-900">Long-Term Vision (5-10 Years)</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg leading-relaxed">
                I aspire to become a research engineer or entrepreneur developing intelligent systems for healthcare 
                diagnostics and accessibility. My ultimate goal is to design scalable AI solutions that assist clinicians 
                and improve quality of life for patients globally.
              </p>
              <br/> 
              <p className="text-lg leading-relaxed">
                This vision encompasses three key pillars: technical innovation through cutting-edge AI/ML research, 
                clinical translation by working directly with healthcare providers to ensure solutions meet real needs, 
                and global accessibility by prioritizing designs that work across resource-constrained settings.
              </p>
              <br/> 
              <p className="text-lg leading-relaxed">
                Whether through founding a health-tech startup focused on AI-powered diagnostic tools, leading research 
                initiatives at a major academic medical center, or driving innovation at a technology company's healthcare 
                division, I aim to create systems that democratize access to high-quality medical care.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="text-indigo-600" size={36} />
              <h2 className="text-3xl font-bold text-gray-900">Strategic Timeline</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">2025</div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="text-blue-600" size={20} />
                    <h4 className="font-bold">Join AI/ML Undergraduate Research Lab</h4>
                  </div>
                  <p className="text-gray-700">Secure position in an undergraduate research group</p>
                  <br/>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="text-blue-600" size={20} />
                    <h4 className="font-bold">Publish Expanded Medical Imaging Research</h4>
                  </div>
                  <p className="text-gray-700">Complete full research paper on striatum segmentation or related work</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold">2026</div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-green-600" size={20} />
                    <h4 className="font-bold">Summer Internship</h4>
                  </div>
                  <p className="text-gray-700">Gain industry experience at leading tech company</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-bold">2027</div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap className="text-purple-600" size={20} />
                    <h4 className="font-bold">Graduate from Georgia Tech</h4>
                  </div>
                  <p className="text-gray-700">Complete B.S. in Computer Engineering with Nuclear & Radiological Engineering minor</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="bg-amber-600 text-white px-4 py-2 rounded-lg font-bold">2028+</div>
                </div>
                <div className="flex-1 bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-amber-600" size={20} />
                    <h4 className="font-bold">Pursue Graduate Studies or Launch Tech Startup</h4>
                  </div>
                  <p className="text-gray-700">PhD in Engineering OR founding Healthcare company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
