import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { projects } from '../data/resumeData';

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggle = (id) => setExpanded(expanded === id ? null : id);

  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        <span className="gradient-text">项目经验</span>
      </h2>
      <p className="text-accent-blue font-mono text-xs tracking-[0.15em] uppercase mb-16 text-center">Projects</p>

      <div className="flex flex-col gap-5 max-w-4xl mx-auto">
        {projects.map((project, i) => {
          const isOpen = expanded === project.id;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="cursor-pointer overflow-hidden" hover={false}>
                <div onClick={() => toggle(project.id)} className="select-none">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-mono text-accent-blue px-2.5 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20">
                          {project.period}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                        {project.title}
                      </h3>
                      <p className="text-sm text-text-secondary">{project.org}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-accent-blue mt-2 text-xl"
                    >
                      ▾
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-white/[0.06]">
                        <ul className="space-y-3">
                          {project.highlights.map((h, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: j * 0.08 }}
                              className="flex items-start gap-3 text-sm text-text-secondary"
                            >
                              <span className="text-accent-purple mt-0.5 shrink-0">▹</span>
                              {h}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
