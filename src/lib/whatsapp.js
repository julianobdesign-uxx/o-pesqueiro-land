import { SITE } from '../config/site.js';
import { brl } from './format.js';

export const waLink = (text) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
export const generalLink = waLink('Olá, PESCADOR! Gostaria de mais informações.');

export function orderMessage(lines, total, note) {
  const parts = [
    SITE.greeting,
    '',
    ...lines.map((l) => `${l.qty}x ${l.name} — ${brl(l.qty * l.price)}`),
    '',
    `Total: ${brl(total)}`,
  ];
  if (note) parts.push(`Obs.: ${note}`);
  parts.push('', 'Pedido enviado pelo site.');
  return parts.join('\n');
}
