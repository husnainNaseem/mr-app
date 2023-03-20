import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from "./AppRouter";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
