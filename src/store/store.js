import { configureStore } from "@reduxjs/toolkit";
import { departamentosSlice, miSlice } from "./miSlice";

export default configureStore({
    reducer: {
        misTrabajadores: miSlice.reducer, /* Slice: porcion de mi estado */
        misDepartamentos: departamentosSlice.reducer, /*Slice  */
    }
})