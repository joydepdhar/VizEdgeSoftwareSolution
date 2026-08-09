import { Link } from 'react-router-dom'

const modules = ['Sales', 'CRM', 'Inventory', 'Purchase', 'Accounting', 'Website', 'eCommerce', 'Manufacturing', 'Project', 'HR']

const capabilities = [
  {
    title: 'Custom Odoo Development',
    description: 'Custom modules, workflows, business logic, views, reports, and automated processes tailored to your daily operations.',
  },
  {
    title: 'Odoo Version Upgrades',
    description: 'Odoo version upgrades and migration to the latest supported release, with careful review of compatibility and business impact.',
  },
  {
    title: 'Functional Development & Customization',
    description: 'Configuration and customization across sales, CRM, inventory, accounting, website, eCommerce, manufacturing, project, HR, and other Odoo applications.',
  },
  {
    title: 'Unfinished Odoo Projects',
    description: 'Have an unfinished Odoo project? We can review, fix, complete, and move it toward production with a practical, focused approach.',
  },
]

export default function Odoo() {
  return (
    <main className="bg-white text-slate-900">
      <section className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-700">Odoo Enterprise</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Odoo support that helps businesses run more clearly and more efficiently.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              JR_VizEdge supports businesses with custom Odoo development, functional improvements, integrations, and project recovery for incomplete or failed implementations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="primary-button bg-[#0f172a] text-white hover:bg-[#2563eb]">
                Discuss Odoo Project
              </Link>
              <Link to="/services" className="secondary-button">
                View Services
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-6 text-white shadow-xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-sky-300">Core Modules</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {modules.map((module) => (
                <div key={module} className="rounded-2xl border border-slate-700 bg-slate-800 p-4 text-sm font-bold text-slate-100">
                  {module}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 h-1 w-12 rounded-full bg-sky-400" />
              <h2 className="text-2xl font-black text-slate-900">{item.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
