import React, { useEffect, useRef, useState } from 'react'
import MenSvgComponent from '../assets/men4.svg?react'
import WomenSvgComponent from '../assets/women4.svg?react'
import TopFlower from '../assets/top-border.png'

function DressCode() {
  const headerRef = useRef(null)
  const modelsRef = useRef(null)
  const giftGuideRef = useRef(null)
  const intervalRef = useRef(null)
  const [selectedColorId, setSelectedColorId] = useState('Tan')

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

    // Observe models section
    if (modelsRef.current) {
      modelsRef.current.classList.add('fade-in-on-scroll')
      observer.observe(modelsRef.current)
    }

    // Observe gift guide
    if (giftGuideRef.current) {
      giftGuideRef.current.classList.add('fade-in-on-scroll')
      observer.observe(giftGuideRef.current)
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      if (modelsRef.current) observer.unobserve(modelsRef.current)
      if (giftGuideRef.current) observer.unobserve(giftGuideRef.current)
    }
  }, [])

  const colorSwatches = [
    { id: 'Cream', hexColor: '#f2e6d8', name: 'Cream' },
    { id: 'Beige', hexColor: '#e1c8b1', name: 'Beige' },
    { id: 'Tan', hexColor: '#cca079', name: 'Tan' },
    { id: 'Caramel', hexColor: '#c4835b', name: 'Caramel' }
  ]

  // Auto-cycle through colors every 3 seconds
  useEffect(() => {
    const startCycle = () => {
      // Clear any existing interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }

      // Start new interval
      intervalRef.current = setInterval(() => {
        setSelectedColorId((currentId) => {
          const currentIndex = colorSwatches.findIndex(swatch => swatch.id === currentId)
          const nextIndex = (currentIndex + 1) % colorSwatches.length
          return colorSwatches[nextIndex].id
        })
      }, 3000)
    }

    startCycle()

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Empty dependency array - colorSwatches is stable

  const handleColorClick = (colorId) => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Set the clicked color
    setSelectedColorId(colorId)

    // Restart the cycle after 3 seconds
    intervalRef.current = setInterval(() => {
      setSelectedColorId((currentId) => {
        const currentIndex = colorSwatches.findIndex(swatch => swatch.id === currentId)
        const nextIndex = (currentIndex + 1) % colorSwatches.length
        return colorSwatches[nextIndex].id
      })
    }, 3000)
  }

  return (
    <section className="section-padding khaki-bg relative z-10 overflow-hidden">
      {/* Repeating pattern overlay */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Decorative background blob elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left side blobs */}
        <div className="absolute bottom-24 left-1/4 w-80 h-80 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-10 left-1/3 w-48 h-48 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-5000 hidden lg:block"></div>

        {/* Center blob */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-khaki-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000 hidden lg:block"></div>

        {/* Right side blobs - enhanced for balance */}
        <div className="absolute top-16 right-1/4 w-72 h-72 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-10 right-1/3 w-56 h-56 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000 hidden lg:block"></div>
        <div className="absolute top-1/3 right-8 w-64 h-64 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-1500 hidden lg:block"></div>
        <div className="absolute bottom-32 right-12 w-60 h-60 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-28 animate-blob animation-delay-3500"></div>
        <div className="absolute bottom-1/4 right-1/5 w-52 h-52 bg-khaki-200 rounded-full mix-blend-multiply filter blur-3xl opacity-22 animate-blob animation-delay-4500 hidden lg:block"></div>
        <div className="absolute top-2/3 right-6 w-48 h-48 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-5500 hidden lg:block"></div>
      </div>

      {/* Decorative flower elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[6]">
        {/* Top left flower */}
        <svg className="absolute top-20 left-8 w-24 h-24 text-blush-200/30 animate-float" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 20 C45 15, 40 20, 45 25 C40 25, 35 30, 40 35 C45 35, 50 40, 50 35 C50 40, 55 35, 60 35 C65 30, 60 25, 55 25 C60 20, 55 15, 50 20 Z" />
          <circle cx="50" cy="30" r="8" fill="currentColor" />
        </svg>

        {/* Top right flower */}
        <svg className="absolute top-32 right-12 w-20 h-20 text-gold-200/25 animate-float-reverse" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '1s' }}>
          <path d="M50 15 C48 10, 45 12, 47 17 C42 18, 40 22, 45 25 C48 24, 52 28, 52 25 C52 28, 56 25, 59 25 C64 22, 62 18, 57 17 C59 12, 56 10, 50 15 Z" />
          <circle cx="50" cy="22" r="6" fill="currentColor" />
        </svg>

        {/* Middle right flower */}
        <svg className="absolute top-1/2 right-6 transform -translate-y-1/2 w-22 h-22 text-blush-300/25 animate-float-reverse" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '3s' }}>
          <path d="M50 16 C47 11, 44 16, 47 21 C43 21, 40 26, 45 31 C48 31, 52 36, 52 31 C52 36, 56 31, 59 31 C64 26, 61 21, 57 21 C60 16, 57 11, 50 16 Z" />
          <circle cx="50" cy="26" r="6" fill="currentColor" />
        </svg>

        {/* Bottom left flower */}
        <svg className="absolute bottom-24 left-16 w-26 h-26 text-gold-300/25 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '1.5s' }}>
          <path d="M50 19 C46 14, 42 19, 46 24 C41 24, 37 29, 42 34 C46 34, 50 39, 50 34 C50 39, 54 34, 58 34 C63 29, 59 24, 54 24 C58 19, 54 14, 50 19 Z" />
          <circle cx="50" cy="29" r="7" fill="currentColor" />
        </svg>

        {/* Bottom right flower */}
        <svg className="absolute bottom-32 right-8 w-24 h-24 text-khaki-400/20 animate-float-reverse" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '2.5s' }}>
          <path d="M50 17 C47 12, 44 17, 47 22 C43 22, 40 27, 45 32 C48 32, 52 37, 52 32 C52 37, 56 32, 59 32 C64 27, 61 22, 57 22 C60 17, 57 12, 50 17 Z" />
          <circle cx="50" cy="27" r="6" fill="currentColor" />
        </svg>

        {/* Small decorative flowers scattered */}
        <svg className="absolute top-40 left-1/4 w-16 h-16 text-blush-200/20 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '0.5s' }}>
          <circle cx="50" cy="50" r="8" fill="currentColor" />
          <circle cx="35" cy="45" r="5" fill="currentColor" />
          <circle cx="65" cy="45" r="5" fill="currentColor" />
          <circle cx="50" cy="35" r="5" fill="currentColor" />
          <circle cx="50" cy="65" r="5" fill="currentColor" />
        </svg>

        <svg className="absolute bottom-40 right-1/4 w-14 h-14 text-gold-200/20 animate-float-reverse" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '1.2s' }}>
          <circle cx="50" cy="50" r="7" fill="currentColor" />
          <circle cx="35" cy="45" r="4" fill="currentColor" />
          <circle cx="65" cy="45" r="4" fill="currentColor" />
          <circle cx="50" cy="35" r="4" fill="currentColor" />
          <circle cx="50" cy="65" r="4" fill="currentColor" />
        </svg>

        <svg className="absolute top-1/3 right-1/4 w-18 h-18 text-khaki-300/20 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '2.2s' }}>
          <circle cx="50" cy="50" r="6" fill="currentColor" />
          <circle cx="38" cy="48" r="4" fill="currentColor" />
          <circle cx="62" cy="48" r="4" fill="currentColor" />
          <circle cx="50" cy="38" r="4" fill="currentColor" />
          <circle cx="50" cy="62" r="4" fill="currentColor" />
        </svg>

        {/* Decorative leaves and vines */}
        <svg className="absolute top-12 left-1/3 w-32 h-32 text-khaki-400/15 animate-float-reverse" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '0.8s' }}>
          <path d="M30 50 Q20 40, 25 30 Q30 25, 40 30 Q50 35, 45 45 Q40 55, 30 50 Z" />
          <path d="M50 60 Q60 50, 55 40 Q50 35, 40 40 Q30 45, 35 55 Q40 65, 50 60 Z" />
        </svg>

        <svg className="absolute bottom-16 right-1/3 w-28 h-28 text-gold-300/15 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '1.8s' }}>
          <path d="M70 50 Q80 40, 75 30 Q70 25, 60 30 Q50 35, 55 45 Q60 55, 70 50 Z" />
        </svg>

        <svg className="absolute top-1/4 left-12 w-24 h-24 text-blush-300/15 animate-float-reverse" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '2.8s' }}>
          <ellipse cx="50" cy="50" rx="20" ry="35" fill="currentColor" transform="rotate(-25 50 50)" />
        </svg>

        <svg className="absolute bottom-1/4 right-16 w-26 h-26 text-khaki-300/15 animate-float" viewBox="0 0 100 100" fill="currentColor" style={{ animationDelay: '1.4s' }}>
          <path d="M50 30 Q40 20, 30 25 Q20 30, 25 40 Q30 50, 40 45 Q50 40, 50 30 Z" />
        </svg>

        {/* Decorative vine elements */}
        <svg className="absolute top-60 left-20 w-40 h-40 text-khaki-500/10 animate-float" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" style={{ animationDelay: '3.2s' }}>
          <path d="M10 50 Q30 30, 50 40 Q70 50, 90 30" />
        </svg>

        <svg className="absolute bottom-60 right-20 w-36 h-36 text-gold-400/10 animate-float-reverse" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" style={{ animationDelay: '2.4s' }}>
          <path d="M90 50 Q70 30, 50 40 Q30 50, 10 30" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 px-4" ref={headerRef}>
          <img src={TopFlower} className='w-80 h-auto mx-auto mb-6' />
          <h2 className="font-elegant text-3xl sm:text-4xl md:text-5xl font-bold text-khaki-700 mb-3 md:mb-4">
            Finer Details
          </h2>
          <h3 className="font-script text-2xl sm:text-3xl md:text-4xl font-semibold text-khaki-500 mb-6 md:mb-8">
            The Dress Code
          </h3>

          <p className='text-md text-khaki-500 italic'>
            We recommend that our guests wear semi-formal attire made from light, breathable fabrics, perfect for the warm March weather in the Philippines.
          </p>
        </div>

        {/* Main Content: Models and Color Swatches */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 px-4 py-6 mb-12">
          {/* Models Section - Left Side */}
          <div
            ref={modelsRef}
            className="order-2 lg:order-1 flex flex-col justify-center"
          >
            {/* Models Display */}
            <div className="flex items-end justify-center gap-4 md:gap-6  mb-8">
              <div
                className='flex items-end gap-2 md:gap-4 transition-colors duration-500'
                style={{
                  color: colorSwatches.find(color => color.id === selectedColorId)?.hexColor || '#3f372e'
                }}
              >
                <div className="flex-shrink-0 w-[5rem] sm:w-[8rem] md:w-[10.5rem] sm:mr-[-1.5rem] ">
                  <MenSvgComponent style={{ height: 'auto', width: '100%' }} />
                </div>
                <div className="flex-shrink-0 w-[5rem] sm:w-[8rem] md:w-[10.5rem] ">
                  <WomenSvgComponent style={{ height: 'auto', width: '100%' }} />
                </div>
              </div>
            </div>


          </div>

          {/* Color Swatches Section - Right Side */}
          <div className="order-2 flex flex-col justify-center">
            <div className="text-center mb-8">

              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent via-khaki-400 to-khaki-400"></div>
                <span className="text-2xl">✨</span>
                <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent via-khaki-400 to-khaki-400"></div>
              </div>
              <p className="text-khaki-700 text-sm md:text-base italic text-center">
                Click on a color to see it on the models
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 w-full">
              {colorSwatches.map((swatch) => (
                <button
                  key={swatch.id}
                  onClick={() => handleColorClick(swatch.id)}
                  className={`flex flex-col items-center justify-center p-3 md:p-4 transition-all duration-300 group ${selectedColorId === swatch.id
                    ? 'scale-105'
                    : 'hover:scale-[1.02]'
                    }`}
                >
                  <div
                    className={`w-14 h-14 md:w-20 md:h-20 rounded-full transition-all duration-300 mb-3 relative ${selectedColorId === swatch.id
                      ? 'scale-110 shadow-2xl'
                      : 'group-hover:scale-110 group-hover:shadow-xl'
                      }`}
                    style={{
                      backgroundColor: swatch.hexColor,
                      boxShadow: selectedColorId === swatch.id
                        ? `0 10px 30px -5px ${swatch.hexColor}80, 0 0 0 3px rgba(212, 203, 184, 0.3), 0 0 0 6px rgba(212, 203, 184, 0.1)`
                        : `0 4px 15px -3px ${swatch.hexColor}60, 0 0 0 2px rgba(255, 255, 255, 0.5)`
                    }}
                  >
                    {selectedColorId === swatch.id && (
                      <div className="absolute inset-0 rounded-full animate-gentle-pulse" style={{
                        boxShadow: `inset 0 0 20px ${swatch.hexColor}40`
                      }}></div>
                    )}
                  </div>
                  <span className={`text-sm md:text-base font-semibold transition-colors ${selectedColorId === swatch.id
                    ? 'text-khaki-900'
                    : 'text-khaki-400 group-hover:text-khaki-900'
                    }`}>
                    {swatch.name}
                  </span>
                </button>
              ))}
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
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-3500 {
          animation-delay: 3.5s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-4500 {
          animation-delay: 4.5s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
        .animation-delay-5500 {
          animation-delay: 5.5s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        
        @keyframes floatMan {
          0%, 100% {
            transform: translateY(0rem) translateX(0rem) rotate(0deg);
          }
          25% {
            transform: translateY(-0.9375rem) translateX(0.5rem) rotate(-2deg);
          }
          50% {
            transform: translateY(-0.625rem) translateX(-0.3125rem) rotate(1deg);
          }
          75% {
            transform: translateY(-1.25rem) translateX(0.3125rem) rotate(-1deg);
          }
        }
        
        @keyframes floatWoman {
          0%, 100% {
            transform: translateY(0rem) translateX(0rem) rotate(0deg);
          }
          25% {
            transform: translateY(-0.75rem) translateX(-0.5rem) rotate(2deg);
          }
          50% {
            transform: translateY(-1.125rem) translateX(0.1875rem) rotate(-1deg);
          }
          75% {
            transform: translateY(-0.5rem) translateX(-0.375rem) rotate(1.5deg);
          }
        }
        
        .animate-float-man {
          animation: floatMan 10s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .animate-float-woman {
          animation: floatWoman 10s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  )
}

export default DressCode

