import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './pages/Hero'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Odoo from './pages/Odoo'

import './App.css'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/odoo" element={<Odoo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
