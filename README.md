# PESCADOR — Cozinha Caiçara

Landing page de alta conversão para um restaurante fictício em Arraial do Cabo, RJ:
cardápio interativo, pedido sem cadastro e finalização pelo WhatsApp.

> **Projeto demonstrativo.** Preços, depoimentos e o cardápio são fictícios. Endereço, horários
> e WhatsApp são placeholders ("A definir") e precisam ser preenchidos antes de publicar.

## Stack
React 18 · Vite 6 · Tailwind CSS 3 · mobile-first (celular, tablet e desktop) · sem backend.

## Requisitos
Node.js 18 ou superior.

## Instalação e execução
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # gera a pasta dist/
npm run preview    # testa o build localmente
```

## Estrutura
```
.
├── index.html                 # SEO (title, description, Open Graph, JSON-LD)
├── package.json
├── vite.config.js             # base './' (caminhos relativos)
├── tailwind.config.js · postcss.config.js
├── vercel.json
├── .env.example               # VITE_WHATSAPP
├── .github/workflows/deploy.yml
├── public/assets/images/      # fotografias e logo (caminhos relativos)
└── src/
    ├── main.jsx · App.jsx · index.css
    ├── config/site.js         # nome, endereço, WhatsApp, horários
    ├── data/menu.js           # produtos, preços, categorias, avaliações
    ├── data/photos.js         # fotos do hero, "sobre" e galeria
    ├── hooks/useCart.js       # estado do carrinho
    ├── lib/format.js · whatsapp.js
    └── components/            # Header, Hero, About, MenuSection, MenuCard,
                               # Highlights, Sharing, Gallery, Reviews, Location,
                               # Footer, CartDrawer, CartBar, WhatsAppFab, ...
```

## O que editar
| Quero alterar | Arquivo |
|---|---|
| Nome, endereço, horários, mensagem inicial | `src/config/site.js` |
| WhatsApp (DDI+DDD+número, só dígitos) | `.env` (`VITE_WHATSAPP`) ou `src/config/site.js` |
| Produtos, descrições, preços, categorias | `src/data/menu.js` |
| Fotografias | `src/data/photos.js` e campo `photo` em `menu.js` |

### Fotografias
Coloque os arquivos (JPG/WebP otimizados) em `public/assets/images/` e informe só o nome, por exemplo
`photo: 'moqueca.webp'`. Campos vazios exibem uma ilustração padrão. Use apenas imagens próprias ou com
licença comercial adequada. Todas as imagens usam `loading="lazy"` (exceto a do hero).

## Publicação

### GitHub Pages
1. Envie o projeto para um repositório (branch `main`).
2. **Settings → Pages → Source: GitHub Actions**.
3. (Opcional) **Settings → Variables → Actions**: crie `VITE_WHATSAPP` com o número.
4. Cada push na `main` publica o site automaticamente.


### Cloudflare Pages (recomendado para esta demonstração)
1. Envie **o conteúdo desta pasta** para a raiz do repositório GitHub (não envie apenas o ZIP).
2. No Cloudflare, abra **Workers & Pages → Create application → Pages → Connect to Git**.
3. Selecione o repositório.
4. Configure **Root directory** como `/` (os arquivos `package.json` e `index.html` devem estar na raiz).
5. Configure **Build command** como `npm run build`.
6. Configure **Build output directory** como `dist`.
7. Faça o deploy. A pasta `dist/` é criada pelo Vite durante o build; não precisa existir no GitHub.
8. Para pré-visualizar localmente após instalar dependências: `npm run build` e `npx wrangler pages dev dist`.

Se os arquivos do projeto estiverem dentro de uma subpasta chamada `pescador/` no GitHub, configure **Root directory** como `/pescador` em vez de `/`.

### Vercel
Importe o repositório em vercel.com. O framework Vite é detectado (`vercel.json` incluso).
Defina `VITE_WHATSAPP` em **Settings → Environment Variables**.

## Acessibilidade e SEO
Navegação por teclado, foco visível, rótulos ARIA, `prefers-color-scheme` e `prefers-reduced-motion`,
meta tags, Open Graph e dados estruturados `Restaurant` com localidade Arraial do Cabo, RJ.
