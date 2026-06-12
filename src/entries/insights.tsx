import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Insights from '../pages/Insights';
import InsightArticle from '../pages/InsightArticle';
import { insights } from '../lib/data';

function InsightsPage() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  if (slug) {
    const article = insights.find(a => a.slug === slug);
    if (article) return <InsightArticle article={article} />;
  }
  return <Insights />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageLayout>
      <InsightsPage />
    </PageLayout>
  </StrictMode>
);
