import { Link } from 'react-router-dom'

const modules = [
  'Sales & CRM',
  'Inventory',
  'Accounting',
  'HR & Payroll',
  'Purchase',
  'Manufacturing',
]

const features = [
  {
    title: 'Odoo Customization',
    description:
      'Adapt Odoo modules, forms, workflows, fields, reports, and user roles for your business process.',
  },
  {
    title: 'ERP Implementation',
    description:
      'Plan, configure, migrate data, and launch Odoo for sales, inventory, accounts, HR, and operations.',
  },
  {
    title: 'Reports & Dashboards',
    description:
      'Build useful ERP reports, KPI dashboards, and business insights for faster decisions.',
  },
]

export default function Odoo() {
  return (
    <main className="bg-[#FFFFFF] text-left transition-colors dark:bg-[#050B18]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#38BDF8]">
            Odoo ERP Solutions
          </p>
          <h1 className="text-5xl font-black leading-tight text-[#0F172A] md:text-6xl dark:text-white">
            Odoo systems customized for your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
            VizEdge helps businesses implement, customize, and extend Odoo ERP
            for daily operations, reporting, and long-term growth.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] shadow-lg shadow-[#2563EB]/25 transition-colors hover:bg-[#0F172A] dark:hover:bg-[#38BDF8] dark:hover:text-[#0F172A]"
            >
              Discuss Odoo Project <span className="ml-2 text-[#38BDF8]">→</span>
            </Link>
            <Link
              to="/services"
              className="border border-[#0F172A]/15 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#0F172A] transition-colors hover:border-[#38BDF8] hover:text-[#2563EB] dark:border-white/15 dark:text-white dark:hover:text-[#38BDF8]"
            >
              View Services
            </Link>
          </div>
        </div>

        <div className="bg-[#0F172A] bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.24)_1px,transparent_0)] [background-size:20px_20px] p-8 text-[#FFFFFF] shadow-2xl shadow-[#0F172A]/20">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
            ERP Modules
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {modules.map((module) => (
              <div key={module} className="border border-white/10 p-4">
                <p className="font-extrabold text-[#FFFFFF]">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="border border-[#0F172A]/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#0B1A2D]"
            >
              <div className="mb-6 h-1 w-14 bg-[#38BDF8]" />
              <h2 className="text-2xl font-black text-[#0F172A] dark:text-white">
                {feature.title}
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-[#0F172A]/70 dark:text-white/70">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
