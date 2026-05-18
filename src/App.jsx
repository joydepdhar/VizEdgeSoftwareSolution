import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Odoo from './pages/Odoo'
import Insights from './pages/Insights'
import CaseStudies from './pages/CaseStudies'

import './App.css'

function App() {
  const [isNight, setIsNight] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.localStorage.getItem('vizedge-theme') === 'night'
  })

  useEffect(() => {
    window.localStorage.setItem('vizedge-theme', isNight ? 'night' : 'day')
  }, [isNight])

  return (
    <div className={isNight ? 'dark' : ''}>
      <div className="flex min-h-screen flex-col bg-white transition-colors duration-300 dark:bg-[#050B18]">
        <Navbar isNight={isNight} onThemeToggle={() => setIsNight((value) => !value)} />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/services" element={<Services />} />
            <Route path="/odoo" element={<Odoo />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
