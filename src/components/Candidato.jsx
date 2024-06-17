import React from 'react'

const Candidato = ({valor, onBuscarUno, index}) => {
  return (
    <>
      <div className='usuario'>
        <div className='foto'>
          <img src={valor.picture.large} alt='' />
        </div>
        <div className='datos'>
          <div className='nombre'>{valor.name.title}. {valor.name.first} {valor.name.last}</div>
          <div>Ubicacion: {valor.location.city}, {valor.location.country}</div>
          <div><a href='#'>{valor.email} </a></div>
          <div><a href='#'> {valor.phone} </a></div>

        </div>
        <div  className='botones'>
        <button onClick={()=>onBuscarUno(index)} className='rojo'>Ocultar</button>
        <button className='verde'>Guardar</button>
        </div>
      </div>
    </>
  )
}

export default Candidato