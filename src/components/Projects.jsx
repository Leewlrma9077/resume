import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <SectionWrapper id="projects" num="04 / 项目经验">
      <h2 className="heading-lg mb-12">项目经验</h2>

      <div className="space-y-6">
        {projects.map((project, i) => {
          const isOpen = expanded === project.id;
          return (
            <div key={project.id}>
              <button
                onClick={() => toggle(project.id)}
                className="w-full text-left group"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-accent tabular-nums shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-lg font-medium text-ink font-display group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className="text-muted text-sm shrink-0 mt-1 transition-transform duration-400"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        +
                      </span>
                    </div>
                    <p className="text-xs text-muted mt-1">
                      {project.org} · {project.period}
                    </p>
                  </div>
                </div>
              </button>

              {isOpen && (
                <div className="mt-4 ml-8 pl-4 border-l-2 border-accent-light">
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-muted leading-relaxed">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {i < projects.length - 1 && <div className="hr mt-6" />}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
