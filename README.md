# OSINT-HUB
# 🕵️‍♂️ OSINT HUB · Matrix Nexus

**Directorio de herramientas OSINT** con interfaz tipo Matrix, verificación manual de estado y temas personalizables (oscuro, claro y ámbar).  
Sin envío de datos, sin formularios externos, completamente autónomo.

## ✨ Características
- 🎨 **Tres temas visuales**:
  - 🌙 **Matrix** (negro / verde neón)
  - ☀️ **Claro** (blanco / verde oscuro)
  - 🟠 **Ámbar** (marrón / naranja, estilo terminal retro)
- 🔍 **Búsqueda en tiempo real** por nombre o descripción.
- 🧩 **Filtros rápidos** por categoría.
- 📂 **10 categorías** con más de **63 herramientas OSINT**:
  - Búsqueda de dominios / WHOIS (7)
  - Redes sociales (6)
  - Correos electrónicos y usuarios (7)
  - Geolocalización y mapas (7)
  - Archivos web (Wayback Machine, Archive.today, etc.) (6)
  - Imágenes (metadatos + búsqueda inversa) (7)
  - Código fuente y repositorios (6)
  - Datos públicos gubernamentales (6)
  - Foros y dark web (superficie) (5)
  - Motores de búsqueda de infraestructura (Shodan, Censys, etc.) (6)
    
- ✅ **Verificación manual de estado**: cada herramienta tiene un botón `🔄 Verificar` que comprueba si la URL responde (método HEAD, timeout 5s). El estado se guarda en tu navegador (`localStorage`) y persiste entre sesiones.
- 🔗 **URL persistente**: los filtros y la búsqueda se reflejan en la URL, puedes compartir enlaces directos.
- 🚫 **Sin envío de datos**: no hay formularios de reporte, no hay exportaciones CSV/JSON, no se envía nada a ningún servidor. Todo queda local en tu máquina.
- 📱 **Diseño responsive**: funciona en móviles, tablets y escritorio.
- 🌍 **Desplegable en GitHub Pages** (o cualquier servidor estático).

📁 Estructura del proyecto
osint-matrix-hub/
├── index.html      # Aplicación principal (HTML, CSS, JS todo en uno)
└── README.md       # Este archivo

🧠 Tecnologías utilizadas
HTML5 semántico
CSS3 (transiciones, flexbox, grid, pseudoelementos)
JavaScript vanilla (ES6+)
Fetch API con no-cors y timeout para verificación de URLs
localStorage para guardar preferencias de tema y estados personalizados
URLSearchParams para persistencia de filtros en la URL

