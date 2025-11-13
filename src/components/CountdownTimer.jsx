import React, { useState, useEffect, useRef } from 'react'

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const previousTimeRef = useRef({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const flipRefs = {
    days: useRef(null),
    hours: useRef(null),
    minutes: useRef(null),
    seconds: useRef(null)
  }

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const newTime = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        }

        // Remove flip animation - just update smoothly
        // No animation needed as it's already prominent

        previousTimeRef.current = { ...newTime }
        setTimeLeft(newTime)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const TimeUnit = ({ value, label, unitKey }) => (
    <div className="flex flex-col items-center">
      <div className="relative group">
        {/* Glow effect - subtle, no animation */}
        <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-blush-400 to-gold-400 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

        {/* Card with subtle hover effects */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-6 py-5 md:px-8 md:py-6 min-w-[5rem] md:min-w-[6.25rem] border border-khaki-200/50 transform group-hover:scale-105 transition-transform duration-300 ease-out">
          <span
            ref={flipRefs[unitKey]}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient font-elegant block"
          >
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-3 text-sm md:text-base font-medium text-khaki-700 uppercase tracking-wider font-elegant">
        {label}
      </span>
    </div>
  )

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-khaki-50 via-blush-50 to-gold-50 z-10">
      {/* Background with subtle gradient and animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-khaki-50 via-blush-50 to-gold-50">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-blush-200 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob animate-float"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-blob animation-delay-2000 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-khaki-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-20 right-1/3 w-56 h-56 bg-blush-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000 hidden lg:block"></div>
        <div className="absolute bottom-32 left-1/3 w-64 h-64 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-3000 hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto min-h-[90vh] py-4 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Decorative elements */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
            <span className="text-2xl md:text-3xl text-blush-400">💕</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold-400 to-transparent"></div>
          </div>

          <h2 className="font-elegant text-4xl md:text-5xl lg:text-6xl font-bold text-khaki-900 mb-4">
            Countdown to Our Big Day
          </h2>

          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
            <span className="text-xl md:text-2xl text-gold-500">✨</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
          </div>

          <p className="font-script text-xl md:text-2xl lg:text-3xl text-khaki-700 max-w-2xl mx-auto">
            We can't wait to celebrate with you!
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="flex justify-center items-start gap-1 md:gap-4 lg:gap-6 flex-wrap">
          <TimeUnit value={timeLeft.days} label="Days" unitKey="days" />
          <div className="hidden md:flex items-center h-full text-3xl md:text-4xl lg:text-5xl text-gold-500 font-light pt-8">
            <span>:</span>
          </div>
          <TimeUnit value={timeLeft.hours} label="Hours" unitKey="hours" />
          <div className="hidden md:flex items-center h-full text-3xl md:text-4xl lg:text-5xl text-gold-500 font-light pt-8">
            <span>:</span>
          </div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" unitKey="minutes" />
          <div className="hidden md:flex items-center h-full text-3xl md:text-4xl lg:text-5xl text-gold-500 font-light pt-8">
            <span>:</span>
          </div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" unitKey="seconds" />
        </div>

        {/* Decorative bottom element */}
        <div className="mt-12 md:mt-16 flex items-center justify-center">
          <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-khaki-300 to-transparent"></div>
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
        .animation-delay-3000 {
          animation-delay: 3s;
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

export default CountdownTimer

