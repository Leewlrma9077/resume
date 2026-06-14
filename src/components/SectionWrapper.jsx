import { useEffect, useRef, useState } from 'react';

export default function SectionWrapper({ id, children, className = '' }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative z-10 py-28 md:py-36 px-6 md:px-12 transition-all duration-[1200ms] ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}
