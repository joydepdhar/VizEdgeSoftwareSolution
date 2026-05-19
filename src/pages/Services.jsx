import { Link } from 'react-router-dom'

const products = [
  {
    title: 'CRM Software',
    description:
      'Manage leads, customers, follow-ups, sales pipelines, quotations, and team activity from one clear dashboard.',
    features: ['Lead tracking', 'Sales pipeline', 'Customer history'],
  },
  {
    title: 'HRM Software',
    description:
      'Handle employee records, attendance, leave requests, payroll support, and HR operations with less manual work.',
    features: ['Attendance', 'Leave management', 'Employee profiles'],
  },
  {
    title: 'Smart Inventory Software',
    description:
      'Track stock, purchases, suppliers, warehouses, low-stock alerts, and product movement in real time.',
    features: ['Stock control', 'Purchase records', 'Low-stock alerts'],
  },
  {
    title: 'POS Software',
    description:
      'Sell faster with billing, barcode support, receipts, customer records, and inventory-connected sales.',
    features: ['Fast billing', 'Barcode support', 'Sales reports'],
  },
  {
    title: 'Accounting Software',
    description:
      'Organize invoices, expenses, payments, due balances, and business reports for day-to-day finance.',
    features: ['Invoices', 'Expense tracking', 'Payment records'],
  },
  {
    title: 'Data Analysis & Power BI',
    description:
      'Turn raw business data into clear dashboards, KPI reports, sales insights, and decision-ready analytics.',
    features: ['Power BI dashboards', 'KPI reports', 'Data visualization'],
  },
  {
    title: 'Custom Desktop & Web Apps',
    description:
      'Build software around your exact workflow, available as a desktop app, web app, or both versions together.',
    features: ['Desktop version', 'Web version', 'Custom workflow'],
  },
]

export default function Services() {
  return (
    <main className="bg-[#FFFFFF] text-left transition-colors dark:bg-[#050B18]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#38BDF8]">
            Custom Software Products
          </p>
          <h1 className="text-5xl font-extrabold leading-tight text-[#0F172A] md:text-6xl dark:text-white">
            Business software built for your workflow.
          </h1>
          <p className="mt-6 text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
            VizEdge develops CRM, HRM, smart inventory, POS, accounting, data
            analysis, Power BI dashboards, and custom software for both desktop
            and web platforms.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="border border-[#0F172A]/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-[#2563EB]/10 dark:border-white/10 dark:bg-[#0B1A2D] dark:hover:border-[#38BDF8]/40 dark:hover:shadow-[#38BDF8]/10"
            >
              <div className="mb-6 h-1 w-14 bg-[#38BDF8]" />
              <h2 className="text-2xl font-extrabold text-[#0F172A] dark:text-white">
                {product.title}
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-[#0F172A]/70 dark:text-white/70">
                {product.description}
              </p>
              <ul className="mt-6 space-y-3">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm font-bold text-[#0F172A] dark:text-white"
                  >
                    <span className="h-2 w-2 bg-[#2563EB]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="mt-16 grid gap-8 bg-[#0F172A] p-8 text-[#FFFFFF] md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
              Desktop + Web
            </p>
            <h2 className="mt-4 text-3xl font-extrabold text-[#FFFFFF]">
              Need software for a unique business process?
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-[#FFFFFF]/70">
              Share your workflow and we can plan a custom product with admin
              panels, reports, user roles, database, and deployment support.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex justify-center bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#38BDF8] hover:text-[#0F172A]"
          >
            Discuss Project <span className="ml-2">→</span>
          </Link>
        </section>
      </section>
    </main>
  )
}
