import SectionWrapper from './SectionWrapper';
import { about } from '../data/resumeData';

export default function About() {
  return (
    <SectionWrapper id="about" num="01 / 关于我">
      {/* Two column: text left, photos right */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="flex-1">
          <h2 className="heading-lg mb-8">关于我</h2>
          <p className="body-lg mb-8">{about.headline}</p>

          <div className="flex flex-wrap gap-2 mb-10">
            {about.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Hobbies - inline text style */}
          <p className="font-mono text-[0.6rem] tracking-[0.2em] text-muted/50 uppercase mb-3">个人爱好</p>
          <p className="text-sm text-muted">
            {about.hobbies.join('  ·  ')}
          </p>
        </div>

        {/* Photos stacked vertically */}
        <div className="md:w-56 shrink-0 flex flex-col gap-4">
          <div className="aspect-[4/3] bg-paper overflow-hidden">
            <img
              src={import.meta.env.BASE_URL + 'photos/life1.jpg'}
              alt="生活照"
              className="w-full h-full object-cover object-right"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className="aspect-[4/3] bg-paper overflow-hidden">
            <img
              src={import.meta.env.BASE_URL + 'photos/life2.jpg'}
              alt="生活照"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
