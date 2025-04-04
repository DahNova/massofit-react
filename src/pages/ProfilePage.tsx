import React from 'react'
import { Star, MessageCircle, HeartPulse, Handshake, Users } from 'lucide-react'

function ProfilePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-teal-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Andrea Villani</h1>
            <p className="text-lg text-teal-100">Massoterapista MCB certificato, specializzato in massoterapia professionale e riabilitativa.</p>
            <div className="flex items-center gap-3 mt-4 bg-white rounded-lg p-3 shadow w-max">
              <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=80&q=80" alt="Andrea Villani" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-800">Andrea Villani</p>
                <p className="text-sm text-gray-500">Massoterapista</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-semibold">4.9</span>
              <span className="text-teal-100">Recensioni clienti</span>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10">
            <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80" alt="Andrea Villani" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Chi sono</h2>
          <p className="text-gray-600 max-w-3xl">
            Sono un massoterapista con anni di esperienza nel trattamento di problematiche muscolari, recupero fisico e benessere generale. Offro un approccio personalizzato per ogni paziente, combinando tecniche tradizionali e innovative.
          </p>
          <h3 className="text-2xl font-semibold text-gray-700 mt-8">Qualifiche</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Diploma di Massoterapista MCB</li>
            <li>Formazione avanzata in tecniche di massaggio</li>
            <li>Esperienza con atleti e riabilitazione post-infortunio</li>
            <li>Approccio olistico al benessere</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Servizi Offerti</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
            {[
              { icon: <HeartPulse size={32} className="text-teal-600" />, label: 'Massoterapia' },
              { icon: <Handshake size={32} className="text-teal-600" />, label: 'Riabilitazione' },
              { icon: <Users size={32} className="text-teal-600" />, label: 'Trattamenti Sportivi' },
              { icon: <MessageCircle size={32} className="text-teal-600" />, label: 'Consulenze' },
              { icon: <HeartPulse size={32} className="text-teal-600" />, label: 'Benessere' },
            ].map((service, idx) => (
              <div key={idx} className="flex flex-col items-center bg-gray-50 rounded-lg p-4 shadow hover:shadow-md transition">
                {service.icon}
                <p className="mt-2 font-semibold text-gray-700 text-center">{service.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Cosa dicono i pazienti</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {[
              {
                name: 'Mario Rossi',
                text: 'Andrea è un professionista serio e preparato. Mi ha aiutato a recuperare dopo un infortunio in tempi record.',
              },
              {
                name: 'Luca Bianchi',
                text: 'Massaggi efficaci e un approccio molto umano. Consigliatissimo!',
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                  <Star className="text-yellow-400" />
                </div>
                <p className="italic text-gray-600">"{review.text}"</p>
                <p className="font-semibold text-gray-800">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Prenota una consulenza</h2>
            <p className="text-gray-600">Contattami per fissare un appuntamento o per ricevere maggiori informazioni sui trattamenti offerti.</p>
            <a href="/contatti" className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full transition">Contattami</a>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80" alt="Contatto" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12 mt-8">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h3 className="text-xl font-semibold">Hai domande?</h3>
            <form className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="px-4 py-2 rounded-full text-gray-800 outline-none w-full md:w-64"
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

export default ProfilePage
