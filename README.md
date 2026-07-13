# Portfólio — Henrique Feijó

Portfólio pessoal one-page, com dark mode, animações fluidas e foco em performance e SEO. O site é totalmente renderizado de forma estática (SSG), com todo o conteúdo presente no HTML servido.

## ✨ Funcionalidades

- **Dark / Light mode** com persistência de preferência (`next-themes`)
- **Animações** de entrada, hover e scroll com Framer Motion, respeitando `prefers-reduced-motion`
- **Scrollspy** na navegação — a seção ativa é destacada conforme o scroll
- **Splash screen** animada que não bloqueia a indexação do conteúdo
- **SEO**: metadata completa com OpenGraph e Twitter card, página pré-renderizada como estática
- **Responsivo**, com menu mobile e layout adaptado para todas as telas
- Botão de **download do CV** na navegação

## 🛠️ Tecnologias

- [Next.js 15](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com) com tema customizado via `@theme`
- [Framer Motion](https://motion.dev) para animações
- [next-themes](https://github.com/pacocoursey/next-themes) para o dark mode
- [Lucide](https://lucide.dev) e [React Icons](https://react-icons.github.io/react-icons/) para ícones

## 📂 Estrutura

```
src/app/
├── layout.tsx          # Metadata, tema e providers globais
├── page.tsx            # Composição das seções (Server Component)
├── globals.css         # Tema (cores light/dark) e estilos globais
├── lib/
│   └── smooth-scroll.ts
└── components/
    ├── SplashScreen.tsx
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## 🚀 Rodando localmente

Pré-requisitos: Node.js 18+ e [pnpm](https://pnpm.io).

```bash
# Instalar as dependências
pnpm install

# Ambiente de desenvolvimento
pnpm dev

# Build de produção
pnpm build
pnpm start
```

O site fica disponível em [http://localhost:3000](http://localhost:3000).

## 📬 Contato

- **GitHub**: [@Hfeijo06](https://github.com/Hfeijo06)
- **LinkedIn**: [henrique-feijó](https://www.linkedin.com/in/henrique-feij%C3%B3)
- **E-mail**: [henriquefeijo06@gmail.com](mailto:henriquefeijo06@gmail.com)

---

© Henrique Feijó — Sinta-se à vontade para explorar o código, mas o conteúdo e a identidade visual são de uso pessoal.
