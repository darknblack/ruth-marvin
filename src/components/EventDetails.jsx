import React, { useEffect, useRef } from 'react'

function EventDetails() {
  const headerRef = useRef(null)
  const eventInfoRef = useRef(null)
  const mapRef = useRef(null)

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

    // Observe event info card
    if (eventInfoRef.current) {
      eventInfoRef.current.classList.add('fade-in-on-scroll')
      observer.observe(eventInfoRef.current)
    }

    // Observe map
    if (mapRef.current) {
      mapRef.current.classList.add('fade-in-on-scroll')
      observer.observe(mapRef.current)
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      if (eventInfoRef.current) observer.unobserve(eventInfoRef.current)
      if (mapRef.current) observer.unobserve(mapRef.current)
    }
  }, [])
  const location = {
    name: "Rose Garden Chapel",
    address: "123 Garden Lane, Beautiful City, BC 12345",
    // Google Maps embed URL - replace with your actual location
    // Format: https://www.google.com/maps/embed?pb=...
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576894!2d-73.98811768459398!3d40.75889597932678!2m3!1f0!2f0!3f0!3m2!1f1024!2f768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
  }

  const events = [
    {
      title: "Ceremony",
      time: "3:00 PM",
      description: "Join us for an intimate ceremony as we exchange vows"
    },
    {
      title: "Reception",
      time: "5:00 PM",
      description: "Celebrate with dinner, dancing, and endless joy"
    }
  ]

  return (
    <section className="section-padding khaki-bg relative z-10 overflow-hidden">
      {/* Decorative background blob elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 md:-left-40 w-72 h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 -right-32 md:-right-40 w-80 h-80 bg-blush-200 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-khaki-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000 hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={headerRef}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-gentle-pulse"></div>
            <span className="text-2xl md:text-3xl text-blush-400 animate-float animate-heartbeat">💒</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold-400 to-transparent animate-gentle-pulse"></div>
          </div>
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-khaki-900 mb-4">
            Event Details
          </h2>
          <p className="text-khaki-700 font-script text-2xl">
            We'd love to celebrate with you
          </p>
        </div>

        {/* Event details and map side by side */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Event Information */}
          <div ref={eventInfoRef} className="bg-khaki-50 rounded-lg shadow-lg p-8 hover:shadow-2xl smooth-transition border border-khaki-200 romantic-hover group">
            <div className="text-center mb-6">
              <h3 className="font-elegant text-3xl md:text-4xl font-bold text-khaki-900 mb-2">
                Ceremony & Reception
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-khaki-400 to-transparent mx-auto mb-4"></div>
            </div>

            <div className="space-y-6">
              {/* Date */}
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-khaki-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg font-semibold text-khaki-900">December 20, 2025</p>
                </div>
              </div>

              {/* Ceremony and Reception Times */}
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="pt-4 border-t border-khaki-300 first:border-t-0 first:pt-0 group/event smooth-transition"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-elegant text-xl font-semibold text-khaki-900 group-hover/event:text-gradient smooth-transition">{event.title}</h4>
                      <p className="text-xl font-bold text-gradient animate-gentle-pulse">{event.time}</p>
                    </div>
                    <p className="text-sm text-khaki-700 italic">{event.description}</p>
                    {/* Floating sparkle on hover */}
                    <span className="inline-block opacity-0 group-hover/event:opacity-60 animate-sparkle smooth-transition ml-2">✨</span>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-khaki-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-khaki-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-semibold text-khaki-900">{location.name}</p>
                </div>
                <p className="text-sm text-khaki-700 text-center">{location.address}</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div ref={mapRef} className="relative bg-gradient-to-br from-khaki-100 to-khaki-50 rounded-xl shadow-2xl overflow-hidden border-2 border-khaki-300/80 group hover:shadow-3xl smooth-transition">
            {/* Decorative corner accents with enhanced styling */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-[3px] border-l-[3px] border-khaki-500/60 rounded-tl-xl z-10 pointer-events-none shadow-lg"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-[3px] border-r-[3px] border-khaki-500/60 rounded-tr-xl z-10 pointer-events-none shadow-lg"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[3px] border-l-[3px] border-khaki-500/60 rounded-bl-xl z-10 pointer-events-none shadow-lg"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[3px] border-r-[3px] border-khaki-500/60 rounded-br-xl z-10 pointer-events-none shadow-lg"></div>

            {/* Ornamental corner details */}
            <div className="absolute top-2 left-2 w-3 h-3 bg-khaki-400/40 rounded-full z-10 pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-3 h-3 bg-khaki-400/40 rounded-full z-10 pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 bg-khaki-400/40 rounded-full z-10 pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-khaki-400/40 rounded-full z-10 pointer-events-none"></div>

            {/* Map container with enhanced warm overlays */}
            <div className="relative h-full min-h-[400px] md:min-h-full">
              {/* Multi-layer warm overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-khaki-50/40 via-transparent to-khaki-200/25 z-10 pointer-events-none mix-blend-soft-light"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-khaki-100/20 via-transparent to-transparent z-10 pointer-events-none"></div>

              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <iframe
                src={location.mapUrl}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  minHeight: '400px',
                  filter: 'sepia(15%) saturate(85%) brightness(92%) contrast(88%) hue-rotate(-10deg)'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full relative z-0 transition-transform duration-500 group-hover:scale-[1.01]"
                title="Wedding Location Map"
              ></iframe>

              {/* Enhanced vignette with multiple layers */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(63, 55, 46, 0.08) 100%)'
                }}
              ></div>
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to bottom, rgba(250, 249, 246, 0.1) 0%, transparent 20%, transparent 80%, rgba(63, 55, 46, 0.05) 100%)'
                }}
              ></div>
            </div>


            {/* Address badge at bottom */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-khaki-800 px-4 py-2.5 rounded-lg shadow-lg z-20 border border-khaki-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-xs font-medium text-center text-khaki-700">{location.address}</p>
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
      `}</style>
    </section>
  )
}

export default EventDetails

