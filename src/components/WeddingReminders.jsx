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
    <section className="section-padding khaki-light relative z-10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className="absolute top-10 -right-32 w-64 h-64 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 -left-32 w-72 h-72 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16" ref={headerRef}>

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
              {/* Decorative line */}
              <div className="flex items-center justify-center gap-2 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-khaki-400 to-khaki-400"></div>
                <div className="text-5xl md:text-6xl opacity-80 group-hover:scale-110 smooth-transition">{reminder.icon}</div>
                <div className="h-px w-8 bg-gradient-to-l from-transparent via-khaki-400 to-khaki-400"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-elegant text-2xl md:text-3xl font-bold text-khaki-700 group-hover:text-gradient smooth-transition flex items-center justify-center gap-3">
                  {/* Number badge */}

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

export default WeddingReminders

