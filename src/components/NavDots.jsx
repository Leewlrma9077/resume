import { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Honors' },
  { id: 'contact', label: 'Contact' },
];

export default function NavDots() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
          aria-label={label}
        >
          <span className="text-[0.6rem] font-mono text-warm-gray/0 group-hover:text-warm-gray/50 transition-all duration-300 tracking-wider uppercase">
            {label}
          </span>
          <span
            className={`block transition-all duration-500 ${
              active === id
                ? 'w-1.5 h-1.5 bg-gold rotate-45'
                : 'w-1 h-1 bg-warm-gray/15 group-hover:bg-warm-gray/30'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
