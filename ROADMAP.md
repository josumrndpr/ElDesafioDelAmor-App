# 🗺️ Roadmap — The Love Dare App

> **App:** HTML5 + CSS3 + JavaScript Vanilla  
> **Filosofía:** MobileFirst · Material Design 3 · 100% Offline  
> **Progreso:** [　　　　　　　　　　　　　] 0%

---

## Fases de implementación

### 🟢 FASE 1 — Fundación visual ✅ *(en curso)*
- [x] Crear plan y roadmap
- [ ] Estructura de proyecto
- [ ] Sistema de diseño MD3 (variables CSS)
- [ ] Reset y layout responsive
- [ ] Componentes base (nav, cards, botones)
- [ ] Router SPA con 3 vistas
- [ ] Tema oscuro/claro
- [ ] Animaciones base
- [ ] Página Home con hero y progreso
- [ ] Página Grid de 40 días
- [ ] Página Diario placeholder
- [ ] Service Worker + manifest (PWA básico)

### 🟡 FASE 2 — Contenido del libro y vista de día
- [ ] Data.json con los 40 días
- [ ] Vista de día con lectura + reto + reflexiones
- [ ] Navegación entre días (swipe + flechas)
- [ ] Animación de transición grid → día
**Ruta:** `/journal`

- [x] **JournalView.js** — módulo independiente que carga todas las notas vía `Store.getNotes()`
- [x] **Línea de tiempo** — cards verticales con dot timeline, badge de día, mood, fecha, preview de texto
- [x] **Estado vacío** — diseño limpio con icono y mensaje cuando no hay entradas
- [x] **Navegación** — clic en entrada → navega al día correspondiente
- [x] **Ordenación** — más reciente primero
- [x] **Persistencia** — usa `Store.getNotes()` (localStorage)
- [x] **Cache-busting** — query params `?v=N` en scripts y CSS
- [ ] **Editar/eliminar entradas desde el timeline** (futuro)

### 🟣 FASE 4 — Estadísticas e insignias
- [x] **Dashboard visual** — círculo de progreso SVG, grid 2×2 con métricas clave
- [x] **Gráfico de ánimo semanal** — barras CSS-only con emojis por día
- [x] **Insignias (8 logros)** — sistema check/unlock con badges desbloqueables
- [x] Confeti al desbloquear
- [x] **StatsView.js** — módulo independiente que reemplaza renderDayGrid en ruta /progress

### 🟠 FASE 5 — PWA, exportación y pulido ✅
- [x] Service Worker completo (cache-first + stale-while-revalidate)
- [x] Manifiesto mejorado (shortcuts, scope, screenshots)
- [x] Onboarding primera visita (overlay animado)
- [x] Notificaciones diarias (recordatorio vía Notification API + SW)
- [x] Exportar diario a JSON (descarga de archivo)
- [x] Toast notifications (feedback visual efímero)
- [x] Actualización automática SW (update prompt + reload)

### 🔴 FASE 6 — Extras ✅
- [x] Sonidos sutiles (Web Audio API, toggle persistente)
- [x] Compartir día (Web Share API con fallback copy)
- [x] Dictado por voz (Web Speech API, español)
- [x] Mood 💌 Carta de amor en selector de ánimo

---

## 📐 Principios de diseño

| Principio | Aplicación |
|-----------|-----------|
| MobileFirst | Diseño base 375px → expande a tablet/desktop |
| Material Design 3 | Sistema de colores, tipografía, elevación |
| Offline-first | IndexedDB + Service Worker |
| 60fps animaciones | Solo CSS transforms/opacity |
| Accesibilidad | ARIA labels, contraste, foco visible |

---

## 🎨 Paleta MD3

```
Primary:       #D32F2F  (rojo pasión)
Secondary:     #7B1FA2  (púrpura espiritual)
Tertiary:      #F9A825  (ámbar — logros)
Surface:       #FFFBFE / #1C1B1F
Surface Vt:    #F3EDF7 / #2B2930
Success:       #2E7D32
```

---

## 📁 Estructura del proyecto

```
love-dare-app/
├── index.html
├── manifest.json
├── sw.js
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   ├── animations.css
│   └── pages.css
├── js/
│   ├── app.js
│   ├── data.js
│   ├── store.js
│   ├── ui.js
│   ├── router.js
│   ├── day-view.js
│   ├── journal.js
│   ├── stats.js
│   └── theme.js
└── assets/
    └── icons/
```

> **Última actualización:** Julio 2026
