import SectionWrapper from './SectionWrapper';
import Panel from './GlassCard';
import { skills } from '../data/resumeData';

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="heading-block text-center">
        <p className="overline">Skills</p>
        <h2 className="text-gold">技能特长</h2>
        <div className="gold-rule mt-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <div key={skill.category} className="animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
            <Panel>
              <div className="text-2xl mb-4">{skill.icon}</div>
              <h3 className="font-mono text-xs tracking-[0.15em] text-gold uppercase mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs text-warm-gray border border-gold/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Panel>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
