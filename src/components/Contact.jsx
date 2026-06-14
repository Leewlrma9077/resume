import { motion } from 'framer-motion';
import { personal, contact } from '../data/resumeData';

export default function Contact() {
  return (
    <footer id="contact" className="relative z-10 py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-accent-blue font-mono text-xs tracking-[0.15em] uppercase mb-12">Contact</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12"
        >
          <a
            href={`mailto:${contact.email}`}
            className="group flex flex-col items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors duration-300"
          >
            <div className="w-14 h-14 glass flex items-center justify-center text-2xl group-hover:border-accent-blue/40 group-hover:shadow-[0_0_20px_rgba(77,168,218,0.15)] transition-all duration-300">
              ✉
            </div>
            <span className="text-sm font-mono">{contact.email}</span>
          </a>

          <div className="group flex flex-col items-center gap-2 text-text-secondary">
            <div className="w-14 h-14 glass flex items-center justify-center text-2xl">
              📍
            </div>
            <span className="text-sm font-mono">{contact.location}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-2xl md:text-3xl font-bold gradient-text mb-2">
            {personal.name}
          </p>
          <p className="text-text-secondary text-sm font-mono">
            {personal.nameEn} · {personal.title}
          </p>
          <div className="mt-8 pt-8 border-t border-white/[0.06]">
            <p className="text-xs text-text-secondary/50 font-mono">
              Designed & Built with React + Three.js + Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
