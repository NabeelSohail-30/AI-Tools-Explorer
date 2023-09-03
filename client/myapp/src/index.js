import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactRouter from 'react-router';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactRouter.BrowserRouter>
      <App />
    </ReactRouter.BrowserRouter>
  </React.StrictMode>
);
