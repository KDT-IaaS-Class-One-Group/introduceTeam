import React from 'react';
import ReactDOM from 'react-dom/client';
import TeamPage from './components/App.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TeamPage />
  </React.StrictMode>
);

