import SectionWrapper from './SectionWrapper';
import { experiences } from '../data/resumeData';

export default function Experience() {
  return (
    <SectionWrapper id="experience" num="05 / 工作经验">
      <h2 className="heading-lg mb-12">工作经验</h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16">
              {/* Left: company info */}
              <div className="md:w-44 shrink-0">
                <span className="font-mono text-[0.6rem] tracking-wider text-muted uppercase">
                  {exp.period}
                </span>
                <h3 className="text-base font-medium text-ink mt-2 font-display">{exp.company}</h3>
                <p className="text-xs text-accent font-mono mt-1">{exp.role}</p>
              </div>

              {/* Right: details */}
              <div className="flex-1">
                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="text-sm text-muted leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hr mt-10" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
