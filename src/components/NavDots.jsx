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
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
          aria-label={label}
        >
          <span className="text-xs text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {label}
          </span>
          <span
            className={`block w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
              active === id
                ? 'bg-accent-blue border-accent-blue shadow-[0_0_10px_rgba(77,168,218,0.6)]'
                : 'bg-transparent border-white/20 hover:border-white/50'
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
