# Estética — Boilerplate (Next.js + Tailwind)

Sitio informativo simple para un centro de estética. Sin backend ni base de datos.

## Stack
- Next.js 14 (Pages Router)
- Tailwind CSS
- next-seo
- TypeScript

## Configuración rápida

```bash
pnpm i   # o npm i / yarn
pnpm dev # o npm run dev
```

Abrí http://localhost:3000

## Personalización
- Editá **src/config/site.ts** para nombre del centro, WhatsApp y ubicación.
- Agregá/quitá tratamientos en **src/data/treatments.ts** y precios en **src/data/prices.ts**.
- Estilos globales en **styles/globals.css** y **tailwind.config.ts**.

## Deploy
- Recomendado: Vercel.
- Variables de entorno: no requiere.
- Imágenes: en `/public`.
