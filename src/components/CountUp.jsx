import React, { useEffect, useRef, useState } from 'react';

const EASE_OUT_CUBIC = (progress) => 1 - Math.pow(1 - progress, 3);

const CountUp = ({ value, duration = 1600, decimals = 0, prefix = '', suffix = '', locale, className = '' }) => {
    const target = Number(value) || 0;
    // Starts at the final value so SSR/first paint is correct with no JS.
    // The effect below only runs client-side, post-hydration, and resets to
    // 0 to play the count-up once the element scrolls into view.
    const [display, setDisplay] = useState(target);
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;

        if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return undefined;
        }

        let frame;
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;

            observer.disconnect();
            setDisplay(0);

            const start = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);

                setDisplay(target * EASE_OUT_CUBIC(progress));

                if (progress < 1) frame = requestAnimationFrame(tick);
            };

            frame = requestAnimationFrame(tick);
        }, { threshold: 0.3 });

        observer.observe(node);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}
            {display.toLocaleString(locale, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
            {suffix}
        </span>
    );
}

export default CountUp;

export { CountUp };
