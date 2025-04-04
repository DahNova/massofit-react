import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import CollaborationsPage from './pages/CollaborationsPage'
import ContactPage from './pages/ContactPage'
import ServiziPage from './pages/ServiziPage'
import { Facebook } from 'lucide-react'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-white shadow sticky top-0 z-50">
          <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
              <span>Studio Massofit</span>
            </Link>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/" className="hover:text-blue-600">Home</Link>
              <Link to="/servizi" className="hover:text-blue-600">Servizi</Link>
              <Link to="/profilo" className="hover:text-blue-600">Profilo</Link>
              <Link to="/collaborazioni" className="hover:text-blue-600">Collaborazioni</Link>
              <Link to="/contatti" className="hover:text-blue-600">Contatti</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servizi" element={<ServiziPage />} />
            <Route path="/profilo" element={<ProfilePage />} />
            <Route path="/collaborazioni" element={<CollaborationsPage />} />
            <Route path="/contatti" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-gray-200 py-6 mt-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Studio Massofit - Andrea Villani Massoterapista</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-500">Instagram (coming soon)</a>
              <a href="#" className="hover:text-blue-500">LinkedIn (coming soon)</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
