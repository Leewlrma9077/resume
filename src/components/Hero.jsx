import { useEffect, useRef } from 'react';
import { personal } from '../data/resumeData';

export default function Hero() {
  const sectionRef = useRef();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = '0';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1.2s ease-out';
      el.style.opacity = '1';
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative z-10 min-h-screen flex items-center px-6 md:px-20"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Left: Photo */}
        <div className="shrink-0 animate-fade-up">
          <div className="w-40 h-40 md:w-52 md:h-52 gold-frame">
            <img
              src={import.meta.env.BASE_URL + 'photos/avatar.jpg'}
              alt={personal.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="flex-1 text-center md:text-left animate-fade-up delay-200">
          <p className="overline font-mono text-gold text-xs tracking-[0.3em] uppercase mb-6">
            {personal.nameEn}
          </p>

          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-5 text-parchment">
            {personal.name}
          </h1>

          <div className="gold-rule-left mb-6" />

          <p className="font-body text-xl md:text-2xl text-warm-gray font-light tracking-wide">
            {personal.title} · {personal.subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mt-10 justify-center md:justify-start">
            {['嵌入式系统', '工业自动化', '软硬件全栈'].map((tag) => (
              <span key={tag} className="panel !py-2 !px-5 text-xs text-gold font-mono">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
