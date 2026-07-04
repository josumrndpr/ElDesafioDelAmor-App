# 🎯 Plan: The Love Dare App — WebApp Interactiva

> **Versión:** 1.0 — Plan de implementación
> **App:** HTML5 + CSS3 + JavaScript (vanilla, sin frameworks)
> **Filosofía:** MobileFirst, Material Design 3 (Google), animaciones fluidas, 100% offline-capable

---

## 📖 Resumen del libro

**"El Desafío del Amor"** (The Love Dare) — Stephen & Alex Kendrick

- **40 días** de retos matrimoniales basados en 1 Corintios 13
- Cada día tiene: **tema** (ej: "El amor es paciente"), **lectura**, **reto práctico**, **preguntas de reflexión**
- Progresión: del control personal (paciencia, amabilidad) a lo espiritual (oración, pacto)

---

## 🎨 Visión de la App

### ⭐ Experiencia principal
Una **app tipo diario de viaje** donde el usuario:

1. **Lee** el reto del día actual (texto + verso bíblico)
2. **Anota** su experiencia del día: ¿qué pasó?, ¿qué hice?, ¿cómo salió?
3. **Registra** su progreso en los 40 días con indicadores visuales
4. **Revisita** días anteriores para ver su evolución
5. **Recibe** recordatorios suaves y celebración de logros

### 💡 Para que NO sea monótona (elementos clave)

| Elemento | Cómo se implementa |
|---|---|
| **Progreso visual** | Mapa de 40 días tipo "grid de calendario" con colores por estado (pendiente ✅ en curso 🟡 completado 🟢 saltado ⚪) |
| **Micro-interacciones** | Animación al marcar un día, confeti al completar hitos (día 7, 14, 21, 40), transiciones suaves entre días |
| **Story mode** | Cada día se siente como un "capítulo" con su propia tarjeta animada |
| **Estadísticas personales** | Gráfico semanal de cumplimiento, racha actual, días consecutivos |
| **Diario emocional** | Además de notas, permitir seleccionar el "estado de ánimo" del día (😊 😐 😢 😡 🙏) |
| **Gamificación ligera** | Insignias por hitos: "Semana 1 completa", "Paciente como Job", "Amor incondicional" |
| **Tema oscuro/claro** | Con transición animada |
| **Navegación gestual** | Swipe left/right entre días en mobile |

### 🧩 Funcionalidades core

1. **Home / Dashboard** — Progreso general, día actual destacado, racha, frase del día
2. **Grid de 40 días** — Vista general con estados de color
3. **Vista de día** — Lectura del reto + espacio para journaling
4. **Diario personal** — Notas por día con: texto, estado de ánimo, fotos (opcional), timestamp
5. **Reflexiones guiadas** — Preguntas del libro integradas en el diario
6. **Estadísticas** — Gráfico de cumplimiento, mood tracker semanal
7. **Logros / Insignias** — Hitos desbloqueables
8. **Exportación** — Backup del diario en JSON / TXT

---

## 🏗️ Arquitectura técnica

### Stack
```
📁 love-dare-app/
├── index.html              → SPA entry point
├── manifest.json           → PWA manifest
├── sw.js                   → Service Worker (offline)
├── css/
│   ├── reset.css           → Normalize / reset
│   ├── variables.css       → Design tokens (MD3 colors, spacing, typo)
│   ├── components.css      → Botones, cards, modals, tabs
│   ├── layout.css          → Grid, contenedores, responsive
│   ├── animations.css      → Keyframes, transiciones
│   └── pages.css           → Estilos por página/vista
├── js/
│   ├── app.js              → Router SPA, init, state manager
│   ├── data.js             → Datos del libro (40 días en JSON)
│   ├── store.js            → IndexedDB (diario, progreso)
│   ├── ui.js               → Helpers de DOM, renderizado
│   ├── router.js           → Hash-based SPA router
│   ├── animations.js       → Gestión de animaciones (IntersectionObserver, etc.)
│   ├── day-view.js         → Lógica de la vista de día
│   ├── journal.js          → CRUD del diario personal
│   ├── stats.js            → Cálculo de estadísticas
│   └── theme.js            → Dark/light mode
└── assets/
    ├── icons/              → SVG icons
    └── images/             → Ondas, patrones, backgrounds
```

