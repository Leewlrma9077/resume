import SectionWrapper from './SectionWrapper';
import { achievements } from '../data/resumeData';

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" num="06 / 个人成果">
      <h2 className="heading-lg mb-12">个人成果</h2>

      {/* Big number stat grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
        {achievements.map((item) => (
          <div key={item.id}>
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="text-2xl font-display font-semibold text-ink mb-1">{item.value}</div>
            <p className="font-mono text-[0.6rem] tracking-wider text-accent uppercase">{item.label}</p>
            <p className="text-xs text-muted mt-2 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>

      <div className="hr mb-10" />

      {/* Personal highlight */}
      <p className="text-sm text-muted leading-relaxed">
        <span className="text-accent font-medium">中共党员</span>
        <span className="mx-2 text-hairline">·</span>
        具备<span className="text-ink">双学位</span>背景
        <span className="mx-2 text-hairline">·</span>
        <span className="text-ink">外企工作</span>经验
        <span className="mx-2 text-hairline">·</span>
        英语<span className="text-ink">流利交流</span>及专业文献阅读
      </p>
    </SectionWrapper>
  );
}
