import Picture from './Picture.jsx';
import SectionHeading from './SectionHeading.jsx';
import { PHOTOS } from '../data/photos.js';

const VALUES = [
  ['〰', 'Frescor', 'Ingredientes selecionados'],
  ['◍', 'Tradição', 'Receitas regionais'],
  ['❖', 'Generosidade', 'Pratos fartos'],
  ['♡', 'Acolhimento', 'Atendimento próximo'],
];

export default function About() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="rounded-3xl overflow-hidden aspect-[4/3] order-2 md:order-1">
        <Picture src={PHOTOS.about} cat="regionais" seed={1} alt="Moqueca servida na panela" />
      </div>
      <div className="order-1 md:order-2">
        <SectionHeading kicker="A cozinha" title="Simplicidade bem executada, sabor de beira-mar." />
        <p className="text-mute">
          Receitas da tradição caiçara com ingredientes escolhidos com cuidado: peixes, camarão, lula e polvo, leite de coco,
          dendê, ervas e legumes. Pratos generosos, feitos para dividir e para voltar.
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-4 text-sm">
          {VALUES.map(([icon, title, text]) => (
            <li key={title} className="card p-4">
              <span className="text-ocean text-xl" aria-hidden="true">{icon}</span>
              <p className="font-semibold mt-1">{title}</p>
              <p className="text-mute">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
