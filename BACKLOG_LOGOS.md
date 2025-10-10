# 🎨 BACKLOG - Logos VLUMA

## 📅 Data: 10/10/2025
## 🎯 Status: Pendente (Baixa Prioridade)

---

## 📝 HISTÓRICO DA CONVERSA

### Dúvida Inicial:
**Usuário perguntou:** "De onde tirou esta logo? Ela está salva em alguma pasta do projeto?"

**Resposta:** A logo foi criada como componente React com SVG inline no arquivo `/src/components/Logo.tsx`, não como imagem salva.

---

## ✅ O QUE JÁ FOI FEITO

### Arquivos Criados:
1. ✅ `/public/logo.svg` - Logo principal
2. ✅ `/public/logo-dark.svg` - Versão fundo escuro
3. ✅ `/public/logo-light.svg` - Versão fundo claro
4. ✅ `/public/favicon.svg` - Favicon
5. ✅ `/src/components/Logo.tsx` - Componente React

### Implementação no Site:
- ✅ Hero (150px, rotativo)
- ✅ Header (40px, fixo)
- ✅ Footer (50px)
- ✅ Favicon configurado

### Documentação:
- ✅ LOGOS_GUIA.md
- ✅ LOGOS_COMPLETO.md
- ✅ /public/README_LOGOS.md

---

## ⏳ TAREFAS PENDENTES (BACKLOG)

### 1. Converter Logo para PNG
**O Que Fazer:**
- Acessar: https://svgtopng.com/
- Upload: `/public/logo.svg`
- Gerar tamanhos:
  - 512x512 (redes sociais)
  - 256x256 (uso geral)
  - 128x128 (médio)
  - 64x64 (pequeno)
  - 32x32 (favicon)
- Salvar em: `/public/logos/png/`

**Prioridade:** Baixa  
**Tempo Estimado:** 5 minutos

---

### 2. Criar Open Graph Image
**O Que É:**
Imagem 1200x630px que aparece ao compartilhar o site em redes sociais (WhatsApp, Facebook, LinkedIn).

**Como Fazer:**
1. Abrir Figma ou Canva
2. Criar canvas 1200x630px
3. Importar `/public/logo.svg`
4. Adicionar:
   - Fundo: #0A0E27 ou gradiente
   - Logo: 300px (esquerda)
   - Texto: "VLUMA" (120px)
   - Subtítulo: "Tecnologia Humanizada com IA" (40px)
5. Exportar como PNG
6. Salvar: `/public/og-image.png`

**Ferramentas Recomendadas:**
- Figma (grátis): https://figma.com
- Canva (mais fácil): https://canva.com

**Prioridade:** Média  
**Tempo Estimado:** 15 minutos

---

### 3. Criar Logo Horizontal
**O Que É:**
Logo circular + texto "VLUMA" ao lado (para documentos, headers).

**Como Fazer:**
1. Abrir Figma ou Canva
2. Criar canvas 600x200px
3. Importar `/public/logo.svg` (150px)
4. Adicionar texto "VLUMA" ao lado (Inter Bold, 80px)
5. Alinhar horizontalmente
6. Exportar como SVG e PNG
7. Salvar:
   - `/public/logo-horizontal.svg`
   - `/public/logo-horizontal.png`

**Prioridade:** Baixa  
**Tempo Estimado:** 10 minutos

---

### 4. Criar Favicon.ico
**O Que Fazer:**
- Acessar: https://favicon.io/favicon-converter/
- Upload: `/public/logo.svg` ou `logo-512.png`
- Download: `favicon.ico`
- Salvar em: `/public/favicon.ico`
- Atualizar `/src/app/layout.tsx`:
  ```tsx
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
  }
  ```

**Prioridade:** Média  
**Tempo Estimado:** 5 minutos

---

### 5. Assets para Redes Sociais
**Criar versões PNG específicas:**
- Instagram: 1080x1080px
- Facebook: 512x512px
- LinkedIn: 400x400px
- Twitter: 400x400px

**Prioridade:** Baixa  
**Tempo Estimado:** 15 minutos

---

## 🎓 EXPLICAÇÃO TÉCNICA: SVG INLINE

### Como a Logo Foi Criada

**Arquivo:** `/src/components/Logo.tsx`

**Conceito:** SVG inline significa que o código do logo está escrito diretamente no componente React, não como arquivo de imagem externo.

### Estrutura do Código:

