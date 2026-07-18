import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const plugins = [react(), tailwindcss()];
  try {
    // @ts-ignore
    const m = await import('./.vite-source-tags.js');
    plugins.push(m.sourceTags());
  } catch { }

  const env = loadEnv(mode, process.cwd(), ['VITE_', 'NEXT_PUBLIC_']);
  const processEnvDefines: Record<string, string> = {};
  for (const [key, value] of Object.entries(env)) {
    processEnvDefines[`process.env.${key}`] = JSON.stringify(value);
  }

  const pages: Record<string, string> = {
    main: resolve(__dirname, 'index.html'),
    about: resolve(__dirname, 'about.html'),
    studio: resolve(__dirname, 'studio.html'),
    philosophy: resolve(__dirname, 'philosophy.html'),
    lab: resolve(__dirname, 'lab.html'),
    solutions: resolve(__dirname, 'solutions.html'),
    industries: resolve(__dirname, 'industries.html'),
    'case-studies': resolve(__dirname, 'case-studies.html'),
    insights: resolve(__dirname, 'insights.html'),
    blog: resolve(__dirname, 'blog.html'),
    journal: resolve(__dirname, 'journal.html'),
    careers: resolve(__dirname, 'careers.html'),
    contact: resolve(__dirname, 'contact.html'),
    work: resolve(__dirname, 'work.html'),
  };

  return {
    plugins,
    envPrefix: ['VITE_', 'NEXT_PUBLIC_'],
    define: processEnvDefines,
    build: {
      rollupOptions: {
        input: pages,
      },
    },
  };
})
