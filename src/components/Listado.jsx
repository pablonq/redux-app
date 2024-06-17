import React, { useEffect } from 'react'
import { useState } from 'react'
import Candidato from './Candidato';

const Listado = () => {
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setCandidatos(data.results))
  }, [])

  const buscaPersona = (indice) => {
    fetch("https://randomuser.me/api/?results=1")
     .then((response) => response.json())
      .then((data) => {
        const provisional = [...candidatos]
        provisional[indice] ={...data.results[0]}
        setCandidatos(provisional)

      })
    }

  return (
<>
      <div className='presentacion'>
      {candidatos.map((valor, index)=> 
      <Candidato valor={valor} onBuscarUno={buscaPersona} index={index}/>
      )}
      </div>
</>
  )
}

export default Listado