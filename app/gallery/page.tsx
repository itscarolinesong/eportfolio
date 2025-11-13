'use client'

import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

// Add your photos here
const galleryData = {
  'Research Lab': [
    { src: '/gallery/research/Slide3.jpeg', alt: ''},
    { src: '/gallery/research/Slide5.jpeg', alt: ''},
    { src: '/gallery/research/Slide9.jpeg', alt: ''},
    { src: '/gallery/research/Slide10.jpeg', alt: ''},
    { src: '/gallery/research/Slide11.jpeg', alt: ''},
    { src: '/gallery/research/Slide12.jpeg', alt: ''},
    { src: '/gallery/research/Slide14.jpeg', alt: ''},
    { src: '/gallery/research/Slide15.jpeg', alt: ''},
    { src: '/gallery/research/Slide16.jpeg', alt: ''},
    { src: '/gallery/research/Slide17.jpeg', alt: ''},
    { src: '/gallery/research/Slide18.jpeg', alt: ''},
    { src: '/gallery/research/Slide19.jpeg', alt: ''},
    { src: '/gallery/research/Slide20.jpeg', alt: ''},
    { src: '/gallery/research/Slide21.jpeg', alt: ''},
    { src: '/gallery/research/Slide22.jpeg', alt: ''},
    { src: '/gallery/research/Slide23.jpeg', alt: ''},
    { src: '/gallery/research/Slide24.jpeg', alt: ''},
    { src: '/gallery/research/Slide25.jpeg', alt: ''},
    { src: '/gallery/research/Slide26.jpeg', alt: ''},
  ],
  'ISBI 2024': [
    // { src: '/gallery/isbi-2024/conference-1.jpg', alt: 'ISBI 2024 Conference' },
    // { src: '/gallery/isbi-2024/presentation.jpg', alt: 'Presenting research' },
  ],
  'Mongolia Mission': [
    { src: '/gallery/mongolia/1.jpeg', alt: ''},
    { src: '/gallery/mongolia/2.jpeg', alt: ''},
    { src: '/gallery/mongolia/3.jpg', alt: ''},
    { src: '/gallery/mongolia/4.jpg', alt: ''},
    { src: '/gallery/mongolia/5.jpg', alt: ''},
    { src: '/gallery/mongolia/6.jpg', alt: ''},
    { src: '/gallery/mongolia/7.jpg', alt: ''},
  ],
  'Leadership Events': [
    // { src: '/gallery/leadership/ptk-event.jpg', alt: 'PTK event' },
  ],
  'TOM:ATL': [
    { src: '/gallery/TOM/tom.png', alt: 'Makeathon' },
  ],
  'Campus Life': [
    // { src: '/gallery/campus/gatech-1.jpg', alt: 'Georgia Tech campus' },
  ],
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt?: string; category: string; index: number } | null>(null)

  const categories = [
    { title: 'Research Lab', color: 'bg-blue-100' },
    { title: 'ISBI 2024', color: 'bg-green-100' },
    { title: 'Mongolia Mission', color: 'bg-orange-100' },
    { title: 'Leadership Events', color: 'bg-purple-100' },
    { title: 'TOM:ATL', color: 'bg-teal-100' },
    { title: 'Campus Life', color: 'bg-indigo-100' },
  ]

  const allImages = categories.flatMap(category => 
    galleryData[category.title as keyof typeof galleryData].map((img, idx) => ({
      ...img,
      category: category.title,
      index: idx,
    }))
  )

  const currentImageIndex = selectedImage 
    ? allImages.findIndex(img => 
        img.category === selectedImage.category && img.index === selectedImage.index
      )
    : -1

  const nextImage = () => {
    if (currentImageIndex < allImages.length - 1) {
      const next = allImages[currentImageIndex + 1]
      setSelectedImage(next)
    }
  }

  const prevImage = () => {
    if (currentImageIndex > 0) {
      const prev = allImages[currentImageIndex - 1]
      setSelectedImage(prev)
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

      {/* Gallery Content - 3 Column Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category) => {
              const categoryImages = galleryData[category.title as keyof typeof galleryData]
              
              return (
                <div
                  key={category.title}
                  className={`${category.color} rounded-xl p-6 flex flex-col`}
                >
                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {category.title}
                  </h3>

                  {/* Photos Grid inside Card */}
                  {categoryImages.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2 flex-1">
                      {categoryImages.slice(0, 4).map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-md group"
                          onClick={() => setSelectedImage({ ...image, category: category.title, index })}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Placeholder when no photos
                    <div className="flex flex-col items-center justify-center flex-1 py-8">
                      <Camera className="text-gray-600 mb-4" size={48} />
                      <p className="text-sm text-gray-600">Photos coming soon</p>
                    </div>
                  )}

                  {/* Show count if more than 4 photos */}
                  {categoryImages.length > 4 && (
                    <p className="text-center text-sm text-gray-700 mt-3 font-semibold">
                      +{categoryImages.length - 4} more photos
                    </p>
                  )}

                  {/* Photo count */}
                  {categoryImages.length > 0 && (
                    <p className="text-center text-sm text-gray-600 mt-2">
                      {categoryImages.length} photo{categoryImages.length !== 1 ? 's' : ''}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              aria-label="Close"
            >
              <X size={24} className="text-gray-700" />
            </button>

            {/* Previous button */}
            {currentImageIndex > 0 && (
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
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            {currentImageIndex < allImages.length - 1 && (
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
              <p className="text-center">{selectedImage.alt}</p>
              <p className="text-center text-sm text-gray-300 mt-1">
                {selectedImage.category} • {currentImageIndex + 1} / {allImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
