import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

