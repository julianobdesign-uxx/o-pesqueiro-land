// Dados do restaurante. Edite aqui — valores "A definir" são placeholders, nada é inventado.
export const SITE = {
  name: 'PESCADOR',
  tagline: 'Cozinha Caiçara',
  city: 'Arraial do Cabo, RJ',
  address: 'Endereço a definir — Arraial do Cabo, RJ',
  mapQuery: 'Arraial do Cabo, RJ', // troque pelo endereço real para o botão de mapa
  // DDI + DDD + número, só dígitos. Também pode ser definido em .env (VITE_WHATSAPP).
  whatsapp: import.meta.env.VITE_WHATSAPP || '5500000000000',
  greeting: 'Olá, PESCADOR! Gostaria de fazer este pedido:',
  hours: [
    ['Segunda a quinta', 'A definir'],
    ['Sexta a domingo', 'A definir'],
    ['Feriados', 'A definir'],
  ],
  note: 'Preços e cardápio demonstrativos — sujeitos a confirmação.',
};
