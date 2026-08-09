const focusAreas = [
  'Business website development',
  'Custom software for internal and client-facing operations',
  'Odoo customization, upgrades, and project recovery',
  'SEO foundations and technical performance improvements',
]

export default function About() {
  return (
    <main className="bg-white text-slate-900">
      <section className="section-shell py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-700">About JR_VizEdge</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">A software and digital solutions company for practical business growth.</h1>
          </div>

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              JR_VizEdge is a software and digital solutions company helping businesses build, customize, maintain, and improve the systems they rely on every day.
            </p>
            <p>
              We work with businesses that need a clearer online presence, better internal tools, stronger Odoo functionality, or improved SEO and technical performance. Our focus is building reliable digital systems around real workflows instead of forcing businesses into generic software.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">What we focus on</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {focusAreas.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-base font-semibold text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
