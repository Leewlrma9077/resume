import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      <div className="section-heading">
        <p className="en-label">About Me</p>
        <h2><span className="gradient-text">关于我</span></h2>
        <div className="section-divider mt-5" />
      </div>

      <TypewriterText text={about.headline} />

      {/* Life Photos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-center gap-5 mb-12 max-w-3xl mx-auto"
      >
        <div className="flex-1 glass p-2 overflow-hidden">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/[0.01] flex items-center justify-center">
            <img
              src={import.meta.env.BASE_URL + 'photos/life1.jpg'}
              alt="生活照"
              className="w-full h-full object-cover object-right"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class=\"text-text-secondary/40 text-sm font-mono\">📷 生活照 1</span>';
              }}
            />
          </div>
        </div>
        <div className="flex-1 glass p-2 overflow-hidden">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/[0.01] flex items-center justify-center">
            <img
              src={import.meta.env.BASE_URL + 'photos/life2.jpg'}
              alt="生活照"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<span class=\"text-text-secondary/40 text-sm font-mono\">📷 生活照 2</span>';
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Professional Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {about.tags.map((tag) => (
          <span
            key={tag}
            className="px-4 py-2 glass text-sm text-accent-blue font-mono cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Hobbies */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <p className="text-xs text-text-secondary/50 font-mono tracking-[0.2em] uppercase mb-4">
          个人爱好
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {about.hobbies.map((h) => (
            <span
              key={h}
              className="px-4 py-2 glass-accent text-sm text-accent-purple font-serif-sc cursor-default"
            >
              {h}
            </span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
