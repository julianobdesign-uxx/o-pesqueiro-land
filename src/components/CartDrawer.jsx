import { useState } from 'react';
import { brl } from '../lib/format.js';
import { orderMessage, waLink } from '../lib/whatsapp.js';
import { SITE } from '../config/site.js';

export default function CartDrawer({ open, onClose, lines, total, onAdd, onDec, onClear }) {
  const [note, setNote] = useState('');
  if (!open) return null;
  const hasItems = lines.length > 0;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Resumo do pedido">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <aside className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-bg flex flex-col shadow-2xl" style={{ paddingTop: 'env(safe-area-inset-top, 0px)', paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="flex items-center justify-between p-5 border-b border-line">
          <h2 className="font-serif text-2xl">Seu pedido</h2>
          <button onClick={onClose} className="text-2xl w-10 h-10" aria-label="Fechar">×</button>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {!hasItems && <p className="text-mute">Seu pedido está vazio. Escolha pratos no cardápio — sem cadastro.</p>}
          {lines.map((l) => (
            <div key={l.id} className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium">{l.name}</p>
                <p className="text-sm text-mute">{brl(l.price)} cada</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => onDec(l.id)} className="w-8 h-8 rounded-full border border-line" aria-label={`Remover um ${l.name}`}>−</button>
                <span className="w-5 text-center">{l.qty}</span>
                <button onClick={() => onAdd(l.id)} className="w-8 h-8 rounded-full border border-line" aria-label={`Adicionar um ${l.name}`}>+</button>
              </div>
            </div>
          ))}
          {hasItems && (
            <label className="block text-sm">
              <span className="text-mute">Observações (opcional)</span>
              <textarea value={note} onChange={(e) => setNote(e.target.value)} rows="2" className="mt-1 w-full rounded-xl border border-line bg-card p-3" placeholder="Ex.: sem pimenta, ponto da carne…" />
            </label>
          )}
        </div>
        <div className="p-5 border-t border-line space-y-3">
          <div className="flex justify-between text-lg"><span>Total estimado</span><strong>{brl(total)}</strong></div>
          <a
            href={hasItems ? waLink(orderMessage(lines, total, note)) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!hasItems}
            className={`btn btn-wa w-full ${hasItems ? '' : 'opacity-50 pointer-events-none'}`}
          >
            Finalizar pelo WhatsApp
          </a>
          {hasItems && <button onClick={onClear} className="w-full text-sm text-mute underline">Limpar pedido</button>}
          <p className="text-xs text-mute">{SITE.note}</p>
        </div>
      </aside>
    </div>
  );
}
