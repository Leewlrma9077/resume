import { motion } from 'framer-motion';

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative z-10 min-h-screen flex items-center justify-center py-24 px-4 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
