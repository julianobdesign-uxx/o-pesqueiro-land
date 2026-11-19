export const CATEGORIES = [
  ['petiscos', 'Petiscos'],
  ['regionais', 'Pratos regionais'],
  ['dois', 'Para duas pessoas'],
  ['bebidas', 'Bebidas'],
  ['sobremesas', 'Sobremesas'],
];

// [id, categoria, nome, descrição, preço (R$), flags (s = compartilhar, t = mais pedido), foto]
const RAW = [
  ['p1', 'petiscos', 'Lula à dorê', 'Anéis de lula em crosta dourada, com molho tártaro e limão.', 48, 't'],
  ['p2', 'petiscos', 'Isca de peixe', 'Filé de peixe em tiras crocantes, com maionese de ervas.', 44, ''],
  ['p3', 'petiscos', 'Camarão empanado', 'Camarões graúdos empanados, com molho agridoce suave.', 54, 't'],
  ['p4', 'petiscos', 'Casquinha de siri', 'Carne de siri temperada, gratinada na casca, com torradas.', 32, ''],
  ['p5', 'petiscos', 'Pastel de camarão', 'Massa fina e crocante recheada com camarão e catupiry.', 26, ''],
  ['p6', 'petiscos', 'Bolinho de peixe', 'Bolinhos dourados de peixe com ervas e molho de pimenta.', 34, ''],
  ['r1', 'regionais', 'Peixe grelhado com pirão', 'Filé grelhado na chapa, pirão cremoso, arroz e farofa.', 68, 't'],
  ['r2', 'regionais', 'Moqueca de peixe', 'Peixe em leite de coco, dendê e pimentões; arroz e pirão.', 74, 't'],
  ['r3', 'regionais', 'Caldeirada de frutos do mar', 'Peixe, camarão e lula em caldo de tomate e ervas.', 89, ''],
  ['r4', 'regionais', 'Bobó de camarão', 'Creme de aipim com camarões, leite de coco e dendê; arroz.', 82, ''],
  ['r5', 'regionais', 'Camarão na moranga', 'Camarões em creme suave servidos dentro da moranga assada.', 96, 't'],
  ['r6', 'regionais', 'Arroz de polvo', 'Arroz cremoso com polvo macio, alho e coentro.', 92, ''],
  ['d1', 'dois', 'Peixe inteiro com acompanhamentos', 'Peixe inteiro assado ou frito, arroz, pirão, farofa e salada.', 178, 's'],
  ['d2', 'dois', 'Moqueca de frutos do mar', 'Peixe, camarão e lula no leite de coco e dendê; arroz e pirão.', 189, 'st'],
  ['d3', 'dois', 'Seleção de frutos do mar', 'Camarão, lula, peixe e casquinha de siri, com acompanhamentos.', 198, 's'],
  ['d4', 'dois', 'Camarão com arroz e batatas', 'Camarões salteados no alho, arroz branco e batatas fritas.', 172, 's'],
  ['b1', 'bebidas', 'Água de coco', 'Gelada, servida no coco.', 14, ''],
  ['b2', 'bebidas', 'Sucos naturais', 'Sabores da estação. Consulte as opções do dia.', 14, ''],
  ['b3', 'bebidas', 'Caipirinhas', 'Limão, maracujá ou frutas da estação.', 24, ''],
  ['b4', 'bebidas', 'Refrigerantes', 'Lata 350 ml.', 9, ''],
  ['s1', 'sobremesas', 'Açaí', 'Açaí cremoso com banana e granola.', 22, ''],
  ['s2', 'sobremesas', 'Cocada', 'Cocada cremosa de coco fresco.', 16, ''],
  ['s3', 'sobremesas', 'Pudim', 'Pudim de leite com calda de caramelo.', 18, ''],
  ['s4', 'sobremesas', 'Sorvete artesanal', 'Duas bolas; consulte os sabores do dia.', 20, ''],
];

export const MENU = RAW.map(([id, cat, name, desc, price, flags, photo = '']) => ({
  id, cat, name, desc, price, photo,
  share: flags.includes('s') || cat === 'dois',
  top: flags.includes('t'),
}));

// Depoimentos ilustrativos — substitua por avaliações reais.
export const REVIEWS = [
  ['Ana P.', 'Moqueca no ponto e atendimento muito simpático. Voltaremos!'],
  ['Rafael M.', 'Porções generosas, ótimo para dividir em família.'],
  ['Carolina S.', 'Lula crocante e ambiente leve. Ótima pedida depois da praia.'],
];
