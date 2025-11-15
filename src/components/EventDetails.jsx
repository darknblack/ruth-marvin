import React, { useEffect, useRef, useState } from 'react'

function EventDetails() {
  const headerRef = useRef(null)
  const eventInfoRef = useRef(null)
  const [isMapOpen, setIsMapOpen] = useState(false)

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

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      if (eventInfoRef.current) observer.unobserve(eventInfoRef.current)
    }
  }, [])

  // Handle ESC key to close map
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMapOpen) {
        setIsMapOpen(false)
      }
    }

    // Prevent body scroll when map is open
    if (isMapOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isMapOpen])
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
      description: "Join us for an intimate ceremony as we exchange vows",
      icon: "💒"
    },
    {
      title: "Photoshoot",
      time: "4:00 PM",
      description: "Capture beautiful moments with family and friends",
      icon: "📸"
    },
    {
      title: "Dinner",
      time: "5:30 PM",
      description: "Celebrate with dinner, dancing, and endless joy",
      icon: "🍽️"
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden z-10 min-h-screen">
      {/* Google Maps Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <iframe
          src={location.mapUrl}
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'sepia(20%) saturate(70%) brightness(85%) contrast(90%) hue-rotate(-15deg)',
            pointerEvents: 'none'
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Wedding Location Map Background"
        ></iframe>
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-khaki-100/85 via-khaki-50/80 to-khaki-100/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-khaki-50/60 via-transparent to-khaki-50/60"></div>
      </div>

      {/* Decorative background blob elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block z-[1]">
        <div className="absolute top-20 -left-32 md:-left-40 w-72 h-72 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 -right-32 md:-right-40 w-80 h-80 bg-khaki-50 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-khaki-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000 hidden lg:block"></div>
      </div>

      {/* Elegant Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        {/* Floral/Decorative Elements */}
        <svg className="absolute top-20 left-8 w-24 h-24 animate-float opacity-10" viewBox="0 0 100 100" fill="none" strokeWidth="1" style={{ animationDelay: '0s' }}>
          <circle cx="50" cy="50" r="40" stroke="rgba(232, 191, 90, 0.3)" fill="none" />
          <path d="M50 10 Q60 30, 50 50 Q40 30, 50 10" stroke="rgba(232, 191, 90, 0.2)" fill="none" />
          <path d="M50 90 Q60 70, 50 50 Q40 70, 50 90" stroke="rgba(232, 191, 90, 0.2)" fill="none" />
          <path d="M10 50 Q30 60, 50 50 Q30 40, 10 50" stroke="rgba(232, 191, 90, 0.2)" fill="none" />
          <path d="M90 50 Q70 60, 50 50 Q70 40, 90 50" stroke="rgba(232, 191, 90, 0.2)" fill="none" />
        </svg>

        <svg className="absolute bottom-24 right-12 w-20 h-20 animate-float-reverse opacity-10" viewBox="0 0 100 100" fill="none" strokeWidth="1" style={{ animationDelay: '1s' }}>
          <circle cx="50" cy="50" r="35" stroke="rgba(212, 203, 184, 0.3)" fill="none" />
          <path d="M50 15 Q55 35, 50 50 Q45 35, 50 15" stroke="rgba(212, 203, 184, 0.2)" fill="none" />
          <path d="M50 85 Q55 65, 50 50 Q45 65, 50 85" stroke="rgba(212, 203, 184, 0.2)" fill="none" />
        </svg>

        {/* Subtle Pattern Elements */}
        <div className="absolute top-1/4 right-16 w-16 h-16 animate-float opacity-5" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full border border-gold-400/30 rounded-full"></div>
        </div>

        <div className="absolute bottom-1/3 left-20 w-12 h-12 animate-float-reverse opacity-5" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full border border-khaki-400/30 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-8">
        {/* Wedding Invitation Card */}
        <div ref={eventInfoRef} className="relative">
          {/* Main Invitation Card */}
          <div className="bg-gradient-to-br from-invitation-cream via-white to-invitation-beige shadow-2xl relative overflow-hidden">
            {/* Romantic Background Elements - Burnt Spots & Stains */}
            <div className="absolute inset-0 pointer-events-none z-0">
              {/* Candle flame glow - top left */}
              <div className="absolute top-12 left-10 w-20 h-32 opacity-60 animate-candle-flicker-subtle" style={{ animationDelay: '0s' }}>
                <svg viewBox="0 0 80 120" className="w-full h-full" style={{ filter: 'blur(8px)' }}>
                  <ellipse cx="40" cy="80" rx="25" ry="15" fill="rgba(255, 183, 77, 0.08)" />
                  <ellipse cx="40" cy="60" rx="20" ry="25" fill="rgba(255, 152, 0, 0.10)" />
                  <ellipse cx="40" cy="40" rx="15" ry="20" fill="rgba(255, 193, 7, 0.08)" />
                  <ellipse cx="40" cy="25" rx="10" ry="12" fill="rgba(255, 224, 130, 0.06)" />
                </svg>
              </div>

              {/* Coffee stain - top right */}
              <div className="absolute top-20 right-16 w-24 h-28 opacity-100">
                <svg viewBox="0 0 100 120" className="w-full h-full">
                  <path d="M30 40 Q20 30, 25 50 Q30 70, 40 60 Q50 50, 60 55 Q70 60, 75 50 Q80 40, 70 35 Q60 30, 50 35 Q40 30, 30 40 Z"
                    fill="rgba(107, 95, 82, 0.12)" opacity="0.6" />
                  <path d="M35 45 Q28 38, 32 52 Q36 66, 45 58 Q52 52, 58 56 Q64 60, 68 52 Q72 44, 65 40 Q58 36, 50 40 Q42 36, 35 45 Z"
                    fill="rgba(107, 95, 82, 0.15)" opacity="0.5" />
                </svg>
              </div>

              {/* Warm glow spot - middle left */}
              <div className="absolute top-1/2 left-8 -translate-y-1/2 w-40 h-40 opacity-60">
                <div className="w-full h-full rounded-full blur-2xl" style={{
                  background: 'radial-gradient(circle, rgba(232, 191, 90, 0.20) 0%, rgba(232, 191, 90, 0.10) 50%, transparent 80%)'
                }}></div>
              </div>

              {/* Aged paper spot - bottom right */}
              <div className="absolute bottom-20 right-12 w-28 h-32 opacity-80">
                <svg viewBox="0 0 100 120" className="w-full h-full">
                  <ellipse cx="50" cy="40" rx="35" ry="25" fill="rgba(212, 203, 184, 0.15)" opacity="0.4" />
                  <ellipse cx="45" cy="50" rx="20" ry="15" fill="rgba(184, 170, 148, 0.12)" opacity="0.3" />
                  <ellipse cx="55" cy="65" rx="25" ry="18" fill="rgba(212, 203, 184, 0.1)" opacity="0.25" />
                </svg>
              </div>

              {/* Small candle flame - bottom left */}
              <div className="absolute bottom-20 left-14 w-16 h-24 opacity-50 animate-candle-flicker-subtle" style={{ animationDelay: '2.5s' }}>
                <svg viewBox="0 0 60 90" className="w-full h-full" style={{ filter: 'blur(6px)' }}>
                  <ellipse cx="30" cy="60" rx="18" ry="12" fill="rgba(255, 183, 77, 0.06)" />
                  <ellipse cx="30" cy="45" rx="15" ry="18" fill="rgba(255, 152, 0, 0.08)" />
                  <ellipse cx="30" cy="30" rx="12" ry="15" fill="rgba(255, 193, 7, 0.06)" />
                  <ellipse cx="30" cy="18" rx="8" ry="10" fill="rgba(255, 224, 130, 0.05)" />
                </svg>
              </div>

              {/* Additional subtle flame - middle right */}
              <div className="absolute top-2/3 right-16 w-14 h-20 opacity-40 animate-candle-flicker-subtle" style={{ animationDelay: '4s' }}>
                <svg viewBox="0 0 50 80" className="w-full h-full" style={{ filter: 'blur(7px)' }}>
                  <ellipse cx="25" cy="50" rx="15" ry="10" fill="rgba(255, 183, 77, 0.05)" />
                  <ellipse cx="25" cy="38" rx="12" ry="15" fill="rgba(255, 152, 0, 0.07)" />
                  <ellipse cx="25" cy="25" rx="10" ry="12" fill="rgba(255, 193, 7, 0.05)" />
                </svg>
              </div>

              {/* Romantic warm spot - center top */}
              <div className="absolute top-32 left-1/2 -translate-x-1/2 w-36 h-36 opacity-50">
                <div className="w-full h-full rounded-full blur-3xl" style={{
                  background: 'radial-gradient(circle, rgba(251, 113, 133, 0.15) 0%, rgba(254, 240, 199, 0.08) 50%, transparent 80%)'
                }}></div>
              </div>

              {/* Subtle stain - middle right */}
              <div className="absolute top-2/3 right-20 w-20 h-24 opacity-70">
                <svg viewBox="0 0 80 100" className="w-full h-full">
                  <path d="M25 30 Q15 25, 20 40 Q25 55, 35 48 Q42 43, 48 46 Q54 49, 58 42 Q62 35, 55 32 Q48 29, 40 33 Q32 29, 25 30 Z"
                    fill="rgba(212, 203, 184, 0.12)" opacity="0.4" />
                </svg>
              </div>

              {/* Vintage paper texture overlay */}
              <div className="absolute inset-0 opacity-[0.05]" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(107, 95, 82, 0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            {/* Ornate Border */}
            <div className="absolute inset-0 border-4 border-khaki-300/40 pointer-events-none z-[1]">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-2 left-2 w-12 h-12 border-t-2 border-l-2 border-gold-500/60"></div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-400/40"></div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-gold-500/60"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-400/40"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16">
                <div className="absolute bottom-2 left-2 w-12 h-12 border-b-2 border-l-2 border-gold-500/60"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold-400/40"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-2 right-2 w-12 h-12 border-b-2 border-r-2 border-gold-500/60"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-400/40"></div>
              </div>
            </div>

            {/* Decorative Top Border Pattern */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
            <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-gold-500/60"></div>
              <div className="w-1 h-1 rounded-full bg-gold-400/40"></div>
              <div className="w-2 h-2 rounded-full bg-gold-500/60"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              {/* Header */}
              <div className="text-center mb-12" ref={headerRef}>
                <h2 className="font-romantic text-5xl md:text-6xl lg:text-7xl text-khaki-800 mb-4 tracking-wide">
                  Our Wedding Day
                </h2>
                <div className="flex items-center justify-center gap-3 my-6">
                  <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-500/60 to-gold-500/60"></div>
                  <span className="text-3xl">✨</span>
                  <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold-500/60 to-gold-500/60"></div>
                </div>
                <p className="font-script text-2xl md:text-3xl text-khaki-600 mb-8">
                  Event Details & Timeline
                </p>
              </div>

              {/* Events Timeline */}
              <div className="space-y-8 mb-12">
                {events.map((event, index) => (
                  <div key={index} className="relative">
                    {/* Timeline Line */}
                    {index < events.length - 1 && (
                      <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-to-b from-gold-400/40 to-transparent"></div>
                    )}

                    <div className="flex items-start gap-6">
                      {/* Time Badge */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-gold-100 to-gold-200 border-2 border-gold-400/60 flex items-center justify-center shadow-md relative z-10">
                        <span className="text-2xl">{event.icon}</span>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 pt-1">
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <h3 className="font-elegant text-2xl md:text-3xl text-khaki-900">
                            {event.title}
                          </h3>
                          <div className="text-right">
                            <div className="font-elegant text-xl md:text-2xl font-semibold text-gold-700">
                              {event.time}
                            </div>
                          </div>
                        </div>
                        <p className="font-script text-lg md:text-xl text-khaki-600 italic">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-3 my-12">
                <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-500/60 to-gold-500/60"></div>
                <div className="w-2 h-2 rounded-full bg-gold-500/60"></div>
                <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold-500/60 to-gold-500/60"></div>
              </div>

              {/* Location Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h4 className="font-elegant text-2xl md:text-3xl text-khaki-900">
                    {location.name}
                  </h4>
                </div>
                <p className="font-script text-lg md:text-xl text-khaki-600 mb-6">
                  {location.address}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => setIsMapOpen(true)}
                    className="group relative px-8 py-3 bg-gradient-to-br from-gold-500 to-gold-600 text-white font-elegant text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      View Map
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-600 to-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-elegant text-gold-700 hover:text-gold-800 underline text-lg smooth-transition"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Bottom Decorative Border Pattern */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent"></div>
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold-500/60"></div>
                <div className="w-1 h-1 rounded-full bg-gold-400/40"></div>
                <div className="w-2 h-2 rounded-full bg-gold-500/60"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Map Modal */}
      {isMapOpen && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 z-40 flex items-center justify-center p-4"
          onClick={() => setIsMapOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Map Container */}
          <div
            className="relative z-10 w-full max-w-7xl bg-gradient-to-br from-invitation-cream via-white to-invitation-beige rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ height: 'min(80vh, 800px)' }}
          >
            {/* Decorative Corner Borders */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Left */}
              <div className="absolute top-3 left-3 w-16 h-16">
                <div className="absolute inset-0 border-t-2 border-l-2 border-gold-500/70 rounded-tl-lg" />
                <div className="absolute inset-2 border-t border-l border-gold-400/50 rounded-tl" />
              </div>

              {/* Top Right */}
              <div className="absolute top-3 right-3 w-16 h-16">
                <div className="absolute inset-0 border-t-2 border-r-2 border-gold-500/70 rounded-tr-lg" />
                <div className="absolute inset-2 border-t border-r border-gold-400/50 rounded-tr" />
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-3 left-3 w-16 h-16">
                <div className="absolute inset-0 border-b-2 border-l-2 border-gold-500/70 rounded-bl-lg" />
                <div className="absolute inset-2 border-b border-l border-gold-400/50 rounded-bl" />
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-3 right-3 w-16 h-16">
                <div className="absolute inset-0 border-b-2 border-r-2 border-gold-500/70 rounded-br-lg" />
                <div className="absolute inset-2 border-b border-r border-gold-400/50 rounded-br" />
              </div>
            </div>

            {/* Header Section */}
            <div className="relative border-b pt-6 border-gold-200/30">
              {/* Title */}
              <h3 className="text-center font-elegant text-2xl text-khaki-900">
                {location.name}
              </h3>

              {/* Close Button */}
              <button
                onClick={() => setIsMapOpen(false)}
                className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border-2 border-gold-400/60 flex items-center justify-center text-khaki-700 hover:text-gold-700 hover:bg-white hover:border-gold-500 transition-all duration-300 shadow-lg hover:scale-110"
                aria-label="Close map"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

            </div>

            {/* Map Content */}
            <div className="p-6 mx-4 h-[calc(100%-5rem)]">
              <iframe
                src={location.mapUrl}
                className="w-full h-full rounded-xl"
                style={{
                  border: 0,
                  filter: 'sepia(10%) saturate(90%) brightness(95%)'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Location Map"
              />
            </div>


            {/* Decorative Top Line */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3/4 flex items-center justify-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-500/70" />
                <div className="w-1 h-1 rounded-full bg-gold-400/50" />
                <div className="w-2 h-2 rounded-full bg-gold-500/70" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
            </div>

            {/* Decorative Bottom Line */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 flex items-center justify-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-500/70" />
                <div className="w-1 h-1 rounded-full bg-gold-400/50" />
                <div className="w-2 h-2 rounded-full bg-gold-500/70" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />
            </div>
          </div>
        </div>
      )}

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
        
        @keyframes candle-flicker-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          25% {
            opacity: 0.95;
            transform: scale(1.02) translateY(-1px);
          }
          50% {
            opacity: 0.9;
            transform: scale(0.98) translateY(1px);
          }
          75% {
            opacity: 0.95;
            transform: scale(1.01) translateY(-0.5px);
          }
        }
        
        .animate-candle-flicker-subtle {
          animation: candle-flicker-subtle 4s ease-in-out infinite;
        }
        
        @keyframes map-open {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        @keyframes map-scale {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        .animate-map-open {
          animation: map-open 0.3s ease-out forwards;
        }
        
        .animate-map-scale {
          animation: map-scale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default EventDetails

