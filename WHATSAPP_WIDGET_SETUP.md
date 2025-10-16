# 💬 WhatsApp Widget - Guia Completo de Configuração

## 📅 Data: 16/10/2025
## ✅ Status: Implementado (Aguardando Configuração)

---

## 🎯 O Que Foi Implementado

✅ Componente `WhatsAppWidget.tsx` criado  
✅ Botão flutuante no canto inferior direito  
✅ Animação de pulso e hover  
✅ Tooltip informativo  
✅ Badge de notificação  
✅ Totalmente configurável via `.env.local`  
✅ Suporta número de telefone OU URL customizada  
✅ Mensagem pré-preenchida personalizável  

---

## 🎨 Como Vai Aparecer

### **Visual do Widget:**

```
┌─────────────────────────────┐
│                             │
│  Conteúdo do site           │
│                             │
│                             │
│                    [💬]  ← Botão verde flutuante
│                             │  com animação de pulso
└─────────────────────────────┘
```

### **Ao passar o mouse:**
```
┌──────────────────────────┐
│ Fale conosco no WhatsApp │ ← Tooltip
└────────▼─────────────────┘
         [💬] ← Botão aumenta (scale)
```

### **Comportamento:**
- ✅ Aparece após 3 segundos OU após scroll de 300px
- ✅ Fixo no canto (acompanha scroll)
- ✅ Animação de pulso constante
- ✅ Badge "1" piscando (notificação)
- ✅ Ao clicar: Abre WhatsApp em nova aba

---

## 🚀 Como Configurar

### **Opção 1: Usar Número de Telefone** (Recomendado)

#### **1.1 - Formato do Número:**

O número deve estar no formato internacional **sem espaços, traços ou parênteses**:

```
[Código do País][DDD][Número]
```

**Exemplos:**

```bash
# Brasil (São Paulo)
5511999999999
# 55 = Brasil
# 11 = DDD São Paulo
# 999999999 = Número (9 dígitos)

# Brasil (Rio de Janeiro)
5521987654321
# 55 = Brasil
# 21 = DDD Rio
# 987654321 = Número

# Brasil (Belo Horizonte)
5531988887777
# 55 = Brasil
# 31 = DDD BH
# 988887777 = Número
```

#### **1.2 - Adicionar no .env.local:**

Crie ou edite o arquivo `.env.local` na raiz do projeto:

```bash
# WhatsApp - Número de telefone
NEXT_PUBLIC_WHATSAPP_PHONE=5511999999999

# Mensagem padrão (opcional)
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de saber mais sobre os serviços da VLUMA.
```

**Substitua `5511999999999` pelo seu número real!**

---

### **Opção 2: Usar URL Customizada** (WhatsApp Business)

Se você tem uma URL customizada do WhatsApp Business:

#### **2.1 - Obter a URL:**

1. Acesse: https://business.whatsapp.com/
2. Configure seu perfil business
3. Obtenha o link curto, exemplo:
   ```
   https://wa.me/message/ABCD1234EFGH5678
   ```

#### **2.2 - Adicionar no .env.local:**

```bash
# WhatsApp - URL customizada
NEXT_PUBLIC_WHATSAPP_CHAT_URL=https://wa.me/message/ABCD1234EFGH5678

# Mensagem padrão (opcional - pode não funcionar com URL customizada)
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de saber mais sobre os serviços da VLUMA.
```

**Nota:** Se você usar `WHATSAPP_CHAT_URL`, o `WHATSAPP_PHONE` será ignorado.

---

### **Opção 3: Configurar Depois** (Deixar Desativado)

Se ainda não tem número ou URL, o widget **não vai aparecer** até você configurar.

Isso é intencional! O widget só aparece quando configurado.

Para testar o visual sem configurar, você pode usar um número temporário:

```bash
# Número de teste (não funcional)
NEXT_PUBLIC_WHATSAPP_PHONE=5511999999999
```

---

## 🔧 Personalizar a Mensagem

### **Mensagem Padrão:**

A mensagem que aparece pré-preenchida quando o usuário clica:

```bash
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de saber mais sobre os serviços da VLUMA.
```

### **Exemplos de Mensagens:**

```bash
# Formal
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de agendar uma sessão de descoberta.

# Direto
NEXT_PUBLIC_WHATSAPP_MESSAGE=Oi! Vim pelo site e quero saber mais sobre IA.

# Com contexto
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Vi o site da VLUMA e gostaria de conversar sobre automação para minha empresa.

# Simples
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá!
```

**Dica:** Mensagens curtas e diretas têm mais conversão!

---

## 📋 Passo a Passo Completo

