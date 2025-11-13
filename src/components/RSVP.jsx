import React, { useState, useEffect, useRef } from 'react'
import { getCookie } from '../utils/cookies'

function RSVP({ code: propCode }) {
  const [formData, setFormData] = useState({
    rsvpCode: '',
    name: '',
    email: '',
    attending: '',
    guests: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [codeValid, setCodeValid] = useState(false)
  const [codeError, setCodeError] = useState('')
  const headerRef = useRef(null)
  const formRef = useRef(null)
  const firstInputRef = useRef(null)
  const nameInputRef = useRef(null)

  // Mock data mapping codes to guest information
  const GUEST_DATA = {
    'somelongcodehere': { firstName: 'John', lastName: 'Doe' },
    'anothercode123': { firstName: 'Jane', lastName: 'Smith' },
    'testcode456': { firstName: 'Bob', lastName: 'Johnson' },
  }

  // Check for code from props or cookies
  useEffect(() => {
    const code = propCode || getCookie('rsvp_code')
    if (code) {
      setFormData(prev => ({ ...prev, rsvpCode: code }))
      validateCode(code)
    }
  }, [propCode])

  // Scroll animation and focus on scroll
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

          // Special focus animation for RSVP form when it comes into view
          if (entry.target === formRef.current) {
            // Small delay before focusing to let animation complete
            setTimeout(() => {
              // Focus on the first visible input (code input if not validated, name input if validated)
              const inputToFocus = firstInputRef.current || nameInputRef.current
              inputToFocus?.focus({ preventScroll: true })
            }, 500)
          }
        }
      })
    }, observerOptions)

    // Observe header
    if (headerRef.current) {
      headerRef.current.classList.add('fade-in-on-scroll')
      observer.observe(headerRef.current)
    }

    // Observe form
    if (formRef.current) {
      formRef.current.classList.add('fade-in-on-scroll')
      observer.observe(formRef.current)
    }

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      if (formRef.current) observer.unobserve(formRef.current)
    }
  }, [codeValid])

  const validateCode = (code) => {
    if (code && GUEST_DATA[code]) {
      setCodeValid(true)
      setCodeError('')
      // Pre-fill name if available
      const guestInfo = GUEST_DATA[code]
      if (guestInfo.firstName && guestInfo.lastName) {
        setFormData(prev => ({
          ...prev,
          name: `${guestInfo.firstName} ${guestInfo.lastName}`
        }))
      }
    } else if (code) {
      setCodeValid(false)
      setCodeError('Invalid RSVP code. Please check your invitation.')
    } else {
      setCodeValid(false)
      setCodeError('')
    }
  }

  const handleCodeChange = (e) => {
    const code = e.target.value
    setFormData(prev => ({ ...prev, rsvpCode: code }))
    validateCode(code)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Require code if not already validated
    if (!codeValid && !formData.rsvpCode) {
      setCodeError('Please enter your RSVP code to continue.')
      return
    }

    if (!codeValid && formData.rsvpCode) {
      setCodeError('Invalid RSVP code. Please check your invitation.')
      return
    }

    // In a real application, you would send this to a backend
    console.log('RSVP submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData(prev => ({
        ...prev,
        email: '',
        attending: '',
        guests: '',
        message: ''
      }))
    }, 3000)
  }

  return (
    <section className="section-padding relative overflow-hidden z-10 bg-gradient-to-br from-khaki-100 via-blush-50 to-khaki-100">
      {/* Background with subtle gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-khaki-50 via-blush-50 to-gold-50">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blush-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>

          <p className="text-khaki-700 font-script text-2xl">
            Please let us know if you can join us
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/80 backdrop-blur-sm border-2 border-green-200 rounded-lg p-8 text-center shadow-xl">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="font-elegant text-2xl font-bold text-green-800 mb-2">
              Thank You!
            </h3>
            <p className="text-green-700">
              We've received your RSVP and can't wait to celebrate with you!
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 border border-khaki-200/50 hover:shadow-2xl smooth-transition">
            <div className="space-y-6">
              {/* RSVP Code Input - only show if no valid code */}
              {!codeValid && (
                <div>
                  <label htmlFor="rsvpCode" className="block text-khaki-800 font-semibold mb-2">
                    RSVP Code *
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="rsvpCode"
                    name="rsvpCode"
                    required={!codeValid}
                    value={formData.rsvpCode}
                    onChange={handleCodeChange}
                    className={`w-full px-4 py-3 rounded-lg border ${codeError ? 'border-red-300' : 'border-khaki-300'
                      } bg-white focus:outline-none focus:ring-2 ${codeError ? 'focus:ring-red-500' : 'focus:ring-khaki-500'
                      } focus:border-transparent text-khaki-900`}
                    placeholder="Enter your RSVP code"
                  />
                  {codeError && (
                    <p className="mt-1 text-sm text-red-600">{codeError}</p>
                  )}
                  {codeValid && (
                    <p className="mt-1 text-sm text-green-600">✓ Valid code</p>
                  )}
                </div>
              )}

              {codeValid && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-green-800 text-sm">
                    ✓ RSVP code verified. You can now submit your response.
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-khaki-800 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  ref={nameInputRef}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-khaki-300 bg-white focus:outline-none focus:ring-2 focus:ring-khaki-500 focus:border-transparent text-khaki-900"
                  placeholder="John & Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-khaki-800 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-khaki-300 bg-white focus:outline-none focus:ring-2 focus:ring-khaki-500 focus:border-transparent text-khaki-900"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-khaki-800 font-semibold mb-2">
                  Will you be attending? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      required
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                      className="mr-2 text-khaki-600 focus:ring-khaki-500"
                    />
                    <span className="text-khaki-800">Yes, I'll be there!</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      required
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                      className="mr-2 text-khaki-600 focus:ring-khaki-500"
                    />
                    <span className="text-khaki-800">Sorry, can't make it</span>
                  </label>
                </div>
              </div>



              <div>
                <label htmlFor="message" className="block text-khaki-800 font-semibold mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-khaki-300 bg-white focus:outline-none focus:ring-2 focus:ring-khaki-500 focus:border-transparent text-khaki-900"
                  placeholder="We're so excited to celebrate with you!"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={!codeValid}
                className={`w-full ${codeValid
                  ? 'bg-gradient-to-r from-khaki-600 to-khaki-700 text-white hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  } font-semibold py-4 rounded-lg shadow-lg transition-all duration-300`}
              >
                {codeValid ? 'Send RSVP' : 'Enter RSVP Code to Continue'}
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-center text-sm text-khaki-600">
          <p>* For a production site, connect this form to a backend service or email service</p>
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
      `}</style>
    </section>
  )
}

export default RSVP

