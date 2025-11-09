# NexGenCore Engenharia - Website

Um site moderno e responsivo para a NexGenCore Engenharia, desenvolvido com **Next.js 14** e **Tailwind CSS**.

## 🎯 Características

- ✨ **Design Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🎨 **Identidade Visual** - Cores e tipografia alinhadas com a marca NexGenCore
- 📱 **Mobile-First** - Desenvolvido com abordagem mobile-first
- ⚡ **Performance** - Otimizado para velocidade e SEO
- 🔧 **Componentes Reutilizáveis** - Estrutura modular e fácil de manter
- 📧 **Formulário de Contato** - Formulário funcional e validado
- 🖼️ **Imagens Otimizadas** - Suporte a imagens responsivas

## 📋 Seções do Site

1. **Header** - Navegação responsiva com logo
2. **Hero Section** - Banner principal com chamada para ação
3. **Sobre** - Informações sobre a empresa e seus valores
4. **Especialidades** - Detalhes sobre os serviços principais
5. **Clientes** - Carteira de clientes por setor
6. **Compromisso** - Visão de futuro da empresa
7. **Contato** - Formulário de contato e informações
8. **Footer** - Links rápidos e informações adicionais

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clonar o repositório (se aplicável)
git clone <seu-repositorio>
cd nex-gen-core

# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:3000
```

### Build para Produção

```bash
# Compilar o projeto
npm run build

# Iniciar servidor de produção
npm run start
```

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Navy Blue | `#1E3A8A` | Títulos, headers, elementos principais |
| Emerald Green | `#059669` | Acentos, botões secundários |
| Orange | `#F97316` | CTAs, destaques, energia |
| Light Gray | `#F8FAFC` | Fundos, cards |
| Dark Gray | `#334155` | Texto secundário |
| White | `#FFFFFF` | Fundo principal |

## 📝 Tipografia

- **Fonte Principal:** Inter (sans-serif moderna)
- **Pesos:** Regular (400), Medium (500), Semi-bold (600), Bold (700)
- **Tamanhos Responsivos:**
  - H1: 48px (desktop), 32px (mobile)
  - H2: 36px (desktop), 28px (mobile)
  - H3: 28px (desktop), 24px (mobile)
  - Body: 16px (desktop), 14px (mobile)

## 📁 Estrutura do Projeto

```
nex-gen-core/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   ├── globals.css         # Estilos globais
│   └── favicon.ico         # Favicon
├── components/
│   ├── Header.tsx          # Componente de cabeçalho
│   ├── Hero.tsx            # Seção hero
│   ├── About.tsx           # Seção sobre
│   ├── Especialidades.tsx  # Seção de especialidades
│   ├── Clientes.tsx        # Seção de clientes
│   ├── Compromisso.tsx     # Seção de compromisso
│   ├── Contato.tsx         # Seção de contato
│   └── Footer.tsx          # Componente de rodapé
├── public/
│   └── images/             # Imagens do site
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── tsconfig.json           # Configuração do TypeScript
├── next.config.js          # Configuração do Next.js
└── package.json            # Dependências do projeto
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_CONTACT_EMAIL=contato@nexgencore.com.br
NEXT_PUBLIC_CONTACT_PHONE=(47) 3300-0000
NEXT_PUBLIC_ADDRESS=Joinville, Santa Catarina, Brasil
```

## 📱 Responsividade

O site é totalmente responsivo e foi testado em:

- **Mobile:** 320px - 640px
- **Tablet:** 641px - 1024px
- **Desktop:** 1025px+

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com SSR
- **React 18** - Biblioteca de UI
- **Tailwind CSS 3** - Utilitários CSS
- **TypeScript** - Tipagem estática
- **Node.js** - Runtime JavaScript

## 📞 Contato

Para dúvidas ou sugestões sobre o site, entre em contato:

- **Email:** contato@nexgencore.com.br
- **Telefone:** (47) 3300-0000
- **Endereço:** Joinville, Santa Catarina, Brasil

## 📄 Licença

Este projeto é propriedade da NexGenCore Engenharia.

---

**Desenvolvido com ❤️ para NexGenCore Engenharia**
