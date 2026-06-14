import SectionWrapper from './SectionWrapper';
import { skills } from '../data/resumeData';

export default function Skills() {
  return (
    <SectionWrapper id="skills" num="03 / 技能特长">
      <h2 className="heading-lg mb-12">技能特长</h2>

      <div className="space-y-10">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="font-mono text-[0.65rem] tracking-[0.15em] text-accent uppercase mb-3">
              {skill.icon}  {skill.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
