import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Studio from '../pages/Studio';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <Studio />
    </PageLayout>
  </StrictMode>
);
