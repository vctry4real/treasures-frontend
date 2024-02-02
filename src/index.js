import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import GoogleAuthProvider from './providers/GoogleAuthProvider';
import AlertProvider from './providers/AlertProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider>
      <GoogleAuthProvider>
        <App />
      </GoogleAuthProvider>
    </AlertProvider>
  </React.StrictMode>
);
