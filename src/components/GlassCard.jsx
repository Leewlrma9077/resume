export default function GlassCard({ children, className = '', hover = true, accent = false }) {
  return (
    <div
      className={`${accent ? 'glass-accent' : 'glass'} p-6 ${className} ${
        !hover
          ? '[&:hover]:!bg-[rgba(77,168,218,0.04)] [&:hover]:!border-[rgba(255,255,255,0.07)] [&:hover]:!shadow-none'
          : ''
      }`}
    >
      {children}
    </div>
  );
}
