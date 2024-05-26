# URL shortener

### Es mi primera app y me hace mucha ilusión presentar un simple acortador de URLs perfectamente funcional

> Esta app utiliza:

- Backend: Laravel
- Frontend: React
- CSS: Tailwind CSS
- Bundler: Vite

> Requisitos previos:

- PHP >= 8.2
- Composer
- Node.js >= 14.x
- npm o yarn

> Instalación:

#### Clonar el repositorio:

- `git clone https://github.com/meiduko/url-shortener.git`
- `cd url-shortener/url-shortener`

#### Configuración del backend:

- `composer install`
- `cp .env.example .env`
- `php artisan key:generate`

#### Configurar base de datos:

- Editar el archivo `.env` para incluír las credenciales de tu base de datos.

#### Migrar base de datos:

- `php artisan migrate`

#### Configuración del frontend:

- `npm install`
- `npm run dev`

#### Iniciar el servidor:

- `php artisan serve`
  El servidor estará disponible en **localhost:8000**

> Estructura del proyecto

#### Backend (Laravel):

- `/app/`: Modelos y controladores
- `/routes/web.php`: Rutas
- `/database`: Migraciones

#### Frontend (React):

- `/resources/js`: Componentes de react
- `/resources/css`: CSS (importación de tailwind)
- `/public`: Imágenes
