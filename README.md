# 🏗️ GV CONSTRUCCIONES SPA - Sitio Web Oficial

Página web profesional para GV CONSTRUCCIONES SPA, empresa líder en construcción y arquitectura con más de 15 años de experiencia en Chile. Diseño moderno, responsivo y completamente funcional.

## 🌐 Ver en Vivo

👉 **[Ver Sitio Web](https://vlkair.github.io/PaginaWeb-cliente/)**

---

## 📋 Características

- ✅ Diseño moderno y profesional
- ✅ 100% Responsive (móvil, tablet, desktop)
- ✅ Animaciones suaves y atractivas
- ✅ Navegación fluida con scroll suave
- ✅ **Formulario de contacto funcional con FormSubmit**
- ✅ **Galería lightbox con 57 imágenes de proyectos reales**
- ✅ **Botón flotante de WhatsApp integrado**
- ✅ **Favicon personalizado multiplataforma**
- ✅ Secciones completas: Hero, Servicios, Proyectos, Nosotros, Contacto
- ✅ Optimizado para SEO
- ✅ Carga rápida y ligero
- ✅ Sin dependencias externas (CSS y JS puros)
- ✅ **Cobertura en todo Chile**

## 🚀 Estructura del Proyecto

```
PaginaWeb-cliente/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos personalizados (737+ líneas)
├── js/
│   └── main.js             # JavaScript funcional (440+ líneas)
├── images/                 # Imágenes del proyecto
│   ├── GVCONSTRUCCIONESSPA.png  # Imagen hero
│   ├── paneofinal.jpg      # Portada galería proyecto
│   ├── casaDElujo.jpg      # Proyecto casa de diseño
│   ├── canalfinal.jpeg     # Proyecto canalización
│   └── [57 imágenes más]   # Galería completa del proyecto
├── assets/                 # Recursos adicionales
│   ├── favicon.ico         # Favicon principal
│   └── [28 archivos más]   # Iconos multiplataforma
├── README.md               # Documentación principal
├── GITHUB-PAGES-SETUP.md   # Guía de despliegue
└── GUIA-PERSONALIZACION.md # Guía de personalización
```

## 🎨 Personalización

### 1. Colores
Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #ff6b35;      /* Color principal (naranja) */
    --secondary-color: #004e89;    /* Color secundario (azul) */
    --dark-color: #1a1a2e;         /* Color oscuro */
    --light-color: #f5f5f5;        /* Color claro */
}
```

### 2. Contenido
Edita el archivo `index.html`:

- **Logo y nombre**: Busca `GV CONSTRUCCIONES<span> SPA</span>` (línea ~28)
- **Título Hero**: Modifica `<h1>Construimos Tus Sueños</h1>` (línea ~51)
- **Servicios**: Edita la sección `.services-grid` (línea ~68) - Actualmente 9 servicios
- **Información de contacto**: Actualiza la sección `.contact-info` (línea ~210)
- **WhatsApp**: Número actual: +56 9 6803 5766
- **Email**: geoconstructor2025@gmail.com

### 3. Imágenes
El proyecto incluye imágenes reales de GV CONSTRUCCIONES SPA:

**Imágenes actuales:**
- Hero: `images/GVCONSTRUCCIONESSPA.png`
- Proyecto 1: `images/paneofinal.jpg` (con galería de 57 imágenes)
- Proyecto 2: `images/canalfinal.jpeg`
- Proyecto 5: `images/casaDElujo.jpg`

Para agregar más imágenes, guárdalas en la carpeta `images/` y actualiza las referencias en `index.html`.

### 4. Información de Contacto Actual
```html
<!-- Cobertura -->
<p>Todo Chile</p>

<!-- Teléfono / WhatsApp -->
<p>+56 9 6803 5766</p>

<!-- Email -->
<p>geoconstructor2025@gmail.com</p>

