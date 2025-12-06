# 🎨 Guía Rápida de Personalización

Esta guía te ayudará a hacer cambios graduales en tu página web.

## 🎯 Cambios Comunes y Fáciles

### 1️⃣ Cambiar Colores

**Archivo:** `css/styles.css` (líneas 6-13)

```css
:root {
    --primary-color: #ff6b35;      /* 👈 Cambia esto (naranja) */
    --secondary-color: #004e89;    /* 👈 Cambia esto (azul) */
    --dark-color: #1a1a2e;
    --light-color: #f5f5f5;
}
```

**Colores sugeridos:**
- Azul moderno: `#2563eb`
- Verde: `#10b981`
- Morado: `#8b5cf6`
- Rojo: `#ef4444`

**Después de cambiar:**
```bash
git add css/styles.css
git commit -m "Cambiar colores a azul moderno"
git push origin main
```

---

### 2️⃣ Cambiar el Nombre de la Empresa

**Archivo:** `index.html`

**Busca y reemplaza:**
```html
<!-- Logo (línea ~20) -->
<div class="logo">
    TuEmpresa<span>Construcción</span>  👈 Cámbialo aquí
</div>

<!-- Título Hero (línea ~43) -->
<h1>Tu Título Aquí</h1>  👈 Cámbialo aquí

<!-- Footer (línea ~283) -->
<h3>TuEmpresa Construcción</h3>  👈 Cámbialo aquí
```

**Después de cambiar:**
```bash
git add index.html
git commit -m "Actualizar nombre de empresa"
git push origin main
```

---

### 3️⃣ Cambiar Información de Contacto

**Archivo:** `index.html` (línea ~289)

```html
<!-- Dirección -->
<p>Tu Calle #123, Tu Ciudad<br>Código Postal</p>

<!-- Teléfono -->
<p>+1 (XXX) XXX-XXXX<br>+1 (XXX) XXX-XXXX</p>

<!-- Email -->
<p>info@tuempresa.com<br>ventas@tuempresa.com</p>

<!-- Horario -->
<p>Lunes - Viernes: 8:00 AM - 6:00 PM<br>Sábado: 9:00 AM - 2:00 PM</p>
```

**Después de cambiar:**
```bash
git add index.html
git commit -m "Actualizar información de contacto"
git push origin main
```

---

### 4️⃣ Editar Servicios

**Archivo:** `index.html` (línea ~59)

Cada servicio tiene esta estructura:
```html
<div class="service-card">
    <div class="service-icon">🏗️</div>  👈 Cambia el emoji
    <h3>Tu Servicio</h3>             👈 Cambia el título
    <p>Descripción del servicio</p>  👈 Cambia la descripción
</div>
```

**Emojis sugeridos:**
- 🏗️ Construcción
- 🏢 Edificios
- 📐 Diseño
- 🔧 Reparación
- ⚡ Instalaciones
- 🎨 Remodelación

---

### 5️⃣ Cambiar Textos del Hero

**Archivo:** `index.html` (línea ~43-48)

```html
<h1>Tu Título Principal</h1>
<p>Tu subtítulo o descripción</p>
```

**Ejemplos:**
- "Construyendo el Futuro"
- "Expertos en Construcción"
- "Tu Proyecto, Nuestra Pasión"
- "Calidad que Construye Confianza"

---

### 6️⃣ Actualizar Estadísticas

**Archivo:** `index.html` (línea ~253)

```html
<div class="stat-number" data-target="250">0+</div>
<div class="stat-label">Proyectos Completados</div>
```

Cambia el `data-target="250"` por tu número.

---

## 🖼️ Agregar tus Propias Imágenes

### Paso 1: Preparar imágenes
- Tamaño recomendado: 800x600px (proyectos)
- Formato: JPG o PNG
- Peso: menos de 500KB cada una

### Paso 2: Subir a carpeta `images/`
```bash
# Copia tus imágenes a la carpeta images/
# Por ejemplo: proyecto1.jpg, proyecto2.jpg, etc.
```

### Paso 3: Actualizar HTML
**Archivo:** `index.html` (línea ~102)

```html
<!-- ANTES (con Unsplash) -->
<img src="https://images.unsplash.com/..." alt="...">

<!-- DESPUÉS (con tu imagen) -->
<img src="images/proyecto1.jpg" alt="Descripción del proyecto">
```

### Paso 4: Subir a GitHub
```bash
git add images/
git add index.html
git commit -m "Agregar imágenes propias de proyectos"
git push origin main
```

---

## 📝 Flujo de Trabajo Recomendado

### Para cada cambio:

1. **Edita el archivo** en VS Code
2. **Guarda** con `Ctrl + S`
3. **Revisa** abriendo `index.html` en el navegador
4. **Commit** si te gusta el resultado:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   git push origin main
   ```
5. **Espera 1-2 minutos** y visita tu sitio en:
   `https://vlkair.github.io/PaginaWeb-cliente/`

---

## 🔄 Ejemplo Completo: Cambiar Colores

```bash
# 1. Abre css/styles.css
# 2. Cambia línea 7:
#    --primary-color: #2563eb;  (nuevo azul)
# 3. Guarda el archivo
# 4. Ejecuta en terminal:

git add css/styles.css
git commit -m "Cambiar color principal a azul"
git push origin main

# 5. Espera 1 minuto y refresca tu sitio web
```

---

## 🎨 Cambios Sugeridos por Orden

### Semana 1: Contenido Básico
- [ ] Cambiar nombre de empresa
- [ ] Actualizar información de contacto
- [ ] Cambiar textos del Hero
- [ ] Editar servicios

### Semana 2: Personalización Visual
- [ ] Cambiar colores principales
- [ ] Actualizar estadísticas
- [ ] Modificar textos de "Sobre Nosotros"

### Semana 3: Contenido Avanzado
- [ ] Agregar imágenes propias
- [ ] Personalizar servicios
- [ ] Actualizar proyectos

### Semana 4: Detalles Finales
- [ ] Optimizar textos SEO
- [ ] Agregar enlaces de redes sociales
- [ ] Revisar responsive en móvil

---

## 🆘 Comandos Git Esenciales

```bash
# Ver qué archivos cambiaste
git status

# Ver los cambios específicos
git diff

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Tu mensaje aquí"

# Subir a GitHub
git push origin main

# Deshacer cambios locales (antes de commit)
git restore archivo.html

# Ver historial
git log --oneline
```

---

## 💡 Tips Importantes

✅ **Haz commit frecuentemente** - Pequeños cambios son más fáciles de manejar
✅ **Mensajes descriptivos** - "Cambiar logo" es mejor que "update"
✅ **Prueba localmente primero** - Abre index.html antes de subir
✅ **Usa Ctrl+F5** - Para limpiar caché del navegador
✅ **Copia de seguridad** - Git ya guarda todo tu historial

❌ **Evita** - Cambiar 100 cosas a la vez
❌ **Evita** - Commits sin mensaje claro
❌ **Evita** - Subir archivos muy pesados (>1MB)

---

## 🎯 ¿Necesitas Ayuda?

1. Revisa los comentarios en el código (están en español)
2. Consulta `GITHUB-PAGES-SETUP.md` para temas de publicación
3. Usa `git status` para ver qué archivos cambiaste
4. Revisa `README.md` para documentación general

---

**¡Listo para empezar! 🚀**

Comienza con cambios pequeños y ve avanzando gradualmente.
