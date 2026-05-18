const contactOptions = [
  {
    title: 'Project Inquiry',
    detail: 'Tell us about your CRM, HRM, inventory, web, desktop, or BI need.',
  },
  {
    title: 'Technical Consultation',
    detail: 'Plan your workflow, features, database, reports, and deployment.',
  },
  {
    title: 'Support & Updates',
    detail: 'Need changes or support for an existing system? We can help.',
  },
]

const serviceOptions = [
  'CRM Software',
  'HRM Software',
  'Smart Inventory Software',
  'POS / Accounting Software',
  'Power BI / Data Analysis',
  'Custom Desktop & Web App',
]

export default function Contact() {
  return (
    <main className="bg-[#FFFFFF] text-left transition-colors dark:bg-[#050B18]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.28em] text-[#2563EB] dark:text-[#38BDF8]">
            Contact VizEdge
          </p>
          <h1 className="text-5xl font-black leading-tight text-[#0F172A] md:text-6xl dark:text-white">
            Let&apos;s build your business software.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-[#0F172A]/70 dark:text-white/70">
            Share your idea, current workflow, or software problem. We will help
            you plan the right web, desktop, or analytics solution.
          </p>

          <div className="mt-10 grid gap-4">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                className="border border-[#0F172A]/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0B1A2D]"
              >
                <div className="mb-4 h-1 w-12 bg-[#38BDF8]" />
                <h2 className="text-xl font-black text-[#0F172A] dark:text-white">
                  {option.title}
                </h2>
                <p className="mt-2 text-base font-medium leading-7 text-[#0F172A]/65 dark:text-white/65">
                  {option.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        <form className="border border-[#0F172A]/10 bg-white p-6 shadow-2xl shadow-[#0F172A]/10 md:p-8 dark:border-white/10 dark:bg-[#0B1A2D] dark:shadow-[#38BDF8]/10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-extrabold text-[#0F172A] dark:text-white">
                Your Name
              </span>
              <input
                type="text"
                className="mt-2 w-full border border-[#0F172A]/15 px-4 py-3 text-[#0F172A] outline-none transition-colors focus:border-[#2563EB] dark:border-white/15 dark:bg-[#07111F] dark:text-white dark:placeholder:text-white/35"
                placeholder="Enter your name"
              />
            </label>

            <label className="block">
              <span className="text-sm font-extrabold text-[#0F172A] dark:text-white">
                Phone / WhatsApp
              </span>
              <input
                type="tel"
                className="mt-2 w-full border border-[#0F172A]/15 px-4 py-3 text-[#0F172A] outline-none transition-colors focus:border-[#2563EB] dark:border-white/15 dark:bg-[#07111F] dark:text-white dark:placeholder:text-white/35"
                placeholder="Enter contact number"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-extrabold text-[#0F172A] dark:text-white">
              Email Address
            </span>
            <input
              type="email"
              className="mt-2 w-full border border-[#0F172A]/15 px-4 py-3 text-[#0F172A] outline-none transition-colors focus:border-[#2563EB] dark:border-white/15 dark:bg-[#07111F] dark:text-white dark:placeholder:text-white/35"
              placeholder="you@example.com"
            />
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-extrabold text-[#0F172A] dark:text-white">
              Service Needed
            </span>
            <select className="mt-2 w-full border border-[#0F172A]/15 bg-white px-4 py-3 text-[#0F172A] outline-none transition-colors focus:border-[#2563EB] dark:border-white/15 dark:bg-[#07111F] dark:text-white">
              <option>Select a service</option>
              {serviceOptions.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>

          <label className="mt-5 block">
            <span className="text-sm font-extrabold text-[#0F172A] dark:text-white">
              Project Details
            </span>
            <textarea
              rows="6"
              className="mt-2 w-full resize-none border border-[#0F172A]/15 px-4 py-3 text-[#0F172A] outline-none transition-colors focus:border-[#2563EB] dark:border-white/15 dark:bg-[#07111F] dark:text-white dark:placeholder:text-white/35"
              placeholder="Tell us what you want to build..."
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full bg-[#2563EB] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#FFFFFF] shadow-lg shadow-[#2563EB]/25 transition-colors hover:bg-[#0F172A]"
          >
            Send Message <span className="ml-2 text-[#38BDF8]">→</span>
          </button>
        </form>
      </section>
    </main>
  )
}
