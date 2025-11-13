'use client'

import { Microscope, ExternalLink, Github, TrendingUp, X } from 'lucide-react'
import { useState } from 'react'

export default function ResearchProjects() {
  const [showPosterModal, setShowPosterModal] = useState(false)

  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Endeavors</h1>
          <p className="text-xl text-gray-100">
            Advancing healthcare through AI-powered medical imaging and deep learning
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          {/* Discovery Project - Main Research */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Microscope size={36} />
                <h2 className="text-3xl font-bold">Striatum Segmentation Deep Learning Model</h2>
              </div>
              <p className="text-xl text-blue-100">Medical Imaging AI Research</p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Project Overview</h3>
                <p className="text-gray-700 leading-relaxed">
                  I developed a state-of-the-art deep learning model using PyTorch and nnU-Net to automatically segment 
                  the striatum region in F-18 FP-CIT PET/CT scans, significantly advancing the diagnostic process for 
                  Parkinson's disease. This research addresses a critical bottleneck in nuclear medicine: the time-consuming 
                  and variable nature of manual segmentation performed by radiologists.
                </p>
                
                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Technical Approach</h3>
                <p className="text-gray-700 leading-relaxed">
                  The project leveraged the nnU-Net architecture, a self-configuring deep learning framework 
                  that has demonstrated exceptional performance across various medical imaging segmentation tasks. My 
                  implementation involved several key technical components:
                </p>
                <br/>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    <strong>Brain-extraction Data Preprocessing:</strong> Extracted the brain prior to utilizing the images in developing a nnU-Net model
                  </li>
                  <li>
                    <strong>3D Segmentation Architecture:</strong> Implemented and optimized nnU-Net's 3D U-Net architecture, 
                    leveraging its automatic configuration of network topology, training strategy, and data augmentation based 
                    on dataset properties.
                  </li>
                  <li>
                    <strong>Training Strategy:</strong> Utilized advanced techniques including patch-based training, deep 
                    supervision, and ensemble prediction to maximize segmentation accuracy while maintaining computational 
                    efficiency.
                  </li>
                  <li>
                    <strong>Evaluation Metrics:</strong> Implemented comprehensive evaluation using Dice similarity coefficient, 
                    Hausdorff distance, and volume correlation metrics to validate model performance against expert radiologist 
                    annotations.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Key Achievements</h3>
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">ISBI 2024</div>
                    <div className="text-gray-700">Abstract accepted to International Symposium on Biomedical Imaging in Athens, Greece</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                    <div className="text-gray-700">Clinical datasets processed and analyzed for model training and validation</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600 mb-2">Automated</div>
                    <div className="text-gray-700">End-to-end pipeline for clinical deployment and real-time inference</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Clinical Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  This research contributes toward building AI systems that support clinicians in early neurological disorder 
                  detection. By automating striatum segmentation, the model reduces radiologist workload, improves consistency 
                  across interpretations, and enables faster diagnosis—crucial factors when early intervention can significantly 
                  impact patient outcomes.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900">Technical Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {['PyTorch', 'nnU-Net', 'Python', 'NumPy', 'Pandas', 'SimpleITK', 'Scikit-learn', 'Matplotlib'].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setShowPosterModal(true)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    View Research Poster
                  </button>
                  <a
                  href="https://github.com/itscarolinesong/brain-striatum-seg"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Github size={20} />
                      View Code
                    </button>
                  </a>
                  <a
                  href="https://pypi.org/project/brain-striatum-seg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                      <Github size={20} />
                      PyPI package
                    </button>
                  </a>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                    <ExternalLink size={20} />
                    Research Paper (Coming Soon)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Future Research Directions */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="text-indigo-600" size={36} />
              <h2 className="text-3xl font-bold text-gray-900">Future Research Directions</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Modal Medical Imaging</h3>
                <p className="text-gray-700">
                  Expanding the model to integrate multiple imaging modalities (MRI, CT, PET) for more comprehensive 
                  diagnostic analysis and improved segmentation accuracy across different neurological conditions.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real-Time Clinical Integration</h3>
                <p className="text-gray-700">
                  Developing deployment strategies for real-time inference in clinical settings
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Explainable AI for Medical Imaging</h3>
                <p className="text-gray-700">
                  Implementing interpretability techniques to provide clinicians with visual explanations of model predictions, 
                  enhancing trust and facilitating clinical adoption of AI-powered diagnostic tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poster Modal */}
      {showPosterModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPosterModal(false)}
        >
          <div 
            className="relative max-w-6xl w-full bg-white rounded-lg shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowPosterModal(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Poster image */}
            <div className="max-h-[90vh] overflow-auto">
              <img 
                src="/Poster.jpeg" 
                alt="Research Poster - Striatum Segmentation Deep Learning Model"
                className="w-full h-auto"
              />
            </div>

            {/* Optional: Download button */}
            <div className="absolute bottom-4 left-4">
              <a
                href="/Poster.jpeg"
                download="Research_Poster_Caroline_Song.jpeg"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg"
              >
                <ExternalLink size={20} />
                Download Poster
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
