import React, { useState, useEffect } from 'react'

function CompactCountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

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

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md px-3 py-2 md:px-4 md:py-2.5 min-w-[50px] md:min-w-[60px] border border-khaki-200/60">
          <span className="text-xl md:text-2xl font-bold text-gradient font-elegant block text-center">
            {String(value).padStart(2, '0')}
          </span>
        </div>
      </div>
      <span className="mt-1.5 text-xs font-medium text-khaki-600 uppercase tracking-wider">
        {label}
      </span>
    </div>
  )

  return (
    <section className="py-6 md:py-8 bg-gradient-to-br from-khaki-50/80 via-blush-50/40 to-gold-50/50 border-y border-khaki-200/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="hidden sm:block text-lg md:text-xl text-gold-500 font-light">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="hidden sm:block text-lg md:text-xl text-gold-500 font-light">:</div>
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <div className="hidden sm:block text-lg md:text-xl text-gold-500 font-light">:</div>
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </div>
    </section>
  )
}

export default CompactCountdownTimer

