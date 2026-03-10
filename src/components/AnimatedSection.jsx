import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Disconnect after it becomes visible once so it stays visible
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    // We pass isVisible via context or cloning so children can react, 
    // OR we just provide a wrapper that applies data-visible
    return (
        <div ref={ref} className={className} data-visible={isVisible}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { isVisible });
                }
                return child;
            })}
        </div>
    );
};

export default AnimatedSection;
