import SectionHeading from './SectionHeading.jsx';
import { MENU } from '../data/menu.js';
import { brl } from '../lib/format.js';

// Fundo azul fixo (independente do tema) para manter o contraste do texto branco.
export default function Sharing({ onAdd }) {
  return (
    <section id="compartilhar" className="py-16" style={{ background: '#0b4a6f', color: '#fff' }}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading light kicker="Para compartilhar" title="Pratos feitos para dividir." />
        <div className="grid sm:grid-cols-2 gap-4">
          {MENU.filter((m) => m.cat === 'dois').map((m) => (
            <div key={m.id} className="rounded-2xl p-5 flex gap-4 items-start justify-between" style={{ background: 'rgba(255,255,255,.07)', border: '1px solid rgba(127,209,199,.28)' }}>
              <div>
                <h3 className="font-serif text-xl">{m.name}</h3>
                <p className="text-white/80 text-sm mt-1">{m.desc}</p>
                <p className="mt-3 font-semibold text-xl" style={{ color: '#7fd1c7' }}>
                  {brl(m.price)} <span className="font-normal text-sm" style={{ color: 'rgba(255,255,255,.65)' }}>· serve 2 pessoas</span>
                </p>
              </div>
              <button onClick={() => onAdd(m.id)} className="btn shrink-0" style={{ background: '#7fd1c7', color: '#06323a', padding: '.55rem 1rem' }} aria-label={`Adicionar ${m.name}`}>
                + Pedir
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
