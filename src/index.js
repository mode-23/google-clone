import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ResultContextProvider } from './components/context/ResultContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider>
    <BrowserRouter basename='/google-clone/'>
    <App />
    </BrowserRouter>
    </ResultContextProvider>
  </React.StrictMode>
);
