import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/Profile_Logo.png'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/odoo', label: 'Odoo' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const mainLinkClass = ({ isActive }) =>
    [
      'text-sm font-semibold tracking-[0.08em] uppercase transition-colors',
      isActive ? 'text-[#0f172a]' : 'text-slate-600 hover:text-[#2563eb]',
    ].join(' ')

  const mobileLinkClass = ({ isActive }) =>
    [
      'flex min-h-12 items-center justify-between border-b border-slate-200 py-3 text-left text-base font-bold transition-colors',
      isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700',
    ].join(' ')

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <NavLink to="/" className="flex items-center gap-3 text-lg font-black tracking-tight text-slate-900" onClick={() => setIsMenuOpen(false)}>
          <img src={logo} alt="JR_VizEdge logo" className="h-9 w-9 object-contain" />
          <span>JR_VizEdge</span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={mainLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden rounded-full bg-[#0f172a] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#2563eb] sm:inline-flex"
          >
            Start a Project
          </NavLink>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="grid">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end={link.end} className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                  <span aria-hidden="true">→</span>
                </NavLink>
              ))}
            </div>

            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#0f172a] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white">
              Start a Project
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
