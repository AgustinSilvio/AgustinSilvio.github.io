# Portfolio Profesional & Blog Técnico | Agustín Rojas

Sitio web personal y portafolio profesional desarrollado con **Astro**, **Tailwind CSS** y **TypeScript**. Enfocado en ciencias actuariales, gestión cuantitativa de riesgos (LGD, PCE, Solvencia), modelado predictivo y analítica de datos.

* **Sitio web:** [agustinsilvio.github.io](https://agustinsilvio.github.io/)
* **LinkedIn:** [linkedin.com/in/agustinsilviorojas](https://www.linkedin.com/in/agustinsilviorojas/)
* **GitHub:** [github.com/AgustinSilvio](https://github.com/AgustinSilvio/)

---

## 🚀 Tecnologías Utilizadas

* **Framework:** [Astro.js](https://astro.build/) (Generador de sitios estáticos ultrarrápido)
* **Estilos:** Tailwind CSS
* **Arquitectura de Contenido:** Content Collections con validación Zod
* **Internacionalización:** Soporte bilingüe dinámico (ES / EN) sin recarga mediante componente `<T />`

---

## 🛠️ Comandos de Desarrollo

Ejecutar en la terminal desde la carpeta raíz del proyecto:

| Comando | Acción |
| :--- | :--- |
| `npm install` | Instala las dependencias necesarias. |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321`. |
| `npm run build` | Compila el sitio estático optimizado en la carpeta `./dist/`. |
| `npm run preview` | Previsualiza localmente el build de producción antes de subirlo. |

---

## 📖 Guía Rápida de Mantenimiento (¿Qué archivo tocar?)

### 1. Agregar un nuevo artículo al Blog
* **Carpeta:** `src/content/blog/`
* **Acción:** Crea un archivo nuevo con extensión `.md` (ejemplo: `mi-nuevo-articulo.md`).
* **Estructura base obligatoria:**
```markdown
---
title: "Título en Español"
title_es: "Título en Español"
title_en: "Title in English"
description_es: "Resumen técnico en español..."
description_en: "Technical summary in English..."
publishDate: "2026-03-15"
isFeatured: true
tags: ["Actuarial", "Riesgo"]
linkedinUrl: "[https://www.linkedin.com/posts/](https://www.linkedin.com/posts/)..." # Opcional: activa el botón de compartir directo
---

<div class="lang-es">

Contenido completo en español...

</div>

<div class="lang-en">

Full content in English...

</div>