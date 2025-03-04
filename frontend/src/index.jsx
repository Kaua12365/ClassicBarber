import React from 'react';
import ReactDOM from 'react-dom/client';
import Navegacao from './router';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);