### **1. Obter Número do WhatsApp:**

- Use seu número pessoal ou
- Crie um WhatsApp Business

### **2. Formatar o Número:**

```
Número original: (11) 99999-9999
Formato correto: 5511999999999
```

**Regra:** Código do país (55) + DDD (11) + Número (999999999)

### **3. Criar/Editar .env.local:**

No terminal:

```bash
cd /home/devuser/CascadeProjects/sitevluma
nano .env.local
```

Ou abra no editor de código.

### **4. Adicionar Configuração:**

```bash
# Google Analytics 4
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# WhatsApp Widget
NEXT_PUBLIC_WHATSAPP_PHONE=5511999999999
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Gostaria de saber mais sobre os serviços da VLUMA.
```

### **5. Salvar e Reiniciar:**

```bash
# Parar servidor (Ctrl+C)
npm run dev
```

### **6. Testar:**

1. Abra: http://localhost:3000
2. Aguarde 3 segundos ou role a página
3. Deve aparecer o botão verde no canto
4. Clique e veja se abre o WhatsApp

---

## 🧪 Como Testar

### **Teste Local:**

1. **Ver o Widget:**
   - Abra http://localhost:3000
   - Role a página ou aguarde 3 segundos
   - Botão verde deve aparecer no canto inferior direito

2. **Testar Hover:**
   - Passe o mouse sobre o botão
   - Deve aparecer tooltip: "Fale conosco no WhatsApp"
   - Botão deve aumentar (scale)

3. **Testar Clique:**
   - Clique no botão
   - Deve abrir WhatsApp Web ou App
   - Mensagem deve estar pré-preenchida

### **Teste em Produção:**

Após deploy em www.vluma.com.br:

1. Acesse o site
2. Clique no widget
3. Verifique se abre o WhatsApp correto
4. Teste em mobile e desktop

---

## 🎨 Customizações Disponíveis

### **Cores:**

Para mudar a cor do botão, edite `/src/components/WhatsAppWidget.tsx`:

```tsx
// Linha atual (verde)
className="bg-green-500 hover:bg-green-600"

// Outras opções:
className="bg-blue-500 hover:bg-blue-600"    // Azul
className="bg-purple-500 hover:bg-purple-600" // Roxo
className="bg-red-500 hover:bg-red-600"      // Vermelho
```

### **Posição:**

```tsx
// Linha atual (canto inferior direito)
className="fixed bottom-6 right-6"

// Outras opções:
className="fixed bottom-6 left-6"   // Canto inferior esquerdo
className="fixed top-20 right-6"    // Canto superior direito
```

### **Tamanho:**

```tsx
// Linha atual
className="p-4"  // Padding 4
<MessageCircle className="w-6 h-6" />  // Ícone 6x6

// Maior:
className="p-5"
<MessageCircle className="w-8 h-8" />

// Menor:
className="p-3"
<MessageCircle className="w-5 h-5" />
```

### **Desabilitar Badge de Notificação:**

Remova ou comente estas linhas no componente:

```tsx
{/* Badge de notificação (opcional) */}
{!isOpen && (
  <div className="fixed bottom-24 right-6 z-40 animate-bounce">
    <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      1
    </div>
  </div>
)}
```

### **Mudar Tempo de Aparição:**

```tsx
// Linha atual (3 segundos)
const timer = setTimeout(() => setIsVisible(true), 3000)

// Outras opções:
const timer = setTimeout(() => setIsVisible(true), 1000)  // 1 segundo
const timer = setTimeout(() => setIsVisible(true), 5000)  // 5 segundos
const timer = setTimeout(() => setIsVisible(true), 0)     // Imediato
```

---

## 📊 Métricas e Conversão

### **O Que Rastrear:**

Com Google Analytics configurado, você pode ver:

- 📊 Quantos cliques no widget
- 📊 Taxa de conversão (visitantes → cliques)
- 📊 De quais páginas clicam mais

### **Adicionar Rastreamento (Opcional):**

Edite o componente para enviar evento ao GA4:

```tsx
const handleClick = () => {
  const url = getWhatsAppUrl()
  
  // Enviar evento para Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'widget_flutuante',
    })
  }
  
  if (url !== '#') {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
```

### **Metas Esperadas:**

| Métrica | Meta | Bom | Excelente |
|---------|------|-----|-----------|
| Taxa de clique | 5-10% | 10-15% | 15%+ |
| Conversão (clique → lead) | 30% | 50% | 70%+ |

**Exemplo:**
- 100 visitantes
- 10 cliques no widget (10%)
- 5 conversões (50% dos cliques)
- = 5 leads gerados! 🎉

---

## 🚨 Troubleshooting

