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
    <section className="section-padding relative z-10 min-h-[20vh] flex items-center justify-center overflow-hidden">
      {/* Decorative background blob elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blush-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-khaki-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000 hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div ref={cardRef} className="bg-khaki-50 rounded-lg shadow-lg p-8 md:p-12 invitation-border hover:shadow-xl smooth-transition romantic-hover relative">
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-khaki-400/60"></div>
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-khaki-400/60"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-khaki-400/60"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-khaki-400/60"></div>

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

      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1) rotate(120deg);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9) rotate(240deg);
          }
          100% {
            transform: translate(0px, 0px) scale(1) rotate(360deg);
          }
        }
        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        .invitation-border {
          border: 2px solid rgba(157, 138, 111, 0.3);
          position: relative;
        }
        .invitation-border::before {
          content: '';
          position: absolute;
          inset: 8px;
          border: 1px solid rgba(184, 170, 148, 0.4);
          border-radius: 0.375rem;
          pointer-events: none;
        }
        .invitation-border::after {
          content: '';
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(212, 203, 184, 0.3);
          border-radius: 0.25rem;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}

export default PersonalMessage

