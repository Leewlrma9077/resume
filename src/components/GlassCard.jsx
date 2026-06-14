export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={`glass p-6 ${className} ${
        !hover
          ? '[&:hover]:!bg-[rgba(255,255,255,0.03)] [&:hover]:!border-[rgba(255,255,255,0.06)] [&:hover]:!shadow-none'
          : ''
      }`}
    >
      {children}
    </div>
  );
}
