import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { experiences } from '../data/resumeData';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        <span className="gradient-text">工作经验</span>
      </h2>
      <p className="text-accent-blue font-mono text-xs tracking-[0.15em] uppercase mb-16 text-center">Experience</p>

      <div className="relative max-w-4xl mx-auto">
        {/* Horizontal timeline bar */}
        <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent" />

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 40, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="hidden md:flex justify-center mb-4">
                <div className="w-3 h-3 rounded-full bg-accent-blue shadow-[0_0_12px_rgba(77,168,218,0.6)]" />
              </div>

              <GlassCard>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center text-accent-blue font-bold text-sm font-mono">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary leading-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-accent-blue font-mono">{exp.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-mono text-text-secondary px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="text-accent-cyan mt-0.5 shrink-0 text-xs">◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
