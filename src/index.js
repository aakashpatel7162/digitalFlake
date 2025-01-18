import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import RoutesProvider from './routes/RoutesProvider'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RoutesProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </RoutesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
