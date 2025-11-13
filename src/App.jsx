import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CustomRSVP from './components/CustomRSVP'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rsvp" element={<CustomRSVP />} />
    </Routes>
  )
}

export default App

