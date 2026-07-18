import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css';
import PageLayout from '../components/PageLayout';
import Blog from '../pages/Blog';
import BlogPostPage from '../pages/BlogPost';
import { blogPosts } from '../lib/blogData.ts';

function BlogMain() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    if (slug) {
        const post = blogPosts.find(p => p.slug === slug);
        if (post) return <BlogPostPage post={post} />;
    }
    return <Blog />;
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PageLayout>
            <BlogMain />
        </PageLayout>
    </StrictMode>
);
