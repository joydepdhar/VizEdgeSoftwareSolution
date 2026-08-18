import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/odoo', label: 'Odoo' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const mainLinkClass = ({ isActive }) =>
    [
      'group relative py-1 text-[13px] font-semibold tracking-[0.07em] uppercase transition-colors duration-200',
      isActive ? 'text-[#0f172a]' : 'text-slate-500 hover:text-[#0f172a]',
    ].join(' ')

  const mobileLinkClass = ({ isActive }) =>
    [
      'flex min-h-12 items-center justify-between border-b border-slate-100 py-3.5 text-left text-[15px] font-semibold transition-colors',
      isActive ? 'text-[#1d4ed8]' : 'text-slate-700',
    ].join(' ')

  return (
    <header
      className={[
        'sticky top-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300',
        isScrolled
          ? 'border-b border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_-16px_rgba(15,23,42,0.25)]'
          : 'border-b border-transparent',
      ].join(' ')}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <NavLink
          to="/"
          aria-label="JR_VizEdge home"
          className="flex min-w-0 shrink-0 items-center gap-1 rounded-md transition-opacity duration-200 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2563eb]"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/jr-icon-mark-removebg-preview.png"
            alt="JR_VizEdge"
            className="h-11 w-auto shrink-0 object-contain sm:h-12 lg:h-22"
          />
        </NavLink>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={mainLinkClass}>
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={[
                      'pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#2563eb] transition-transform duration-300 ease-out group-hover:scale-x-100',
                      isActive ? 'scale-x-100' : '',
                    ].join(' ')}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-[#0f172a] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-md sm:inline-flex"
          >
            Start a Project
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50 md:hidden"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <svg aria-hidden="true" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          'grid overflow-hidden border-t border-slate-100 bg-white transition-[grid-template-rows,opacity] duration-300 ease-out md:hidden',
          isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        ].join(' ')}
      >
        <div className="min-h-0 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 pb-6 pt-2 sm:px-6">
            <div className="grid">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  className={mobileLinkClass}
                  style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : '0ms' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-slate-300">
                    →
                  </span>
                </NavLink>
              ))}
            </div>

            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0f172a] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-[#1d4ed8]"
            >
              Start a Project
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}




// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// const navLinks = [
//   { to: '/', label: 'Home', end: true },
//   { to: '/services', label: 'Services' },
//   { to: '/odoo', label: 'Odoo' },
//   { to: '/about', label: 'About' },
//   { to: '/contact', label: 'Contact' },
// ]

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const mainLinkClass = ({ isActive }) =>
//     [
//       'text-sm font-semibold tracking-[0.08em] uppercase transition-colors',
//       isActive ? 'text-[#0f172a]' : 'text-slate-600 hover:text-[#2563eb]',
//     ].join(' ')

//   const mobileLinkClass = ({ isActive }) =>
//     [
//       'flex min-h-12 items-center justify-between border-b border-slate-200 py-3 text-left text-base font-bold transition-colors',
//       isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700',
//     ].join(' ')

//   return (
//     <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
//       <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
//         <NavLink to="/" aria-label="JR_VizEdge home" className="flex min-w-0 shrink-0 items-center gap-1" onClick={() => setIsMenuOpen(false)}>
//         <img
//           src="/jr-icon-mark-removebg-preview.png"
//           alt=""
//           aria-hidden="true"
//           className="h-18 w-auto shrink-0 object-contain sm:h-14 md:h-16 lg:h-16"
//         />
//       </NavLink>

//         <div className="hidden items-center gap-8 md:flex">
//           {navLinks.map((link) => (
//             <NavLink key={link.to} to={link.to} end={link.end} className={mainLinkClass}>
//               {link.label}
//             </NavLink>
//           ))}
//         </div>

//         <div className="flex items-center gap-3">
//           <NavLink
//             to="/contact"
//             className="hidden rounded-full bg-[#0f172a] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#2563eb] sm:inline-flex"
//           >
//             Start a Project
//           </NavLink>

//           <button
//             type="button"
//             className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 md:hidden"
//             aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
//             aria-expanded={isMenuOpen}
//             onClick={() => setIsMenuOpen((value) => !value)}
//           >
//             <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
//               {isMenuOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {isMenuOpen && (
//         <div className="border-t border-slate-200 bg-white md:hidden">
//           <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
//             <div className="grid">
//               {navLinks.map((link) => (
//                 <NavLink key={link.to} to={link.to} end={link.end} className={mobileLinkClass} onClick={() => setIsMenuOpen(false)}>
//                   {link.label}
//                   <span aria-hidden="true">→</span>
//                 </NavLink>
//               ))}
//             </div>

//             <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#0f172a] px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white">
//               Start a Project
//             </NavLink>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }