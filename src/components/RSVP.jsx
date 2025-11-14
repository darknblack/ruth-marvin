import React, { useState, useEffect, useRef } from 'react'
import { getCookie } from '../utils/cookies'

function RSVP({ code: propCode }) {
  const [formData, setFormData] = useState({
    rsvpCode: '',
    name: '',
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
        <div className="absolute top-20 right-10 w-96 h-96 bg-khaki-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-12" ref={headerRef}>
          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-gentle-pulse"></div>
            <span className="text-2xl md:text-3xl text-blush-400 animate-float">💌</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold-400 to-transparent animate-gentle-pulse"></div>
          </div>
          <h2 className="font-elegant text-4xl md:text-5xl font-bold text-khaki-700 mb-4">
            RSVP
          </h2>
          <p className="text-khaki-500 font-script text-2xl">
            Please let us know if you can join us
          </p>
        </div>

        {submitted ? (
          <div className="relative bg-gradient-to-br from-white via-green-50/30 to-white backdrop-blur-sm border-2 border-green-200 rounded-2xl p-8 md:p-12 text-center shadow-2xl overflow-hidden group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-[3px] border-l-[3px] border-green-300/60 rounded-tl-2xl z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-[3px] border-r-[3px] border-green-300/60 rounded-tr-2xl z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[3px] border-l-[3px] border-green-300/60 rounded-bl-2xl z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[3px] border-r-[3px] border-green-300/60 rounded-br-2xl z-10 pointer-events-none"></div>

            {/* Ornamental corner details */}
            <div className="absolute top-3 left-3 w-3 h-3 bg-green-400/40 rounded-full z-10 pointer-events-none"></div>
            <div className="absolute top-3 right-3 w-3 h-3 bg-green-400/40 rounded-full z-10 pointer-events-none"></div>
            <div className="absolute bottom-3 left-3 w-3 h-3 bg-green-400/40 rounded-full z-10 pointer-events-none"></div>
            <div className="absolute bottom-3 right-3 w-3 h-3 bg-green-400/40 rounded-full z-10 pointer-events-none"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-4 right-8 text-2xl opacity-20 animate-float">✨</div>
            <div className="absolute bottom-4 left-8 text-2xl opacity-20 animate-float animation-delay-2000">💐</div>

            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-heartbeat">✅</div>
              <h3 className="font-elegant text-3xl font-bold text-green-800 mb-3">
                Thank You!
              </h3>
              <p className="text-green-700 text-lg">
                We've received your RSVP and can't wait to celebrate with you!
              </p>
            </div>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="relative bg-gradient-to-br from-white via-khaki-50/20 to-white backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-khaki-200/60 hover:shadow-3xl smooth-transition overflow-hidden group">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-24 h-24 border-t-[3px] border-l-[3px] border-khaki-400/50 rounded-tl-2xl z-10 pointer-events-none group-hover:border-khaki-500/70 smooth-transition"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-t-[3px] border-r-[3px] border-khaki-400/50 rounded-tr-2xl z-10 pointer-events-none group-hover:border-khaki-500/70 smooth-transition"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-[3px] border-l-[3px] border-khaki-400/50 rounded-bl-2xl z-10 pointer-events-none group-hover:border-khaki-500/70 smooth-transition"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[3px] border-r-[3px] border-khaki-400/50 rounded-br-2xl z-10 pointer-events-none group-hover:border-khaki-500/70 smooth-transition"></div>

            {/* Ornamental corner details */}
            <div className="absolute top-3 left-3 w-4 h-4 bg-khaki-400/30 rounded-full z-10 pointer-events-none group-hover:bg-khaki-500/40 smooth-transition"></div>
            <div className="absolute top-3 right-3 w-4 h-4 bg-khaki-400/30 rounded-full z-10 pointer-events-none group-hover:bg-khaki-500/40 smooth-transition"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 bg-khaki-400/30 rounded-full z-10 pointer-events-none group-hover:bg-khaki-500/40 smooth-transition"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 bg-khaki-400/30 rounded-full z-10 pointer-events-none group-hover:bg-khaki-500/40 smooth-transition"></div>

            {/* Floating decorative elements */}
            <div className="absolute top-6 right-6 text-xl opacity-15 group-hover:opacity-25 smooth-transition animate-float">💌</div>
            <div className="absolute bottom-6 left-6 text-xl opacity-15 group-hover:opacity-25 smooth-transition animate-float animation-delay-2000">✉️</div>
            <div className="absolute top-1/2 right-8 text-lg opacity-10 group-hover:opacity-20 smooth-transition animate-float animation-delay-4000">✨</div>

            {/* Subtle inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gold-50/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              {/* RSVP Code Input - only show if no valid code */}
              {!codeValid && (
                <div className="relative">
                  <label htmlFor="rsvpCode" className="block text-khaki-800 font-semibold mb-2 flex items-center gap-2">
                    <span className="text-gold-600">🔑</span>
                    RSVP Code *
                  </label>
                  <div className="relative">
                    <input
                      ref={firstInputRef}
                      type="text"
                      id="rsvpCode"
                      name="rsvpCode"
                      required={!codeValid}
                      value={formData.rsvpCode}
                      onChange={handleCodeChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${codeError ? 'border-red-300 bg-red-50/50' : 'border-khaki-300 bg-white/80'
                        } focus:outline-none focus:ring-2 ${codeError ? 'focus:ring-red-500' : 'focus:ring-khaki-500'
                        } focus:border-transparent text-khaki-900 smooth-transition hover:border-khaki-400 shadow-sm hover:shadow-md`}
                      placeholder="Enter your RSVP code"
                    />
                    <div className={`absolute right-3 top-1/2 -translate-y-1/2 text-lg ${codeError ? 'text-red-400' : 'text-khaki-400'}`}>
                      {codeError ? '⚠️' : '✉️'}
                    </div>
                  </div>
                  {codeError && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1 animate-fade-in-up">
                      <span>⚠️</span> {codeError}
                    </p>
                  )}
                  {codeValid && (
                    <p className="mt-2 text-sm text-green-600 flex items-center gap-1">✓ Valid code</p>
                  )}
                </div>
              )}

              {codeValid && (
                <div className="relative bg-gradient-to-r from-green-50 via-emerald-50/50 to-green-50 border-2 border-green-200/80 rounded-xl p-4 mb-4 overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-green-300/40 rounded-tr-xl"></div>
                  <p className="text-green-800 text-sm font-medium flex items-center gap-2 relative z-10">
                    <span className="text-lg">✓</span> RSVP code verified. You can now submit your response.
                  </p>
                </div>
              )}

              <div className="relative">
                <label htmlFor="name" className="block text-khaki-800 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-gold-600">👤</span>
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-khaki-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-khaki-500 focus:border-transparent text-khaki-900 smooth-transition hover:border-khaki-400 shadow-sm hover:shadow-md"
                  placeholder="John & Jane Doe"
                />
              </div>

              <div className="relative">
                <label className="block text-khaki-800 font-semibold mb-3 flex items-center gap-2">
                  <span className="text-gold-600">💒</span>
                  Will you be attending? *
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <label className="flex-1 flex items-center gap-3 p-4 rounded-xl border-2 border-khaki-200 bg-white/60 hover:bg-khaki-50/50 hover:border-khaki-300 smooth-transition cursor-pointer group/radio">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      required
                      checked={formData.attending === 'yes'}
                      onChange={handleChange}
                      className="w-5 h-5 text-khaki-600 focus:ring-khaki-500 focus:ring-2"
                    />
                    <span className="text-khaki-800 font-medium group-hover/radio:text-khaki-900 smooth-transition flex items-center gap-2">
                      <span className="text-lg">🎉</span> Yes, I'll be there!
                    </span>
                  </label>
                  <label className="flex-1 flex items-center gap-3 p-4 rounded-xl border-2 border-khaki-200 bg-white/60 hover:bg-khaki-50/50 hover:border-khaki-300 smooth-transition cursor-pointer group/radio">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      required
                      checked={formData.attending === 'no'}
                      onChange={handleChange}
                      className="w-5 h-5 text-khaki-600 focus:ring-khaki-500 focus:ring-2"
                    />
                    <span className="text-khaki-800 font-medium group-hover/radio:text-khaki-900 smooth-transition flex items-center gap-2">
                      <span className="text-lg">💔</span> Sorry, can't make it
                    </span>
                  </label>
                </div>
              </div>



              <div className="relative">
                <label htmlFor="message" className="block text-khaki-800 font-semibold mb-2 flex items-center gap-2">
                  <span className="text-gold-600">💬</span>
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-khaki-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-khaki-500 focus:border-transparent text-khaki-900 smooth-transition hover:border-khaki-400 shadow-sm hover:shadow-md resize-none"
                  placeholder="We're so excited to celebrate with you!"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={!codeValid}
                  className={`relative w-full overflow-hidden ${codeValid
                    ? 'bg-gradient-to-r from-khaki-600 via-khaki-700 to-khaki-600 text-white hover:shadow-2xl transform hover:scale-[1.02] hover:from-khaki-700 hover:via-khaki-600 hover:to-khaki-700'
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    } font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 group/button`}
                >
                  {/* Shimmer effect on hover */}
                  {codeValid && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-1000"></div>
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {codeValid ? (
                      <>
                        <span>💌</span> Send RSVP
                      </>
                    ) : (
                      <>
                        <span>🔒</span> Enter RSVP Code to Continue
                      </>
                    )}
                  </span>
                </button>
              </div>
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
      `}</style>
    </section>
  )
}

export default RSVP

