export default function Panel({ children, className = '', hover = true }) {
  return (
    <div className={`panel ${className} ${!hover ? 'hover:!border-[rgba(201,162,78,0.08)] hover:!shadow-none' : ''}`}>
      {children}
    </div>
  );
}
