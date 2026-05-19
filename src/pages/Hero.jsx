import { Link } from 'react-router-dom'

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

const showcaseProjects = [
  {
    title: 'CRM Sales Pipeline',
    category: 'Customer Management',
    metric: '286',
    label: 'active leads',
    description:
      'A focused CRM workspace for lead tracking, follow-ups, customer history, and sales team activity.',
  },
  {
    title: 'Smart Inventory Control',
    category: 'Operations',
    metric: '12',
    label: 'stock alerts',
    description:
      'Inventory movement, purchase records, supplier data, and low-stock alerts inside one business dashboard.',
  },
  {
    title: 'Power BI Performance View',
    category: 'Analytics',
    metric: '7',
    label: 'KPI reports',
    description:
      'Decision-ready dashboards that turn sales, stock, finance, and team data into clear monthly insights.',
  },
]

const workEthics = [
  {
    title: 'We Understand First',
    description:
      'Every project starts with your workflow, team roles, reporting needs, and the real problems slowing daily work.',
  },
  {
    title: 'We Build Clearly',
    description:
      'Interfaces, databases, admin panels, and reports are planned so your team can use the system without confusion.',
  },
  {
    title: 'We Stay Responsible',
    description:
      'VizEdge works with practical timelines, direct communication, testing, deployment support, and long-term care.',
  },
]

const heroStats = [
  { value: 'CRM', label: 'Sales pipeline systems' },
  { value: 'HRM', label: 'Team management tools' },
  { value: 'BI', label: 'Decision dashboards' },
]

