import SectionWrapper from './SectionWrapper';
import Panel from './GlassCard';
import { about } from '../data/resumeData';

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="heading-block text-center">
        <p className="overline">About Me</p>
        <h2 className="text-gold">关于我</h2>
        <div className="gold-rule mt-6" />
      </div>

      <p className="text-base md:text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto text-center font-light mb-14">
        {about.headline}
      </p>

      {/* Life Photos */}
      <div className="flex flex-col md:flex-row justify-center gap-5 mb-14 max-w-3xl mx-auto">
        <div className="flex-1 panel !p-2 overflow-hidden">
          <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-ink">
            <img
              src={import.meta.env.BASE_URL + 'photos/life1.jpg'}
              alt="生活照"
              className="w-full h-full object-cover object-right"
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-warm-gray/30 text-xs font-mono">生活照 1</span>'; }}
            />
          </div>
        </div>
        <div className="flex-1 panel !p-2 overflow-hidden">
          <div className="aspect-[4/3] overflow-hidden flex items-center justify-center bg-ink">
            <img
              src={import.meta.env.BASE_URL + 'photos/life2.jpg'}
              alt="生活照"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-warm-gray/30 text-xs font-mono">生活照 2</span>'; }}
            />
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {about.tags.map((tag) => (
          <span key={tag} className="panel !py-2 !px-4 text-xs text-gold font-mono">{tag}</span>
        ))}
      </div>

      {/* Hobbies */}
      <div className="text-center">
        <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-warm-gray/40 mb-4">
          个人爱好
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {about.hobbies.map((h) => (
            <span key={h} className="text-sm text-gold-dim font-body italic">{h}</span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
