import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

const serviceOptions = [
  'Website Development',
  'Custom Software',
  'Odoo Enterprise',
  'SEO',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validateForm = () => {
    const nextErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.service) {
      nextErrors.service = 'Please select a service.'
    }

    if (!formData.message.trim() || formData.message.trim().length < 20) {
      nextErrors.message = 'Please add a short project message with at least 20 characters.'
    }

    return nextErrors
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('Please fix the highlighted fields and try again.')
      return
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      service: formData.service,
      message: formData.message.trim(),
      _captcha: 'false',
      _template: 'table',
      _subject: `New JR_VizEdge inquiry from ${formData.name.trim()}`,
      _replyto: formData.email.trim(),
    }

    setIsSubmitting(true)
    setStatus('Sending...')

    try {
      const response = await fetch('https://formsubmit.co/ajax/joydep.dhar@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setStatus("Thanks for reaching out. We've received your message and will get back to you soon.")
      setFormData(initialForm)
      setErrors({})
    } catch {
      setStatus('Something went wrong while sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-white text-slate-900">
      <section className="section-shell grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.26em] text-blue-700">Contact</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">Tell us about your project.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Whether you need a website, custom software, Odoo support, or SEO improvements, we can help you decide what makes sense for your business.
          </p>

          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xl font-black text-slate-900">Project inquiry</p>
              <p className="mt-2 text-base leading-7 text-slate-600">Share your goals, current challenges, and the workflow you need to improve.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xl font-black text-slate-900">Technical discussion</p>
              <p className="mt-2 text-base leading-7 text-slate-600">We review the right approach, technologies, and scope before work begins.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-800">Name</span>
              <input name="name" value={formData.name} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500" placeholder="Your name" />
              {errors.name && <span className="mt-2 block text-sm text-red-600">{errors.name}</span>}
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-800">Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500" placeholder="you@example.com" />
              {errors.email && <span className="mt-2 block text-sm text-red-600">{errors.email}</span>}
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-800">Company</span>
              <input name="company" value={formData.company} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500" placeholder="Your company" />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-800">Service</span>
              <select name="service" value={formData.service} onChange={handleChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500">
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.service && <span className="mt-2 block text-sm text-red-600">{errors.service}</span>}
            </label>
          </div>

          <label className="mt-5 block">
            <span className="text-sm font-bold text-slate-800">Message</span>
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500" placeholder="Describe your goals, current challenges, and desired outcome." />
            {errors.message && <span className="mt-2 block text-sm text-red-600">{errors.message}</span>}
          </label>

          <div className="hidden" aria-hidden="true">
            <label>
              Website
              <input name="website" type="text" tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          <button type="submit" disabled={isSubmitting} className="primary-button mt-6 w-full bg-[#0f172a] text-white hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-70">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {status && <p className="mt-4 text-sm text-slate-700">{status}</p>}
        </form>
      </section>
    </main>
  )
}
