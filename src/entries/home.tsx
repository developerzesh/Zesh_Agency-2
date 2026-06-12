import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Home from '../pages/Home';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <Home />
    </PageLayout>
  </StrictMode>
);
