'use client'

import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

// Add your photos here - if empty array, shows "Photos coming soon"
const galleryData = {
  'Research Lab': [
    { src: '/gallery/research/Slide3.jpeg', alt: 'Working in the research lab' },
    // { src: '/gallery/research/lab-2.jpg', alt: 'PET/CT scan analysis' },
  ],
  'ISBI 2024': [
    // { src: '/gallery/isbi-2024/conference-1.jpg', alt: 'ISBI 2024 Conference' },
    // { src: '/gallery/isbi-2024/presentation.jpg', alt: 'Presenting research' },
  ],
  'Mongolia Mission': [
    // { src: '/gallery/mongolia/mission-1.jpg', alt: 'Medical mission' },
  ],
  'Leadership Events': [
    // { src: '/gallery/leadership/ptk-event.jpg', alt: 'PTK event' },
  ],
  'TOM:ATL': [
    // { src: '/gallery/tom-atl/makeathon.jpg', alt: 'Makeathon' },
  ],
  'Campus Life': [
    // { src: '/gallery/campus/gatech-1.jpg', alt: 'Georgia Tech' },
  ],
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const categories = [
    { title: 'Research Lab', icon: Camera, color: 'bg-blue-100' },
    { title: 'ISBI 2024', icon: Camera, color: 'bg-green-100' },
    { title: 'Mongolia Mission', icon: Camera, color: 'bg-orange-100' },
    { title: 'Leadership Events', icon: Camera, color: 'bg-purple-100' },
    { title: 'TOM:ATL', icon: Camera, color: 'bg-teal-100' },
    { title: 'Campus Life', icon: Camera, color: 'bg-indigo-100' },
  ]

  const currentCategoryImages = selectedCategory ? galleryData[selectedCategory as keyof typeof galleryData] : []

  const openCategory = (title: string) => {
    setSelectedCategory(title)
    setSelectedImageIndex(0)
  }

  const closeCategory = () => {
    setSelectedCategory(null)
    setIsFullScreen(false)
  }

  const openFullScreen = (index: number) => {
    setSelectedImageIndex(index)
    setIsFullScreen(true)
  }

  const nextImage = () => {
    if (currentCategoryImages.length > 0) {
      setSelectedImageIndex((prev) => (prev + 1) % currentCategoryImages.length)
    }
  }

  const prevImage = () => {
    if (currentCategoryImages.length > 0) {
      setSelectedImageIndex((prev) => (prev - 1 + currentCategoryImages.length) % currentCategoryImages.length)
    }
  }

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-900 to-purple-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-xl text-gray-100">
            Moments from my journey in research, leadership, and service
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          {/* Category Grid - Original 3-column layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((item) => (
              <div
                key={item.title}
                className={`${item.color} rounded-xl p-8 flex flex-col items-center justify-center h-64 cursor-pointer hover:opacity-80 transition-opacity`}
                onClick={() => openCategory(item.title)}
              >
                <item.icon className="text-gray-600 mb-4" size={48} />
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {galleryData[item.title as keyof typeof galleryData].length > 0
                    ? `${galleryData[item.title as keyof typeof galleryData].length} photos`
                    : 'Photos coming soon'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Modal - Shows photos when category is clicked */}
      {selectedCategory && !isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeCategory}
        >
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeCategory}
              className="sticky top-4 float-right mr-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Category content */}
            <div className="p-8 pt-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedCategory}</h2>

              {currentCategoryImages.length > 0 ? (
                <div className="grid md:grid-cols-3 gap-4">
                  {currentCategoryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-lg"
                      onClick={() => openFullScreen(index)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Camera className="mx-auto text-gray-400 mb-4" size={64} />
                  <p className="text-gray-600 text-lg">Photos coming soon</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Add images to /public/gallery/ to display them here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Image Modal - Shows single image in full screen */}
      {isFullScreen && currentCategoryImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullScreen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setIsFullScreen(false)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Previous button */}
            {currentCategoryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} className="text-gray-700" />
              </button>
            )}

            {/* Image */}
            <img
              src={currentCategoryImages[selectedImageIndex].src}
              alt={currentCategoryImages[selectedImageIndex].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            {currentCategoryImages.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Next image"
              >
                <ChevronRight size={32} className="text-gray-700" />
              </button>
            )}

            {/* Caption and counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 text-white px-6 py-3 rounded-lg">
              <p className="text-center">{currentCategoryImages[selectedImageIndex].alt}</p>
              {currentCategoryImages.length > 1 && (
                <p className="text-center text-sm text-gray-300 mt-1">
                  {selectedImageIndex + 1} / {currentCategoryImages.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
