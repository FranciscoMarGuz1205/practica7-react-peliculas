# Práctica 7: Aplicación web de películas

Aplicación desarrollada con React y Vite que permite consultar un catálogo de películas y visualizar sus detalles. La información se obtiene de la API de The Movie Database (TMDB).

## Datos del estudiante

- Nombre: Francisco Mares Guzman
- Código: 220580844
- Modalidad: Individual
- Profesor: ZEUS EMANUEL GUTIERREZ COBIAN
- Materia: Desarrollo de Aplicaciones Web en la Nube y Móviles
- Institución: Universidad de Guadalajara, CUCEI
- Calendario escolar: 2026 B
- Fecha: Noviembre de 2026

## Objetivo

Desarrollar una aplicación web con React que consuma una API externa, permita navegar entre un catálogo y el detalle de cada película, y utilice GitHub para registrar los cambios del proyecto.

## Tecnologías utilizadas

- React
- Vite
- React Router
- JavaScript
- HTML y CSS
- API de TMDB
- Git y GitHub
- Netlify como plataforma de publicación

## Funciones de la aplicación

- Consulta de un catálogo de películas.
- Visualización de pósteres y títulos.
- Página de detalle con géneros, fecha de estreno, duración y sinopsis.
- Navegación entre el catálogo y los detalles.
- Mensajes de carga y de error.
- Diseño adaptable a pantallas pequeñas.
- Pie de página con los datos académicos.

## Organización del proyecto

- `public/`: imágenes y archivos públicos.
- `src/components/`: tarjetas, catálogo y pie de página.
- `src/pages/`: página principal y detalle de películas.
- `src/routers/`: configuración de las rutas.
- `src/services/`: conexión con la API de TMDB.
- `src/utils/`: función para obtener las direcciones de los pósteres.
- `src/App.jsx`: estructura general de la aplicación.
- `src/index.css`: estilos de la aplicación.

## Instalación y ejecución

Se necesita tener Node.js, npm y Git instalados.

1. Clonar el repositorio:

```bash
git clone https://github.com/FranciscoMarGuz1205/practica7-react-peliculas.git
```

2. Entrar en la carpeta del proyecto:

```bash
cd practica7-react-peliculas
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear un archivo `.env` en la carpeta principal, al mismo nivel que `package.json`, con lo siguiente:

```env
VITE_TMDB_API_KEY=coloca_aqui_tu_api_key
```

Se debe utilizar una API Key de TMDB. El archivo `.env` está excluido del repositorio mediante `.gitignore`.

Las variables con prefijo `VITE_` se incluyen en la aplicación del navegador, por lo que no deben utilizarse para guardar secretos de servidor.

5. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

6. Abrir la dirección que indique la terminal.

## Rutas

- `/`: muestra el catálogo de películas.
- `/movies/:movieId`: muestra los detalles de la película seleccionada.

## API utilizada

Se utiliza la API de The Movie Database (TMDB).

- Dirección base: `https://api.themoviedb.org/3`
- Catálogo: `/discover/movie`
- Detalle: `/movie/{movieId}`
- Idioma solicitado: español de México (`es-MX`).

Las solicitudes se realizan con `fetch`. La aplicación muestra un mensaje mientras espera la respuesta y avisa si ocurre un error.

Los datos e imágenes de las películas provienen de TMDB.

## Comprobaciones realizadas

- Se comprobó que el catálogo muestra títulos y pósteres.
- Se abrió el detalle de distintas películas.
- Se comprobó el regreso al catálogo.
- Se recargó una página de detalle en el entorno local.
- Se ejecutó `npm run build` correctamente.
- Se verificó que `.env` no está incluido en los archivos registrados por Git.

## Preparación para Netlify

- Comando de compilación: `npm run build`
- Carpeta de publicación: `dist`
- Variable de entorno: `VITE_TMDB_API_KEY`

El archivo `public/_redirects` permite que las rutas de React Router funcionen al abrirlas directamente en el sitio publicado.

## Enlaces

Repositorio de GitHub:
https://github.com/FranciscoMarGuz1205/practica7-react-peliculas

Sitio en Netlify:
Pendiente de agregar después del despliegue.

## Conclusión

Con esta práctica aprendí a organizar una aplicación en componentes, consultar información de una API y utilizar rutas para mostrar diferentes páginas. También practiqué el uso de Git y GitHub para guardar los avances mediante commits. La separación de archivos facilitó trabajar en el catálogo, los detalles y los estilos.