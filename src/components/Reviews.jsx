import SectionHeading from './SectionHeading.jsx';
import { REVIEWS } from '../data/menu.js';

export default function Reviews() {
  return (
    <section id="avaliacoes" className="bg-sand py-16">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeading kicker="Avaliações" title="O que dizem à mesa" text="Depoimentos ilustrativos, apenas para demonstração do layout." />
        <div className="grid md:grid-cols-3 gap-5">
          {REVIEWS.map(([name, text]) => (
            <figure key={name} className="card p-6">
              <div className="text-ocean" role="img" aria-label="5 de 5 estrelas">★★★★★</div>
              <blockquote className="mt-3">“{text}”</blockquote>
              <figcaption className="mt-4 text-sm text-mute">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
