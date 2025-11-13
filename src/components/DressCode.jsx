import React, { useEffect, useRef } from 'react'

// SVG Component for Male Figure - Minimalist style
const MaleFigure = ({ suitColor, shirtColor = '#ffffff', vestColor = null }) => (
  <svg width="100" height="140" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
    {/* Head - simple circle */}
    <circle cx="50" cy="18" r="14" fill="#e8d5c4" />
    
    {/* Neck */}
    <rect x="46" y="32" width="8" height="6" fill="#e8d5c4" />
    
    {/* Shirt collar visible */}
    <path d="M 35 38 L 35 45 L 30 45 L 30 55 L 70 55 L 70 45 L 65 45 L 65 38 Z" fill={shirtColor} />
    
    {/* Suit jacket */}
    <path d="M 30 38 L 30 95 L 25 95 L 25 105 L 75 105 L 75 95 L 70 95 L 70 38 Z" fill={suitColor} />
    
    {/* Vest (if provided) */}
    {vestColor && (
      <path d="M 35 45 L 35 85 L 65 85 L 65 45 Z" fill={vestColor} />
    )}
    
    {/* Arms - simplified */}
    <ellipse cx="22" cy="65" rx="6" ry="35" fill={suitColor} />
    <ellipse cx="78" cy="65" rx="6" ry="35" fill={suitColor} />
    
    {/* Legs - simplified */}
    <rect x="38" y="105" width="10" height="35" rx="5" fill={suitColor} />
    <rect x="52" y="105" width="10" height="35" rx="5" fill={suitColor} />
  </svg>
)

// SVG Component for Female Figure - Minimalist style with flowing dress
const FemaleFigure = ({ dressColor, hasSleeves = false }) => (
  <svg width="100" height="140" viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
    {/* Head - simple circle */}
    <circle cx="50" cy="18" r="14" fill="#e8d5c4" />
    
    {/* Neck */}
    <rect x="46" y="32" width="8" height="6" fill="#e8d5c4" />
    
    {/* Dress top - elegant V-neck */}
    <path d="M 50 38 L 42 50 L 35 50 L 35 60 L 65 60 L 65 50 L 58 50 Z" fill={dressColor} />
    
    {/* Flowing dress skirt */}
    <path d="M 30 60 Q 30 75 35 85 Q 40 95 50 100 Q 60 95 65 85 Q 70 75 70 60 L 70 130 L 30 130 Z" fill={dressColor} />
    
    {/* Arms - with or without sleeves */}
    {hasSleeves ? (
      <>
        <ellipse cx="25" cy="55" rx="8" ry="20" fill={dressColor} />
        <ellipse cx="75" cy="55" rx="8" ry="20" fill={dressColor} />
      </>
    ) : (
      <>
        <ellipse cx="25" cy="55" rx="6" ry="18" fill="#e8d5c4" />
        <ellipse cx="75" cy="55" rx="6" ry="18" fill="#e8d5c4" />
      </>
    )}
  </svg>
)

function DressCode() {
  const headerRef = useRef(null)
  const colorSwatchesRef = useRef(null)
  const attireCardsRef = useRef([])
  const giftGuideRef = useRef(null)

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

    // Observe color swatches
    if (colorSwatchesRef.current) {
      colorSwatchesRef.current.classList.add('fade-in-on-scroll')
      observer.observe(colorSwatchesRef.current)
    }

    // Observe attire cards
    attireCardsRef.current.forEach(ref => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll')
        observer.observe(ref)
      }
    })

    // Observe gift guide
    if (giftGuideRef.current) {
      giftGuideRef.current.classList.add('fade-in-on-scroll')
      observer.observe(giftGuideRef.current)
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      if (colorSwatchesRef.current) observer.unobserve(colorSwatchesRef.current)
      attireCardsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
      if (giftGuideRef.current) observer.unobserve(giftGuideRef.current)
    }
  }, [])

  const colorSwatches = [
    { color: 'bg-khaki-50', name: 'Cream' },
    { color: 'bg-khaki-200', name: 'Beige' },
    { color: 'bg-khaki-300', name: 'Khaki' },
    { color: 'bg-khaki-500', name: 'Taupe' }
  ]

  return (
    <section className="section-padding khaki-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-khaki-800 mb-4">
            Finer Details
          </h2>
          <h3 className="font-script text-3xl md:text-4xl font-semibold text-khaki-700 mb-8">
            The Dress Code
          </h3>
        </div>

        {/* Color Swatches */}
        <div className="mb-12 text-center" ref={colorSwatchesRef}>
          <div className="flex justify-center gap-4 mb-4">
            {colorSwatches.map((swatch, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${swatch.color} border-2 border-khaki-300 shadow-md`}></div>
              </div>
            ))}
          </div>
          <p className="text-khaki-700 text-lg italic">
            We kindly ask to wear the following colors to celebrate our special day.
          </p>
        </div>

        {/* Attire Guidelines */}
        <div className="grid md:grid-cols-2 gap-8">
          <div ref={el => attireCardsRef.current[0] = el} className="bg-khaki-50 rounded-lg shadow-md p-8 border border-khaki-200 hover:shadow-lg smooth-transition romantic-hover">
            <h4 className="font-elegant text-2xl font-bold text-khaki-900 mb-6 text-center">
              Principal Sponsors
            </h4>
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MaleFigure 
                    suitColor="#e8e4dd" 
                    shirtColor="#ffffff"
                  />
                </div>
                <p className="text-sm text-khaki-700 font-semibold">Gentleman</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <FemaleFigure dressColor="#f5e6d3" />
                </div>
                <p className="text-sm text-khaki-700 font-semibold">Lady</p>
              </div>
            </div>
            <p className="text-center text-khaki-800 font-semibold">
              Please come in your <span className="font-bold text-khaki-900">FORMAL</span> attire.
            </p>
          </div>

          <div ref={el => attireCardsRef.current[1] = el} className="bg-khaki-50 rounded-lg shadow-md p-8 border border-khaki-200 hover:shadow-lg smooth-transition romantic-hover">
            <h4 className="font-elegant text-2xl font-bold text-khaki-900 mb-6 text-center">
              Guest
            </h4>
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <MaleFigure 
                    suitColor="#d4c9b8" 
                    shirtColor="#ffffff"
                    vestColor="#9d8a6f"
                  />
                </div>
                <p className="text-sm text-khaki-700 font-semibold">Gentleman</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <FemaleFigure dressColor="#7a6b56" hasSleeves={true} />
                </div>
                <p className="text-sm text-khaki-700 font-semibold">Lady</p>
              </div>
            </div>
            <p className="text-center text-khaki-800 font-semibold">
              We'd love to see your glam in your <span className="font-bold text-khaki-900">SEMI FORMAL</span> attire.
            </p>
          </div>
        </div>

        {/* Gift Guide */}
        <div ref={giftGuideRef} className="mt-16 bg-khaki-50 rounded-lg shadow-md p-8 md:p-12 border border-khaki-200 text-center hover:shadow-lg smooth-transition romantic-hover">
          <h3 className="font-script text-3xl md:text-4xl font-bold text-khaki-800 mb-6">
            Gift Guide
          </h3>
          <p className="text-khaki-800 text-lg leading-relaxed max-w-3xl mx-auto">
            With God's grace, we are truly blessed. Your presence & prayer are all that we request, 
            but if you desire to give nonetheless, <span className="font-semibold">monetary gift is the one we suggest</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DressCode

