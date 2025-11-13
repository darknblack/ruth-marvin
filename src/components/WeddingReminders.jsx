import React, { useEffect, useRef } from 'react'

function WeddingReminders() {
  const headerRef = useRef(null)
  const reminderCardsRef = useRef([])

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

    // Observe reminder cards
    reminderCardsRef.current.forEach(ref => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll')
        observer.observe(ref)
      }
    })

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      reminderCardsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])
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
    <section className="section-padding khaki-light relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-khaki-800 mb-4">
            Wedding Reminders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reminders.map((reminder, index) => (
            <div
              key={index}
              ref={el => reminderCardsRef.current[index] = el}
              className="bg-khaki-50 rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-khaki-200 smooth-transition romantic-hover"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4">{reminder.icon}</div>
              <h3 className="font-elegant text-2xl md:text-3xl font-bold text-khaki-900 mb-4">
                {reminder.title}
              </h3>
              <p className="text-khaki-700 leading-relaxed">
                {reminder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeddingReminders

