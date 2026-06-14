import { personal, contact } from '../data/resumeData';

export default function Contact() {
  return (
    <footer id="contact" className="relative z-10 py-section px-6 md:px-10">
      <div className="max-w-[720px] mx-auto">
        <div className="hr mb-16" />

        <div className="section-num mb-8">07 / 联系我</div>
        <h2 className="heading-lg mb-12">联系我</h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-16 text-sm mb-20">
          <a
            href={`mailto:${contact.email}`}
            className="text-muted hover:text-accent transition-colors font-mono text-xs underline-accent"
          >
            {contact.email}
          </a>
          <span className="text-muted font-mono text-xs">{contact.location}</span>
        </div>

        <div className="hr mb-12" />

        <p className="text-2xl font-display font-semibold text-ink mb-2">
          {personal.name}
        </p>
        <p className="text-xs text-muted font-mono mb-16">
          {personal.nameEn} · {personal.title}
        </p>

        <p className="font-mono text-[0.55rem] tracking-[0.25em] text-muted/30 uppercase">
          Designed with restraint · React & CSS
        </p>
      </div>
    </footer>
  );
}
