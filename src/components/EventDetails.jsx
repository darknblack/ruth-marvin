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
    // <section className="section-padding khaki-bg relative z-10 overflow-hidden">

    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-khaki-100 via-khaki-50 to-khaki-100 z-10">

      {/* Decorative background blob elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-20 -left-32 md:-left-40 w-72 h-72 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 -right-32 md:-right-40 w-80 h-80 bg-khaki-50 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-khaki-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000 hidden lg:block"></div>
      </div>

      {/* Floating map and place-themed SVG elements - 2D map style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[6]">
        {/* Map Grid Pattern - Top Left */}
        <svg className="absolute top-16 left-8 w-32 h-32 animate-float" viewBox="0 0 100 100" fill="none" strokeWidth="1" style={{ animationDelay: '0s' }}>
          <line x1="10" y1="10" x2="10" y2="90" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="30" y1="10" x2="30" y2="90" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="50" y1="10" x2="50" y2="90" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="70" y1="10" x2="70" y2="90" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="90" y1="10" x2="90" y2="90" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="10" y1="10" x2="90" y2="10" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="10" y1="30" x2="90" y2="30" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="10" y1="50" x2="90" y2="50" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="10" y1="70" x2="90" y2="70" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
          <line x1="10" y1="90" x2="90" y2="90" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.08)" />
        </svg>

        {/* Compass Rose - Top Right */}
        <svg className="absolute top-24 right-12 w-24 h-24 animate-float-reverse" viewBox="0 0 100 100" fill="none" strokeWidth="1.5" style={{ animationDelay: '1s' }}>
          <circle cx="50" cy="50" r="35" stroke="rgba(232, 191, 90, 0.1)" fill="none" />
          <line x1="50" y1="15" x2="50" y2="50" stroke="rgba(232, 191, 90, 0.12)" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="85" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" />
          <line x1="15" y1="50" x2="50" y2="50" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" />
          <line x1="50" y1="50" x2="85" y2="50" stroke="rgba(232, 191, 90, 0.12)" strokeWidth="2" />
          <path d="M50 20 L45 35 L55 35 Z" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" fill="none" />
          <path d="M50 80 L45 65 L55 65 Z" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" fill="none" />
          <path d="M20 50 L35 45 L35 55 Z" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" fill="none" />
          <path d="M80 50 L65 45 L65 55 Z" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="4" stroke="rgba(232, 191, 90, 0.1)" fill="none" />
        </svg>

        {/* Building Outline - Middle Left */}
        <svg className="absolute top-1/2 left-6 transform -translate-y-1/2 w-20 h-20 animate-float" viewBox="0 0 100 100" fill="none" strokeWidth="2" style={{ animationDelay: '2s' }}>
          <rect x="20" y="30" width="25" height="50" stroke="rgba(212, 203, 184, 0.08)" fill="none" />
          <rect x="55" y="20" width="25" height="60" stroke="rgba(212, 203, 184, 0.08)" fill="none" />
          <line x1="32.5" y1="30" x2="32.5" y2="50" stroke="rgba(212, 203, 184, 0.08)" strokeWidth="1" />
          <line x1="45" y1="30" x2="45" y2="50" stroke="rgba(212, 203, 184, 0.08)" strokeWidth="1" />
          <line x1="67.5" y1="20" x2="67.5" y2="40" stroke="rgba(212, 203, 184, 0.08)" strokeWidth="1" />
          <line x1="80" y1="20" x2="80" y2="40" stroke="rgba(212, 203, 184, 0.08)" strokeWidth="1" />
        </svg>

        {/* Trail/Path - Bottom Left */}
        <svg className="absolute bottom-20 left-16 w-32 h-32 animate-float-reverse" viewBox="0 0 100 100" fill="none" strokeWidth="2" style={{ animationDelay: '1.5s' }}>
          <path d="M10 50 Q30 30, 50 40 Q70 50, 90 30" strokeLinecap="round" strokeDasharray="3,3" stroke="rgba(212, 203, 184, 0.08)" />
          <circle cx="10" cy="50" r="2" stroke="rgba(212, 203, 184, 0.08)" fill="none" strokeWidth="1.5" />
          <circle cx="50" cy="40" r="2" stroke="rgba(212, 203, 184, 0.08)" fill="none" strokeWidth="1.5" />
          <circle cx="90" cy="30" r="2" stroke="rgba(212, 203, 184, 0.08)" fill="none" strokeWidth="1.5" />
        </svg>

        {/* Map Route Lines - Middle Right */}
        <svg className="absolute top-1/3 right-8 w-24 h-24 animate-float" viewBox="0 0 100 100" fill="none" strokeWidth="2" style={{ animationDelay: '0.5s' }}>
          <path d="M20 30 L40 50 L60 40 L80 60" strokeDasharray="4,4" strokeLinecap="round" stroke="rgba(232, 191, 90, 0.08)" />
          <circle cx="20" cy="30" r="2" stroke="rgba(232, 191, 90, 0.08)" fill="none" strokeWidth="1.5" />
          <circle cx="80" cy="60" r="2" stroke="rgba(232, 191, 90, 0.08)" fill="none" strokeWidth="1.5" />
        </svg>

        {/* Map Route Lines - Top Center */}
        <svg className="absolute top-32 left-1/4 w-28 h-28 animate-float-reverse" viewBox="0 0 100 100" fill="none" strokeWidth="2" style={{ animationDelay: '2.5s' }}>
          <path d="M20 20 L40 30 L60 25 L80 35" strokeDasharray="4,4" strokeLinecap="round" stroke="rgba(212, 203, 184, 0.08)" />
          <circle cx="20" cy="20" r="2" stroke="rgba(212, 203, 184, 0.08)" fill="none" strokeWidth="1.5" />
          <circle cx="80" cy="35" r="2" stroke="rgba(212, 203, 184, 0.08)" fill="none" strokeWidth="1.5" />
        </svg>

        {/* Compass - Bottom Right */}
        <svg className="absolute bottom-24 right-16 w-20 h-20 animate-float" viewBox="0 0 100 100" fill="none" strokeWidth="1.5" style={{ animationDelay: '1.8s' }}>
          <circle cx="50" cy="50" r="30" stroke="rgba(232, 191, 90, 0.1)" fill="none" />
          <line x1="50" y1="20" x2="50" y2="50" stroke="rgba(232, 191, 90, 0.12)" strokeWidth="2" />
          <line x1="50" y1="50" x2="50" y2="80" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" />
          <line x1="20" y1="50" x2="50" y2="50" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" />
          <line x1="50" y1="50" x2="80" y2="50" stroke="rgba(232, 191, 90, 0.12)" strokeWidth="2" />
          <path d="M50 25 L45 40 L55 40 Z" stroke="rgba(232, 191, 90, 0.1)" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="3" stroke="rgba(232, 191, 90, 0.1)" fill="none" />
        </svg>

        {/* Trail Path - Middle Center */}
        <svg className="absolute top-2/3 left-1/3 w-26 h-26 animate-float-reverse" viewBox="0 0 100 100" fill="none" strokeWidth="2" style={{ animationDelay: '3s' }}>
          <path d="M15 60 Q35 45, 55 55 Q75 65, 85 50" strokeLinecap="round" strokeDasharray="3,3" stroke="rgba(212, 203, 184, 0.06)" />
          <circle cx="15" cy="60" r="2" stroke="rgba(212, 203, 184, 0.06)" fill="none" strokeWidth="1.5" />
          <circle cx="55" cy="55" r="2" stroke="rgba(212, 203, 184, 0.06)" fill="none" strokeWidth="1.5" />
          <circle cx="85" cy="50" r="2" stroke="rgba(212, 203, 184, 0.06)" fill="none" strokeWidth="1.5" />
        </svg>

        {/* Map Grid Pattern - Top Right Area */}
        <svg className="absolute top-40 right-1/4 w-20 h-20 animate-float" viewBox="0 0 100 100" fill="none" strokeWidth="1" style={{ animationDelay: '0.8s' }}>
          <line x1="15" y1="15" x2="15" y2="85" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="50" y1="15" x2="50" y2="85" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="85" y1="15" x2="85" y2="85" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="15" y1="15" x2="85" y2="15" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="15" y1="50" x2="85" y2="50" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="15" y1="85" x2="85" y2="85" strokeDasharray="2,3" stroke="rgba(212, 203, 184, 0.06)" />
        </svg>

        {/* Route Arrow - Bottom Left */}
        <svg className="absolute bottom-40 left-1/4 w-18 h-18 animate-float-reverse" viewBox="0 0 100 100" fill="none" strokeWidth="2" style={{ animationDelay: '2.2s' }}>
          <path d="M20 50 L60 50" strokeLinecap="round" strokeDasharray="3,3" stroke="rgba(232, 191, 90, 0.08)" />
          <path d="M50 30 L60 50 L50 70" stroke="rgba(232, 191, 90, 0.08)" strokeWidth="2" fill="none" />
        </svg>

        {/* Route Arrow - Top Left */}
        <svg className="absolute top-1/4 left-12 w-24 h-24 animate-float" viewBox="0 0 100 100" fill="none" strokeWidth="2" style={{ animationDelay: '1.2s' }}>
          <path d="M20 50 L60 50" strokeLinecap="round" strokeDasharray="3,3" stroke="rgba(212, 203, 184, 0.08)" />
          <path d="M50 30 L60 50 L50 70" stroke="rgba(212, 203, 184, 0.08)" strokeWidth="2" fill="none" />
        </svg>

        {/* Map Grid Lines - Bottom Center */}
        <svg className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-28 h-28 animate-float-reverse" viewBox="0 0 100 100" fill="none" strokeWidth="1" style={{ animationDelay: '2.8s' }}>
          <line x1="20" y1="20" x2="20" y2="80" strokeDasharray="2,2" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="2,2" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="80" y1="20" x2="80" y2="80" strokeDasharray="2,2" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="20" y1="20" x2="80" y2="20" strokeDasharray="2,2" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="20" y1="50" x2="80" y2="50" strokeDasharray="2,2" stroke="rgba(212, 203, 184, 0.06)" />
          <line x1="20" y1="80" x2="80" y2="80" strokeDasharray="2,2" stroke="rgba(212, 203, 184, 0.06)" />
        </svg>

        {/* Building Outline - Top Center */}
        <svg className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-22 h-22 animate-float" viewBox="0 0 100 100" fill="none" strokeWidth="1.5" style={{ animationDelay: '1.5s' }}>
          <rect x="25" y="40" width="20" height="40" stroke="rgba(212, 203, 184, 0.06)" fill="none" />
          <rect x="55" y="30" width="20" height="50" stroke="rgba(212, 203, 184, 0.06)" fill="none" />
          <line x1="30" y1="40" x2="30" y2="55" stroke="rgba(212, 203, 184, 0.06)" strokeWidth="1" />
          <line x1="40" y1="40" x2="40" y2="55" stroke="rgba(212, 203, 184, 0.06)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 px-4" ref={headerRef}>
          <h2 className="font-elegant text-3xl sm:text-4xl md:text-5xl font-bold text-khaki-700 mb-3 md:mb-4">
            Event Details
          </h2>
          <h3 className="font-script text-2xl sm:text-3xl md:text-4xl font-semibold text-khaki-500 mb-6 md:mb-8">
            Join Us for Our Special Day
          </h3>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-khaki-400 to-khaki-400"></div>
            <span className="text-2xl">✨</span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent via-khaki-400 to-khaki-400"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 px-4">
          {/* Left Column - Event Information */}
          <div ref={eventInfoRef} className="space-y-6">
            {/* Date Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-khaki-200/60 text-center">
              <div className="mb-6">
                <svg className="w-12 h-12 text-gold-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-elegant text-3xl md:text-4xl text-khaki-900 mb-2">December 20, 2025</p>
                <p className="font-script text-xl text-khaki-600">Saturday</p>
              </div>
            </div>

            {/* Events */}
            <div className="space-y-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-khaki-200/60">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h4 className="font-elegant text-xl md:text-2xl text-khaki-900 mb-2">{event.title}</h4>
                      <p className="text-sm text-khaki-700 italic">{event.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl md:text-3xl font-bold text-gold-600">{event.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-khaki-200/60">
              <div className="flex items-start gap-4 mb-4">
                <svg className="w-6 h-6 text-khaki-700 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex-1">
                  <h4 className="font-elegant text-xl md:text-2xl text-khaki-900 mb-2">{location.name}</h4>
                  <p className="text-sm text-khaki-700 mb-3">{location.address}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold-600 hover:text-gold-700 underline smooth-transition"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div ref={mapRef} className="relative">
            <div className="sticky top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-khaki-200/60 overflow-hidden h-full min-h-[500px]">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    minHeight: '500px',
                    filter: 'sepia(15%) saturate(85%) brightness(92%) contrast(88%) hue-rotate(-10deg)'
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Wedding Location Map"
                ></iframe>
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
      `}</style>
    </section>
  )
}

export default EventDetails

