import React, { useEffect, useRef } from 'react'

function OurStory() {
  const headerRef = useRef(null)
  const timelineItemsRef = useRef([])

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

    // Observe timeline items
    timelineItemsRef.current.forEach(ref => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll')
        observer.observe(ref)
      }
    })

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      timelineItemsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])
  const storyTimeline = [
    {
      year: "2018",
      title: "The First Glance",
      description: "It was a rainy Tuesday afternoon when our worlds collided at that little coffee shop downtown. Ruth was lost in a novel, completely unaware that her story was about to take an unexpected turn. Marvin noticed the book cover and couldn't resist asking about it. That simple 'What are you reading?' turned into a three-hour conversation, and we both left knowing we had found something extraordinary. Sometimes the most beautiful stories begin with the simplest moments.",
      icon: "☕",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
    },
    {
      year: "2019",
      title: "When We Knew",
      description: "Our first official date was at the botanical gardens, and it was magic from the moment we met at the entrance. We wandered through rose gardens and whispered secrets under willow trees. Hours felt like minutes as we discovered our shared dreams, silly jokes, and the way we both laughed at the same moments. By sunset, holding hands on a park bench, we both silently knew: this was it. This was the beginning of forever.",
      icon: "🌹",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
    },
    {
      year: "2021",
      title: "Building Our Home",
      description: "After two incredible years of growing together, we took the leap and moved in together. It wasn't just about combining furniture and kitchenware—it was about building a life. We learned each other's morning routines, favorite recipes, and the way we both needed coffee before any real conversation. Creating our first home taught us that love isn't just about grand gestures; it's in the everyday moments of choosing paint colors together and figuring out whose turn it is to do the dishes.",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop"
    },
    {
      year: "2023",
      title: "The Question",
      description: "The sun was painting the sky in hues of gold and pink at our favorite beach spot when Marvin got down on one knee. The ring glinted in the sunset light, and everything seemed to slow down. Ruth's 'Yes!' was barely out before tears of joy streamed down both our faces. Surrounded by the sound of waves and the feeling of forever, we realized that every moment of our journey had been leading to this. The best was yet to come.",
      icon: "💍",
      image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&h=400&fit=crop"
    },
    {
      year: "2024",
      title: "Forever Begins",
      description: "And now, here we are—ready to begin the greatest adventure of all. We've dreamed of this day, planned every detail, and most importantly, we can't wait to celebrate with the people who have been part of our story. You've watched us grow, supported us through everything, and shared in our joy. Now we want you to be there as we promise forever to each other. Our hearts are full, our love is strong, and we're so excited to share this beautiful day with you.",
      icon: "💒",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop"
    }
  ]

  return (
    <section className="khaki-light relative overflow-hidden z-10 pt-4">
      {/* Elegant Header Section */}
      <div className="section-padding pt-16 pb-8">
        <div className="max-w-4xl mx-auto text-center" ref={headerRef}>
          {/* Top decorative element */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in-down">
            <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-gentle-pulse"></div>
            <span className="text-2xl md:text-3xl text-blush-400 animate-float animate-heartbeat">🌹</span>
            <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent via-gold-400 to-transparent animate-gentle-pulse"></div>
          </div>

          {/* Main Title */}
          <h2 className="font-elegant text-5xl md:text-6xl lg:text-7xl font-bold text-khaki-900 mb-6 animate-fade-in-up">
            Our Story
          </h2>

          {/* Decorative divider with gold accents */}
          <div className="flex items-center justify-center gap-3 mb-6 animate-fade-in-scale">
            <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-gold-400 to-gold-500"></div>
            <span className="text-xl md:text-2xl text-gold-500 animate-sparkle">✨</span>
            <span className="text-xl md:text-2xl text-blush-500 animate-sparkle" style={{ animationDelay: '0.5s' }}>💫</span>
            <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-gold-400 to-gold-500"></div>
          </div>

          {/* Subtitle */}
          <p className="font-script text-xl md:text-2xl lg:text-3xl text-khaki-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A journey of love, laughter, and endless memories
          </p>
        </div>
      </div>

      {/* Timeline Content Section */}
      <div className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300 hidden md:block"></div>

            <div className="space-y-12 md:space-y-16">
              {storyTimeline.map((event, index) => (
                <div
                  key={index}
                  ref={el => timelineItemsRef.current[index] = el}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col gap-8`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                    <div className="bg-khaki-50 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl smooth-transition border border-khaki-200 romantic-hover group">
                      {/* Image */}
                      <div className="w-full h-56 md:h-72 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 smooth-transition group-hover:from-black/5"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-transparent to-blush-400/0 z-10 smooth-transition group-hover:from-gold-400/5 group-hover:to-blush-400/5"></div>
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                        />
                        {/* Floating hearts on hover */}
                        <span className="absolute top-4 right-4 text-xl opacity-0 group-hover:opacity-60 animate-float smooth-transition" style={{ animationDelay: '0.5s' }}>💖</span>
                      </div>
                      {/* Text Content */}
                      <div className="p-6 md:p-8">
                        <div className="text-khaki-600 font-bold text-lg mb-3 tracking-wider animate-gentle-pulse">{event.year}</div>
                        <h3 className="font-elegant text-2xl md:text-3xl font-semibold text-khaki-900 mb-4 group-hover:text-gradient smooth-transition">
                          {event.title}
                        </h3>
                        <p className="text-khaki-700 leading-relaxed text-base md:text-lg">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon with romantic animations */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="relative group/icon">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full blur-lg opacity-40 group-hover/icon:opacity-60 animate-gentle-pulse smooth-transition"></div>
                      {/* Icon container */}
                      <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 rounded-full flex items-center justify-center text-4xl md:text-5xl shadow-xl border-4 border-white transform group-hover/icon:scale-125 group-hover/icon:rotate-12 smooth-transition animate-float">
                        <span className="relative z-10">{event.icon}</span>
                      </div>
                      {/* Floating sparkles around icon */}
                      <span className="absolute -top-2 -right-2 text-sm opacity-0 group-hover/icon:opacity-70 animate-sparkle smooth-transition">✨</span>
                      <span className="absolute -bottom-1 -left-1 text-xs opacity-0 group-hover/icon:opacity-70 animate-sparkle smooth-transition" style={{ animationDelay: '0.3s' }}>💫</span>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurStory

