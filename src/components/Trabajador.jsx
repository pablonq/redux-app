import React from "react";
import { useSelector } from "react-redux";

const Trabajador = ({valor, index, onActualizar, onEliminar}) => {
  const departamentos = useSelector(
    (state) => state.misDepartamentos.departamentos
  );
  return (
    <>
      <div className="columna">
        <div className="fotoUsuario">
          <img src={valor.picture.large} alt='' />
        </div>
        <div className="nombreUsuarios">
          <strong>
            {valor.name.last},{valor.name.first}
          </strong>
        </div>
        <div>{valor.location.city}</div>
        <div>({valor.location.country})</div>
      <div>
        <select onChange={(e) => onActualizar(e.target.value, index)}>
          <option>Selecciona...</option>
          {departamentos.map((estevalor, i) =>
          valor.departamento===estevalor 
          ? <option selected key={i}>{estevalor}</option>
          : <option key={i}>{estevalor}</option>
          )}
        </select>
      </div>
      <div>
        <button className="rojo" onClick={()=>onEliminar(valor)}>Eliminar</button>
      </div>
      </div>
    </>
  );
};

export default Trabajador;
