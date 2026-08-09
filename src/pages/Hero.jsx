import { Link } from 'react-router-dom'

const serviceHighlights = ['Website Development', 'Custom Software', 'Odoo Enterprise', 'SEO']

const serviceCards = [
  {
    title: 'Website Development',
    description:
      'Professional business websites designed for clarity, trust, and conversion.',
    points: ['Business websites', 'Maintenance', 'SEO', 'React & Django'],
  },
  {
    title: 'Custom Software',
    description:
      'Digital systems designed around the client’s actual business workflow and operations.',
    points: ['CRM', 'Inventory', 'Dashboards', 'Automation'],
  },
  {
    title: 'Odoo Enterprise',
    description:
      'Custom Odoo development, upgrades, and support for businesses that need more from their ERP.',
    points: ['Custom modules', 'Version upgrades', 'Integrations', 'Unfinished projects'],
  },
  {
    title: 'SEO',
    description:
      'Technical and on-page improvements that strengthen visibility and search performance.',
    points: ['Technical SEO', 'On-page optimization', 'Performance', 'Search structure'],
  },
]

const process = [
  {
    title: 'Understand the business',
    description: 'We identify the real needs, constraints, and goals before planning the solution.',
  },
  {
    title: 'Design a practical system',
    description: 'We define workflows, interfaces, and technical requirements around your operations.',
  },
  {
    title: 'Build and improve',
    description: 'We implement the project with a clear process, testing, and support for production use.',
  },
]

export default function Hero() {
  return (
    <main className="bg-white text-slate-900">
      <section className="section-shell relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-100 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl" aria-hidden="true" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">
              JR_VizEdge
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-slate-900 sm:text-5xl lg:text-6xl">
              Modern digital systems for businesses that want clarity and traction.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              We design websites, custom software, and Odoo solutions that help teams work better, look more credible, and grow with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3" aria-label="Core services">
              {serviceHighlights.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-700 shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="primary-button bg-[#0f172a] text-white hover:bg-[#2563eb]">
                Start a Project
              </Link>
              <Link to="/contact" className="secondary-button">
                Talk to Us
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">01</p>
                <p className="mt-3 text-lg font-black text-slate-900">Business-first</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">02</p>
                <p className="mt-3 text-lg font-black text-slate-900">Built for growth</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">03</p>
                <p className="mt-3 text-lg font-black text-slate-900">Reliable delivery</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl min-w-0">
            <div className="absolute left-2 top-8 hidden rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm sm:block">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">Strategy</p>
              <p className="mt-2 text-base font-black text-slate-900">Business systems</p>
            </div>

            <div className="absolute right-2 bottom-6 hidden rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 shadow-lg sm:block">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-sky-700">Delivery</p>
              <p className="mt-2 text-base font-black text-slate-900">On schedule</p>
            </div>

            <div className="relative rounded-[32px] border border-slate-200 bg-slate-50 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-700">JR_VizEdge</p>
                    <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-[2rem]">Project overview</h2>
                  </div>
                  <span className="rounded-full bg-sky-500 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">Live</span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">Website</p>
                    <p className="mt-4 text-3xl font-black text-slate-900">Business</p>
                    <p className="mt-2 text-sm text-sky-700">Professional presence</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-100 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">Software</p>
                    <p className="mt-4 text-3xl font-black text-slate-900">Custom</p>
                    <p className="mt-2 text-sm text-sky-700">Workflow-first</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-900">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-blue-700">Workflow</p>
                      <h3 className="mt-2 text-xl font-black">Delivery overview</h3>
                    </div>
                    <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-blue-700">Status</span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { label: 'Discovery', width: '92%' },
                      { label: 'Design', width: '78%' },
                      { label: 'Build', width: '84%' },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="mb-1 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                          <span>{item.label}</span>
                          <span>{item.width}</span>
                        </div>
                        <div className="h-2.5 rounded-full bg-slate-200">
                          <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400" style={{ width: item.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-700">What we do</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Digital solutions for businesses that need clarity and performance.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 h-1 w-12 rounded-full bg-sky-400" />
                <h3 className="text-2xl font-black text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-700">Why JR_VizEdge</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">A practical, business-first approach to digital projects.</h2>
          </div>

          <div className="grid gap-5">
            {process.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-600">Step</p>
                <h3 className="mt-3 text-2xl font-black text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
