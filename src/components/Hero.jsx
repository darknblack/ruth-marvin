import React, { useState } from 'react'

function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-khaki-100 via-blush-50 to-khaki-100">
      {/* Mobile: Background Image */}
      {!imageError && (
        <div className="absolute inset-0 md:hidden">
          <img
            src="/couple-hero.jpg"
            alt="Ruth & Marvin"
            className="w-full h-full object-cover scale-105"
            onError={() => setImageError(true)}
          />
          {/* Enhanced soft khaki overlay for text readability on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-khaki-900/60 via-khaki-800/40 to-khaki-900/65"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-khaki-700/25 via-transparent to-transparent"></div>
          {/* Subtle vignette effect */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at center, transparent 0%, transparent 50%, rgba(63, 55, 46, 0.15) 100%)' }}></div>
        </div>
      )}

      {/* Decorative background elements - hidden on mobile, visible on desktop */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blush-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gold-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 animate-float-reverse"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-khaki-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 animate-float"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full py-12 md:py-0">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[85vh] md:min-h-0">
          {/* Couple's Image - Desktop Only (Left Side) */}
          {!imageError && (
            <div className="hidden md:block md:order-1 animate-fade-in-scale">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                <img
                  src="/couple-hero.jpg"
                  alt="Ruth & Marvin"
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
                {/* Subtle overlay for elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          )}

          {/* Text Content - Mobile: Overlaid on background, Desktop: Right Side */}
          <div className="md:order-2 text-center md:text-left relative z-10 py-8 md:py-0">
            {/* Mobile: Inset frame border */}
            <div className="md:hidden absolute inset-1 pointer-events-none" style={{
              border: '1px solid rgba(232, 191, 90, 0.4)',
              borderRadius: '7px',
              boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.2), inset 0 0 0 2px rgba(232, 191, 90, 0.5)'
            }}></div>
            <div className="md:hidden absolute inset-6 pointer-events-none" style={{
              border: '1px solid rgba(232, 191, 90, 0.3)',
              borderRadius: '6px'
            }}></div>

            {/* Mobile: Decorative top border */}
            <div className="md:hidden flex items-center justify-center gap-3 mb-6 relative z-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-300/60 to-transparent"></div>
              <span className="text-xl text-gold-300/80 animate-float">✨</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold-300/60 to-transparent"></div>
            </div>

            <div className="mb-6 md:mb-6 relative z-10">
              <p className="font-allura text-2xl md:text-4xl mb-6 md:mb-4 animate-fade-in-down text-white md:text-khaki-700 drop-shadow-2xl md:drop-shadow-none tracking-wide">
                Together with their families
              </p>

              <h1 className="font-romantic text-6xl md:text-6xl lg:text-7xl mb-1 md:mb-2 animate-fade-in-up text-white md:text-khaki-900 drop-shadow-2xl md:drop-shadow-none leading-[0.9] md:leading-none" style={{ animationDelay: '0.2s' }}>
                Ruth
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 my-5 md:my-6 animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
                <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent via-gold-200/70 md:via-gold-400 to-transparent animate-gentle-pulse"></div>
                <span className="text-lg text-gold-300/70">❦</span>

                <div className="h-px w-20 md:w-24 bg-gradient-to-l from-transparent via-gold-200/70 md:via-gold-400 to-transparent animate-gentle-pulse"></div>
              </div>

              <h1 className="font-romantic text-6xl md:text-6xl lg:text-7xl mb-1 md:mb-2 animate-fade-in-up text-white md:text-khaki-900 drop-shadow-2xl md:drop-shadow-none leading-[0.9] md:leading-none" style={{ animationDelay: '0.6s' }}>
                Marvin
              </h1>

              <p className="font-allura text-xl md:text-3xl mt-5 md:mt-4 animate-fade-in-up text-white/95 md:text-khaki-700 drop-shadow-2xl md:drop-shadow-none leading-relaxed" style={{ animationDelay: '0.8s' }}>
                Request the pleasure of your company
              </p>
            </div>

            {/* Mobile: Decorative divider */}
            <div className="md:hidden flex items-center justify-center gap-3 my-8 relative z-10">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-300/50 to-transparent"></div>
              <span className="text-lg text-gold-300/70">❦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent via-gold-300/50 to-transparent"></div>
            </div>

            <div className="mt-8 md:mt-12 animate-fade-in-scale relative z-10" style={{ animationDelay: '1s' }}>
              <p className="text-base md:text-xl mb-3 md:mb-2 text-white/90 md:text-khaki-700 drop-shadow-2xl md:drop-shadow-none font-allura tracking-wide">Save the Date</p>
              <p className="text-2xl md:text-3xl font-allura animate-fade-in-up text-white md:text-khaki-800 drop-shadow-2xl md:drop-shadow-none leading-relaxed">
                December 20, 2025
              </p>
              <p className="text-base md:text-xl mt-3 md:mt-2 animate-fade-in-up text-white/90 md:text-khaki-700 drop-shadow-2xl md:drop-shadow-none font-allura tracking-wide" style={{ animationDelay: '0.2s' }}>Saturday | 3:00 PM</p>
            </div>

            {/* Mobile: Decorative bottom border */}
            <div className="md:hidden flex items-center justify-center gap-3 mt-8 relative z-10">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-300/60 to-transparent"></div>
              <span className="text-xl text-gold-300/80 animate-float" style={{ animationDelay: '0.5s' }}>✨</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold-300/60 to-transparent"></div>
            </div>

            {/* Mobile: Corner decorative elements */}
            <div className="md:hidden absolute top-4 left-4 w-6 h-6 pointer-events-none z-10" style={{
              borderTop: '2px solid rgba(232, 191, 90, 0.5)',
              borderLeft: '2px solid rgba(232, 191, 90, 0.5)'
            }}></div>
            <div className="md:hidden absolute top-4 right-4 w-6 h-6 pointer-events-none z-10" style={{
              borderTop: '2px solid rgba(232, 191, 90, 0.5)',
              borderRight: '2px solid rgba(232, 191, 90, 0.5)'
            }}></div>
            <div className="md:hidden absolute bottom-4 left-4 w-6 h-6 pointer-events-none z-10" style={{
              borderBottom: '2px solid rgba(232, 191, 90, 0.5)',
              borderLeft: '2px solid rgba(232, 191, 90, 0.5)'
            }}></div>
            <div className="md:hidden absolute bottom-4 right-4 w-6 h-6 pointer-events-none z-10" style={{
              borderBottom: '2px solid rgba(232, 191, 90, 0.5)',
              borderRight: '2px solid rgba(232, 191, 90, 0.5)'
            }}></div>
          </div>
        </div>
      </div>


      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}

export default Hero

