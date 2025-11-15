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
    <section className="khaki-bg relative overflow-hidden z-10 pt-4">
      {/* Repeating pattern overlay */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Decorative background blob elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-gold-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-khaki-50 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-6000"></div>
        <div className="absolute top-10 right-1/4 w-56 h-56 bg-blush-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000 hidden lg:block"></div>
      </div>

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
          <h2 className="font-elegant text-5xl md:text-6xl lg:text-7xl font-bold text-khaki-700 mb-6 animate-fade-in-up">
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
          <p className="font-script text-xl md:text-2xl lg:text-3xl text-khaki-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A journey of love, laughter, and endless memories
          </p>
        </div>
      </div>

      {/* Timeline Content Section */}
      <div className="section-padding pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-gold-300 via-gold-400 to-gold-300 hidden md:block opacity-40"></div>

            <div className="space-y-16 md:space-y-24">
              {storyTimeline.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    ref={el => timelineItemsRef.current[index] = el}
                    className={`flex items-start ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      } flex-col gap-6 md:gap-8`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* For even indices: Content | Icon | Spacer (flex-row) */}
                    {/* For odd indices: Spacer | Icon | Content (flex-row-reverse) */}
                    {/* On mobile: Icon | Content (order classes) */}

                    {isEven ? (
                      <>
                        {/* Content - first on desktop (even), second on mobile */}
                        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left order-2 md:order-none`}>
                          <div className="group smooth-transition">
                            {/* Year and Title Header */}
                            <div className={`mb-4 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                              <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
                                <div className="text-khaki-600 font-bold text-base md:text-lg tracking-wider">{event.year}</div>
                                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-gold-400 to-transparent"></div>
                              </div>
                              <h3 className="font-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-khaki-900 mb-4 group-hover:text-gradient smooth-transition">
                                {event.title}
                              </h3>
                            </div>

                            {/* Image */}
                            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden relative rounded-lg mb-6 group-hover:shadow-xl smooth-transition">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 smooth-transition"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-transparent to-blush-400/0 z-10 smooth-transition group-hover:from-gold-400/5 group-hover:to-blush-400/5"></div>
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover group-hover:scale-105 smooth-transition duration-700"
                              />
                            </div>

                            {/* Description */}
                            <p className="text-khaki-700 text-justify sm:text-right leading-relaxed text-sm sm:text-base md:text-lg">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {/* Icon - middle on desktop (even), first on mobile */}
                        <div className="relative z-10 flex-shrink-0 mx-auto md:mx-0 order-1 md:order-none">
                          <div className="relative group/icon">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-200 via-gold-500 to-gold-200 rounded-full blur-lg opacity-30 group-hover/icon:opacity-50 animate-gentle-pulse smooth-transition"></div>
                            {/* Icon container */}
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-500 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl shadow-lg border-2 md:border-4 border-khaki-100 transform group-hover/icon:scale-110 group-hover/icon:rotate-6 smooth-transition animate-float">
                              <span className="relative z-10 opacity-70">{event.icon}</span>
                            </div>
                            {/* Floating sparkles around icon */}
                            <span className="absolute -top-1 -right-1 text-xs sm:text-sm opacity-0 group-hover/icon:opacity-60 animate-sparkle smooth-transition">✨</span>
                            <span className="absolute -bottom-1 -left-1 text-xs opacity-0 group-hover/icon:opacity-60 animate-sparkle smooth-transition" style={{ animationDelay: '0.3s' }}>💫</span>
                          </div>
                        </div>

                        {/* Spacer - third on desktop (even) */}
                        <div className="flex-1 hidden md:block"></div>
                      </>
                    ) : (
                      <>
                        {/* Content - first in DOM, but third visually on desktop (odd) due to flex-row-reverse, second on mobile */}
                        <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left order-2 md:order-none`}>
                          <div className="group smooth-transition">
                            {/* Year and Title Header */}
                            <div className={`mb-4 ${isEven ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                              <div className="flex items-center justify-center gap-3 mb-3">
                                <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
                                <div className="text-khaki-600 font-bold text-base md:text-lg tracking-wider">{event.year}</div>
                                <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-gold-400 to-transparent"></div>
                              </div>
                              <h3 className="font-elegant text-2xl sm:text-3xl md:text-4xl font-semibold text-khaki-900 mb-4 group-hover:text-gradient smooth-transition">
                                {event.title}
                              </h3>
                            </div>

                            {/* Image */}
                            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden relative rounded-lg mb-6 group-hover:shadow-xl smooth-transition">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10 smooth-transition"></div>
                              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/0 via-transparent to-blush-400/0 z-10 smooth-transition group-hover:from-gold-400/5 group-hover:to-blush-400/5"></div>
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover group-hover:scale-105 smooth-transition duration-700"
                              />
                            </div>

                            {/* Description */}
                            <p className="text-khaki-700 text-justify sm:text-left leading-relaxed text-sm sm:text-base md:text-lg">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {/* Icon - second in DOM, but middle visually on desktop (odd) due to flex-row-reverse, first on mobile */}
                        <div className="relative z-10 flex-shrink-0 mx-auto md:mx-0 order-1 md:order-none">
                          <div className="relative group/icon">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-200 via-gold-500 to-gold-200 rounded-full blur-lg opacity-30 group-hover/icon:opacity-50 animate-gentle-pulse smooth-transition"></div>
                            {/* Icon container */}
                            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-gold-500 via-gold-400 to-gold-500 rounded-full flex items-center justify-center text-3xl sm:text-4xl md:text-5xl shadow-lg border-2 md:border-4 border-khaki-100 transform group-hover/icon:scale-110 group-hover/icon:rotate-6 smooth-transition animate-float">
                              <span className="relative z-10 opacity-70">{event.icon}</span>
                            </div>
                            {/* Floating sparkles around icon */}
                            <span className="absolute -top-1 -right-1 text-xs sm:text-sm opacity-0 group-hover/icon:opacity-60 animate-sparkle smooth-transition">✨</span>
                            <span className="absolute -bottom-1 -left-1 text-xs opacity-0 group-hover/icon:opacity-60 animate-sparkle smooth-transition" style={{ animationDelay: '0.3s' }}>💫</span>
                          </div>
                        </div>

                        {/* Spacer - third in DOM, but first visually on desktop (odd) due to flex-row-reverse */}
                        <div className="flex-1 hidden md:block"></div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
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

export default OurStory

