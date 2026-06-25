# NYC Home Pro - Web Corporativa

Web corporativa para empresa de servicios del hogar en Nueva York: limpieza profunda, pintura profesional y remodelaciones.

## Stack Tecnologico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Zod
- **Iconos:** Lucide React

## Inicio Rapido

```bash
# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.local.example .env.local

# Ejecutar en desarrollo
npm run dev

# Build de produccion
npm run build

# Iniciar servidor de produccion
npm start
```

## Estructura del Proyecto

```
src/
  app/                    # Paginas (App Router)
    layout.tsx            # Layout principal
    page.tsx              # Home
    contacto/             # Pagina de contacto
    nosotros/             # Pagina de nosotros
    proceso/              # Pagina de proceso
    testimonios/          # Pagina de testimonios
    servicios/
      limpieza/           # Servicio de limpieza
      pintura/            # Servicio de pintura
      remodelacion/       # Servicio de remodelacion
  components/
    layout/               # Navbar, Footer, MobileMenu
    ui/                   # Button, Card, Input, Badge, etc.
    home/                 # Hero, ServicesOverview, WhyUs, etc.
    servicios/            # ServiceHero, ServiceDetails, FAQ, Gallery
    shared/               # PageTransition, AnimatedSection, etc.
  lib/                    # Constantes, rutas, SEO, helpers
  styles/                 # globals.css
public/
  images/                 # Logos y assets estaticos
```

## Scripts

| Comando          | Descripcion                      |
| ---------------- | -------------------------------- |
| `npm run dev`    | Servidor de desarrollo           |
| `npm run build`  | Build de produccion              |
| `npm start`      | Iniciar build de produccion      |
| `npm run lint`   | Ejecutar ESLint                  |
| `npm run format` | Formatear codigo con Prettier    |

## Variables de Entorno

Ver `.env.local.example` para la lista completa de variables necesarias.
