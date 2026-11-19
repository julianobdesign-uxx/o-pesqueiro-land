import { useMemo, useState } from 'react';
import MenuCard from './MenuCard.jsx';
import SectionHeading from './SectionHeading.jsx';
import { CATEGORIES, MENU } from '../data/menu.js';
import { SITE } from '../config/site.js';

export default function MenuSection({ cart, onAdd, onDec }) {
  const [cat, setCat] = useState('todos');
  const items = useMemo(() => (cat === 'todos' ? MENU : MENU.filter((m) => m.cat === cat)), [cat]);

  return (
    <section id="cardapio" className="bg-sand py-16">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading kicker="Cardápio" title="Monte seu pedido" text="Escolha os pratos, ajuste as quantidades e envie tudo pelo WhatsApp. Sem cadastro." />
        <div className="scroll-x flex gap-2 mb-8" role="group" aria-label="Filtrar categorias">
          {[['todos', 'Todos'], ...CATEGORIES].map(([key, label]) => (
            <button key={key} className="chip" aria-pressed={cat === key} onClick={() => setCat(key)}>{label}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <MenuCard key={it.id} item={it} index={i} qty={cart[it.id]} onAdd={onAdd} onDec={onDec} />
          ))}
        </div>
        <p className="text-xs text-mute mt-6">{SITE.note}</p>
      </div>
    </section>
  );
}
