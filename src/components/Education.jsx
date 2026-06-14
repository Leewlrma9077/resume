import SectionWrapper from './SectionWrapper';
import { education } from '../data/resumeData';

export default function Education() {
  return (
    <SectionWrapper id="education" num="02 / 教育背景">
      <h2 className="heading-lg mb-12">教育背景</h2>

      {/* Horizontal timeline */}
      <div className="relative">
        {/* Line */}
        <div className="absolute top-3 left-0 right-0 h-px bg-hairline hidden md:block" />

        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          {education.map((edu, i) => (
            <div key={edu.id} className="flex-1 md:px-3 first:pl-0 last:pr-0">
              {/* Dot */}
              <div className="hidden md:block w-2 h-2 rounded-full bg-accent mb-5 relative z-10 mx-auto" />

              <div className="md:text-center">
                <span className="font-mono text-[0.6rem] tracking-wider text-muted uppercase">
                  {edu.start} — {edu.end}
                </span>
                <h3 className="text-sm font-medium text-ink mt-2 mb-1 font-display">{edu.school}</h3>
                <p className="text-xs text-muted">
                  {edu.major ? `${edu.major} · ` : ''}{edu.degree}
                </p>
                <p className="text-[0.6rem] text-muted/60 mt-1">{edu.badge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
