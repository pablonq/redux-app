import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Trabajador from './Trabajador';
import { eliminarUnValor, modificarUnValor } from '../store/miSlice';

const Gestion = () => {
  const dispatch=useDispatch()
  const actualizar=(ciudad, i) =>{
    dispatch(modificarUnValor(
      {
        indice:i,
        nuevaCiudad: ciudad
      }
    ))


  }
  const listaTrabajadores = useSelector(state=>state.misTrabajadores.trabajadores); /* useSelector sirve para acceder a la informacion del store */
const eliminar = (valor)=>{
  dispatch(eliminarUnValor({
    nombre:valor.name.first,
    apellido:valor.name.last,
    telefono: valor.cell
  }))
}
  return (
    <>
    <h1>TRABAJADORES</h1>
    <Link to='/candidatos'><button>Candidatos</button></Link>
    <div className='usuarios'>
     {listaTrabajadores.map((valor, i)=>
    <Trabajador valor={valor} index={i} onActualizar={actualizar} onEliminar={eliminar}/> )} 
    </div>
    </>
  )
}

export default Gestion