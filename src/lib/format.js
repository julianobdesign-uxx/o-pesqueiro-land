export const brl = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Fotos locais ficam em public/assets/images/<arquivo> (caminho relativo via BASE_URL).
// URLs completas (https://...) passam direto.
export const asset = (file) =>
  !file ? '' : /^(https?:)?\/\//.test(file) ? file : `${import.meta.env.BASE_URL}assets/images/${file}`;
