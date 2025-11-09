# Imagens do Site NexGenCore

Este documento descreve todas as imagens utilizadas no site da NexGenCore Engenharia.

## Localização das Imagens

Todas as imagens estão localizadas em: `/public/images/`

## Imagens Utilizadas

### 1. Logo
- **Arquivo:** `nexgencore_logo_variation4.png`
- **Uso:** Header e Footer
- **Descrição:** Logo principal da NexGenCore com gear e gráfico de barras

### 2. Hero Section
- **Arquivo:** `aimagemem3Dcoma.png`
- **Uso:** Background da seção hero
- **Descrição:** Ilustração 3D mostrando indústria com poluição e residências

### 3. Especialidades - Otimização de Combustão
- **Arquivo:** `umesquemasimplesecleanqueilustraotransportedaplumadeemissãodeumafontefixapontual(chaminé)atéapopulação.png`
- **Uso:** Card de especialidade
- **Descrição:** Esquema simples ilustrando transporte de pluma de emissão

### 4. Especialidades - Modelagem Atmosférica
- **Arquivo:** `Aschematicillustra.png`
- **Uso:** Card de especialidade
- **Descrição:** Esquema ilustrando dispersão atmosférica com chimé e população

### 5. Compromisso - Imagem 1
- **Arquivo:** `cidadearborizadaco.png`
- **Uso:** Seção de compromisso
- **Descrição:** Cidade arborizada com indústrias e energia renovável

### 6. Compromisso - Imagem 2
- **Arquivo:** `divisãocidadeindus.png`
- **Uso:** Seção de compromisso
- **Descrição:** Divisão entre cidade e indústria com tecnologia

### 7. Compromisso - Imagem 3
- **Arquivo:** `3Dillustrationofe.png`
- **Uso:** Seção de compromisso
- **Descrição:** Ilustração 3D mostrando poluição industrial e energia limpa

## Otimização de Imagens

Todas as imagens foram otimizadas para:
- Carregamento rápido
- Responsividade em diferentes telas
- Qualidade visual mantida

### Configuração no Next.js

As imagens são servidas através do componente `Image` do Next.js, que fornece:
- Lazy loading automático
- Responsive images
- Otimização automática de formato

## Adicionar Novas Imagens

Para adicionar novas imagens ao site:

1. Coloque a imagem em `/public/images/`
2. Use o componente `Image` do Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/images/seu-arquivo.png"
  alt="Descrição da imagem"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

## Dimensões Recomendadas

- **Hero Section:** 1920x1080px (ou maior)
- **Cards:** 600x400px
- **Logos:** 200x200px
- **Ícones:** 64x64px

## Formatos Suportados

- PNG (recomendado para imagens com transparência)
- JPG/JPEG (recomendado para fotos)
- WebP (formato moderno, melhor compressão)
- SVG (para ícones e gráficos)

