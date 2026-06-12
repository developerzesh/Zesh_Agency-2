import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Solutions from '../pages/Solutions';
import SolutionDetail from '../pages/SolutionDetail';
import { solutions } from '../lib/data';

function SolutionsPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (slug) {
    const solution = solutions.find(s => s.slug === slug);
    if (solution) return <SolutionDetail solution={solution} />;
  }
  return <Solutions />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <SolutionsPage />
    </PageLayout>
  </StrictMode>
);
