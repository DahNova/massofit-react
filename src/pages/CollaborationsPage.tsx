import React from 'react'
import { Phone } from 'lucide-react'

function CollaborationsPage() {
  return (
    <section className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Collaborazioni</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">Dr.ssa Elisa Pelizzari</h2>
          <h3 className="text-xl font-medium text-gray-600">Biologa Nutrizionista</h3>
          <p className="text-gray-600">Disponibile ogni giovedì pomeriggio presso Studio Massofit.</p>
          <p className="text-gray-600">
            Laurea magistrale in Alimentazione e Nutrizione Umana presso l'Università Statale di Milano.
            Tirocinio pratico presso Marathon Sports Medicine Center, Brescia.
            Ricerca su "Studio della composizione corporea nella pratica del CrossFit".
            Iscritta all'Ordine dei Biologi della Lombardia.
          </p>
          <p className="text-gray-600 font-semibold">Specializzazioni:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Alimentazione femminile (gravidanza, allattamento, menopausa, patologie ginecologiche e autoimmuni)</li>
            <li>Prevenzione e gestione nutrizionale (diabete, colesterolo, steatosi epatica, gastrite, reflusso, IBS, patologie intestinali)</li>
            <li>Alimentazione sportiva, specializzata in CrossFit</li>
          </ul>
          <a href="tel:3387808387" className="inline-flex items-center mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition">
            <Phone className="mr-2" /> Chiama per appuntamento
          </a>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80" alt="Dr.ssa Elisa Pelizzari" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  )
}

export default CollaborationsPage
