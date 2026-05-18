const serviceLinks = [
  'CRM Software',
  'HRM Software',
  'Smart Inventory',
  'Power BI Dashboards',
]

const services = [
  {
    title: 'Custom Business Software',
    description:
      'CRM, HRM, POS, accounting, and management systems built for your workflow.',
  },
  {
    title: 'Web & Desktop Applications',
    description:
      'Modern web apps and reliable desktop software for daily business operations.',
  },
  {
    title: 'Data Analysis & Power BI',
    description:
      'Interactive dashboards, KPI reports, and analytics for better decisions.',
  },
]

const strengths = [
  'Workflow-based planning',
  'Clean UI and admin panels',
  'Database and report design',
  'Deployment and support',
]

export default function Hero() {
  return (
    <main className="overflow-hidden bg-[#FFFFFF] text-left transition-colors duration-300 dark:bg-[#050B18]">
      <section className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.03fr_0.97fr] lg:py-24">
        <div className="pointer-events-none absolute right-0 top-12 h-72 w-72 bg-[#38BDF8]/20 blur-3xl dark:bg-[#38BDF8]/15" />
        <div className="pointer-events-none absolute bottom-8 left-0 h-80 w-80 bg-[#2563EB]/10 blur-3xl dark:bg-[#2563EB]/20" />

        <div className="relative z-10">
          <p className="mb-6 inline-flex border border-[#2563EB]/15 bg-[#2563EB]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB] dark:border-[#38BDF8]/30 dark:bg-[#38BDF8]/10 dark:text-[#38BDF8]">
            VizEdge Software Solution
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.04] text-[#0F172A] md:text-7xl dark:text-[#F8FBFF]">
            Custom software development services for growing businesses.
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#0F172A]/70 md:text-xl dark:text-white/70">
            We build CRM software, HRM software, smart inventory systems,
            desktop applications, web applications, Odoo ERP solutions, and
            Power BI dashboards for companies that want better control over
            their operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Main services">
            {serviceLinks.map((service) => (
              <a
                key={service}
                href="/services"
                className="border border-[#0F172A]/10 px-4 py-2 text-sm font-extrabold text-[#0F172A] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:text-white dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8]"
              >
                {service}
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] shadow-xl shadow-[#2563EB]/25 transition-colors hover:bg-[#0F172A] dark:hover:bg-[#38BDF8] dark:hover:text-[#0F172A]"
            >
              Get Free Consultation <span className="ml-2 text-[#38BDF8]">→</span>
            </a>
            <a
              href="/services"
              className="border border-[#0F172A]/15 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#0F172A] transition-colors hover:border-[#38BDF8] hover:text-[#2563EB] dark:border-white/15 dark:text-white dark:hover:text-[#38BDF8]"
            >
              Explore Services
            </a>
          </div>
        </div>

        <aside className="relative z-10" aria-label="VizEdge software dashboard preview">
          <div className="border border-[#0F172A]/10 bg-[#FFFFFF] p-4 shadow-2xl shadow-[#0F172A]/15 transition-colors dark:border-white/10 dark:bg-[#10233A] dark:shadow-[#38BDF8]/10">
            <div className="bg-[#0F172A] bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.24)_1px,transparent_0)] [background-size:22px_22px] p-6 text-[#FFFFFF] dark:bg-[#07111F]">
              <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
                    Company Dashboard
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-tight text-[#FFFFFF]">
                    Sales, staff, stock, and reports in one system.
                  </h2>
                </div>
                <span className="bg-[#38BDF8] px-3 py-2 text-xs font-black text-[#0F172A]">
                  Live
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="bg-white/10 p-5">
                  <p className="text-sm font-bold text-white/60">CRM Leads</p>
                  <p className="mt-3 text-3xl font-black">286</p>
                  <p className="mt-2 text-sm font-bold text-[#38BDF8]">
                    Sales pipeline ready
                  </p>
                </div>
                <div className="bg-white/10 p-5">
                  <p className="text-sm font-bold text-white/60">Inventory Alerts</p>
                  <p className="mt-3 text-3xl font-black">12</p>
                  <p className="mt-2 text-sm font-bold text-[#38BDF8]">
                    Auto tracked
                  </p>
                </div>
              </div>

              <div className="mt-4 bg-[#FFFFFF] p-5 text-[#0F172A] dark:bg-[#0B1A2D] dark:text-white">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2563EB] dark:text-[#38BDF8]">
                      Power BI Analytics
                    </p>
                    <h3 className="mt-2 text-xl font-black dark:text-white">
                      Monthly Business Performance
                    </h3>
                  </div>
                  <span className="bg-[#2563EB] px-3 py-2 text-xs font-black text-white">
                    BI
                  </span>
                </div>

                <div className="mt-6 flex h-32 items-end gap-3">
                  {[45, 70, 52, 88, 64, 96, 78].map((height, index) => (
                    <div
                      key={`${height}-${index}`}
                      className="flex-1 bg-[#2563EB]"
                      style={{
                        height: `${height}%`,
                        opacity: 0.45 + index * 0.08,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="border-y border-[#0F172A]/10 bg-[#F8FBFF] px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#07111F]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#38BDF8]">
              Services
            </p>
            <h2 className="text-4xl font-black leading-tight text-[#0F172A] md:text-5xl dark:text-white">
              Software services your company can actually use every day.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="border border-[#0F172A]/10 bg-[#FFFFFF] p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-xl hover:shadow-[#2563EB]/10 dark:border-white/10 dark:bg-[#0B1A2D] dark:hover:border-[#38BDF8]/40 dark:hover:shadow-[#38BDF8]/10"
              >
                <div className="mb-6 h-1 w-14 bg-[#38BDF8]" />
                <h3 className="text-2xl font-black text-[#0F172A] dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base font-medium leading-7 text-[#0F172A]/70 dark:text-white/70">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#38BDF8]">
            Show My Company
          </p>
          <h2 className="text-4xl font-black leading-tight text-[#0F172A] md:text-5xl dark:text-white">
            VizEdge turns your business process into a clean digital system.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
            Whether you need ready business modules or a fully custom product,
            we design software around how your company works, then build it for
            web, desktop, analytics, and ERP needs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((strength) => (
            <div key={strength} className="border border-[#0F172A]/10 p-5 dark:border-white/10 dark:bg-[#0B1A2D]">
              <span className="mb-4 block h-2 w-2 bg-[#38BDF8]" />
              <p className="text-lg font-black text-[#0F172A] dark:text-white">{strength}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
