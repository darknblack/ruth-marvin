import React, { useEffect, useRef } from 'react'

function FAQs() {
  const headerRef = useRef(null)
  const faqItemsRef = useRef([])

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

    // Observe FAQ items
    faqItemsRef.current.forEach(ref => {
      if (ref) {
        ref.classList.add('fade-in-on-scroll')
        observer.observe(ref)
      }
    })

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current)
      faqItemsRef.current.forEach(ref => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])
  const faqs = [
    {
      question: "Can I Bring My Kids?",
      answer: "We love your little ones, but we kindly request that our wedding be an adults-only celebration. We appreciate your understanding and look forward to celebrating with you!",
      highlight: "AN ADULTS-ONLY CELEBRATION"
    },
    {
      question: "Can I Bring Someone?",
      answer: "In order to keep our event solemn and intimate, we are only able to accommodate guests named on this invite. We appreciate your kind understanding.",
      highlight: "ONLY ABLE TO ACCOMMODATE GUESTS NAMED ON THIS INVITE"
    }
  ]

  return (
    <section className="section-padding khaki-light relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" ref={headerRef}>
          <h2 className="font-script text-4xl md:text-5xl font-bold text-khaki-800 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={el => faqItemsRef.current[index] = el}
              className="bg-khaki-50 rounded-lg shadow-md p-8 md:p-10 border border-khaki-200 hover:shadow-lg smooth-transition romantic-hover"
            >
              <h3 className="font-script text-2xl md:text-3xl font-bold text-khaki-900 mb-4">
                {faq.question}
              </h3>
              <p className="text-khaki-800 leading-relaxed text-lg">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs

