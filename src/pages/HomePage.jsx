import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import CountdownTimer from '../components/CountdownTimer'
import WeddingTimeline from '../components/WeddingTimeline'
import OurStory from '../components/OurStory'
import EventDetails from '../components/EventDetails'
import DressCode from '../components/DressCode'
import FAQsAndReminders from '../components/FAQsAndReminders'
import SnapAndShare from '../components/SnapAndShare'
import PersonalMessage from '../components/PersonalMessage'
import RSVP from '../components/RSVP'
import Footer from '../components/Footer'
import { setCookie, getCookie } from '../utils/cookies'

function HomePage() {
  // Set your wedding date here (YYYY-MM-DD HH:MM:SS format)
  const weddingDate = new Date('2025-12-20 15:00:00').getTime()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [rsvpCode, setRsvpCode] = useState(null)

  // Handle code parameter and cookies
  useEffect(() => {
    const code = searchParams.get('code')

    if (code) {
      // Save code to cookie
      setCookie('rsvp_code', code)
      setRsvpCode(code)
      // Still redirect to RSVP page for the full experience
      navigate(`/rsvp?code=${encodeURIComponent(code)}`, { replace: true })
    } else {
      // Check for code in cookies
      const savedCode = getCookie('rsvp_code')
      if (savedCode) {
        setRsvpCode(savedCode)
      }
    }
  }, [searchParams, navigate])

  return (
    <div className="min-h-screen pt-[100svh]">
      <Hero />
      <section id="countdown">
        <CountdownTimer targetDate={weddingDate} />
      </section>
      <section id="our-story">
        <OurStory />
      </section>
      <section id="event-details">
        <EventDetails />
      </section>
      <section id="dress-code">
        <DressCode />
      </section>
      <section id="faqs">
        <FAQsAndReminders />
      </section>
      <section id="message">
        <PersonalMessage />
      </section>
      <section id="rsvp">
        <RSVP code={rsvpCode} />
      </section>
      <Footer />
    </div>
  )
}

export default HomePage

