import React, { useState, useEffect, useRef } from 'react'

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-3 md:py-6 overflow-hidden">
      {/* Background Image with solid warm color overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/wedding-bg.jpg)' }}
      >
        {/* Strong warm color overlay to create solid appearance */}
        <div className="absolute inset-0 bg-gradient-to-br from-khaki-50 via-khaki-100 to-khaki-50 opacity-95"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        {/* Subtle exciting text */}
        <div className={`text-center mb-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="font-script text-sm md:text-base text-khaki-500/70 italic">
            The countdown to forever begins...
          </p>
        </div>

        {/* Compact Countdown Display */}
        <div className="flex justify-center items-start gap-2 md:gap-3 flex-wrap">
          {/* Days */}
          <div className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ transitionDelay: '100ms' }}>
            <div className="bg-khaki-100/90 backdrop-blur-sm rounded-lg border border-khaki-200/60 shadow-sm px-3 py-2 md:px-4 md:py-2.5 min-w-[50px] md:min-w-[60px] hover:shadow-md hover:border-khaki-300/80 transition-all duration-300 focus-within:ring-2 focus-within:ring-khaki-400/50 focus-within:ring-offset-2">
              <span className="text-xl md:text-2xl font-semibold text-khaki-700 font-elegant block text-center">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-1.5 text-[0.625rem] md:text-xs font-medium text-khaki-500 uppercase tracking-wide font-elegant">
              Days
            </span>
          </div>

          <div className={`sm:block text-lg md:text-xl text-khaki-400 font-light pt-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>:</div>

          {/* Hours */}
          <div className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ transitionDelay: '300ms' }}>
            <div className="bg-khaki-100/90 backdrop-blur-sm rounded-lg border border-khaki-200/60 shadow-sm px-3 py-2 md:px-4 md:py-2.5 min-w-[50px] md:min-w-[60px] hover:shadow-md hover:border-khaki-300/80 transition-all duration-300 focus-within:ring-2 focus-within:ring-khaki-400/50 focus-within:ring-offset-2">
              <span className="text-xl md:text-2xl font-semibold text-khaki-700 font-elegant block text-center">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-1.5 text-[0.625rem] md:text-xs font-medium text-khaki-500 uppercase tracking-wide font-elegant">
              Hours
            </span>
          </div>

          <div className={`sm:block text-lg md:text-xl text-khaki-400 font-light pt-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>:</div>

          {/* Minutes */}
          <div className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ transitionDelay: '500ms' }}>
            <div className="bg-khaki-100/90 backdrop-blur-sm rounded-lg border border-khaki-200/60 shadow-sm px-3 py-2 md:px-4 md:py-2.5 min-w-[50px] md:min-w-[60px] hover:shadow-md hover:border-khaki-300/80 transition-all duration-300 focus-within:ring-2 focus-within:ring-khaki-400/50 focus-within:ring-offset-2">
              <span className="text-xl md:text-2xl font-semibold text-khaki-700 font-elegant block text-center">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-1.5 text-[0.625rem] md:text-xs font-medium text-khaki-500 uppercase tracking-wide font-elegant">
              Min
            </span>
          </div>

          <div className={`sm:block text-lg md:text-xl text-khaki-400 font-light pt-3 animate-pulse-colon transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>:</div>

          {/* Seconds */}
          <div className={`flex flex-col items-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ transitionDelay: '700ms' }}>
            <div className="bg-khaki-100/90 backdrop-blur-sm rounded-lg border border-khaki-200/60 shadow-sm px-3 py-2 md:px-4 md:py-2.5 min-w-[50px] md:min-w-[60px] hover:shadow-md hover:border-khaki-300/80 transition-all duration-300 focus-within:ring-2 focus-within:ring-khaki-400/50 focus-within:ring-offset-2 animate-focus-glow">
              <span className="text-xl md:text-2xl font-semibold text-khaki-700 font-elegant block text-center">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="mt-1.5 text-[0.625rem] md:text-xs font-medium text-khaki-500 uppercase tracking-wide font-elegant">
              Sec
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.95;
            transform: scale(1.02);
          }
        }
        @keyframes pulse-colon {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes focus-glow {
          0%, 100% {
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
          50% {
            box-shadow: 0 4px 8px -2px rgba(107, 95, 82, 0.2), 0 0 0 1px rgba(107, 95, 82, 0.1);
          }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s ease-in-out infinite;
        }
        .animate-pulse-colon {
          animation: pulse-colon 2s ease-in-out infinite;
        }
        .animate-focus-glow {
          animation: focus-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default CountdownTimer
