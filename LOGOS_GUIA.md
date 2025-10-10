# 🎨 VLUMA - Guia Completo de Logos

## 📅 Data: 10/01/2025

---

## 📁 Arquivos Criados

### ✅ SVG (Vetoriais - Escaláveis)

#### 1. **logo.svg** - Logo Principal
- **Localização**: `/public/logo.svg`
- **Tamanho**: 200x200px (viewBox)
- **Uso**: Geral (site, documentos, apresentações)
- **Fundo**: Transparente com gradiente

#### 2. **logo-dark.svg** - Versão Fundo Escuro
- **Localização**: `/public/logo-dark.svg`
- **Uso**: Em fundos escuros/pretos
- **Círculo interno**: Dark (#0A1929)

#### 3. **logo-light.svg** - Versão Fundo Claro
- **Localização**: `/public/logo-light.svg`
- **Uso**: Em fundos brancos/claros
- **Círculo interno**: Branco (#FFFFFF)

#### 4. **favicon.svg** - Favicon
- **Localização**: `/public/favicon.svg`
- **Tamanho**: 32x32px
- **Uso**: Ícone do navegador (tab)

---

## 🎨 Especificações Técnicas

### Cores do Logo:
```css
Laranja:  #FFA940 (topo do gradiente)
Verde:    #52C41A (meio - cor da pessoa)
Ciano:    #13C2C2 (base do gradiente)
Dark:     #0A1929 (círculo interno)
Branco:   #FFFFFF (versão light)
```

### Estrutura Visual:
1. **Círculo Externo**: Gradiente vertical (laranja → verde → ciano)
2. **Círculo Interno**: Fundo de contraste (dark ou white)
3. **Símbolo Central**: Pessoa humanizada com braços/coração (verde)
4. **Contorno**: Stroke dark para definição

### Dimensões:
- **ViewBox**: 200x200
- **Raio Externo**: 90px
- **Raio Interno**: 75px
- **Pessoa**: ~40px altura

---

## 💻 Como Usar no Código

### 1. Como Componente React (Recomendado)
```tsx
import Logo from '@/components/Logo'

// Tamanho padrão (100px)
<Logo />

// Tamanho customizado
<Logo size={150} />

// Com animação glow
<Logo size={120} animate />
```

### 2. Como Arquivo SVG
```tsx
import Image from 'next/image'

<Image 
  src="/logo.svg" 
  alt="VLUMA Logo" 
  width={100} 
  height={100} 
/>
```

### 3. Como Background CSS
```css
.logo-bg {
  background-image: url('/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
}
```

### 4. No HTML Puro
```html
<img src="/logo.svg" alt="VLUMA" width="100" height="100">
```

---

## 📱 Tamanhos Recomendados por Uso

### Website:
- **Hero**: 120-150px
- **Header**: 40-50px
- **Footer**: 50-60px
- **Mobile**: 80-100px

### Redes Sociais (PNG necessário):
- **Instagram**: 512x512px
- **Facebook**: 512x512px
- **LinkedIn**: 400x400px
- **Twitter**: 400x400px
- **WhatsApp**: 512x512px

### Documentos:
- **Apresentações**: 200-300px
- **Documentos PDF**: 150-200px
- **Assinatura Email**: 80-100px

### App/Web:
- **Favicon**: 32x32px, 16x16px
- **Apple Touch Icon**: 180x180px
- **Android**: 192x192px, 512x512px
- **Windows Tile**: 270x270px

---

## 🖼️ Como Gerar Versões PNG

### Opção 1: Online (Rápido)
1. Acesse: https://svgtopng.com/
2. Upload do arquivo `logo.svg`
3. Escolha o tamanho desejado
4. Download do PNG

### Opção 2: Figma/Illustrator
1. Abra o arquivo SVG
2. Export como PNG
3. Escolha resolução (1x, 2x, 3x)

### Opção 3: Ferramenta de Linha de Comando
```bash
# Instalar ImageMagick
# Windows: choco install imagemagick

# Converter SVG para PNG
magick convert -background none logo.svg -resize 512x512 logo-512.png
magick convert -background none logo.svg -resize 256x256 logo-256.png
magick convert -background none logo.svg -resize 128x128 logo-128.png
```

---

## 📦 Estrutura de Pastas Recomendada

```
public/
├── logo.svg              # Principal
├── logo-dark.svg         # Fundo escuro
├── logo-light.svg        # Fundo claro
├── favicon.svg           # Favicon SVG
├── favicon.ico           # Favicon ICO (gerar)
├── logos/
│   ├── png/
│   │   ├── logo-16.png
│   │   ├── logo-32.png
│   │   ├── logo-64.png
│   │   ├── logo-128.png
│   │   ├── logo-256.png
│   │   └── logo-512.png
│   └── social/
│       ├── instagram-512.png
│       ├── facebook-512.png
│       ├── linkedin-400.png
│       └── twitter-400.png
```

---

## 🌐 Implementar Favicon no Site

### Atualizar `src/app/layout.tsx`:
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'VLUMA - Tecnologia com IA',
  description: '...',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
}
```

---

## 🎨 Variações de Cor (Personalizações)

### Se Precisar Mudar Cores:

1. **Abra o arquivo SVG**
2. **Localize o `<linearGradient>`**
3. **Mude os `stop-color`**:

```xml
<!-- Exemplo: Gradiente Azul -->
<linearGradient id="logoGradient">
  <stop offset="0%" stop-color="#3B82F6" />   <!-- Azul -->
  <stop offset="50%" stop-color="#8B5CF6" />  <!-- Roxo -->
  <stop offset="100%" stop-color="#06B6D4" /> <!-- Ciano -->
</linearGradient>
```

---

## 📐 Exportar Para Outros Formatos

### Para PDF/EPS (Vetorial):
- Abra no Illustrator
- Save As → PDF ou EPS

### Para ICO (Favicon):
- Use: https://favicon.io/favicon-converter/
- Upload logo-512.png
- Download .ico

### Para WEBP (Web Otimizado):
```bash
magick convert logo.png -quality 90 logo.webp
```

---

## ✅ Checklist de Implementação

### No Site:
- [x] Componente Logo.tsx criado
- [x] Logo no Hero (120px, animado)
- [x] Logo no Header (40px)
- [x] Logo no Footer (50px)
- [ ] Favicon configurado no layout.tsx
- [ ] Apple Touch Icon criado
- [ ] Open Graph image criado

### Arquivos:
- [x] logo.svg (principal)
- [x] logo-dark.svg (fundo escuro)
- [x] logo-light.svg (fundo claro)
- [x] favicon.svg
- [ ] favicon.ico (gerar)
- [ ] Logo em PNG (múltiplos tamanhos)
- [ ] Social media assets

---

## 🔄 Próximos Passos

### Para Completar o Brand Kit:

1. **Gerar PNGs**:
   ```
   16x16, 32x32, 64x64, 128x128, 256x256, 512x512, 1024x1024
   ```

2. **Criar Versões com Nome**:
   - Logo + texto "VLUMA" horizontal
   - Logo + texto "VLUMA" vertical

3. **Criar Banner**:
   - 1200x630px (Open Graph)
   - 1500x500px (LinkedIn cover)

4. **Criar Favicon.ico**:
   - Converter SVG → ICO

5. **Documentar Brand Guidelines**:
   - Cores oficiais
   - Espaçamento mínimo
   - Não fazer (logo distorcido, etc)

---

## 📞 Uso em Diferentes Plataformas

### Email Signature:
```html
<img src="https://vluma.com.br/logo.svg" 
     alt="VLUMA" 
     width="80" 
     height="80" 
     style="display: block;">
```

### Open Graph (Meta Tags):
```html
<meta property="og:image" content="https://vluma.com.br/logo-512.png">
<meta property="og:image:width" content="512">
<meta property="og:image:height" content="512">
```

### PWA Manifest:
```json
{
  "icons": [
    {
      "src": "/logo-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/logo-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## 🎯 Status Atual

**Criado com Sucesso:**
- ✅ Logo vetorial SVG (3 versões)
- ✅ Favicon SVG
- ✅ Componente React reutilizável
- ✅ Implementado no site (Hero, Header, Footer)
- ✅ Documentação completa

**Pendente:**
- ⏳ Gerar versões PNG
- ⏳ Criar favicon.ico
- ⏳ Criar assets para redes sociais
- ⏳ Criar banner Open Graph

---

**🎨 Todos os arquivos de logo estão em `/public/` prontos para uso!**

© 2025 VLUMA - Tecnologia Humanizada com IA
