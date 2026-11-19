import MenuCard from './MenuCard.jsx';
import SectionHeading from './SectionHeading.jsx';
import { MENU } from '../data/menu.js';

export default function Highlights({ cart, onAdd, onDec }) {
  return (
    <section id="destaques" className="max-w-6xl mx-auto px-5 py-16">
      <SectionHeading kicker="Mais pedidos" title="Os favoritos da mesa" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MENU.filter((m) => m.top).slice(0, 3).map((it, i) => (
          <MenuCard key={it.id} item={it} index={i + 4} qty={cart[it.id]} onAdd={onAdd} onDec={onDec} />
        ))}
      </div>
    </section>
  );
}
