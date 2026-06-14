import SectionWrapper from './SectionWrapper';
import Panel from './GlassCard';
import { education } from '../data/resumeData';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="heading-block text-center">
        <p className="overline">Education</p>
        <h2 className="text-gold">教育背景</h2>
        <div className="gold-rule mt-6" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline: gold vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold-dim to-transparent opacity-20" />

        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <div key={edu.id} className="relative pl-12 md:pl-0 animate-fade-up" style={{ animationDelay: `${i * 0.12}s` }}>
              {/* Diamond marker */}
              <div className="absolute left-[13px] md:left-1/2 top-6 -translate-x-1/2 z-10">
                <div className="gold-diamond" />
              </div>

              <div className={`md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                <Panel>
                  <span className="font-mono text-[0.65rem] tracking-wider text-gold-dim uppercase">
                    {edu.start} — {edu.end}
                  </span>
                  <h3 className="text-lg font-semibold text-parchment mt-2 mb-1">{edu.school}</h3>
                  <p className="text-sm text-gold font-mono">
                    {edu.major ? `${edu.major} · ` : ''}{edu.degree}
                  </p>
                  <p className="text-xs text-warm-gray mt-1">{edu.badge}</p>
                </Panel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
