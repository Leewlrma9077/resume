import { motion } from 'framer-motion';
import { personal } from '../data/resumeData';

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent-blue font-mono text-sm tracking-[0.2em] uppercase mb-6"
        >
          {personal.nameEn} · {personal.title}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text text-glow-blue">{personal.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-xl md:text-2xl text-text-secondary font-light mb-12 tracking-wide"
        >
          {personal.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {['嵌入式系统', '工控自动化', '软硬件全栈'].map((tag) => (
            <span
              key={tag}
              className="px-5 py-2 glass text-sm text-accent-blue font-mono"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-text-secondary">
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-4 h-4 border-r-2 border-b-2 border-accent-blue rotate-45"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