<!-- Horario -->
<p>Lunes - Viernes: 8:00 AM - 6:00 PM<br>Sábado: 9:00 AM - 2:00 PM</p>
```

## 📱 Funcionalidades JavaScript

El archivo `js/main.js` incluye:

- Menú móvil responsive (hamburguesa)
- Navegación suave entre secciones
- Header que cambia al hacer scroll
- Animaciones al aparecer elementos (Intersection Observer)
- Contador animado para estadísticas
- **Formulario de contacto con FormSubmit integrado**
- **Galería lightbox con 57 imágenes del proyecto**
- **Navegación por teclado en galería (flechas, ESC)**
- **Contador de imágenes en galería**
- Botón "scroll to top"
- Sistema de alertas
- Validación de formularios

## 📧 Formulario de Contacto con FormSubmit

El formulario está integrado con **FormSubmit.co** y envía mensajes directamente a `geoconstructor2025@gmail.com`.

**Características:**
- ✅ Sin backend necesario
- ✅ Redirección automática después del envío
- ✅ Respuesta automática al cliente
- ✅ Asunto personalizado: "Nuevo mensaje de cliente desde la página Web de GV CONSTRUCCIONES SPA"
- ✅ Formato de tabla para datos organizados

**Activación inicial:**
1. Enviar el primer mensaje desde el formulario
2. Revisar email de confirmación de FormSubmit
3. Hacer clic en el enlace de activación
4. ¡Listo! Todos los mensajes llegarán automáticamente

## 📸 Galería Lightbox

**Características de la galería:**
- 57 imágenes del proyecto residencial completo
- Navegación con botones ← →
- Navegación con teclado (flechas)
- Cerrar con ESC o clic fuera de la imagen
- Contador "X / 57" 
- Transiciones suaves
- Responsive en móvil

**Imágenes incluidas:**
- Vistas panorámicas del proyecto
- Excavación y cimentación
- Encofrado y estructura
- Levantamiento de muros
- Techado y cubiertas
- Instalaciones (eléctrica, sanitaria)
- Tarrajeo y acabados
- Interiores terminados
- Planos y documentación

## 🚀 Publicar en GitHub Pages

**📖 [Ver Guía Completa de GitHub Pages](GITHUB-PAGES-SETUP.md)**

### Pasos rápidos:
1. Ve a **Settings > Pages** en tu repositorio
2. Selecciona branch `main` y carpeta `/ (root)`
3. Guarda y espera 1-2 minutos
4. Tu sitio estará en: `https://vlkair.github.io/PaginaWeb-cliente/`

### Para actualizar tu sitio:
```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

## 🌐 Desarrollo Local

### Método 1: Abrir Directamente
1. Abre el archivo `index.html` en tu navegador
2. La página se cargará lista para usar

### Método 2: VS Code Live Server (Recomendado)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html`
3. Selecciona "Open with Live Server"

### Método 3: Servidor Local
Si tienes Python:
```bash
python -m http.server 8000
# Abre: http://localhost:8000
```

## 🎯 Secciones de la Página

1. **Header/Navegación** - Menú fijo con logo "GV CONSTRUCCIONES SPA" y enlaces
2. **Hero** - Sección principal con imagen de fondo personalizada y llamados a la acción
3. **Servicios** - 9 tarjetas de servicios especializados:
   - Construcción Residencial 🏗️
   - Construcción Comercial 🏢
   - Diseño Arquitectónico 📐
   - Remodelación 🔧
   - Instalaciones ⚡
   - Consultoría 📋
   - Facturación 💼
   - Construcción para Canalización de Riegos 💧
   - Nivelación de Terrenos 🚜
