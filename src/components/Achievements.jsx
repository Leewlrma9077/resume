import SectionWrapper from './SectionWrapper';
import Panel from './GlassCard';
import { achievements } from '../data/resumeData';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="heading-block text-center">
        <p className="overline">Achievements</p>
        <h2 className="text-gold">个人成果</h2>
        <div className="gold-rule mt-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, i) => (
          <div key={item.id} className="animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <Panel className="text-center h-full">
              <div className="text-3xl mb-4">{item.icon}</div>
              <div className="text-2xl font-display font-semibold text-gold mb-2">{item.value}</div>
              <p className="font-mono text-[0.65rem] tracking-wider text-gold-dim uppercase mb-2">{item.label}</p>
              <p className="text-xs text-warm-gray leading-relaxed">{item.detail}</p>
            </Panel>
          </div>
        ))}
      </div>

      {/* Personal highlight */}
      <div className="mt-8 panel text-center max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <p className="text-sm text-warm-gray leading-relaxed">
          <span className="text-gold font-mono">中共党员</span>
          <span className="mx-3 text-gold/15">|</span>
          具备<span className="text-gold-light">双学位</span>背景
          <span className="mx-3 text-gold/15">|</span>
          <span className="text-gold-dim">外企工作</span>经验
          <span className="mx-3 text-gold/15">|</span>
          英语<span className="text-gold">流利交流</span>及专业文献阅读
        </p>
      </div>
    </SectionWrapper>
  );
}
