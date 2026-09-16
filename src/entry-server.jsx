import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';

// HomePage never reads router state (no useLocation/<Link>), so it renders
// identically with or without the <App> Router/ScrollToTop wrapper — skipping
// them here avoids pulling react-router's SSR APIs into this entry.
export function render() {
    const html = renderToString(<HomePage />);
    const helmet = Helmet.renderStatic();

    return { html, helmet };
}
