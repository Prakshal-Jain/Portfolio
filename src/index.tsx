import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import ChatFolio from './ChatFolio';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChatFolio />
  </React.StrictMode>
);