### **Problema: Widget não aparece**

**Soluções:**

1. **Verificar configuração:**
   ```bash
   # Abra .env.local
   # Confirme que tem PHONE ou CHAT_URL
   ```

2. **Verificar formato do número:**
   ```bash
   # Correto: 5511999999999
   # Errado: (11) 99999-9999
   # Errado: +55 11 99999-9999
   ```

3. **Reiniciar servidor:**
   ```bash
   # Parar (Ctrl+C)
   npm run dev
   ```

4. **Aguardar ou rolar:**
   - Widget aparece após 3s OU scroll de 300px
   - Role a página para baixo

5. **Verificar console:**
   - Pressione F12
   - Veja se há erros no console

---

### **Problema: Abre WhatsApp mas sem mensagem**

**Solução:**
- Verifique se `NEXT_PUBLIC_WHATSAPP_MESSAGE` está configurado
- Alguns navegadores bloqueiam caracteres especiais
- Use mensagens simples sem emojis

---

### **Problema: Número inválido**

**Solução:**
- Formato deve ser: `[País][DDD][Número]`
- Brasil: sempre começa com `55`
- Celular: 9 dígitos (começa com 9)
- Fixo: 8 dígitos

**Exemplos corretos:**
```
5511999999999  ✅
5521987654321  ✅
5531988887777  ✅
```

**Exemplos errados:**
```
11999999999    ❌ (falta código do país)
+5511999999999 ❌ (não pode ter +)
(11)99999-9999 ❌ (não pode ter símbolos)
```

---

## 📱 Teste em Diferentes Dispositivos

### **Desktop:**
- ✅ Abre WhatsApp Web
- ✅ Ou pede para abrir app

### **Mobile:**
- ✅ Abre app do WhatsApp direto
- ✅ Mensagem pré-preenchida

### **Tablet:**
- ✅ Abre WhatsApp Web ou app
- ✅ Depende se tem app instalado

---

## ✅ Checklist de Configuração

### **Configuração Inicial:**
- [ ] Número do WhatsApp obtido
- [ ] Número formatado corretamente (5511999999999)
- [ ] Arquivo `.env.local` criado/editado
- [ ] Variáveis adicionadas
- [ ] Servidor reiniciado
- [ ] Widget aparece no site
- [ ] Clique abre WhatsApp
- [ ] Mensagem está pré-preenchida

### **Após Deploy:**
- [ ] Variáveis configuradas no servidor (Vercel/Netlify)
- [ ] Teste em produção funcionando
- [ ] Teste em mobile funcionando
- [ ] Rastreamento configurado (opcional)

---

## 🎯 Próximos Passos

### **Imediato (Quando tiver número):**
1. ✅ Obter número do WhatsApp
2. ✅ Formatar corretamente
3. ✅ Adicionar no `.env.local`
4. ✅ Testar localmente

### **Após Deploy:**
1. ⏳ Configurar variável no servidor
2. ⏳ Testar em produção
3. ⏳ Monitorar cliques
4. ⏳ Otimizar mensagem se necessário

---

## 💡 Dicas de Conversão

### **Mensagem Efetiva:**
```bash
# ✅ Bom: Curta e direta
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Quero saber mais sobre IA.

# ❌ Ruim: Muito longa
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá! Meu nome é João e eu gostaria de saber mais informações sobre os serviços de inteligência artificial que vocês oferecem para empresas...
```

### **Resposta Rápida:**
- Responda mensagens em até 5 minutos
- Use respostas rápidas do WhatsApp Business
- Configure mensagem automática de ausência

### **Qualificação:**
Pergunte logo:
1. Nome da empresa
2. Qual o desafio
3. Quando quer começar

---

## 📞 Alternativas ao WhatsApp

Se preferir outros canais, você pode:

1. **Telegram:** Trocar ícone e URL
2. **Messenger:** Usar Facebook Messenger
3. **Email:** Abrir cliente de email
4. **Calendly:** Link direto para agendamento

**Para trocar:** Edite o componente `WhatsAppWidget.tsx`

---

## ✅ Conclusão

O WhatsApp Widget está **implementado e pronto para uso**!

**Falta apenas:**
1. Obter número do WhatsApp
2. Formatar: `5511999999999`
3. Adicionar no `.env.local`
4. Reiniciar servidor

**Depois disso:**
- ✅ Widget aparece automaticamente
- ✅ Cliques abrem WhatsApp
- ✅ Mensagem pré-preenchida
- ✅ +30% de contatos esperado! 🚀

---

**Precisa de ajuda? Me avise!** 💬

---

© 2025 VLUMA - WhatsApp Widget Setup
