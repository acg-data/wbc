import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import EsApp from './EsApp.tsx'

const path = window.location.pathname;

if (path === '/es' || path === '/es/') {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <EsApp />
    </StrictMode>,
  );
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}