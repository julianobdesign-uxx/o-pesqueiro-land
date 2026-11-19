import SectionHeading from './SectionHeading.jsx';
import { SITE } from '../config/site.js';
import { generalLink } from '../lib/whatsapp.js';

export default function Location() {
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`;
  return (
    <section id="local" className="max-w-6xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-8">
      <div>
        <SectionHeading kicker="Localização" title="Venha nos visitar" />
        <dl className="space-y-4">
          <div><dt className="text-sm text-mute">Endereço</dt><dd className="font-medium">{SITE.address}</dd></div>
          {SITE.hours.map(([day, time]) => (
            <div key={day}><dt className="text-sm text-mute">{day}</dt><dd className="font-medium">{time}</dd></div>
          ))}
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-wa" href={generalLink} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
          <a className="btn btn-line text-ocean" href={map} target="_blank" rel="noopener noreferrer">Abrir no mapa</a>
        </div>
      </div>
      <div className="card aspect-[4/3] flex items-center justify-center text-center p-6 text-mute">
        <div>
          <p className="font-serif text-2xl text-ink">{SITE.city}</p>
          <p className="mt-2 text-sm">Informe o endereço real em src/config/site.js para ativar o mapa.</p>
        </div>
      </div>
    </section>
  );
}
