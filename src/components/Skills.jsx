import { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { skills } from '../data/resumeData';

function SkillCard({ skill, index }) {
  const cardRef = useRef();
  const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    rotateX.set(dy * -8);
    rotateY.set(dx * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass p-6 cursor-default"
    >
      <div className="text-2xl mb-3">{skill.icon}</div>
      <h3 className="text-sm font-bold text-accent-blue font-mono tracking-wide mb-3">
        {skill.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-text-secondary"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        <span className="gradient-text">技能特长</span>
      </h2>
      <p className="text-accent-blue font-mono text-xs tracking-[0.15em] uppercase mb-16 text-center">Skills</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <SkillCard key={skill.category} skill={skill} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
