import { useState, useEffect } from 'react';
import SectionWrapper from './SectionWrapper';
import { about } from '../data/resumeData';

function TypewriterText({ text, speed = 60 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = document.getElementById('about');
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    setDisplayed('');
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [started, text, speed]);

  return (
    <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10 font-light">
      {displayed}
      <span className="inline-block w-0.5 h-5 bg-accent-blue ml-0.5 animate-pulse align-middle" />
    </p>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">
        <span className="gradient-text">关于我</span>
      </h2>
      <p className="text-accent-blue font-mono text-xs tracking-[0.15em] uppercase mb-12">About Me</p>

      <TypewriterText text={about.headline} />

      <div className="flex flex-wrap justify-center gap-3">
        {about.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 glass text-sm text-accent-blue font-mono cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
}
