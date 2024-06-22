import React, { useEffect } from 'react'
import { useState } from 'react'
import Candidato from './Candidato';
import { useDispatch, useSelector } from 'react-redux';
import { agregarUnValor } from '../store/miSlice';
import { Link } from 'react-router-dom';

const Listado = () => {
  const [candidatos, setCandidatos] = useState([]);

  const dispatch = useDispatch(); /* envia datos al reducer y debo declararlo para poder usarlo*/

  const listaTrabajadores = useSelector(state=>state.misTrabajadores.trabajadores); /* useSelector sirve para acceder a la informacion del store */

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=6")
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
const guardarUno=(valor, index)=>{
  const nuevoValor={...valor, departamento:""}
  dispatch(agregarUnValor(nuevoValor)) /* dispatch envia "valor" al reducer "agregarUnValor" */ 
  buscaPersona(index)
}
  return (
<>
      <div className='presentacion'>
      {candidatos.map((valor, index)=> 
      <Candidato valor={valor} onBuscarUno={buscaPersona} index={index} onGuardarUno={guardarUno}/>
      )}
      </div>
      <div className='candidatos'>
        {listaTrabajadores.map((valor, i)=> 
        <Link key={i} to='/gestion'><button>{valor.name.first}</button>
          </Link>)}
      </div>
</>
  )
}

export default Listado