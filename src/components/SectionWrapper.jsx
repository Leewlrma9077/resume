import { useEffect, useRef, useState } from 'react';

export default function SectionWrapper({ id, num, children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`relative z-10 py-section px-6 md:px-10 transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {num && (
        <div className="section-num mb-8">{num}</div>
      )}
      <div className="max-w-[720px] mx-auto">{children}</div>
    </section>
  );
}
