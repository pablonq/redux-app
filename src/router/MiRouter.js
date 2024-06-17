import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Listado from '../components/Listado'
import Gestion from '../components/Gestion'

const MiRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Listado />} />
      <Route path="/candidatos" element={<Listado />} />
      <Route path="/gestion" element={<Gestion />} />
    </Routes>
  )
  
}

export default MiRouter
