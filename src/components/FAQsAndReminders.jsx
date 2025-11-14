import React, { useState, useEffect, useRef } from 'react'

function FAQsAndReminders() {
  const [openIndices, setOpenIndices] = useState([0])
  const faqHeaderRef = useRef(null)
  const remindersHeaderRef = useRef(null)
  const faqItemsRef = useRef([])
  const reminderCardsRef = useRef([])
  const contentRefs = useRef([])

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

    // Observe headers
    if (faqHeaderRef.current) {
      faqHeaderRef.current.classList.add('fade-in-on-scroll')
      observer.observe(faqHeaderRef.current)
    }
    if (remindersHeaderRef.current) {
      remindersHeaderRef.current.classList.add('fade-in-on-scroll')
      observer.observe(remindersHeaderRef.current)
    }

    // Observe FAQ items
    faqItemsRef.current.forEach(ref => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll')
        observer.observe(ref)
      }
    })

    // Observe reminder cards
    reminderCardsRef.current.forEach(ref => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll')
        observer.observe(ref)
      }
    })

    return () => {
      if (faqHeaderRef.current) observer.unobserve(faqHeaderRef.current)
      if (remindersHeaderRef.current) observer.unobserve(remindersHeaderRef.current)
      faqItemsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
      reminderCardsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const toggleFAQ = (index) => {
    setOpenIndices(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index)
      } else {
        return [...prev, index]
      }
    })
  }

  // FAQ data
  const faqs = [
    {
      question: "Can I Bring Someone?",
      answer: "In order to keep our event solemn and intimate, we are only able to accommodate guests named on this invite. We appreciate your kind understanding.",
      highlight: "ONLY ABLE TO ACCOMMODATE GUESTS NAMED ON THIS INVITE"
    },
    {
      question: "Can I Bring My Kids?",
      answer: "We love your little ones, but we kindly request that our wedding be an adults-only celebration. We appreciate your understanding and look forward to celebrating with you!",
      highlight: "AN ADULTS-ONLY CELEBRATION"
    }
  ]

  // Wedding reminders data
  const reminders = [
    {
      title: "Be On Time",
      description: "We can't wait to celebrate with you! Please arrive on time so we can start our special day together.",
      icon: "⏰"
    },
    {
      title: "Finish the Event",
      description: "Stay with us until the end! We'd love to share every moment of this celebration with you.",
      icon: "🎉"
    },
    {
      title: "Be Blessed & Have Fun",
      description: "This is a day of joy and celebration. Come with a happy heart and ready to make beautiful memories!",
      icon: "✨"
    }
  ]

  return (
    <section className="section-padding khaki-light relative z-10 overflow-hidden">
      {/* Decorative background elements - unified styling */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-khaki-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000 hidden lg:block"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* FAQs Section */}
        <div className="mb-20 md:mb-24">
          <div className="text-center mb-16" ref={faqHeaderRef}>
            <h2 className="font-script text-4xl md:text-5xl font-bold text-khaki-700 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => {
              const isOpen = openIndices.includes(index)

              return (
                <div
                  key={index}
                  ref={el => faqItemsRef.current[index] = el}
                  className="faq-item"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex items-center justify-between py-6 px-2 focus:outline-none focus:ring-2 focus:ring-khaki-300 rounded-lg transition-all duration-300 hover:bg-khaki-50/50"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-script text-2xl md:text-3xl font-bold text-khaki-700 pr-8">
                      {faq.question}
                    </h3>
                    <div className={`faq-icon flex-shrink-0 transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : ''}`}>
                      <svg
                        className="w-6 h-6 text-khaki-600"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </button>

                  <div
                    className="faq-content overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? '1000px' : '0px',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <div
                      ref={el => {
                        if (el) contentRefs.current[index] = el
                      }}
                      className="px-2 pb-6"
                    >
                      <p className="text-khaki-600 leading-relaxed text-sm sm:text-md sm:text-lg">
                        {faq.answer.split(faq.highlight).map((part, i, arr) => (
                          <React.Fragment key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="font-bold text-khaki-900">{faq.highlight}</span>
                            )}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                  </div>

                  {index < faqs.length - 1 && (
                    <div className="border-b border-khaki-200/50 mt-2"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Wedding Reminders Section */}
        <div>
          <div className="text-center mb-16" ref={remindersHeaderRef}>
            <h2 className="font-script text-4xl md:text-5xl font-bold text-khaki-700 mb-4">
              Wedding Reminders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {reminders.map((reminder, index) => (
              <div
                key={index}
                ref={el => reminderCardsRef.current[index] = el}
                className="relative text-center smooth-transition group"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >


                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-elegant text-2xl md:text-3xl font-bold text-khaki-700 group-hover:text-gradient smooth-transition flex items-center justify-center gap-3">
                    <span>{index + 1}. {reminder.title}</span>
                  </h3>
                  <p className="text-khaki-500 leading-relaxed text-sm md:text-base max-w-xs mx-auto">
                    {reminder.description}
                  </p>
                </div>
              </div>
            ))}
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
        
        .faq-item {
          transition: all 0.3s ease;
        }
        
        .faq-content {
          will-change: max-height, opacity;
        }
        
        .faq-icon {
          will-change: transform;
        }
      `}</style>
    </section>
  )
}

export default FAQsAndReminders

