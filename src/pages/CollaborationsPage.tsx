import React from 'react'
import { Phone } from 'lucide-react'

function CollaborationsPage() {
  return (
    <div className="flex flex-col bg-background text-textPrimary font-sans">
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Collaborazioni</h1>
          <p className="text-lg text-secondary max-w-3xl">
            Studio Massofit collabora con professionisti qualificati per offrire un servizio completo e personalizzato ai propri pazienti.
          </p>
        </div>
      </section>

      {/* Collaborator Profile */}
      <section className="container mx-auto px-4 py-16 space-y-12">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Dr.ssa Elisa Pelizzari</h2>
            <h3 className="text-xl font-semibold">Biologa Nutrizionista</h3>
            <p className="text-textSecondary">
              Disponibile ogni giovedì pomeriggio presso Studio Massofit.
            </p>
            <p className="text-textSecondary">
              Laurea magistrale in Alimentazione e Nutrizione Umana presso l'Università Statale di Milano.
              Tirocinio pratico presso Marathon Sports Medicine Center, Brescia.
              Ricerca su "Studio della composizione corporea nella pratica del CrossFit".
              Iscritta all'Ordine dei Biologi della Lombardia.
            </p>
            <div>
              <p className="text-textSecondary font-semibold mb-2">Specializzazioni:</p>
              <ul className="list-disc list-inside text-textSecondary space-y-1">
                <li>Alimentazione femminile (gravidanza, allattamento, menopausa, patologie ginecologiche e autoimmuni)</li>
                <li>Prevenzione e gestione nutrizionale (diabete, colesterolo, steatosi epatica, gastrite, reflusso, IBS, patologie intestinali)</li>
                <li>Alimentazione sportiva, specializzata in CrossFit</li>
              </ul>
            </div>
            <a href="tel:3387808387" className="inline-block mt-6 bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-full transition">
              <Phone className="inline mr-2" /> Chiama per appuntamento
            </a>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80" alt="Dr.ssa Elisa Pelizzari" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-8">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-semibold">Hai domande?</h3>
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
                <li><a href="/mercato" className="hover:underline">Mercato</a></li>
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

export default CollaborationsPage
