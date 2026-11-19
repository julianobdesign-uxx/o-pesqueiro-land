import Picture from './Picture.jsx';
import SectionHeading from './SectionHeading.jsx';
import { PHOTOS } from '../data/photos.js';

export default function Gallery() {
  return (
    <section id="galeria" className="max-w-6xl mx-auto px-5 py-16">
      <SectionHeading kicker="Galeria" title="Do prato à mesa" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {PHOTOS.gallery.map((g, i) => (
          <figure key={g.title} className="rounded-2xl overflow-hidden aspect-square relative">
            <Picture src={g.src} cat={g.cat} seed={i + 2} alt={g.title} />
            <figcaption className="absolute bottom-0 inset-x-0 p-3 text-sm text-white" style={{ background: 'linear-gradient(transparent, rgba(5,30,45,.75))' }}>
              {g.title}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
