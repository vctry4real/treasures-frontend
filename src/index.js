import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import GoogleAuthProvider from './providers/GoogleAuthProvider';
import AlertProvider from './providers/AlertProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertProvider>
      <Router>
        <GoogleAuthProvider>
          <App />
        </GoogleAuthProvider>
      </Router>
    </AlertProvider>
  </React.StrictMode>
);
