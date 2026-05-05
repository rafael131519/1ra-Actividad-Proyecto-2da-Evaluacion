# SkateSet — Angular 19

Tienda de skateboarding. Angular 19 con arquitectura standalone, lazy loading, HttpClient y Reactive Forms.

## Estructura

```
src/app/
├── layout/
│   ├── navbar/          # Barra de navegacion
│   └── footer/          # Pie de pagina
├── pages/
│   ├── home/            # Pagina principal
│   ├── catalogo/        # Listado de productos
│   ├── producto/        # Detalle de producto
│   ├── carrito/         # Carrito + pago
│   ├── login/           # Inicio de sesion
│   ├── register/        # Registro
│   └── contacto/        # Formulario de contacto
├── services/
│   ├── skate.service.ts # HttpClient -> data.json
│   ├── cart.service.ts  # Carrito con Signals
│   └── auth.service.ts  # Autenticacion simulada
├── models/
│   └── skate.models.ts  # Interfaces TypeScript
└── common/              # Utilidades compartidas
```

## Instalacion

```bash
npm install
ng serve
```

Abre `http://localhost:4200`

## Rutas

| Ruta | Pagina |
|------|--------|
| `/` | Home |
| `/catalogo` | Catalogo |
| `/producto/:id` | Detalle producto |
| `/carrito` | Carrito y pago |
| `/login` | Iniciar sesion |
| `/register` | Registro |
| `/contacto` | Contacto |

## Tecnologias

- Angular 19 (Standalone + Lazy loading)
- Bootstrap 5.3
- RxJS / HttpClient
- Angular Signals
- Reactive Forms
