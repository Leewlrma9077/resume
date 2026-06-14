import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import GlassCard from './GlassCard';
import { education } from '../data/resumeData';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        <span className="gradient-text">教育背景</span>
      </h2>
      <p className="text-accent-blue font-mono text-xs tracking-[0.15em] uppercase mb-16 text-center">Education</p>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent" />

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative pl-14 md:pl-0"
            >
              {/* Center dot */}
              <div className="absolute left-[18px] md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent-purple shadow-[0_0_12px_rgba(139,92,246,0.6)] -translate-x-1/2 z-10" />

              <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:ml-auto md:pl-0' : 'md:mr-auto md:pr-0'}`}>
                <GlassCard>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(77,168,218,0.8)]" />
                    <span className="text-xs font-mono text-accent-blue">
                      {edu.start} ~ {edu.end}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-accent-blue font-mono text-sm mb-1">
                    {edu.major ? `${edu.major} · ` : ''}{edu.degree}
                  </p>
                  <p className="text-text-secondary text-xs">{edu.badge}</p>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