### Principios de diseño

- **Single Page App** con hash router (no frameworks)
- **IndexedDB** para persistencia offline del diario del usuario
- **LocalStorage** para preferencias (tema, día actual)
- **CSS Custom Properties** para theming MD3
- **IntersectionObserver** para animaciones de entrada
- **Touch events** para swipe navigation
- **Service Worker** para cachear assets y el contenido del libro

---

## 📐 Sistema de diseño (Material Design 3)

### Paleta de colores

```
--md-primary:           #D32F2F  (rojo pasión/amor)
--md-primary-container: #FFCDD2
--md-on-primary:        #FFFFFF
--md-secondary:         #7B1FA2  (púrpura espiritual)
--md-secondary-container: #E1BEE7
--md-surface:           #FFFBFE  (light) / #1C1B1F (dark)
--md-surface-variant:   #F3EDF7  (light) / #2B2930 (dark)
--md-outline:           #79747E
--md-success:           #2E7D32
```

### Tipografía

```css
--font-body: 'Inter', system-ui, sans-serif;
--font-display: 'Playfair Display', 'Georgia', serif;  /* Para títulos de días */
--font-mono: 'JetBrains Mono', monospace;               /* Para notas/diario */
```

### Espaciado (8px grid)

```
--sp-1: 4px   --sp-2: 8px   --sp-3: 12px  --sp-4: 16px
--sp-5: 24px  --sp-6: 32px  --sp-7: 40px  --sp-8: 48px
```

---

## 📋 Plan de implementación por fases

---

### 🟢 FASE 1: Fundación — Estructura y diseño visual
*Entrega: skeleton visual de la app, navegable, responsive*

**Tareas:**

1. **Crear estructura de proyecto** — index.html, manifest.json, carpetas css/js/assets
2. **Sistema de diseño (variables.css)** — Colores MD3, tipografía, espaciado, sombras, border-radius
3. **reset.css** — Normalizar estilos base
4. **layout.css** — Sistema de grid responsive, contenedores, viewport mobile-first
5. **components.css** — Componentes base:
   - Top App Bar (MD3)
   - Bottom Navigation (3 tabs: Inicio, Progreso, Diario)
   - Cards (elevated/filled/outlined)
   - Botones FAB, texto, outlined
   - Modal/Bottom sheet
   - Badges
6. **router.js + app.js** — Hash router básico con 3 vistas
7. **Página Home (inicio)** — Hero con día actual, resumen de progreso, racha
8. **Página Grid de 40 días (progreso)** — Grid 8×5 con cards de cada día, coloreadas por estado
9. **Página Diario vacía** — Placeholder con CTA
10. **theme.js** — Dark/Light mode con toggle animado
11. **animations.css** — Keyframes base: fade-in, slide-up, scale-in, ripple

**Archivos creados:** index.html, manifest.json, sw.js, css/reset.css, css/variables.css, css/layout.css, css/components.css, css/animations.css, css/pages.css, js/app.js, js/router.js, js/theme.js, js/ui.js

**Verificación:**
- Abrir en Chrome DevTools modo responsive (375px width)
- Navegar entre tabs (Inicio → Progreso → Diario)
- Cambiar tema oscuro/claro
- Verificar que todas las animaciones se ejecuten suavemente (60fps)

---

### 🟡 FASE 2: Datos del libro y vista de día
*Entrega: contenido completo del libro integrado, vista de día funcional*

**Tareas:**

