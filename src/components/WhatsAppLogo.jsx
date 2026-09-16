import React from 'react';

// Full-color WhatsApp app badge (green bubble + white handset) — used on its
// own as the floating CTA, unlike WhatsAppIcon which is a single-color glyph
// meant to sit inline next to the site's other (currentColor) icons.
const WhatsAppLogo = ({ className = 'h-14 w-14', ...rest }) => (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className} {...rest}>
        <path fill="#25D366" d="M4 44l2.87-10.49A19.9 19.9 0 0 1 4 24C4 12.95 12.95 4 24 4s20 8.95 20 20-8.95 20-20 20a19.9 19.9 0 0 1-9.51-2.42L4 44z" />
        <path fill="#fff" d="M35.2 27.7c-.5-.25-2.96-1.46-3.42-1.62-.46-.17-.79-.25-1.13.25-.33.5-1.29 1.62-1.58 1.96-.29.33-.58.37-1.08.12-.5-.25-2.11-.78-4.02-2.48-1.49-1.33-2.49-2.97-2.78-3.47-.29-.5-.03-.77.22-1.02.22-.22.5-.58.75-.87.25-.29.33-.5.5-.83.17-.33.08-.62-.04-.87-.12-.25-1.13-2.72-1.55-3.72-.41-.98-.82-.85-1.13-.86-.29-.02-.62-.02-.96-.02-.33 0-.87.12-1.33.62-.46.5-1.75 1.71-1.75 4.17s1.79 4.84 2.04 5.17c.25.33 3.53 5.39 8.55 7.56 1.19.51 2.12.82 2.85 1.05 1.2.38 2.29.33 3.15.2.96-.14 2.96-1.21 3.38-2.38.42-1.17.42-2.17.29-2.38-.12-.21-.46-.33-.96-.58z" />
    </svg>
);

export default WhatsAppLogo;

export { WhatsAppLogo };
