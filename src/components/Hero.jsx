import { personal } from '../data/resumeData';

export default function Hero() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex items-center px-6 md:px-10">
      <div className="max-w-[720px] mx-auto w-full">
        {/* Photo + Name row */}
        <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12 mb-16">
          <div className="shrink-0 animate-reveal">
            <img
              src={import.meta.env.BASE_URL + 'photos/avatar.jpg'}
              alt={personal.name}
              className="w-24 h-24 md:w-28 md:h-28 object-cover"
            />
          </div>
          <div className="flex-1 animate-reveal delay-2">
            <p className="font-mono text-[0.65rem] tracking-[0.25em] text-muted uppercase mb-3">
              {personal.nameEn}
            </p>
            <h1 className="heading-xl">{personal.name}</h1>
          </div>
        </div>

        <div className="hr mb-12 animate-reveal delay-3" />

        {/* Subtitle + Tags */}
        <div className="animate-reveal delay-4">
          <p className="body-lg mb-8 max-w-lg">
            {personal.title}<br />
            {personal.subtitle}
          </p>

          <div className="flex flex-wrap gap-3">
            {['嵌入式系统', '工业自动化', '软硬件全栈'].map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
