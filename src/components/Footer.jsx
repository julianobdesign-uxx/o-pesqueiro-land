import { SITE } from '../config/site.js';

export default function Footer() {
  return (
    <footer className="py-10" style={{ background: '#0b4a6f', color: '#fff' }}>
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between gap-4 text-sm">
        <div>
          <p className="font-serif text-xl">{SITE.name} — {SITE.tagline}</p>
          <p className="text-white/70">{SITE.city}</p>
        </div>
        <p className="text-white/70 max-w-sm">{SITE.note} Site demonstrativo.</p>
      </div>
    </footer>
  );
}
