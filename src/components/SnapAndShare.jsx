import React, { useEffect, useRef } from 'react'

function SnapAndShare() {
  const headerRef = useRef(null)
  const hashtagRef = useRef(null)
  const socialIconsRef = useRef(null)
  const qrSectionRef = useRef(null)

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

    // Observe hashtag
    if (hashtagRef.current) {
      hashtagRef.current.classList.add('fade-in-on-scroll')
      observer.observe(hashtagRef.current)
    }

    // Observe social icons
    if (socialIconsRef.current) {
      socialIconsRef.current.classList.add('fade-in-on-scroll')
      observer.observe(socialIconsRef.current)
    }

    // Observe QR section
    if (qrSectionRef.current) {
      qrSectionRef.current.classList.add('fade-in-on-scroll')
      observer.observe(qrSectionRef.current)
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      if (hashtagRef.current) observer.unobserve(hashtagRef.current)
      if (socialIconsRef.current) observer.unobserve(socialIconsRef.current)
      if (qrSectionRef.current) observer.unobserve(qrSectionRef.current)
    }
  }, [])
  return (
    <section className="section-padding khaki-light relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-khaki-800 mb-4">
            Snap and Share
          </h2>
          <p className="text-khaki-700 text-lg mb-8">
            Help us capture our special day and share it with us using our hashtag
          </p>
        </div>

        {/* Hashtag */}
        <div className="text-center mb-8" ref={hashtagRef}>
          <p className="font-elegant text-2xl md:text-3xl font-bold text-khaki-900">
            #RuthAndMarvinForever
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8" ref={socialIconsRef}>
          <a
            href="#"
            className="w-14 h-14 bg-khaki-600 rounded-full flex items-center justify-center text-white hover:bg-khaki-700 transition-colors duration-300 shadow-md"
            aria-label="Facebook"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-khaki-600 rounded-full flex items-center justify-center text-white hover:bg-khaki-700 transition-colors duration-300 shadow-md"
            aria-label="Instagram"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-khaki-600 rounded-full flex items-center justify-center text-white hover:bg-khaki-700 transition-colors duration-300 shadow-md"
            aria-label="TikTok"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>

        {/* QR Code Section */}
        <div ref={qrSectionRef} className="bg-khaki-50 rounded-lg shadow-md p-8 border border-khaki-200 hover:shadow-lg smooth-transition romantic-hover">
          <p className="text-center text-khaki-800 mb-6 text-lg">
            Also, we encourage everyone to scan the QR code and share your captured photos with us.
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mb-2 mx-auto shadow-md">
                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <p className="text-sm text-khaki-700 font-semibold">DISPOSABLE CAMERA APP</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-white rounded-lg p-2 border-2 border-khaki-300 mb-2 mx-auto shadow-md">
                <div className="w-full h-full bg-black grid grid-cols-8 gap-0.5">
                  {/* Simple QR code pattern */}
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                    ></div>
                  ))}
                </div>
              </div>
              <p className="text-sm text-khaki-700 font-semibold">SCAN ME</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SnapAndShare

