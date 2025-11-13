import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import CountdownTimer from '../components/CountdownTimer'
import WeddingReminders from '../components/WeddingReminders'
import WeddingTimeline from '../components/WeddingTimeline'
import OurStory from '../components/OurStory'
import EventDetails from '../components/EventDetails'
import DressCode from '../components/DressCode'
import FAQs from '../components/FAQs'
import Gallery from '../components/Gallery'
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
    <div className="min-h-screen">
      <Hero />
      <CountdownTimer targetDate={weddingDate} />

      <OurStory />
      <EventDetails />
      <DressCode />
      <Gallery />
      <FAQs />
      <WeddingReminders />
      <SnapAndShare />
      <PersonalMessage />
      <RSVP code={rsvpCode} />
      <Footer />
    </div>
  )
}

export default HomePage