4. **Proyectos** - Galería de 6 proyectos destacados (con lightbox en proyecto 1)
5. **Sobre Nosotros** - Información de la empresa + estadísticas animadas
6. **Contacto** - Formulario funcional con FormSubmit + información de contacto + WhatsApp
7. **Footer** - Enlaces rápidos, servicios, newsletter y redes sociales
8. **Extras**:
   - Botón flotante de WhatsApp (inferior derecha)
   - Botón scroll-to-top (inferior derecha, encima de WhatsApp)
   - Modal lightbox para galería de imágenes

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Flexbox y Grid
- **JavaScript Vanilla** - Sin frameworks, código puro
- **Font System** - Fuentes del sistema para carga rápida

## 📝 Funcionalidades Implementadas

- [x] Galería de imágenes con lightbox (57 imágenes del proyecto)
- [x] Formulario conectado con FormSubmit (envío a geoconstructor2025@gmail.com)
- [x] Botón flotante de WhatsApp (+56 9 6803 5766)
- [x] Favicon personalizado multiplataforma
- [x] Imágenes reales del proyecto
- [x] Responsive design completo
- [x] Animaciones y transiciones suaves
- [x] Navegación por teclado en galería

## 🚀 Mejoras Futuras Sugeridas

- [ ] Agregar galerías lightbox para los otros 5 proyectos
- [ ] Integrar Google Maps en sección de contacto
- [ ] Agregar testimonios de clientes reales
- [ ] Blog de noticias y actualizaciones de proyectos
- [ ] Sección "Nuestro Equipo" con fotos del personal
- [ ] Calculadora de cotización online
- [ ] Integración con redes sociales (Instagram, Facebook)
- [ ] Optimizar imágenes (WebP, lazy loading)
- [ ] Agregar más proyectos con imágenes propias
- [ ] Sistema de filtros funcional para proyectos

## 🔧 Requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Editor de código (VS Code, Sublime, etc.)
- Conocimientos básicos de HTML/CSS/JS para personalizar

## 📄 Licencia

Este proyecto está diseñado para uso de **GV CONSTRUCCIONES SPA**. 

## 🤝 Contacto

**GV CONSTRUCCIONES SPA**
- 📧 Email: geoconstructor2025@gmail.com
- 📱 WhatsApp: +56 9 6803 5766
- 🌐 Web: https://vlkair.github.io/PaginaWeb-cliente/
- 📍 Cobertura: Todo Chile

## 🎨 Paleta de Colores

- **Naranja**: `#ff6b35` - Color principal, botones, acentos
- **Azul**: `#004e89` - Color secundario, textos importantes
- **Verde WhatsApp**: `#25D366` - Botón WhatsApp, enlaces
- **Oscuro**: `#1a1a2e` - Textos, footer
- **Claro**: `#f5f5f5` - Fondos, secciones alternadas
- **Gris**: `#666` - Textos secundarios

## 📊 Estadísticas del Proyecto

- **Código HTML**: 350 líneas
- **Código CSS**: 737+ líneas
- **Código JavaScript**: 440+ líneas
- **Imágenes**: 60+ archivos (57 galería + hero + proyectos + favicon)
- **Servicios**: 9 especializados
- **Proyectos destacados**: 6
- **Total archivos**: 90+ archivos

## 📸 Características Técnicas

- **Hero fullscreen**: Con imagen de fondo personalizada (GVCONSTRUCCIONESSPA.png)
- **Cards de servicios**: Con iconos emoji y hover effects
- **Galería de proyectos**: Con overlay y lightbox modal en proyecto principal
- **Formulario de contacto**: Integrado con FormSubmit, validación y respuestas automáticas
- **Footer completo**: 4 secciones (info, enlaces, servicios, newsletter)
- **WhatsApp**: Botón flotante con animación pulse
- **Scroll-to-top**: Botón animado que aparece al hacer scroll
- **Navegación**: Sticky header con cambio de estilo al scroll
- **Animaciones**: Intersection Observer para entrada de elementos

---

**Desarrollado con ❤️ para GV CONSTRUCCIONES SPA**

*Más de 15 años construyendo sueños en Chile* 🇨🇱
