import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import CaseStudies from '../pages/CaseStudies';
import CaseStudyDetail from '../pages/CaseStudyDetail';
import { caseStudies } from '../lib/data';

function CaseStudiesPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (slug) {
    const cs = caseStudies.find(c => c.slug === slug);
    if (cs) return <CaseStudyDetail caseStudy={cs} />;
  }
  return <CaseStudies />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <CaseStudiesPage />
    </PageLayout>
  </StrictMode>
);
