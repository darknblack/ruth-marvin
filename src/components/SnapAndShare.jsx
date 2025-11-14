import React, { useEffect, useRef } from 'react'
import qrCode from '../assets/qr-code.png'
import disposableCamera from '../assets/disposable-camera-app.png'

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
    <section className="section-padding relative z-10 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-blush-50 to-khaki-50"></div>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-blush-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" ref={headerRef}>
          {/* Decorative element */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            <span className="text-2xl md:text-3xl text-rose-400 animate-float">📸</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-rose-300 to-transparent"></div>
          </div>

          <h2 className="font-elegant text-5xl md:text-6xl lg:text-7xl font-bold text-khaki-800 mb-6">
            Snap and Share
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
            <span className="text-xl text-gold-500">✨</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
          </div>

          <p className="font-elegant text-xl md:text-2xl text-khaki-600 max-w-2xl mx-auto leading-relaxed">
            Help us capture our special day and share it with us using our hashtag
          </p>
        </div>

        {/* Hashtag Section */}
        <div className="text-center mb-12" ref={hashtagRef}>
          <div className="inline-block px-8 py-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-rose-200/50 smooth-transition hover:shadow-xl hover:scale-105">
            <p className="font-elegant text-3xl md:text-4xl lg:text-5xl font-semibold text-khaki-800 tracking-wide">
              #RuthAndMarvinForever
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-16" ref={socialIconsRef}>
          <a
            href="#"
            className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg smooth-transition hover:scale-110 hover:shadow-xl hover:from-blue-600 hover:to-blue-700"
            aria-label="Facebook"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 smooth-transition"></div>
          </a>
          <a
            href="#"
            className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg smooth-transition hover:scale-110 hover:shadow-xl"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 smooth-transition"></div>
          </a>
          <a
            href="#"
            className="group relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-black to-gray-800 rounded-full flex items-center justify-center text-white shadow-lg smooth-transition hover:scale-110 hover:shadow-xl"
            aria-label="TikTok"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 smooth-transition"></div>
          </a>
        </div>

        {/* QR Code Section */}
        <div ref={qrSectionRef} className="smooth-transition">
          <p className="text-center font-elegant text-lg md:text-xl text-khaki-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Also, we encourage everyone to scan the QR code and share your captured photos with us.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">


            {/* QR Code */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-300 to-gold-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 smooth-transition"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl smooth-transition hover:scale-105 hover:shadow-2xl border border-gold-200/50">
                <img
                  src={qrCode}
                  alt="QR Code"
                  className="w-28 h-28 md:w-32 md:h-32 object-contain"
                />
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

export default SnapAndShare

