import React from 'react'

function MarketPage() {
  return (
    <section className="container mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Contesto di Mercato</h1>
      <p className="text-gray-600">
        Il settore del benessere e della salute a Brescia è in forte crescita per il biennio 2024-2025.
        Studio Massofit si inserisce in un contesto dinamico, con opportunità di collaborazione con centri sportivi, strutture wellness e cliniche sanitarie locali.
      </p>
      <p className="text-gray-600">
        L'obiettivo è offrire un servizio integrato e personalizzato, promuovendo il benessere fisico e mentale attraverso sinergie professionali.
      </p>
      <img src="https://images.unsplash.com/photo-1554284126-aa88f22d8b72?auto=format&fit=crop&w=1200&q=80" alt="Wellness Brescia" className="rounded-lg shadow-lg mx-auto" />
    </section>
  )
}

export default MarketPage
