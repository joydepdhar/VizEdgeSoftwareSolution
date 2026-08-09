import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Website Development',
    description: 'Professional, scalable, high-performance websites built for businesses.',
    details: ['Business websites', 'Website maintenance', 'SEO', 'React, Django, ASP.NET'],
  },
  {
    title: 'Custom Software Development',
    description: 'Software designed around the client’s actual business workflow rather than forcing the business into generic software.',
    details: ['CRM', 'Inventory systems', 'Dashboards', 'APIs'],
  },
  {
    title: 'Odoo Enterprise Services',
    description: 'Custom Odoo solutions, module development, upgrades, and project recovery for businesses that need dependable ERP support.',
    details: ['Custom modules', 'Version upgrades', 'Integrations', 'Unfinished projects'],
  },
  {
    title: 'SEO Services',
    description: 'Improve your website’s technical foundation, visibility, and search performance with practical SEO improvements.',
    details: ['Technical SEO', 'On-page SEO', 'Performance optimization', 'Search structure'],
  },
]

export default function Services() {
  return (
    <main className="bg-white text-slate-900">
      <section className="section-shell py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-700">Services</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Built for business performance, reliability, and growth.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            JR_VizEdge helps businesses with websites, custom software, Odoo services, and SEO improvements that make digital operations easier to manage and easier to scale.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 h-1 w-12 rounded-full bg-sky-400" />
              <h2 className="text-3xl font-black text-slate-900">{service.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-700">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-300">Need a practical solution?</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white">Let’s discuss the right digital solution for your business.</h2>
            </div>
            <Link to="/contact" className="primary-button bg-white text-slate-900 hover:bg-sky-300">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
