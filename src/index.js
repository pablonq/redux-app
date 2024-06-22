import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MiRouter from "./router/MiRouter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* el store debe ser accesible desde toda la web por eso el provider debe estar acaparando todo */}
      <BrowserRouter>
        <MiRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
