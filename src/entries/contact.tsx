import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Contact from '../pages/Contact';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <Contact />
    </PageLayout>
  </StrictMode>
);
