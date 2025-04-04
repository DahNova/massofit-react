import React, { useState } from 'react'
import { Mail, Phone } from 'lucide-react'

function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    if (!formData.name) newErrors.name = 'Il nome è obbligatorio'
    if (!formData.email) newErrors.email = 'L\'email è obbligatoria'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email non valida'
    if (!formData.message) newErrors.message = 'Il messaggio è obbligatorio'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      setSubmitted(true)
    }
  }

  return (
    <div className="flex flex-col bg-background text-textPrimary font-sans">
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Contattaci</h1>
          <p className="text-lg text-secondary max-w-3xl">
            Siamo a tua disposizione per informazioni, appuntamenti o collaborazioni. Compila il modulo o usa i nostri recapiti.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold">I nostri recapiti</h2>
            <p className="text-textSecondary">Villaggio Prealpino, Brescia, Italia</p>
            <p className="flex items-center gap-2 text-textSecondary">
              <Phone className="w-5 h-5" /> <a href="tel:1234567890" className="hover:underline">123 456 7890</a>
            </p>
            <p className="flex items-center gap-2 text-textSecondary">
              <Mail className="w-5 h-5" /> <a href="mailto:info@studiomassofit.it" className="hover:underline">info@studiomassofit.it</a>
            </p>
            <p className="text-textSecondary">Seguici su Facebook e presto su altri social!</p>
          </div>

          {/* Form */}
          <div className="md:w-1/2">
            {submitted ? (
              <div className="p-4 bg-green-100 text-green-800 rounded">
                Grazie per averci contattato! Ti risponderemo al più presto.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-1 font-medium">Nome</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  {errors.name && <p className="text-error text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {errors.email && <p className="text-error text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label className="block mb-1 font-medium">Messaggio</label>
                  <textarea
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  {errors.message && <p className="text-error text-sm">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-full transition"
                >
                  Invia richiesta
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-8">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-semibold">Iscriviti alla newsletter</h3>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="px-4 py-2 rounded-full text-textPrimary outline-none w-full md:w-64"
              />
              <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-full transition">Invia</button>
            </form>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div>
              <h4 className="font-semibold mb-2">Studio Massofit</h4>
              <p className="text-sm">Il tuo partner per il benessere e la salute a Brescia.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Link Utili</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/profilo" className="hover:underline">Profilo</a></li>
                <li><a href="/collaborazioni" className="hover:underline">Collaborazioni</a></li>
                <li><a href="/contatti" className="hover:underline">Contatti</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contatti</h4>
              <p className="text-sm">Villaggio Prealpino, Brescia</p>
              <p className="text-sm">info@studiomassofit.it</p>
              <p className="text-sm">+39 123 456 7890</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legale</h4>
              <ul className="space-y-1 text-sm">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Termini di Servizio</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ContactPage
