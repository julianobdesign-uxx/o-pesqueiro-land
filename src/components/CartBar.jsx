import { brl } from '../lib/format.js';

// Barra inferior que resume o pedido (visível em telas pequenas e grandes).
export default function CartBar({ count, total, onOpen }) {
  if (count === 0) return null;
  return (
    <button
      onClick={onOpen}
      className="fixed left-4 right-20 bottom-4 z-40 btn bg-ocean justify-between shadow-xl"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)', color: 'var(--bg)' }}
    >
      <span>{count} {count > 1 ? 'itens' : 'item'} · Ver pedido</span>
      <strong>{brl(total)}</strong>
    </button>
  );
}
