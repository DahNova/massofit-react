import React from 'react'
import { Search, Star, Download } from 'lucide-react'

function HomePage() {
  return (
    <div className="flex flex-col bg-background text-textPrimary font-sans">
      {/* Hero */}
      <section className="bg-primary text-white py-16 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Cura Medica Semplificata<br />Per Tutti</h1>
            <p className="text-lg text-secondary">Offriamo consulenze professionali e immediate per il tuo benessere, con un approccio umano e personalizzato.</p>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow max-w-md">
              <Search className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Cerca trattamenti o servizi"
                className="flex-grow outline-none text-textPrimary"
              />
            </div>
            <div className="flex items-center gap-3 mt-4 bg-white rounded-lg p-3 shadow w-max">
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80" alt="Dottore" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-textPrimary">Andrea Villani</p>
                <p className="text-sm text-textSecondary">Massoterapista</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-yellow-400 font-semibold">4.9</span>
              <span className="text-secondary">Recensioni clienti</span>
            </div>
          </div>
          <div className="md:w-1/2 relative z-10">
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80" alt="Massoterapista" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-4">
            <img src="https://images.unsplash.com/photo-1588776814546-ec7e5b1c8c4b?auto=format&fit=crop&w=300&q=80" alt="Testimonial" className="rounded-lg shadow-lg w-48" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">25k+ Clienti Soddisfatti</h2>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
            <p className="text-textSecondary italic">"Tecniche innovative e un approccio umano. Ho risolto i miei problemi muscolari in poche sedute. Consigliatissimo!"</p>
            <p className="font-semibold">Mario Rossi</p>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Scarica l'App Massofit</h2>
            <p className="text-textSecondary">Prenota facilmente, consulta i tuoi trattamenti e resta aggiornato ovunque tu sia.</p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                <Download size={20} /> Google Play
              </a>
              <a href="#" className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
                <Download size={20} /> App Store
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1588776814546-ec7e5b1c8c4b?auto=format&fit=crop&w=300&q=80" alt="App Mobile" className="rounded-lg shadow-lg w-full max-w-xs mx-auto" />
          </div>
        </div>
      </section>

      {/* Newsletter & Footer */}
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

export default HomePage
