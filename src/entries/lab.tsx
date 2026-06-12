import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Lab from '../pages/Lab';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <Lab />
    </PageLayout>
  </StrictMode>
);