```tsx
<svg width={size} height={size} viewBox="0 0 200 200">
  {/* Gradiente */}
  <linearGradient id="logoGradient">
    <stop offset="0%" stopColor="#FFA940" />   {/* Laranja */}
    <stop offset="50%" stopColor="#52C41A" />  {/* Verde */}
    <stop offset="100%" stopColor="#13C2C2" /> {/* Ciano */}
  </linearGradient>
  
  {/* Círculo com gradiente */}
  <circle cx="100" cy="100" r="90" fill="url(#logoGradient)" />
  
  {/* Círculo interno dark */}
  <circle cx="100" cy="100" r="75" fill="#0A1929" />
  
  {/* Cabeça da pessoa */}
  <path d="M 100 50 C..." fill="#52C41A" />
  
  {/* Braços/coração */}
  <path d="M 70 90 Q..." fill="#52C41A" />
</svg>
```

### Vantagens do SVG Inline:

1. **Escalável:** Pode aumentar/diminuir sem perder qualidade
2. **Animável:** Pode adicionar animações com Framer Motion
3. **Sem HTTP Request:** Não precisa carregar arquivo externo
4. **Modificável:** Pode mudar cores/tamanhos via props
5. **Leve:** Código é menor que imagem PNG

### Como Usar:

```tsx
// Importar
import Logo from '@/components/Logo'

// Usar
<Logo size={100} />           // 100px
<Logo size={150} animate />   // 150px com glow
```

---

## 📐 ESTRUTURA VISUAL DO LOGO

```
┌─────────────────────────┐
│   Círculo Gradiente     │ ← Laranja → Verde → Ciano
│   ┌───────────────┐     │
│   │ Círculo Dark  │     │ ← Fundo #0A1929
│   │   ┌───┐       │     │
│   │   │ ● │       │     │ ← Cabeça (verde)
│   │   └───┘       │     │
│   │     ♥         │     │ ← Braços/Coração (verde)
│   └───────────────┘     │
└─────────────────────────┘
```

---

## 🔧 FERRAMENTAS NECESSÁRIAS

### Para Conversão SVG → PNG:
- **SVGtoPNG.com** (online, grátis) ✅ Recomendado
- ImageMagick (linha de comando)

### Para Criar Assets:
- **Figma** (online, grátis, profissional) ✅ Recomendado
- Canva (online, grátis, simples)
- Adobe Illustrator (pago, avançado)

### Para Favicon:
- **Favicon.io** (online, grátis) ✅ Recomendado

---

## 📊 PRIORIZAÇÃO

### Alta (Fazer depois da modernização):
- Nenhuma

### Média (Pode fazer quando tiver tempo):
- [ ] Criar Open Graph Image
- [ ] Criar favicon.ico

### Baixa (Bom ter, não essencial):
- [ ] Converter logo para PNG
- [ ] Criar logo horizontal
- [ ] Assets redes sociais

---

## 🎯 QUANDO FAZER

**Recomendação:** Fazer DEPOIS de terminar a modernização completa do site.

**Por quê?**
- Logo atual já funciona perfeitamente
- Favicon SVG já está configurado
- Prioridade é melhorar o design das seções
- Assets extras são "nice to have"

---

## 📝 DÚVIDAS ESCLARECIDAS

### 1. "De onde tirou a logo?"
R: Foi criada como código SVG no componente React `/src/components/Logo.tsx`

### 2. "Como usar as ferramentas (Figma/Canva)?"
R: Para CRIAR novos layouts usando o logo, não editar o logo

### 3. "Vão gerar imagem diferente?"
R: Não! Se usar conversão, fica idêntico. Se criar layout novo (OG Image), será diferente por design.

### 4. "Quero o logo exato do site"
R: Já tem! Está em `/public/logo.svg` - só precisa converter para PNG

---

## ✅ RESUMO EXECUTIVO

**Status Atual:**
- Logo funcionando perfeitamente no site ✅
- 5 arquivos SVG criados ✅
- Documentação completa ✅
- Favicon configurado ✅

**Pendente (Backlog):**
- Conversão para PNG (opcional)
- Open Graph Image (recomendado)
- Logo horizontal (opcional)
- Assets redes sociais (opcional)

**Decisão:**
Deixar para depois da modernização do site. Logo atual atende perfeitamente.

---

**🎯 Próximo Passo: Continuar modernização das seções do site!**

---

© 2025 VLUMA - Backlog de Tarefas
