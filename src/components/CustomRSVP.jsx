import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { setCookie } from '../utils/cookies'

// Mock data mapping codes to guest information
// In production, this would be replaced with an API call
const GUEST_DATA = {
  'somelongcodehere': { firstName: 'John', lastName: 'Doe' },
  'anothercode123': { firstName: 'Jane', lastName: 'Smith' },
  'testcode456': { firstName: 'Bob', lastName: 'Johnson' },
}

function CustomRSVP() {
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')

  // Wedding date - same as HomePage
  const weddingDate = new Date('2025-12-20 15:00:00').getTime()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    attending: '',
    guests: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Simulate loading guest data based on code
    // In production, this would be an API call
    const loadGuestData = async () => {
      setLoading(true)
      setError(null)

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      if (!code) {
        setError('No RSVP code provided')
        setLoading(false)
        return
      }

      const guestInfo = GUEST_DATA[code]

      if (guestInfo) {
        // Save code to cookie
        setCookie('rsvp_code', code)
        setFormData(prev => ({
          ...prev,
          firstName: guestInfo.firstName,
          lastName: guestInfo.lastName
        }))
      } else {
        setError('Invalid RSVP code. Please check your invitation.')
      }

      setLoading(false)
    }

    loadGuestData()
  }, [code])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this to a backend
    console.log('RSVP submitted:', { code, ...formData })
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: formData.firstName,
        lastName: formData.lastName,
        attending: '',
        guests: '',
        message: ''
      })
    }, 3000)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-khaki-50 w-full">
        {/* Full-width Header with image */}
        <section className="relative w-full h-[50vh] min-h-[400px] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop"
              alt="Ruth & Marvin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-khaki-900/30 via-transparent to-blush-900/30"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <span className="text-2xl md:text-3xl text-blush-200">💕</span>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-white/40 to-transparent"></div>
            </div>
            <h1 className="font-elegant text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 drop-shadow-2xl">
              Ruth <span className="text-blush-200">&</span> Marvin
            </h1>
            <p className="font-script text-xl md:text-3xl lg:text-4xl text-white/95 mb-2 drop-shadow-lg">
              December 20, 2025
            </p>
            <p className="font-elegant text-base md:text-lg text-white/90 mb-6 drop-shadow-md">
              Saturday | 3:00 PM
            </p>
            <Link
              to="/"
              className="inline-block text-sm md:text-base text-white/95 hover:text-white font-medium backdrop-blur-md bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg border border-white/30 transition-all duration-200 shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        {/* Loading state */}
        <section className="w-full bg-khaki-50 min-h-[50vh] flex items-center justify-center py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-khaki-500 mx-auto mb-3"></div>
            <p className="text-invitation-textLight text-base">Loading your invitation...</p>
          </div>
        </section>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-khaki-50 w-full">
        {/* Full-width Header with image */}
        <section className="relative w-full h-[50vh] min-h-[400px] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop"
              alt="Ruth & Marvin"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-khaki-900/30 via-transparent to-blush-900/30"></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <span className="text-2xl md:text-3xl text-blush-200">💕</span>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-white/40 to-transparent"></div>
            </div>
            <h1 className="font-elegant text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 drop-shadow-2xl">
              Ruth <span className="text-blush-200">&</span> Marvin
            </h1>
            <p className="font-script text-xl md:text-3xl lg:text-4xl text-white/95 mb-2 drop-shadow-lg">
              December 20, 2025
            </p>
            <p className="font-elegant text-base md:text-lg text-white/90 mb-6 drop-shadow-md">
              Saturday | 3:00 PM
            </p>
            <Link
              to="/"
              className="inline-block text-sm md:text-base text-white/95 hover:text-white font-medium backdrop-blur-md bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg border border-white/30 transition-all duration-200 shadow-lg"
            >
              ← Back to Home
            </Link>
          </div>
        </section>

        {/* Error message */}
        <section className="w-full bg-khaki-50 min-h-[50vh] flex items-center justify-center py-16 px-4">
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-white border border-rose-200 rounded-lg p-6 shadow-sm">
              <div className="text-4xl mb-3">❌</div>
              <h3 className="font-elegant text-xl font-semibold text-rose-700 mb-2">
                Invalid RSVP Code
              </h3>
              <p className="text-rose-600 mb-3 text-sm">{error}</p>
              <p className="text-invitation-textLight text-xs mb-5">
                Please check your invitation and try again, or contact us directly.
              </p>
              <Link
                to="/"
                className="inline-block bg-gradient-to-r from-khaki-500 to-khaki-600 text-white font-medium px-5 py-2 rounded-md shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-200 text-sm"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Inline countdown timer for header
  const HeaderCountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })

    useEffect(() => {
      const calculateTimeLeft = () => {
        const now = new Date().getTime()
        const difference = weddingDate - now

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
    }, [weddingDate])

    const TimeUnit = ({ value, label }) => (
      <div className="flex flex-col items-center">
        <div className="bg-white/25 backdrop-blur-md rounded-lg shadow-lg px-3 py-2 md:px-4 md:py-2.5 min-w-[50px] md:min-w-[60px] border border-white/40">
          <span className="text-xl md:text-2xl font-bold text-white font-elegant block text-center drop-shadow-lg">
            {String(value).padStart(2, '0')}
          </span>
        </div>
        <span className="mt-1.5 text-xs font-medium text-white uppercase tracking-wider drop-shadow-md">
          {label}
        </span>
      </div>
    )

    return (
      <div className="py-4 md:py-6">
        <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="hidden sm:block text-lg md:text-xl text-white/80 font-light drop-shadow-md">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="hidden sm:block text-lg md:text-xl text-white/80 font-light drop-shadow-md">:</div>
          <TimeUnit value={timeLeft.minutes} label="Min" />
          <div className="hidden sm:block text-lg md:text-xl text-white/80 font-light drop-shadow-md">:</div>
          <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full">
      {/* Full-width Header with image, countdown, and RSVP form */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop"
            alt="Ruth & Marvin"
            className="w-full h-full object-cover"
          />
          {/* Softer, warmer overlay that allows background to show through */}
          <div className="absolute inset-0 bg-gradient-to-b from-khaki-900/35 via-khaki-800/30 to-khaki-900/40"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/25"></div>
          {/* Subtle warm tint */}
          <div className="absolute inset-0 bg-gradient-to-t from-blush-900/10 via-transparent to-gold-900/10"></div>
        </div>

        <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-start py-8 md:py-12 px-4">
          {/* Header Content */}
          <div className="text-center mb-6 md:mb-8 max-w-4xl mx-auto">
            <Link
              to="/"
              className="inline-block text-sm md:text-base text-white hover:text-white font-medium backdrop-blur-md bg-white/25 hover:bg-white/35 px-4 py-2 rounded-lg border border-white/40 transition-all duration-200 shadow-lg mb-6"
            >
              ← Back to Home
            </Link>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
              <span className="text-2xl md:text-3xl text-blush-100 drop-shadow-lg">💕</span>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-white/60 to-transparent"></div>
            </div>
            <h1 className="font-elegant text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 drop-shadow-2xl">
              Ruth <span className="text-blush-100">&</span> Marvin
            </h1>
            <p className="font-script text-xl md:text-3xl lg:text-4xl text-white mb-2 drop-shadow-lg">
              December 20, 2025
            </p>
            <p className="font-elegant text-base md:text-lg text-white mb-6 drop-shadow-md">
              Saturday | 3:00 PM
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="w-full max-w-4xl mx-auto mb-8 md:mb-10">
            <HeaderCountdownTimer />
          </div>

          {/* RSVP Form */}
          <div className="w-full max-w-2xl mx-auto flex-1">
            <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-6 md:p-8 border border-white/40">
              <div className="text-center mb-6">
                <p className="text-khaki-700 font-script text-lg md:text-xl">
                  We'd love to know if you'll be joining us!
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center shadow-sm">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-elegant text-xl font-semibold text-green-700 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-green-600 text-sm">
                    We've received your RSVP and can't wait to celebrate with you!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className="block text-khaki-800 font-medium mb-1.5 text-sm">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-khaki-300 bg-white focus:outline-none focus:ring-2 focus:ring-khaki-400 focus:border-khaki-400 text-khaki-900 text-sm"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-khaki-800 font-medium mb-1.5 text-sm">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-khaki-300 bg-white focus:outline-none focus:ring-2 focus:ring-khaki-400 focus:border-khaki-400 text-khaki-900 text-sm"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-khaki-800 font-medium mb-2 text-sm">
                      Will you be attending? *
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="attending"
                          value="yes"
                          required
                          checked={formData.attending === 'yes'}
                          onChange={handleChange}
                          className="mr-2 w-4 h-4 text-khaki-500 focus:ring-khaki-400 cursor-pointer"
                        />
                        <span className="text-khaki-800 text-sm group-hover:text-khaki-600 transition-colors">
                          Yes, I'll be there! 🎉
                        </span>
                      </label>
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="radio"
                          name="attending"
                          value="no"
                          required
                          checked={formData.attending === 'no'}
                          onChange={handleChange}
                          className="mr-2 w-4 h-4 text-khaki-500 focus:ring-khaki-400 cursor-pointer"
                        />
                        <span className="text-khaki-800 text-sm group-hover:text-khaki-600 transition-colors">
                          Sorry, can't make it
                        </span>
                      </label>
                    </div>
                  </div>

                  {formData.attending === 'yes' && (
                    <div>
                      <label htmlFor="guests" className="block text-khaki-800 font-medium mb-1.5 text-sm">
                        Number of Guests *
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        min="1"
                        required={formData.attending === 'yes'}
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-md border border-khaki-300 bg-white focus:outline-none focus:ring-2 focus:ring-khaki-400 focus:border-khaki-400 text-khaki-900 text-sm"
                        placeholder="1"
                      />
                      <p className="text-xs text-khaki-600 mt-1">
                        Please include yourself in the count
                      </p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="message" className="block text-khaki-800 font-medium mb-1.5 text-sm">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-md border border-khaki-300 bg-white focus:outline-none focus:ring-2 focus:ring-khaki-400 focus:border-khaki-400 text-khaki-900 text-sm resize-none"
                      placeholder="We're so excited to celebrate with you!"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-khaki-600 to-khaki-700 text-white font-medium py-3 rounded-md shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 text-sm mt-2"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomRSVP

