import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import WorkDetail from '../pages/WorkDetail';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <WorkDetail />
    </PageLayout>
  </StrictMode>
);
