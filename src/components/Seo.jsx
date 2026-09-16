import React from 'react';
import { Helmet } from 'react-helmet';

// Social + canonical tags only. The page's own <Helmet> must keep a literal
// <title> and <meta name="description">, because the llms.txt build step reads
// those two tags straight out of the page file's source.
const Seo = ({ title, description, image, url, siteName, type = 'website' }) => {
    const canonical = url || (typeof window !== 'undefined' ? window.location.origin + window.location.pathname : undefined);
    // Bundled images resolve to root-relative asset URLs (e.g. /assets/hero-*.webp),
    // but og:image/twitter:image must be absolute for crawlers to fetch them.
    const origin = canonical ? new URL(canonical).origin : undefined;
    const absoluteImage = image && origin && !/^https?:\/\//i.test(image) ? origin + image : image;

    return (
        <Helmet>
            {canonical && <link rel="canonical" href={canonical} />}
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:type" content={type} />
            {siteName && <meta property="og:site_name" content={siteName} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {absoluteImage && <meta property="og:image" content={absoluteImage} />}
            <meta name="twitter:card" content={absoluteImage ? 'summary_large_image' : 'summary'} />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {absoluteImage && <meta name="twitter:image" content={absoluteImage} />}
        </Helmet>
    );
}

export default Seo;

export { Seo };
