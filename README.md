# 🚀 VLUMA - Site Agência de IA

## 📋 Descrição do Projeto

Site institucional moderno e inovador para a VLUMA, agência especializada em soluções de Inteligência Artificial para empresas e criadores de conteúdo.

## ✨ Características

- **Design Inovador**: Interface clean com animações fluidas usando Framer Motion
- **Responsivo**: Totalmente adaptado para desktop, tablet e mobile
- **Performance**: Otimizado com Next.js 14 e React 18
- **Animações**: Scroll-triggered animations e micro-interações
- **Acessibilidade**: Suporte a prefers-reduced-motion
- **SEO**: Meta tags otimizadas e estrutura semântica

## 🎨 Design System

### Paleta de Cores
- **Verde Inteligente**: `#00D9A3` (Cor principal da marca)
- **Verde Hover**: `#00C090` (Estado hover)
- **Laranja CTA**: `#FF6B35` (Botões de ação)
- **Cinza Texto**: `#475569` (Texto corpo)
- **Cinza Claro**: `#F1F5F9` (Backgrounds)

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700, 800, 900

## 🏗️ Estrutura do Projeto

```
VLUMA/Site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raiz com metadados
│   │   ├── page.tsx            # Página principal
│   │   └── globals.css         # Estilos globais
│   ├── components/
│   │   ├── Header.tsx          # Cabeçalho fixo com menu
│   │   ├── Hero.tsx            # Seção hero animada
│   │   ├── Challenges.tsx      # Seção de desafios (3 cards)
│   │   ├── Solution.tsx        # Solução VLUMA
│   │   ├── Method.tsx          # Metodologia (4 passos)
│   │   ├── Plans.tsx           # Planos interativos
│   │   ├── CTAFinal.tsx        # CTA final
│   │   ├── Footer.tsx          # Rodapé
│   │   └── ui/
│   │       ├── Button.tsx      # Componente botão reutilizável
│   │       └── Card.tsx        # Componente card reutilizável
│   └── lib/
│       └── utils.ts            # Utilitários (cn function)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## 📦 Tecnologias Utilizadas

- **Next.js 14**: Framework React com App Router
- **React 18**: Biblioteca UI
- **TypeScript**: Tipagem estática
- **Framer Motion 11**: Animações fluidas
- **TailwindCSS 3.4**: Estilização utilitária
- **Lucide React**: Ícones modernos
- **clsx + tailwind-merge**: Gestão de classes CSS

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

1. **Instalar dependências**:
```bash
npm install
```

2. **Executar em desenvolvimento**:
```bash
npm run dev
```

3. **Abrir no navegador**:
```
http://localhost:3000
```

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Executar build de produção
npm run start
```

## 📄 Seções do Site

### 1. **Hero Section**
- Título animado palavra por palavra
- Subtítulo com fade-in
- Animação de scroll indicator
- Background com gradientes animados

### 2. **Desafios**
- 3 cards com ícones
- Animação de entrada em cascata
- Hover effects

### 3. **Solução VLUMA**
- Layout 2 colunas
- Texto posicionamento + animação abstrata
- CTA primário

### 4. **Método (4 Passos)**
- Timeline vertical animada
- Ícones e números
- Layout alternado

### 5. **Planos**
- 2 cards interativos
- Para Empreendedores (Start, Growth, Scale)
- Para Criadores (Creator, Course)

### 6. **CTA Final**
- Fundo verde com alto contraste
- Botão laranja destacado

### 7. **Footer**
- Informações de contato
- Links redes sociais
- Copyright

## 🎯 Funcionalidades Implementadas

✅ Header fixo com backdrop blur ao scroll
✅ Menu mobile responsivo
✅ Animações scroll-triggered em todas as seções
✅ Micro-interações em botões e cards
✅ Hover effects com scale e shadow
✅ Animações fluidas com Framer Motion
✅ Suporte a prefers-reduced-motion
✅ SEO otimizado com meta tags
✅ Responsividade completa

## 🔧 Customização

### Alterar Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  'verde-inteligente': '#00D9A3',
  'laranja-cta': '#FF6B35',
  // ...
}
```

### Alterar Conteúdo
Edite os componentes em `src/components/`:
- Textos em português BR
- Estrutura modular e fácil de modificar

### Adicionar Formulário de Contato
Os botões "Agendar Sessão" estão prontos para integração com:
- Calendly
- Google Forms
- API própria

## 📱 Responsividade

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Todos os componentes adaptam-se automaticamente.

## 🐛 Troubleshooting

### Erro ao instalar dependências
```bash
# Limpar cache npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 em uso
```bash
# Usar porta diferente
npm run dev -- -p 3001
```

## 📞 Contato

**VLUMA** - Agência de IA
- Email: contato@vluma.com.br
- Website: Em breve

---

© 2025 VLUMA. Desenvolvido com tecnologia humanizada.
# Teste deploy automático
# Teste sincronismo automático - Wed Oct 15 15:09:39 -03 2025
# Teste webhook reinstalado - 15:37
# Webhook funcionando! 🎉
# Teste final - 16:48
