import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MiRouter from './router/MiRouter';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MiRouter />
    </BrowserRouter>
  </React.StrictMode>
);


