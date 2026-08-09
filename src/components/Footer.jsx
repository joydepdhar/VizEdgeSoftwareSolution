import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/odoo', label: 'Odoo' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="text-xl font-black tracking-tight text-white">JR_VizEdge</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">
            Professional websites, custom software, Odoo solutions, and SEO support for businesses that need reliable digital systems.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-300">Explore</p>
          <ul className="mt-4 space-y-3">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-slate-300 transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>&copy; 2026 JR_VizEdge. All rights reserved.</p>
          <p>Built for business performance, clarity, and growth.</p>
        </div>
      </div>
    </footer>
  )
}