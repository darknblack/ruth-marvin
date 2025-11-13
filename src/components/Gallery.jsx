import React, { useEffect, useRef } from 'react'

function Gallery() {
  const headerRef = useRef(null)
  const photosRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe header
    if (headerRef.current) {
      headerRef.current.classList.add('fade-in-on-scroll')
      observer.observe(headerRef.current)
    }

    // Observe photos
    photosRef.current.forEach(ref => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll')
        observer.observe(ref)
      }
    })

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      photosRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])
  // Placeholder images - replace with actual photos
  const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop", alt: "Couple photo 1" },
    { id: 2, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop", alt: "Couple photo 2" },
    { id: 3, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop", alt: "Couple photo 3" },
    { id: 4, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop", alt: "Couple photo 4" },
    { id: 5, src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop", alt: "Couple photo 5" },
    { id: 6, src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop", alt: "Couple photo 6" },
  ]

  return (
    <section className="section-padding khaki-light relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-khaki-900 mb-4">
            Our Memories
          </h2>
          <p className="text-lg text-khaki-700 font-script text-2xl">
            Moments we've shared together
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              ref={el => photosRef.current[index] = el}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transform hover:scale-105 transition-transform duration-300 border border-khaki-200"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-khaki-700 italic">
            * Replace these placeholder images with your actual photos
          </p>
        </div>
      </div>
    </section>
  )
}

export default Gallery

