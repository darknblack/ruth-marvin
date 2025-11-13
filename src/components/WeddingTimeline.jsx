import React from 'react'

function WeddingTimeline() {
  const timelineEvents = [
    {
      time: "4:00 PM",
      title: "Ceremony",
      description: "Join us as we exchange vows and begin our journey together",
      icon: "💍"
    },
    {
      time: "5:00 PM",
      title: "Photos",
      description: "Let's capture beautiful memories together",
      icon: "📸"
    },
    {
      time: "6:00 PM",
      title: "Dinner",
      description: "Enjoy a delicious meal and celebrate with us",
      icon: "🍽️"
    }
  ]

  return (
    <section className="section-padding khaki-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl font-bold text-khaki-800 mb-4">
            Wedding Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-khaki-300 via-khaki-400 to-khaki-300"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative flex items-start gap-6 md:gap-8"
              >
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-khaki-50 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-md border-2 border-khaki-300">
                    {event.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-khaki-50 rounded-lg shadow-md p-6 md:p-8 border border-khaki-200">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-2xl md:text-3xl font-bold text-gradient font-elegant">
                      {event.time}
                    </span>
                  </div>
                  <h3 className="font-elegant text-2xl md:text-3xl font-bold text-khaki-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-khaki-700 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeddingTimeline

