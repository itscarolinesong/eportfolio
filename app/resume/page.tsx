import { Download, GraduationCap, Briefcase, Award, Code, FileText, Users, Globe, Brain, Wrench, MessageSquare } from 'lucide-react'

export default function Resume() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-900 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
          <p className="text-xl text-gray-100 mb-6">
            Seeking Summer 2026 Internship!
          </p>
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            <Download size={20} />
            Download My Resume
          </a>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Education */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <GraduationCap className="text-indigo-600" size={32} />
              Education
            </h2>

            <div className="space-y-6">
            {/* Georgia Tech */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Georgia Institute of Technology
                </h3>
                <p className="text-indigo-600 font-semibold text-lg">
                  Bachelor of Science in Computer Engineering
                  <span className="ml-2 text-indigo-600 font-semibold">
                    | Minor: Nuclear & Radiological Engineering
                  </span>
                </p>
                <div className="mt-3">
                  <p className="text-gray-700 font-semibold">Threads:</p>
                  <ul className="text-gray-700 ml-4 mt-1 list-disc">
                    <li>Computer Hardware & Emerging Architectures</li>
                    <li>Systems Architecture</li>
                  </ul>
                </div>
                <p className="text-gray-700 mt-3">
                  <span className="font-semibold">Relevant Coursework:</span> Data Structures and Algorithms, Java Programming, 
                  Circuit Analysis, Engineering Statics, Differential Equations, Physics: Mechanics & Electricity, 
                </p>
              </div>

              {/* Right-aligned date */}
              <div className="mt-2 sm:mt-0 text-gray-500 font-medium text-right">
                <p>Expected Graduation: May 2027</p>
              </div>
            </div>

            {/* Moraine Valley */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Moraine Valley Community College
                </h3>
                <p className="text-indigo-600 font-semibold text-lg">
                  Associate Degree in Engineering Science
                </p>
                <p className="text-gray-600">GPA: 4.0/4.0</p>
              </div>

              {/* Right-aligned date */}
              <div className="mt-2 sm:mt-0 text-gray-500 font-medium text-right">
                <p>August 2023 – May 2025</p>
              </div>
            </div>
          </div>
        </div>

          {/* Technical Skills */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Code className="text-blue-600" size={32} />
              Technical Skills
            </h2>
            
            {/* Programming Languages */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="text-blue-500" size={24} />
                Programming Languages
              </h3>
              <div className="grid md:grid-cols-3 gap-3">
                {['Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'HTML/CSS'].map((skill) => (
                  <div key={skill} className="bg-blue-50 px-4 py-3 rounded-lg font-semibold text-gray-800 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* AI/ML Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Brain className="text-purple-500" size={24} />
                AI/ML & Deep Learning
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Frameworks & Libraries:</p>
                  <div className="grid md:grid-cols-4 gap-2">
                    {['PyTorch', 'TensorFlow', 'nnU-Net', 'Scikit-learn', 'Keras', 'OpenCV', 'NumPy', 'Pandas'].map((skill) => (
                      <div key={skill} className="bg-purple-50 px-3 py-2 rounded-lg text-gray-800 text-center text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Specializations:</p>
                  <div className="grid md:grid-cols-3 gap-2">
                    {['Medical Image Analysis', 'Computer Vision', '3D Segmentation', 'Neural Networks', 'Data Preprocessing', 'Data Augmentation'].map((skill) => (
                      <div key={skill} className="bg-indigo-50 px-3 py-2 rounded-lg text-gray-800 text-center text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Wrench className="text-green-500" size={24} />
                Tools & Frameworks
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Web Development:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['React', 'Next.js', 'Node.js', 'Tailwind CSS'].map((skill) => (
                      <div key={skill} className="bg-green-50 px-3 py-2 rounded-lg text-gray-800 text-center text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">Development Tools:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Git/GitHub', 'Docker', 'Linux/Unix', 'Jupyter'].map((skill) => (
                      <div key={skill} className="bg-teal-50 px-3 py-2 rounded-lg text-gray-800 text-center text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MessageSquare className="text-orange-500" size={24} />
                Professional Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { skill: 'Leadership', desc: 'Led 100+ member organizations' },
                  { skill: 'Mentorship', desc: 'Tutored 20+ students weekly' },
                  { skill: 'Communication', desc: 'Conference presentations' },
                  { skill: 'Multilingual', desc: 'Fluent in Korean & English' },
                  { skill: 'Cross-Cultural', desc: 'International experience' },
                  { skill: 'Problem-Solving', desc: 'Research-driven approach' },
                ].map((item) => (
                  <div key={item.skill} className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900 mb-1">{item.skill}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Briefcase className="text-blue-600" size={32} />
              Experience
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Math & Science Tutor / TRIO</h3>
                    <p className="text-blue-600 font-semibold">Moraine Valley Community College | Palos Hills, IL</p>
                  </div>
                  <span className="text-gray-500 font-medium">January 2024 - May 2025</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Tutored 20+ underserved students weekly in math, physics, and biology, through federally-funded program, TRIO</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Research Assistant</h3>
                    <p className="text-blue-600 font-semibold">Keimyung University, Department of Nuclear Medicine | Daegu, Korea</p>
                  </div>
                  <span className="text-gray-500 font-medium">2023-2024</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Conducted medical imaging research analyzing PET/CT data for neurological disorder diagnosis</li>
                  <li>• Developed deep learning models using nnU-Net and PyTorch for automated striatum segmentation</li>
                  <li>• Processed 1000+ clinical PET/CT datasets implementing robust data pipelines</li>
                  <li>• Presented research at ISBI 2024 international conference in Athens, Greece</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership Experience */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Users className="text-purple-600" size={32} />
              Leadership 
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">President</h3>
                    <p className="text-purple-600 font-semibold">Phi Theta Kappa Honor Society</p>
                  </div>
                  <span className="text-gray-500 font-medium">August 2024 - May 2025</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Led honors society chapter for two-years colleges with 100+ members</li>
                  <li>• Directed 500+ service hours benefiting local communities</li>
                  <li>• Coordinated academic events and study sessions</li>
                  <li>• Oversaw meetings, executive decisions, scholarship opportunities, and chapter communications</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">President</h3>
                    <p className="text-purple-600 font-semibold">International Student Ambassadors Organization</p>
                  </div>
                  <span className="text-gray-500 font-medium">August 2023 - May 2025</span>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li>• Fostered cultural integration for 200+ international students</li>
                  <li>• Organized fundraisers and cultural showcases</li>
                  <li>• Developed peer mentorship program, IMPAACT</li>
                  <li>• Managed recruitment, event planning, and collaboartion with Student Life Departments</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Volunteer & Service */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
              <Globe className="text-green-500" size={32} />
              Volunteer & Service
            </h2>
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Medical Mission Team Member</h3>
                  <p className="text-green-600 font-semibold">Mongolia Medical Mission Trip</p>
                </div>
                <span className="text-gray-500 font-medium">July 2024</span>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li>• Delivered healthcare to 200+ underserved patients in rural Mongolia</li>
                <li>• Developed Korean-Mongolian speech translation tool</li>
                <li>• Assisted with patient intake and medical equipment setup</li>
              </ul>
            </div>
          </div>


          {/* Honors & Recognition */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Honors & Recognition</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">ISBI 2024 Presenter</h3>
                <p className="text-gray-600">International Symposium on Biomedical Imaging</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">President’s List (4x)</h3>
                <p className="text-gray-600">
                  Fall 2023, Spring 2024, Fall 2024, Spring 2025
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">Honors Program Scholar</h3>
                <p className="text-gray-600">Moraine Valley Community College</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">John H Martinson Honors Program</h3>
                <p className="text-gray-600">Georgia Tech</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">PTK Scholarships</h3>
                <p className="text-gray-600">Hites Program 2025, <br/> 2024 Global Leaders of Promise Scholar Award</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900">Scholarships & Awards</h3>
                <p className="text-gray-600">
                  2024 Paul Simon Essay Contest – 2nd Place<br />
                  Support Staff Association Scholarship, 2024 International Student Scholarship, Book Scholarship (Fall 24, Spring 25)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
