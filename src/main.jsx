import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

const container = document.getElementById('root');

// Production dist/index.html has prerendered markup inside #root (see
// tools/prerender.js) — hydrate over it instead of re-rendering from scratch.
// Dev's index.html leaves only the <!--app-html--> comment, so it falls
// through to a plain client render.
if (container.children.length > 0) {
	ReactDOM.hydrateRoot(container, <App />);
} else {
	ReactDOM.createRoot(container).render(<App />);
}
