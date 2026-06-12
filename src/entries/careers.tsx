import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Careers from '../pages/Careers';
import CareerDetail from '../pages/CareerDetail';
import { careers } from '../lib/data';

function CareersPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (slug) {
    const career = careers.find(c => c.slug === slug);
    if (career) return <CareerDetail career={career} />;
  }
  return <Careers />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <CareersPage />
    </PageLayout>
  </StrictMode>
);
