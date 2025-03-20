import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const CARDS_COUNT = 12;

root.render(
  <React.StrictMode>
    <App OfferCount = {CARDS_COUNT} />
  </React.StrictMode>,
);
