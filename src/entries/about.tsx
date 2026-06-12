import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import About from '../pages/About';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <About />
    </PageLayout>
  </StrictMode>
);
