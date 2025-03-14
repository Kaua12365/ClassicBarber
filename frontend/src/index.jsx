import React from 'react';
import ReactDOM from 'react-dom/client';
import Navegacao from './routes/router';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const isLoggedIn = () => {
  return !!localStorage.getItem("userToken");
};

root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);
