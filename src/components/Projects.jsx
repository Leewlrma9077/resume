import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import Panel from './GlassCard';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <SectionWrapper id="projects">
      <div className="heading-block text-center">
        <p className="overline">Projects</p>
        <h2 className="text-gold">项目经验</h2>
        <div className="gold-rule mt-6" />
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {projects.map((project, i) => {
          const isOpen = expanded === project.id;
          return (
            <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <Panel hover={false} className="cursor-pointer overflow-hidden">
                <div onClick={() => toggle(project.id)} className="select-none">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="font-mono text-[0.65rem] tracking-wider text-gold-dim uppercase">
                        {project.period}
                      </span>
                      <h3 className="text-lg font-semibold text-parchment mt-2 mb-1">{project.title}</h3>
                      <p className="text-sm text-warm-gray">{project.org}</p>
                    </div>
                    <span
                      className="text-gold text-lg mt-2 transition-transform duration-500"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    >
                      ▾
                    </span>
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="mt-5 pt-5 border-t border-gold/10 animate-fade-up"
                    style={{ animationDuration: '0.4s' }}
                  >
                    <ul className="space-y-3">
                      {project.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-sm text-warm-gray animate-fade-up"
                          style={{ animationDelay: `${j * 0.06}s` }}
                        >
                          <span className="text-gold-dim mt-0.5 shrink-0">◆</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Panel>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
