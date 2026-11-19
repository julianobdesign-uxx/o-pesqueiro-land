import Logo from './Logo.jsx';

export const NAV = [
  ['sobre', 'A cozinha'],
  ['cardapio', 'Cardápio'],
  ['destaques', 'Mais pedidos'],
  ['galeria', 'Galeria'],
  ['local', 'Localização'],
];

export default function Header({ count, onOpenCart }) {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur border-b border-line"
      style={{ background: 'color-mix(in srgb, var(--bg) 88%, transparent)', paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-7 text-sm font-medium" aria-label="Principal">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="hover:text-ocean">{label}</a>
          ))}
        </nav>
        <button
          onClick={onOpenCart}
          className="btn bg-ocean text-white"
          style={{ padding: '.55rem 1.1rem', color: 'var(--bg)' }}
          aria-label={`Abrir pedido, ${count} itens`}
        >
          Pedido
          {count > 0 && <span className="bg-bg text-ocean rounded-full text-xs px-2 py-0.5">{count}</span>}
        </button>
      </div>
      <nav className="md:hidden scroll-x flex gap-5 px-5 pb-3 text-sm font-medium" aria-label="Seções">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} className="whitespace-nowrap">{label}</a>
        ))}
      </nav>
    </header>
  );
}
