# VintageSkateshop

Proyecto final de grado — Aplicación web completa para una tienda de skates y accesorios de segunda mano / vintage.

## Stack tecnológico

| Capa       | Tecnología                                           |
| ---------- | ---------------------------------------------------- |
| Frontend   | React 18, TypeScript, Vite 6, Tailwind CSS 4, MUI 7 |
| Backend    | Laravel 10, PHP 8.1+, Sanctum (autenticación API)   |
| Base datos | MySQL (migraciones con Laravel)                      |
| UI/UX      | Diseño basado en Figma, shadcn/ui (Radix primitives) |

## Estructura del proyecto

```
SkateShop/
├── frontend/                 # Aplicación React (Vite)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Componentes React (páginas, UI, layout)
│   │   │   ├── contexts/     # AuthContext (gestión de sesión)
│   │   │   ├── data/         # Datos estáticos de productos
│   │   │   ├── lib/          # Cliente API
│   │   │   ├── App.tsx       # Componente raíz
│   │   │   └── routes.ts     # Definición de rutas (React Router)
│   │   ├── styles/           # Estilos globales
│   │   └── main.tsx          # Punto de entrada
│   └── package.json
├── backend/                  # API Laravel
│   ├── app/
│   │   ├── Http/Controllers/ # AuthController, ProductController
│   │   └── Models/           # User, Product
│   ├── database/migrations/  # Migraciones (users, products, etc.)
│   ├── routes/api.php        # Endpoints REST
│   └── package.json
└── README.md
```

## Funcionalidades

- Catálogo de productos con categorías (completos, ruedas, ejes, rodamientos, tablas, lijas)
- Detalle de producto con descripción y estado
- Autenticación de usuarios (registro / inicio de sesión / cierre de sesión)
- Carrito de compras
- Sección de ofertas
- Páginas informativas (about, contacto)
- Diseño responsive con modo oscuro

## API Endpoints

| Método | Endpoint             | Auth     | Descripción                  |
| ------ | -------------------- | -------- | ---------------------------- |
| POST   | `/api/register`      | No       | Registrar nuevo usuario      |
| POST   | `/api/login`         | No       | Iniciar sesión               |
| POST   | `/api/logout`        | Sanctum  | Cerrar sesión                |
| GET    | `/api/user`          | Sanctum  | Obtener usuario autenticado  |
| GET    | `/api/products`      | No       | Listar productos             |
| GET    | `/api/products/{id}` | No       | Detalle de un producto       |

## Requisitos previos

- PHP 8.1+
- Composer
- Node.js 18+
- MySQL

## Instalación y puesta en marcha

### Backend

```bash
cd backend
composer install
cp .env.example .env          # Configurar conexión a BD
php artisan key:generate
php artisan migrate            # Crear tablas
php artisan db:seed            # (opcional) Datos de ejemplo
php artisan serve              # Servidor en http://localhost:8000
```

### Frontend

```bash
cd frontend
npm install
npm run dev                    # Servidor en http://localhost:5173
```

> El frontend espera que el backend esté corriendo en `http://localhost:8000`.  
> Asegúrate de que el proxy de Vite esté configurado en `vite.config.ts` para redirigir `/api` al backend.

## Licencia

MIT
