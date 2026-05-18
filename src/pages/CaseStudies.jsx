const caseStudies = [
  {
    industry: 'Sales Operations',
    title: 'CRM system for lead tracking and follow-up management',
    summary:
      'A custom CRM workflow that organizes leads, customer history, sales stages, quotations, and team follow-ups.',
    results: ['Central customer database', 'Faster follow-up process', 'Clear sales pipeline'],
  },
  {
    industry: 'Retail & Distribution',
    title: 'Smart inventory software for stock control',
    summary:
      'A stock management system for purchases, suppliers, warehouse movement, low-stock alerts, and product reports.',
    results: ['Real-time stock visibility', 'Low-stock alerts', 'Purchase tracking'],
  },
  {
    industry: 'Business Intelligence',
    title: 'Power BI dashboard for monthly performance reporting',
    summary:
      'Interactive dashboards that turn sales, inventory, and finance data into KPI reports for decision makers.',
    results: ['KPI dashboards', 'Automated reporting', 'Better decision visibility'],
  },
  {
    industry: 'ERP Implementation',
    title: 'Odoo ERP customization for daily operations',
    summary:
      'Customized Odoo modules, user roles, reports, and workflows for sales, inventory, accounting, and HR operations.',
    results: ['Customized ERP modules', 'Role-based access', 'Operational reports'],
  },
]

export default function CaseStudies() {
  return (
    <main className="bg-[#FFFFFF] text-left transition-colors dark:bg-[#050B18]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#38BDF8]">
              Case Studies
            </p>
            <h1 className="text-5xl font-black leading-tight text-[#0F172A] md:text-6xl dark:text-white">
              Practical software solutions for real business workflows.
            </h1>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
            Explore examples of how VizEdge can design CRM, inventory, Power BI,
            Odoo ERP, desktop, and web software around daily company operations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="border border-[#0F172A]/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-[#2563EB]/10 dark:border-white/10 dark:bg-[#0B1A2D] dark:hover:border-[#38BDF8]/40 dark:hover:shadow-[#38BDF8]/10"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
                {study.industry}
              </p>
              <h2 className="mt-5 text-2xl font-black leading-tight text-[#0F172A] dark:text-white">
                {study.title}
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-[#0F172A]/70 dark:text-white/70">
                {study.summary}
              </p>
              <div className="mt-6 grid gap-3">
                {study.results.map((result) => (
                  <div
                    key={result}
                    className="flex items-center gap-3 text-sm font-bold text-[#0F172A] dark:text-white"
                  >
                    <span className="h-2 w-2 bg-[#2563EB]" />
                    {result}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-[#0F172A] bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.24)_1px,transparent_0)] [background-size:20px_20px] p-8 text-[#FFFFFF] md:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
            Your Project Next
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <h2 className="max-w-3xl text-3xl font-black leading-tight text-[#FFFFFF]">
              Have a business workflow that needs custom software?
            </h2>
            <a
              href="/contact"
              className="inline-flex justify-center bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#38BDF8] hover:text-[#0F172A]"
            >
              Start Discussion <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}
