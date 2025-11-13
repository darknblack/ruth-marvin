import React, { useEffect, useRef } from 'react'

function PersonalMessage() {
  const cardRef = useRef(null)
  const messageRef = useRef(null)
  const photoRef = useRef(null)

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

    // Observe card container
    if (cardRef.current) {
      cardRef.current.classList.add('fade-in-on-scroll')
      observer.observe(cardRef.current)
    }

    // Observe message section
    if (messageRef.current) {
      messageRef.current.classList.add('fade-in-on-scroll')
      observer.observe(messageRef.current)
    }

    // Observe photo section
    if (photoRef.current) {
      photoRef.current.classList.add('fade-in-on-scroll')
      observer.observe(photoRef.current)
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current)
      if (messageRef.current) observer.unobserve(messageRef.current)
      if (photoRef.current) observer.unobserve(photoRef.current)
    }
  }, [])
  return (
    <section className="section-padding khaki-bg relative z-10 min-h-[100vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto">
        <div ref={cardRef} className="bg-khaki-50 rounded-lg shadow-lg p-8 md:p-12 border border-khaki-200 hover:shadow-xl smooth-transition romantic-hover">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Message */}
            <div ref={messageRef}>
              <p className="font-elegant text-lg md:text-xl text-khaki-800 leading-relaxed mb-6 italic">
                Our hearts are full as we begin this new chapter together.
                We hope to see you at our wedding and share in the joy of our love.
              </p>
              <p className="font-elegant text-lg md:text-xl text-khaki-800 leading-relaxed mb-6 italic">
                With all our love,
              </p>
              <p className="font-script text-3xl md:text-4xl text-khaki-900 font-bold">
                Ruth & Marvin
              </p>
            </div>

            {/* Photo Placeholder */}
            <div className="relative" ref={photoRef}>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-khaki-200 to-khaki-300 flex items-center justify-center">
                <div className="text-center">
                  <img src="/couple-hero.jpg" alt="Ruth & Marvin" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalMessage

