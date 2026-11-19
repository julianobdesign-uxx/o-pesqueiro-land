# Correções aplicadas

- O projeto foi reorganizado para que `package.json`, `index.html`, `src/` e `public/` fiquem na raiz do ZIP.
- Vite foi atualizado de `^5.4.11` para `^6.4.1`, atendendo ao requisito mínimo de Vite 6 mencionado pelo Cloudflare.
- Foi adicionado `wrangler.toml` apontando a saída de Pages para `./dist`.
- O README recebeu instruções de publicação no Cloudflare Pages.

## Configuração no Cloudflare Pages

- Root directory: `/`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js: 18 ou superior

## Limitação de validação

A instalação das dependências não pôde ser concluída neste ambiente por indisponibilidade/timeout de acesso ao registry npm. Portanto, o build de produção ainda precisa ser executado após baixar o ZIP em um ambiente com internet:

```bash
npm install
npm run build
```

O projeto é demonstrativo: antes de entregar a um restaurante real, substitua telefone do WhatsApp, endereço, horários, preços, depoimentos e fotos de demonstração por informações autorizadas e verdadeiras.
