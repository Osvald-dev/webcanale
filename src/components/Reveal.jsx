import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({ children, delay = 0, y = 24, className = '', as = 'div', once = true, ...rest }) => {
    const reduceMotion = useReducedMotion();
    const ref = useRef(null);
    // Renders as a plain, fully visible tag by default — matches SSR/first
    // paint exactly, so content is never dependent on JS to be visible. Only
    // after mounting do we check whether the element is off-screen; if so we
    // switch it to the animated version, since toggling opacity on something
    // outside the viewport is invisible to the user either way. Elements
    // already on screen at hydration time are left alone forever, so there's
    // no re-fade flash on content the user can already see.
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const node = ref.current;

        if (!node || reduceMotion) return;

        const rect = node.getBoundingClientRect();
        const isAlreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (!isAlreadyVisible) setAnimate(true);
    }, [reduceMotion]);

    // `delay` is in seconds (framer-motion's unit), but callers often pass the
    // milliseconds they'd use with a CSS transition. No reveal waits 10s, so a
    // value that large is milliseconds — convert rather than hang the content.
    const delaySeconds = delay > 10 ? delay / 1000 : delay;

    if (!animate) {
        const Tag = as;
        return (
            <Tag ref={ref} className={className} {...rest}>
                {children}
            </Tag>
        );
    }

    const MotionTag = motion[as] || motion.div;

    return (
        <MotionTag
            ref={ref}
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: '-60px' }}
            transition={{ duration: 0.6, delay: delaySeconds, ease: [0.22, 1, 0.36, 1] }}
            {...rest}
        >
            {children}
        </MotionTag>
    );
}

export default Reveal;

export { Reveal };