export default function Hero() {
  return (
    <main className="overflow-hidden bg-[#FFFFFF] text-left transition-colors duration-300 dark:bg-[#050B18]">
      <section aria-label="Hero Section" className="relative mx-auto grid min-h-[calc(100svh-70px)] max-w-[88rem] items-center gap-12 px-6 py-16 sm:py-20 lg:min-h-[calc(100svh-84px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-8 lg:py-24 xl:gap-18">
        <div className="pointer-events-none absolute right-0 top-8 h-80 w-80 bg-[#38BDF8]/20 blur-3xl dark:bg-[#38BDF8]/15" />
        <div className="pointer-events-none absolute bottom-8 left-0 h-96 w-96 bg-[#2563EB]/10 blur-3xl dark:bg-[#2563EB]/20" />

        <div className="relative z-10">
          <p className="mb-6 inline-flex border border-[#2563EB]/15 bg-[#2563EB]/5 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#2563EB] dark:border-[#38BDF8]/30 dark:bg-[#38BDF8]/10 dark:text-[#38BDF8]">
            VizEdge Software Solution
          </p>

          <h1 className="max-w-4xl text-2xl font-black leading-tight text-[#0F172A] sm:text-5xl lg:text-5xl xl:text-4xl dark:text-[#F8FBFF]">
            Custom software development services for growing businesses.
          </h1>

          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#0F172A]/70 md:text-lg lg:text-xl dark:text-white/70">
            We build CRM software, HRM software, smart inventory systems,
            desktop applications, web applications, Odoo ERP solutions, and
            Power BI dashboards for companies that want better control over
            their operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Main services">
            {serviceLinks.map((service) => (
              <Link
                key={service}
                to="/services"
                className="border border-[#0F172A]/10 px-4 py-2 text-sm font-extrabold text-[#0F172A] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] dark:border-white/10 dark:text-white dark:hover:border-[#38BDF8] dark:hover:text-[#38BDF8]"
              >
                {service}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] shadow-xl shadow-[#2563EB]/25 transition-colors hover:bg-[#0F172A] sm:px-8 sm:py-5 dark:hover:bg-[#38BDF8] dark:hover:text-[#0F172A]"
            >
              Get Free Consultation <span className="ml-2 text-[#38BDF8]">→</span>
            </Link>
            <Link
              to="/services"
              className="border border-[#0F172A]/15 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#0F172A] transition-colors hover:border-[#38BDF8] hover:text-[#2563EB] sm:px-8 sm:py-5 dark:border-white/15 dark:text-white dark:hover:text-[#38BDF8]"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.value}
                className="border-l-4 border-[#38BDF8] bg-[#F8FBFF] px-2 py-2 dark:bg-[#0B1A2D]"
              >
                <p className="text-2xl font-black text-[#0F172A] dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-bold leading-5 text-[#0F172A]/60 dark:text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="relative z-10" aria-label="VizEdge software dashboard preview">
          <div className="border border-[#0F172A]/10 bg-[#FFFFFF] p-3 shadow-2xl shadow-[#0F172A]/15 transition-colors sm:p-4 lg:scale-[1.03] dark:border-white/10 dark:bg-[#10233A] dark:shadow-[#38BDF8]/10">
            <div className="bg-[#0F172A] bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.24)_1px,transparent_0)] [background-size:22px_22px] p-5 text-[#FFFFFF] sm:p-7 lg:p-8 dark:bg-[#07111F]">
              <div className="flex items-start justify-between gap-6 border-b border-white/10 pb-7">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
                    Company Dashboard
                  </p>
                  <h2 className="mt-3 text-3xl font-black leading-tight text-[#FFFFFF] sm:text-4xl">
                    Sales, staff, stock, and reports in one system.
                  </h2>
                </div>
                <span className="bg-[#38BDF8] px-3 py-2 text-xs font-black text-[#0F172A]">
                  Live
                </span>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="bg-white/10 p-5 sm:p-6">
                  <p className="text-sm font-bold text-white/60">CRM Leads</p>
                  <p className="mt-3 text-4xl font-black">286</p>
                  <p className="mt-2 text-sm font-bold text-[#38BDF8]">
                    Sales pipeline ready
                  </p>
                </div>
                <div className="bg-white/10 p-5 sm:p-6">
                  <p className="text-sm font-bold text-white/60">Inventory Alerts</p>
                  <p className="mt-3 text-4xl font-black">12</p>
                  <p className="mt-2 text-sm font-bold text-[#38BDF8]">
                    Auto tracked
                  </p>
                </div>
              </div>

              <div className="mt-5 bg-[#FFFFFF] p-5 text-[#0F172A] sm:p-6 dark:bg-[#0B1A2D] dark:text-white">
                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2563EB] dark:text-[#38BDF8]">
                      Power BI Analytics
                    </p>
                    <h3 className="mt-2 text-2xl font-black dark:text-white">
                      Monthly Business Performance
                    </h3>
                  </div>
                  <span className="bg-[#2563EB] px-3 py-2 text-xs font-black text-white">
                    BI
                  </span>
                </div>

                <div className="mt-7 flex h-40 items-end gap-3">
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
              Service Section
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#38BDF8]">
              Project Showcase
            </p>
            <h2 className="text-4xl font-black leading-tight text-[#0F172A] md:text-5xl dark:text-white">
              Business systems shaped around real company operations.
            </h2>
          </div>
          <p className="max-w-2xl text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
            These examples show the type of structured products VizEdge builds:
            CRM pipelines, inventory control, reporting dashboards, and custom
            software that keeps daily work organized.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {showcaseProjects.map((project) => (
            <article
              key={project.title}
              className="border border-[#0F172A]/10 bg-[#FFFFFF] p-7 shadow-sm transition-colors hover:border-[#2563EB]/40 dark:border-white/10 dark:bg-[#0B1A2D] dark:hover:border-[#38BDF8]/40"
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#38BDF8]">
                {project.category}
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 border-b border-[#0F172A]/10 pb-6 dark:border-white/10">
                <h3 className="text-2xl font-black leading-tight text-[#0F172A] dark:text-white">
                  {project.title}
                </h3>
                <div className="text-right">
                  <p className="text-4xl font-black text-[#2563EB] dark:text-[#38BDF8]">
                    {project.metric}
                  </p>
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#0F172A]/55 dark:text-white/55">
                    {project.label}
                  </p>
                </div>
              </div>
              <p className="mt-5 text-base font-medium leading-7 text-[#0F172A]/70 dark:text-white/70">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#0F172A]/10 bg-[#F8FBFF] px-6 py-20 transition-colors dark:border-white/10 dark:bg-[#07111F]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.24em] text-[#2563EB] dark:text-[#38BDF8]">
              About Company
            </p>
            <h2 className="text-4xl font-black leading-tight text-[#0F172A] md:text-5xl dark:text-white">
              Work ethics that keep software practical, honest, and useful.
            </h2>
            <p className="mt-6 text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
              VizEdge Software Solution focuses on business-first development.
              We listen carefully, map your process, build clean systems, and
              support the product after launch so your company can keep moving.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] shadow-lg shadow-[#2563EB]/20 transition-colors hover:bg-[#0F172A] dark:hover:bg-[#38BDF8] dark:hover:text-[#0F172A]"
            >
              Know VizEdge <span className="ml-2 text-[#38BDF8]">→</span>
            </Link>
          </div>

          <div className="grid gap-4">
            {workEthics.map((item) => (
              <article
                key={item.title}
                className="border border-[#0F172A]/10 bg-[#FFFFFF] p-6 shadow-sm dark:border-white/10 dark:bg-[#0B1A2D]"
              >
                <span className="mb-5 block h-2 w-12 bg-[#38BDF8]" />
                <h3 className="text-2xl font-black text-[#0F172A] dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base font-medium leading-7 text-[#0F172A]/70 dark:text-white/70">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
