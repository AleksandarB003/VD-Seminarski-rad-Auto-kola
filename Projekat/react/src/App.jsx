import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigacija from './komponente/Navigacija'
import Footer from './komponente/Footer'
import Pocetna from './stranice/Pocetna'
import Kategorije from './stranice/Kategorije'

function App() {
  const [tema, setTema] = useState(() => {
    return localStorage.getItem('tema') || 'svetla'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-tema', tema)
    localStorage.setItem('tema', tema)
  }, [tema])

  function promeniTemu() {
    setTema(prev => prev === 'svetla' ? 'tamna' : 'svetla')
  }

  return (
    <div>
      <Navigacija tema={tema} promeniTemu={promeniTemu} />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/kategorije" element={<Kategorije />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App