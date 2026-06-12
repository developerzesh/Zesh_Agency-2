import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Journal from '../pages/Journal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <Journal />
    </PageLayout>
  </StrictMode>
);
