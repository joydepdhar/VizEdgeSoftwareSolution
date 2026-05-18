const insights = [
  {
    category: 'Business Software',
    title: 'How custom CRM and HRM systems reduce daily manual work',
    summary:
      'A practical look at replacing spreadsheets, repeated data entry, and disconnected team workflows with one business system.',
  },
  {
    category: 'Inventory',
    title: 'What smart inventory software should track from day one',
    summary:
      'Stock movement, purchase history, supplier records, alerts, and reporting features every growing business should consider.',
  },
  {
    category: 'Analytics',
    title: 'Why Power BI dashboards help owners make faster decisions',
    summary:
      'Turn sales, inventory, finance, and operations data into simple KPI views that show what needs attention.',
  },
]

const topics = ['CRM', 'HRM', 'Inventory', 'Odoo ERP', 'Power BI', 'Web Apps']

export default function Insights() {
  return (
    <main className="bg-[#FFFFFF] text-left transition-colors dark:bg-[#050B18]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#38BDF8]">
              Insights
            </p>
            <h1 className="text-5xl font-black leading-tight text-[#0F172A] md:text-6xl dark:text-white">
              Ideas for better business software.
            </h1>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
            Explore practical notes about CRM, HRM, inventory, Odoo ERP, custom
            apps, and Power BI dashboards for growing businesses.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {topics.map((topic) => (
            <span
              key={topic}
              className="border border-[#0F172A]/10 px-4 py-2 text-sm font-extrabold text-[#0F172A] dark:border-white/10 dark:text-white"
            >
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {insights.map((insight) => (
            <article
              key={insight.title}
              className="border border-[#0F172A]/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-[#2563EB]/10 dark:border-white/10 dark:bg-[#0B1A2D] dark:hover:border-[#38BDF8]/40 dark:hover:shadow-[#38BDF8]/10"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
                {insight.category}
              </p>
              <h2 className="mt-5 text-2xl font-black leading-tight text-[#0F172A] dark:text-white">
                {insight.title}
              </h2>
              <p className="mt-4 text-base font-medium leading-7 text-[#0F172A]/70 dark:text-white/70">
                {insight.summary}
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#2563EB] dark:text-[#38BDF8]"
              >
                Discuss This <span className="text-[#38BDF8]">→</span>
              </a>
            </article>
          ))}
        </div>

        <section className="mt-16 bg-[#0F172A] bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.24)_1px,transparent_0)] [background-size:20px_20px] p-8 text-[#FFFFFF] md:p-10">
          <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
            Need Guidance?
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <h2 className="max-w-3xl text-3xl font-black leading-tight text-[#FFFFFF]">
              We can help you choose the right software features before
              development starts.
            </h2>
            <a
              href="/contact"
              className="inline-flex justify-center bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] transition-colors hover:bg-[#38BDF8] hover:text-[#0F172A]"
            >
              Ask VizEdge <span className="ml-2">→</span>
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}
