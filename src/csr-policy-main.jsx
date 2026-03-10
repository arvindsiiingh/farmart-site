import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CsrPolicyPage from './components/CsrPolicyPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CsrPolicyPage />
  </StrictMode>,
);
