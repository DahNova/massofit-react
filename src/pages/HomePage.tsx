import React from 'react'
import { Search, Star, ShoppingCart, Download } from 'lucide-react'

function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-teal-900 text-white py-16 relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          <div className="md:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Cura Medica Semplificata<br />Per Tutti</h1>
            <p className="text-lg text-teal-100">Offriamo consulenze professionali e immediate per il tuo benessere, con un approccio umano e personalizzato.</p>
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow max-w-md">
              <Search className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Cerca trattamenti o prodotti"
                className="flex-grow outline-none text-gray-800"
              />
            </div>
            <div className="flex items-center gap-3 mt-4 bg-white rounded-lg p-3 shadow w-max">
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80" alt="Dottore" className="w-12 h-12 rounded-full object-cover" />
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
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80" alt="Massoterapista" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* Most Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800">Prodotti più popolari</h2>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full transition">Shop Now</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Tapis Roulant', price: '2400€' },
              { name: 'Misuratore Pressione', price: '400€' },
              { name: 'Cyclette', price: '950€' },
              { name: 'Integratori', price: '35€' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-4">
                <img src="https://images.unsplash.com/photo-1588776814546-ec7e5b1c8c4b?auto=format&fit=crop&w=300&q=80" alt={item.name} className="w-32 h-32 object-cover" />
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-teal-600 font-bold">{item.price}</p>
                <button className="flex items-center gap-2 border border-teal-600 text-teal-600 hover:bg-teal-50 px-4 py-2 rounded-full transition">
                  <ShoppingCart size={16} /> Aggiungi
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">Sfoglia Prodotti e Servizi</h2>
          <div className="flex flex-wrap gap-4">
            {['Tutti', 'Massaggi', 'Riabilitazione', 'Integratori', 'Accessori'].map((cat, idx) => (
              <button key={idx} className="px-4 py-2 rounded-full border border-gray-300 hover:bg-teal-50 transition">{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-4 flex flex-col items-center space-y-4">
                <img src="https://images.unsplash.com/photo-1588776814546-ec7e5b1c8c4b?auto=format&fit=crop&w=300&q=80" alt="Prodotto" className="w-24 h-24 object-cover" />
                <h3 className="font-semibold text-gray-800">Prodotto {idx + 1}</h3>
                <p className="text-teal-600 font-bold">{(idx + 1) * 10}€</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-4">
            <img src="https://images.unsplash.com/photo-1588776814546-ec7e5b1c8c4b?auto=format&fit=crop&w=300&q=80" alt="Testimonial" className="rounded-lg shadow-lg w-48" />
          </div>
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">25k+ Clienti Soddisfatti</h2>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
              <Star className="text-yellow-400" />
            </div>
            <p className="text-gray-600 italic">"Tecniche innovative e un approccio umano. Ho risolto i miei problemi muscolari in poche sedute. Consigliatissimo!"</p>
            <p className="font-semibold text-gray-800">Mario Rossi</p>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Scarica l'App Massofit</h2>
            <p className="text-gray-600">Prenota facilmente, consulta i tuoi trattamenti e resta aggiornato ovunque tu sia.</p>
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

export default HomePage
