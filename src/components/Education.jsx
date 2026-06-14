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
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent hidden md:block" />

        <div className="flex flex-col gap-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
            >
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} text-center md:text-left`}>
                <GlassCard>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(77,168,218,0.8)]" />
                    <span className="text-xs font-mono text-accent-blue">
                      {edu.start} ~ {edu.end}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    {edu.school}
                  </h3>
                  <p className="text-accent-blue font-mono text-sm mb-1">
                    {edu.major} · {edu.degree}
                  </p>
                  <p className="text-text-secondary text-xs">{edu.badge}</p>
                </GlassCard>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex items-center justify-center w-8 h-8 shrink-0 z-10">
                <div className="w-3 h-3 rounded-full bg-accent-purple shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
