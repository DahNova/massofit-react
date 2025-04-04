import React, { useState } from 'react'

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
    <section className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Contatti</h1>
      <div className="space-y-4">
        <p className="text-gray-600">Indirizzo: Villaggio Prealpino, Brescia, Italia</p>
        <p className="text-gray-600">Telefono: <a href="tel:1234567890" className="text-blue-600 hover:underline">123 456 7890</a></p>
        <p className="text-gray-600">Email: <a href="mailto:info@studiomassofit.it" className="text-blue-600 hover:underline">info@studiomassofit.it</a></p>
        <p className="text-gray-600">Seguici su Facebook e presto su altri social!</p>
      </div>

      {submitted ? (
        <div className="p-4 bg-green-100 text-green-800 rounded">
          Grazie per averci contattato! Ti risponderemo al più presto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
          <div>
            <label className="block mb-1 font-medium">Nome</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1 font-medium">Messaggio</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Invia richiesta
          </button>
        </form>
      )}
    </section>
  )
}

export default ContactPage
