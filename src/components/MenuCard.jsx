import Picture from './Picture.jsx';
import { brl } from '../lib/format.js';

export default function MenuCard({ item, index = 0, qty, onAdd, onDec }) {
  return (
    <article className="card flex flex-col">
      <div className="aspect-[4/3] relative">
        <Picture src={item.photo} cat={item.cat} seed={index} alt={item.name} />
        <div className="absolute top-3 left-3 flex gap-2">
          {item.share && <span className="tag">Para compartilhar</span>}
          {item.top && <span className="tag" style={{ background: '#fff', color: '#0b4a6f' }}>Mais pedido</span>}
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex justify-between gap-3">
          <h3 className="font-serif text-lg leading-snug">{item.name}</h3>
          <span className="font-semibold text-ocean whitespace-nowrap">{brl(item.price)}</span>
        </div>
        <p className="text-sm text-mute flex-1">{item.desc}</p>
        {qty ? (
          <div className="flex items-center justify-between rounded-full border border-line px-2 py-1" role="group" aria-label={`Quantidade de ${item.name}`}>
            <button onClick={() => onDec(item.id)} className="w-9 h-9 rounded-full text-xl" aria-label="Diminuir">−</button>
            <span className="font-semibold" aria-live="polite">{qty}</span>
            <button onClick={() => onAdd(item.id)} className="w-9 h-9 rounded-full text-xl" aria-label="Aumentar">+</button>
          </div>
        ) : (
          <button onClick={() => onAdd(item.id)} className="btn bg-ocean" style={{ padding: '.65rem 1rem', color: 'var(--bg)' }}>
            Adicionar ao pedido
          </button>
        )}
      </div>
    </article>
  );
}
