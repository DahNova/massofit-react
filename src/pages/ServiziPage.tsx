import React from 'react'
import { HeartPulse, Handshake, Activity, Smile, PlusCircle, ArrowRight } from 'lucide-react'

const treatments = [
  {
    category: 'Massoterapia',
    items: [
      {
        title: 'Massaggio Decontratturante',
        description: 'Allevia tensioni muscolari profonde, migliora la mobilità e favorisce il recupero fisico.',
        icon: <HeartPulse size={40} className="text-primary" />,
        link: '/servizi/massaggio-decontratturante',
      },
      {
        title: 'Massaggio Rilassante',
        description: 'Riduce lo stress e l’ansia, promuovendo un profondo stato di benessere e rilassamento.',
        icon: <Smile size={40} className="text-primary" />,
        link: '/servizi/massaggio-rilassante',
      },
      {
        title: 'Massaggio Sportivo',
        description: 'Ottimizza la performance atletica e accelera il recupero post-allenamento o infortunio.',
        icon: <Activity size={40} className="text-primary" />,
        link: '/servizi/massaggio-sportivo',
      },
    ],
  },
  {
    category: 'Osteopatia',
    items: [
      {
        title: 'Osteopatia Strutturale',
        description: 'Tratta dolori muscoloscheletrici e disfunzioni articolari con tecniche manuali mirate.',
        icon: <Handshake size={40} className="text-primary" />,
        link: '/servizi/osteopatia-strutturale',
      },
      {
        title: 'Osteopatia Viscerale',
        description: 'Migliora la funzionalità degli organi interni attraverso manipolazioni delicate e precise.',
        icon: <PlusCircle size={40} className="text-primary" />,
        link: '/servizi/osteopatia-viscerale',
      },
    ],
  },
]

function ServiziPage() {
  return (
    <div className="flex flex-col bg-background text-textPrimary font-sans">
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">I Nostri Servizi</h1>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Scopri le terapie personalizzate offerte da Andrea Villani per il tuo benessere fisico e mentale.
          </p>
        </div>
      </section>

      {/* Treatments */}
      <section className="container mx-auto px-4 py-16 space-y-16">
        {treatments.map((group) => (
          <div key={group.category}>
            <h2 className="text-3xl font-bold mb-8 text-center">{group.category}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {group.items.map((treatment) => (
                <div key={treatment.title} className="flex flex-col bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden border border-gray-200">
                  <div className="flex flex-col items-center p-6 space-y-4">
                    {treatment.icon}
                    <h3 className="text-xl font-semibold text-center">{treatment.title}</h3>
                    <p className="text-textSecondary text-center">{treatment.description}</p>
                  </div>
                  <div className="mt-auto p-4 text-center">
                    <a
                      href={treatment.link}
                      className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-secondary text-white font-semibold px-6 py-3 rounded-full transition"
                    >
                      Scopri di più <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center">
          <a href="/contatti" className="inline-block bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-full transition">
            Prenota una consulenza
          </a>
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
                <li><a href="/servizi" className="hover:underline">Servizi</a></li>
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

export default ServiziPage
