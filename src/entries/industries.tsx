import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Industries from '../pages/Industries';
import IndustryDetail from '../pages/IndustryDetail';
import { industries } from '../lib/data';

function IndustriesPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (slug) {
    const industry = industries.find(i => i.slug === slug);
    if (industry) return <IndustryDetail industry={industry} />;
  }
  return <Industries />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <IndustriesPage />
    </PageLayout>
  </StrictMode>
);
