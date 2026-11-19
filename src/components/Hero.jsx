import Picture from './Picture.jsx';
import { SITE } from '../config/site.js';
import { PHOTOS } from '../data/photos.js';
import { generalLink } from '../lib/whatsapp.js';

export default function Hero() {
  return (
    <section className="hero text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-block text-xs tracking-widest uppercase border border-white/40 rounded-full px-3 py-1 mb-5">
            {SITE.tagline} · {SITE.city}
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl leading-[1.05]">O melhor do mar, servido à sua mesa.</h1>
          <p className="mt-5 text-lg text-white/85 max-w-md">
            Frutos do mar, moquecas e pratos generosos, com tempero de casa e atendimento acolhedor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cardapio" className="btn bg-white" style={{ color: '#0b4a6f' }}>Ver cardápio e pedir</a>
            <a href={generalLink} target="_blank" rel="noopener noreferrer" className="btn btn-line">Falar no WhatsApp</a>
          </div>
        </div>
        <div className="rounded-[2rem] overflow-hidden aspect-[5/4] shadow-2xl border border-white/20 bg-sand">
          <Picture src={PHOTOS.hero} cat="dois" seed={3} alt="Seleção de frutos do mar" eager />
        </div>
      </div>
      <svg viewBox="0 0 1440 60" className="block w-full" aria-hidden="true" preserveAspectRatio="none" style={{ height: 40 }}>
        <path d="M0 30c120 30 240 30 360 0s240-30 360 0 240 30 360 0 240-30 360 0v30H0z" fill="var(--bg)" />
      </svg>
    </section>
  );
}
