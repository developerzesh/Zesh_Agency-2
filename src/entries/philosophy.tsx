import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Philosophy from '../pages/Philosophy';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <Philosophy />
    </PageLayout>
  </StrictMode>
);
