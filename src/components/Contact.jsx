import { personal, contact } from '../data/resumeData';

export default function Contact() {
  return (
    <footer id="contact" className="relative z-10 py-28 md:py-36 px-6 md:px-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="heading-block text-center">
          <p className="overline">Contact</p>
          <h2 className="text-gold">联系我</h2>
          <div className="gold-rule mt-6" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-16 animate-fade-up">
          <a
            href={`mailto:${contact.email}`}
            className="group flex flex-col items-center gap-3 text-warm-gray hover:text-gold transition-colors duration-500"
          >
            <div className="w-14 h-14 panel !p-0 flex items-center justify-center text-xl group-hover:border-gold/30 transition-all duration-500">
              ✉
            </div>
            <span className="text-xs font-mono">{contact.email}</span>
          </a>

          <div className="group flex flex-col items-center gap-3 text-warm-gray">
            <div className="w-14 h-14 panel !p-0 flex items-center justify-center text-xl">
              📍
            </div>
            <span className="text-xs font-mono">{contact.location}</span>
          </div>
        </div>

        <div className="animate-fade-up delay-300">
          <p className="text-2xl font-display font-semibold text-gold mb-2">{personal.name}</p>
          <p className="text-warm-gray text-xs font-mono tracking-wider">
            {personal.nameEn} · {personal.title}
          </p>
          <div className="gold-rule mt-10 mb-8" />
          <p className="text-[0.6rem] text-warm-gray/30 font-mono tracking-[0.2em] uppercase">
            Designed & Built with React · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
