import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice ({
    name: "misTrabajadores",
    initialState:{
        trabajadores:[]
    },
    reducers:{
        agregarUnValor: (state, action)=> /* STATE: ESTADO ACTUAL action: nuevos datos */
            {state.trabajadores=[...state.trabajadores, action.payload] },/* al estado actual del array trabajadores le agrego el valor q llega "action.payload"*/
        modificarUnValor: (state,action)=>{
            
                const{indice, nuevaCiudad} = action.payload;
                state.trabajadores[indice].departamento= nuevaCiudad;

            },
            eliminarUnValor: (action, state)=>{
                const {nombre, apellido, telefono} = action.payload;
                state.trabajadores=state.trabajadores.filter(valor=>
                    valor.name.first!== nombre && 
                    valor.name.last !== apellido &&
                    valor.cell !== telefono
                )
            }

    }
})

export const departamentosSlice = createSlice ({
    name: "misDepartamentos",
    initialState:{
        departamentos : ["Neuquen(ventas)", "BsAs(Organizacion)", "Cordoba(Comercial)", "Santa fe(Administracion)"]
    },
    reducers:{
        
    }
})
export const {agregarUnValor} = miSlice.actions; /* exporta agregarunvalor  */
export const {modificarUnValor} = miSlice.actions;
export const {eliminarUnValor} = miSlice.actions;


