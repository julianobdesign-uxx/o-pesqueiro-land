import { asset } from '../lib/format.js';

const PALETTE = {
  petiscos: ['#f6d9a8', '#d98a2b'],
  regionais: ['#f2b98a', '#c2491d'],
  dois: ['#cfe9e4', '#e0752f'],
  bebidas: ['#cfe6f3', '#2f8fb4'],
  sobremesas: ['#f5dfe3', '#8a4b3b'],
};

// Ilustração padrão usada enquanto não há fotografia própria.
function Dish({ cat = 'regionais', seed = 0, label }) {
  const [bg, fg] = PALETTE[cat] || PALETTE.regionais;
  const dots = Array.from({ length: 7 }, (_, i) => {
    const a = (i + seed) * 2.1;
    return [100 + Math.cos(a) * (18 + i * 5), 75 + Math.sin(a) * (10 + i * 3), 9 + ((i + seed) % 3) * 4];
  });
  return (
    <svg viewBox="0 0 200 150" role="img" aria-label={label} className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="150" fill={bg} />
      <circle cx="100" cy="78" r="62" fill="#fff" opacity=".9" />
      <circle cx="100" cy="78" r="48" fill="none" stroke={bg} strokeWidth="3" />
      {dots.map((d, i) => (
        <ellipse key={i} cx={d[0]} cy={d[1]} rx={d[2]} ry={d[2] * 0.7} fill={i % 3 === 0 ? '#7fa86a' : fg} opacity={i % 3 === 0 ? 0.85 : 0.95} />
      ))}
    </svg>
  );
}

export default function Picture({ src, cat, seed, alt, eager = false }) {
  return src ? (
    <img src={asset(src)} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className="w-full h-full object-cover" />
  ) : (
    <Dish cat={cat} seed={seed} label={`${alt} (ilustração)`} />
  );
}
