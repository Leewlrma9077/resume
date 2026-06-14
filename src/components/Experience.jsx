import SectionWrapper from './SectionWrapper';
import Panel from './GlassCard';
import { experiences } from '../data/resumeData';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="heading-block text-center">
        <p className="overline">Experience</p>
        <h2 className="text-gold">工作经验</h2>
        <div className="gold-rule mt-6" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Gold connector line */}
        <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Diamond marker */}
              <div className="hidden md:flex justify-center mb-5">
                <div className="gold-diamond" />
              </div>

              <Panel>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/20 text-gold font-display text-lg font-semibold">
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-parchment leading-tight">{exp.company}</h3>
                    <p className="text-sm text-gold font-mono">{exp.role}</p>
                  </div>
                </div>

                <span className="font-mono text-[0.65rem] tracking-wider text-gold-dim uppercase">
                  {exp.period}
                </span>

                <ul className="mt-4 space-y-2.5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-warm-gray">
                      <span className="text-gold-dim mt-0.5 shrink-0 text-xs">◆</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
