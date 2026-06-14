import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { achievements } from '../data/resumeData';

function AnimatedCounter({ value }) {
  return (
    <span className="text-3xl md:text-4xl font-bold gradient-text">
      {value}
    </span>
  );
}

function AchievementCard({ achievement, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass p-6 text-center group"
    >
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
        {achievement.icon}
      </div>
      <div className="mb-2">
        <AnimatedCounter value={achievement.value} />
      </div>
      <p className="text-sm font-bold text-accent-blue font-mono mb-2">{achievement.label}</p>
      <p className="text-xs text-text-secondary leading-relaxed">{achievement.detail}</p>
    </motion.div>
  );
}

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="section-heading">
        <p className="en-label">Achievements</p>
        <h2><span className="gradient-text">个人成果</span></h2>
        <div className="section-divider mt-5" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, i) => (
          <AchievementCard key={item.id} achievement={item} index={i} />
        ))}
      </div>

      {/* Additional highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 glass p-5 text-center max-w-2xl mx-auto"
      >
        <p className="text-sm text-text-secondary">
          <span className="text-accent-blue font-mono">中共党员</span>
          <span className="mx-3 text-white/10">|</span>
          具备<span className="text-accent-cyan">双学位</span>背景
          <span className="mx-3 text-white/10">|</span>
          <span className="text-accent-purple">外企工作</span>经验
          <span className="mx-3 text-white/10">|</span>
          英语<span className="text-accent-blue">流利交流</span>及专业文献阅读
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