12. **Crear data.js** — Array de 40 objetos JSON con:
    ```js
    { id: 1, title: "El amor es paciente", verse: "Proverbios 16:32", 
      summary: "...", challenge: "...", reflectionQuestions: ["...", "..."],
      icon: "⏳", color: "#..." }
    ```
13. **Extraer contenido del PDF** — Poblar data.js con el resumen, reto y preguntas de cada día desde `libro_completo.txt`
14. **day-view.js** — Vista de día completa con:
    - Header: número de día, título, icono
    - Tarjeta del verso bíblico
    - Lectura del día (expandible)
    - Reto del día (destacado en card primary)
    - Sección de preguntas de reflexión
    - Navegación → día anterior / siguiente (flechas + swipe)
15. **Conectar grid → day-view** — Click en un día del grid abre su vista
16. **Animación de transición** entre grid y vista de día (shared element transition suave)

**Archivos creados/modificados:** js/data.js, js/day-view.js, css/pages.css (actualizar)

**Verificación:**
- Click en día 1 del grid → ver contenido completo
- Swipe left/right navega entre días
- Todas las 40 entradas tienen contenido

---

### 🔵 FASE 3: Sistema de diario (journaling)
*Entrega: el usuario puede escribir notas por día, con estado de ánimo y persistencia*

**Tareas:**

17. **store.js** — Capa de IndexedDB:
    - Abrir base `LoveDareDB`
    - Object store `diary` con: `{ dayId, date, text, mood, createdAt, updatedAt }`
    - CRUD: `saveEntry()`, `getEntry(dayId)`, `getAllEntries()`, `deleteEntry()`
    - Object store `progress` con: `{ dayId, status: 'pending'|'current'|'done'|'skipped' }`
18. **journal.js** — Módulo de diario:
    - Editor de texto con textarea expandible
    - Selector de estado de ánimo (😊 😐 😢 😡 🙏 ❤️)
    - Botón guardar con feedback visual
    - Indicador de "guardado" / "sin guardar"
    - Cargar entrada existente al abrir un día
19. **Integrar diario en day-view** — Sección de "Mis notas del día" debajo del contenido del libro
20. **Bottom sheet de escritura** — En mobile, el editor se abre como bottom sheet para no competir con el contenido
21. **Sincronizar progreso** — Al marcar un día como completado, actualizar store y grid

**Archivos creados/modificados:** js/store.js, js/journal.js, js/day-view.js (integrar), css/components.css (bottom sheet)

**Verificación:**
- Escribir nota en día 1 → guardar → recargar página → nota persiste
- Cambiar estado de ánimo
- Marcar día como completado → grid se actualiza
- Ver entrada en día 2 → día 1 sigue guardado

---

### 🟣 FASE 4: Estadísticas e insignias
*Entrega: dashboard con datos del progreso, logros y gamificación*

**Tareas:**

22. **stats.js** — Cálculos:
    - Progreso total (%)
    - Racha actual (días consecutivos completados)
    - Días por estado (completado/pendiente/saltado)
    - Mood más frecuente
    - Semanas completadas
23. **Gráfico semanal** — Bar chart CSS-only de cumplimiento por semana
24. **Logros / Insignias:**
    - 🥇 "Primer paso" — Completar día 1
    - 🏆 "Semana 1" — Completar días 1-7
    - 🔥 "Racha de 7" — 7 días consecutivos
    - 💪 "Mitad del camino" — Completar día 20
    - 👑 "Amor incondicional" — Completar los 40 días
    - 🎯 "Día perfecto" — 7 días seguidos sin saltar
    - Y más...
25. **Animación de logro** — Modal con confetti + carta animada al desbloquear
26. **Página de estadísticas** — Dashboard completo con:
    - Círculo de progreso animado
    - Grid de insignias
    - Racha actual
    - Mood chart semanal

**Archivos creados/modificados:** js/stats.js, css/pages.css, js/app.js (integrar insignias)

