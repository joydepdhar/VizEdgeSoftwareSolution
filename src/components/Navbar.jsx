import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/Profile_Logo.png'

export default function Navbar({ isNight, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()

  const linkClass = ({ isActive }) =>
    [
      'text-sm font-bold tracking-wide transition-colors',
      isActive
        ? 'text-[#2563EB] dark:text-[#38BDF8]'
        : 'text-[#0F172A]/65 hover:text-[#2563EB] dark:text-white/65 dark:hover:text-[#38BDF8]',
    ].join(' ')
  const services = [
    'CRM Software',
    'HRM Software',
    'Smart Inventory Software',
    'Data Analysis & Power BI',
    'Custom Desktop & Web Apps',
  ]
  const industries = [
    'Small & Medium Business',
    'Corporate Operations',
    'Retail & E-commerce',
    'Manufacturing & Distribution',
  ]
  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/odoo', label: 'Odoo' },
    { to: '/insights', label: 'Insights' },
  ]
  const mobileLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/services', label: 'Services' },
    ...navLinks,
  ]
  const mobileLinkClass = ({ isActive }) =>
    [
      'flex min-h-12 items-center justify-between border-b border-[#0F172A]/10 py-3 text-left text-base font-extrabold transition-colors dark:border-white/10',
      isActive
        ? 'text-[#2563EB] dark:text-[#38BDF8]'
        : 'text-[#0F172A] hover:text-[#2563EB] dark:text-white dark:hover:text-[#38BDF8]',
    ].join(' ')

  useEffect(() => {
    if (!isServicesOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsServicesOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isServicesOpen])

  return (
    <nav ref={navRef} className="sticky top-0 z-50 border-b border-[#0F172A]/10 bg-[#FFFFFF] px-4 py-3 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#07111F] sm:px-6 lg:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 md:gap-8">
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-2 text-xl font-extrabold text-[#0F172A] transition-colors dark:text-white"
          onClick={() => {
            setIsMenuOpen(false)
            setIsServicesOpen(false)
          }}
        >
          <img
            src={logo}
            alt="VizEdge logo"
            className="h-8 w-8 object-contain"
          />
        VizEdge
        </NavLink>

        <ul className="hidden items-center gap-10 lg:flex xl:gap-14">
          <li>
            <button
              type="button"
              className={[
                'inline-flex items-center gap-2 px-4 py-3 text-sm font-bold tracking-wide transition-colors',
                location.pathname === '/services' || isServicesOpen
                  ? 'bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#38BDF8]/10 dark:text-[#38BDF8]'
                  : 'text-[#0F172A] hover:bg-[#2563EB]/10 hover:text-[#2563EB] dark:text-white dark:hover:bg-[#38BDF8]/10 dark:hover:text-[#38BDF8]',
              ].join(' ')}
              aria-expanded={isServicesOpen}
              aria-controls="services-mega-menu"
              onClick={() => setIsServicesOpen((value) => !value)}
            >
                Services
              <span className={['text-lg leading-none text-[#38BDF8] transition-transform', isServicesOpen ? 'rotate-180' : ''].join(' ')}>
                ⌃
              </span>
            </button>

            <div
              id="services-mega-menu"
              className={[
                'absolute left-0 top-full w-full border-t border-[#0F172A]/10 bg-[#FFFFFF] shadow-xl transition-all duration-200 dark:border-white/10 dark:bg-[#07111F]',
                isServicesOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible translate-y-3 opacity-0',
              ].join(' ')}
            >
              <div className="mx-auto grid max-w-7xl grid-cols-[1.25fr_1fr_1fr] gap-16 px-6 py-16 text-left">
                <div>
                  <p className="mb-8 text-xs font-extrabold uppercase tracking-[0.32em] text-[#38BDF8]">
                    Product Solutions
                  </p>

                  <div className="divide-y divide-[#0F172A]/10 dark:divide-white/10">
                    {services.map((service) => (
                      <NavLink
                        key={service}
                        to="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="block py-5 text-base font-extrabold text-[#0F172A] transition-colors hover:text-[#2563EB] dark:text-white dark:hover:text-[#38BDF8]"
                      >
                        {service}
                      </NavLink>
                    ))}
                  </div>

                  <NavLink
                    to="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.2em] text-[#0F172A]/65 transition-colors hover:text-[#2563EB] dark:text-white/65 dark:hover:text-[#38BDF8]"
                  >
                    View All Services <span className="text-lg text-[#38BDF8]">→</span>
                  </NavLink>
                </div>

                <div className="border-l border-[#0F172A]/10 pl-16 dark:border-white/10">
                  <p className="mb-8 text-xs font-extrabold uppercase tracking-[0.32em] text-[#38BDF8]">
                    Built For
                  </p>

                  <div className="space-y-6">
                    {industries.map((industry) => (
                      <NavLink
                        key={industry}
                        to="/services"
                        onClick={() => setIsServicesOpen(false)}
                        className="block text-base font-extrabold text-[#0F172A]/65 transition-colors hover:text-[#2563EB] dark:text-white/65 dark:hover:text-[#38BDF8]"
                      >
                        {industry}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <div className="bg-[#0F172A] bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.28)_1px,transparent_0)] [background-size:18px_18px] p-8 text-[#FFFFFF] shadow-xl shadow-[#0F172A]/20">
                  <span className="inline-flex border border-[#38BDF8]/50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#38BDF8]">
                    Featured
                  </span>
                  <h3 className="mt-7 text-2xl font-extrabold leading-tight text-[#FFFFFF]">
                    Need custom business software?
                  </h3>
                  <p className="mt-5 text-sm font-semibold leading-6 text-[#FFFFFF]/70">
                    Get CRM, HRM, inventory, Power BI dashboards, or a fully
                    custom desktop and web system for your workflow.
                  </p>
                  <NavLink
                    to="/contact"
                    onClick={() => setIsServicesOpen(false)}
                    className="mt-8 flex items-center justify-center gap-3 bg-[#FFFFFF] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0F172A] transition-colors hover:bg-[#38BDF8]"
                  >
                    Schedule Call <span className="text-base">→</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </li>
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
                onClick={() => setIsServicesOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onThemeToggle}
            className="inline-flex h-11 w-11 items-center justify-center text-[#2563EB] transition-colors hover:text-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 dark:text-[#38BDF8] dark:hover:text-white dark:focus:ring-[#38BDF8]/35"
            aria-label={`Switch to ${isNight ? 'day' : 'night'} view`}
            title={`Switch to ${isNight ? 'day' : 'night'} view`}
          >
            {isNight ? (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 15.2A7.7 7.7 0 0 1 8.8 4 8.6 8.6 0 1 0 20 15.2Z"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 2 4 13h7l-1 9 9-12h-7l1-8Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            )}
          </button>
          <NavLink
            to="/contact"
            onClick={() => setIsServicesOpen(false)}
            className="hidden bg-[#0F172A] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFFFFF] shadow-lg shadow-[#0F172A]/20 transition-colors hover:bg-[#2563EB] dark:bg-[#2563EB] dark:shadow-[#2563EB]/20 dark:hover:bg-[#38BDF8] dark:hover:text-[#0F172A] lg:inline-flex"
          >
            Contact Us <span className="ml-2 text-base leading-none text-[#38BDF8] dark:text-white">→</span>
          </NavLink>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 items-center justify-center gap-2 border border-[#0F172A]/10 bg-[#F8FBFF] px-3 text-[#0F172A] transition-colors hover:border-[#2563EB]/30 hover:text-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-[#38BDF8]/40 dark:hover:text-[#38BDF8] dark:focus:ring-[#38BDF8]/35 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-navigation"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="m6 6 12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              )}
            </svg>
            <span className="hidden text-xs font-extrabold uppercase tracking-[0.14em] sm:inline">
              Menu
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={[
          'absolute left-0 right-0 top-full grid overflow-hidden border-b border-[#0F172A]/10 bg-[#FFFFFF] px-4 shadow-xl shadow-[#0F172A]/15 transition-all duration-200 dark:border-white/10 dark:bg-[#07111F] sm:px-6 lg:hidden',
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        ].join(' ')}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto max-w-7xl py-3 text-left">
            <div className="grid">
              {mobileLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={mobileLinkClass}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label} <span className="text-[#38BDF8]">→</span>
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex min-h-12 items-center justify-center bg-[#2563EB] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] shadow-lg shadow-[#2563EB]/25 transition-colors hover:bg-[#0F172A] dark:hover:bg-[#38BDF8] dark:hover:text-[#0F172A]"
            >
              Contact Us <span className="ml-2 text-base leading-none">→</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