**Verificación:**
- Completar días 1-3 → ver progreso actualizado
- Insignia "Primer paso" se desbloquea
- Estadísticas muestran datos correctos
- Racha se calcula bien

---

### 🟠 FASE 5: Experiencia pulida y PWA
*Entrega: app completa con todas las features, offline, instalable*

**Tareas:**

27. **sw.js** — Service Worker:
    - Cachear todos los assets al primer load
    - Estrategia Cache-First para contenido estático
    - Estrategia Network-First para futura API (reservado)
28. **manifest.json** — Completar con:
    - Name, short_name, description
    - Icons 192x192, 512x512
    - theme_color, background_color
    - display: standalone
    - start_url
29. **Pantalla de bienvenida (onboarding)** — Primera vez que abre:
    - 3 slides explicativos con swipe
    - "Comenzar desafío" → inicia día 1
30. **Modo lectura** — Full-screen al leer el contenido del día, con progreso de scroll
31. **Notificaciones (recordatorios)** — Usar Notification API:
    - Recordatorio diario a las 8pm
    - "¿Cómo te fue con tu reto de amor hoy?"
32. **Exportar diario** — Botón en settings para descargar JSON
33. **Reset/Renovar** — Opción para empezar de nuevo (con confirmación)
34. **Pantalla de carga (splash)** — Animación personalizada con el logo/corazón

**Archivos creados/modificados:** sw.js, manifest.json, js/ (refactor), css/pages.css

**Verificación:**
- Lighthouse audit: PWA score ≥ 90
- App funciona offline (desconectar WiFi, recargar)
- Instalar en Android / Chrome
- Exportar diario → archivo JSON válido

---

### 🔴 FASE 6: Bonus — Extras que elevan la app
*Entrega: detalles que hacen la app memorable*

35. **Sonidos sutiles** — Click, completar día, desbloquear logro (opcional, con toggle)
36. **Compartir en redes** — Quote del día como imagen generada en canvas
37. **Diario con voz** — Dictado de notas usando Web Speech API (navegadores compatibles)
38. **Multi-idioma** — Soporte español/inglés (estructural, contenido del libro en español primero)
39. **Widget de frase del día** — En el home, frase rotativa del libro
40. **Modo "Carta de amor"** — Al completar todos los días, pantalla especial con resumen del viaje

---

## 📊 Timeline estimado

| Fase | Descripción | Archivos | Tamaño estimado |
|------|-------------|----------|-----------------|
| 🟢 F1 | Fundación visual | ~12 | ~350 líneas CSS + JS |
| 🟡 F2 | Datos + vista día | ~3 | ~200 líneas JS (datos) + render |
| 🔵 F3 | Sistema diario | ~4 | ~300 líneas JS + CSS |
| 🟣 F4 | Stats + logros | ~3 | ~250 líneas JS + CSS |
| 🟠 F5 | PWA + pulido | ~5 | ~200 líneas |
| 🔴 F6 | Extras | ~3 | ~150 líneas |

**Total estimado:** ~1,500-2,000 líneas de código

---

## 🧪 Verificación y calidad

| Aspecto | Estándar |
|---------|----------|
| **MobileFirst** | Diseñar para 375px primero, luego tablet/desktop |
| **Performance** | Lighthouse > 90 en todas las categorías |
| **Animaciones** | Solo CSS (no JS para anim) cuando sea posible, 60fps |
| **Accesibilidad** | ARIA labels, contraste suficiente, focus visible |
| **Offline** | Service Worker cachea todo, IndexedDB para datos usuario |
| **Responsive** | 375px → 1440px sin breakpoints rotos |

---

## 🚀 Ejecución

**Modo de entrega:** Fase por fase (user-verification-gated)

1. Entrego una fase completa y funcional
2. Tú la pruebas en mobile (o Chrome DevTools)
3. Me dices si continuar o ajustar
4. Paso a la siguiente fase

**¿Empezamos con la Fase 1?** 🚀
