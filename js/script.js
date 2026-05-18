// ========== LISTA COMPLETA DE HERRAMIENTAS (63 herramientas) ==========
const toolsData = {
    "Búsqueda de dominios / WHOIS": [
        { name: "Whois.domaintools", desc: "WHOIS completo e histórico.", url: "https://whois.domaintools.com", status: "green" },
        { name: "SecurityTrails", desc: "DNS histórico y subdominios.", url: "https://securitytrails.com", status: "green" },
        { name: "ViewDNS.info", desc: "Múltiples herramientas DNS.", url: "https://viewdns.info", status: "green" },
        { name: "ICANN Lookup", desc: "WHOIS oficial.", url: "https://lookup.icann.org", status: "green" },
        { name: "DNSDumpster", desc: "Mapeo de subdominios gratuito.", url: "https://dnsdumpster.com", status: "green" },
        { name: "DNSlytics", desc: "Historial de dominios y reputación.", url: "https://dnslytics.com", status: "green" },
        { name: "WhoXY (WhoisXML)", desc: "API de WHOIS.", url: "https://whois.whoisxmlapi.com", status: "green" }
    ],
    "Redes sociales": [
        { name: "Social Searcher", desc: "Búsqueda en redes sociales.", url: "https://www.social-searcher.com", status: "green" },
        { name: "Social Analyzer", desc: "API + web para +1000 redes.", url: "https://github.com/weisk/social-analyzer", status: "green" },
        { name: "WhatsMyName", desc: "Verifica existencia de username.", url: "https://whatsmyname.app", status: "green" },
        { name: "Namechk", desc: "Disponibilidad de usuario.", url: "https://namechk.com", status: "green" },
        { name: "Maigret", desc: "Buscador de usuarios CLI/web.", url: "https://maigret.secapps.com", status: "green" },
        { name: "LinkedIn Sales Nav", desc: "Búsqueda perfiles (limitado).", url: "https://www.linkedin.com/sales/search", status: "yellow" }
    ],
    "Correos electrónicos y usuarios": [
        { name: "Hunter.io", desc: "Buscador de correos por dominio.", url: "https://hunter.io", status: "green" },
        { name: "EmailRep.io", desc: "Reputación de email.", url: "https://emailrep.io", status: "green" },
        { name: "Have I Been Pwned", desc: "Verifica filtraciones.", url: "https://haveibeenpwned.com", status: "green" },
        { name: "DeHashed", desc: "Base de filtraciones.", url: "https://dehashed.com", status: "green" },
        { name: "MailTester", desc: "Valida si un email existe.", url: "https://mailtester.com", status: "green" },
        { name: "PhoneInfoga", desc: "OSINT de números telefónicos.", url: "https://sundowndev.github.io/phoneinfoga", status: "yellow" },
        { name: "Epieos", desc: "Búsqueda inversa email/teléfono.", url: "https://epieos.com", status: "green" }
    ],
    "Geolocalización y mapas": [
        { name: "Google Maps", desc: "Mapas, Street View.", url: "https://maps.google.com", status: "green" },
        { name: "Wikimapia", desc: "Mapa colaborativo.", url: "https://wikimapia.org", status: "green" },
        { name: "Pic2Map", desc: "Extrae coordenadas EXIF.", url: "https://pic2map.com", status: "green" },
        { name: "SunCalc", desc: "Posición del sol.", url: "https://suncalc.org", status: "green" },
        { name: "GeoCreepy", desc: "Geolocalización de Telegram.", url: "https://github.com/ikkz/geocreepy", status: "green" },
        { name: "OpenStreetMap", desc: "Mapas libres.", url: "https://www.openstreetmap.org", status: "green" },
        { name: "Google Earth", desc: "Imágenes satelitales.", url: "https://earth.google.com", status: "green" }
    ],
    "Archivos web (Wayback Machine)": [
        { name: "Wayback Machine", desc: "Archivo web gigante.", url: "https://archive.org/web/", status: "green" },
        { name: "Archive.today", desc: "Capturas instantáneas.", url: "https://archive.is", status: "green" },
        { name: "Ghostarchive", desc: "Archiva páginas.", url: "https://ghostarchive.org", status: "green" },
        { name: "OldWeb.today", desc: "Emulación de navegadores.", url: "https://oldweb.today", status: "green" },
        { name: "Perma.cc", desc: "Enlaces permanentes.", url: "https://perma.cc", status: "green" },
        { name: "Arquivo.pt", desc: "Archivo portugués.", url: "https://arquivo.pt", status: "green" }
    ],
    "Imágenes (metadatos + búsqueda inversa)": [
        { name: "Google Images", desc: "Búsqueda inversa.", url: "https://images.google.com", status: "green" },
        { name: "TinEye", desc: "Búsqueda por firma.", url: "https://tineye.com", status: "green" },
        { name: "VerEXIF", desc: "Visualiza metadatos EXIF.", url: "https://www.verexif.com", status: "green" },
        { name: "FotoForensics", desc: "Análisis forense.", url: "https://fotoforensics.com", status: "green" },
        { name: "Yandex Images", desc: "Buscador inverso ruso.", url: "https://yandex.com/images", status: "green" },
        { name: "ExifTool online", desc: "Demo web de ExifTool.", url: "https://exif.tools", status: "green" },
        { name: "Bing Visual Search", desc: "Búsqueda por imagen.", url: "https://www.bing.com/visualsearch", status: "green" }
    ],
    "Código fuente y repositorios": [
        { name: "GitHub Search", desc: "Búsqueda en repositorios.", url: "https://github.com/search", status: "green" },
        { name: "GitLab Explore", desc: "Repositorios públicos.", url: "https://gitlab.com/explore", status: "green" },
        { name: "SourceGraph", desc: "Búsqueda semántica.", url: "https://sourcegraph.com/search", status: "green" },
        { name: "PublicWWW", desc: "Busca fragmentos en webs.", url: "https://publicwww.com", status: "green" },
        { name: "SearchCode", desc: "Motor de código fuente.", url: "https://searchcode.com", status: "green" },
        { name: "Bitbucket Search", desc: "Repositorios Atlassian.", url: "https://bitbucket.org/repo/all", status: "green" }
    ],
    "Datos públicos gubernamentales": [
        { name: "Data.gov", desc: "Datos abiertos EE.UU.", url: "https://data.gov", status: "green" },
        { name: "European Data Portal", desc: "Datos UE.", url: "https://data.europa.eu", status: "green" },
        { name: "INE España", desc: "Instituto Nacional Estadística.", url: "https://www.ine.es", status: "green" },
        { name: "World Bank Open Data", desc: "Datos económicos.", url: "https://data.worldbank.org", status: "green" },
        { name: "Gobierno Abierto México", desc: "Datos públicos mexicanos.", url: "https://datos.gob.mx", status: "green" },
        { name: "UK Data Service", desc: "Datos Reino Unido.", url: "https://ukdataservice.ac.uk", status: "green" }
    ],
    "Foros y dark web (superficie)": [
        { name: "Reddit r/OSINT", desc: "Comunidad OSINT activa.", url: "https://www.reddit.com/r/OSINT", status: "green" },
        { name: "Hack Forums", desc: "Foro histórico de hacking.", url: "https://hackforums.net", status: "green" },
        { name: "Dark Web Wiki", desc: "Listado de sitios .onion (Tor).", url: "https://dark.fail", status: "yellow" },
        { name: "Ahmia", desc: "Buscador de servicios onion.", url: "https://ahmia.fi", status: "green" },
        { name: "Wilders Security", desc: "Foro de seguridad.", url: "https://www.wilderssecurity.com", status: "green" }
    ],
    "Motor de Búsqueda de Infraestructura": [
        { name: "Shodan", desc: "Motor de dispositivos conectados.", url: "https://www.shodan.io", status: "green" },
        { name: "Censys", desc: "Descubrimiento de activos.", url: "https://censys.io", status: "green" },
        { name: "ZoomEye", desc: "Búsqueda de dispositivos.", url: "https://www.zoomeye.org", status: "green" },
        { name: "Criminal IP", desc: "Superficie de ataque.", url: "https://www.criminalip.io", status: "green" },
        { name: "FullHunt", desc: "Monitorización de ataque.", url: "https://fullhunt.io", status: "green" },
        { name: "FOFA", desc: "Motor de activos en internet.", url: "https://en.fofa.info", status: "green" }
    ]
};

const categoriesOrder = Object.keys(toolsData);
const totalTools = Object.values(toolsData).reduce((acc, arr) => acc + arr.length, 0);

// Estado
let currentCategory = "all";
let searchTerm = "";

// Elementos DOM
const container = document.getElementById("categoriesContainer");
const statsSpan = document.getElementById("statsCounter");
const searchInput = document.getElementById("searchInput");
const filterDiv = document.getElementById("filterButtons");

// Helper: notificaciones toast
function showToast(msg, isError = false) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.style.borderColor = isError ? "#f33" : "#0f0";
    toast.style.color = isError ? "#faa" : "#0f0";
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Verificar URL con fetch (timeout 5s)
async function checkUrl(url) {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        await fetch(url, { method: 'HEAD', mode: 'no-cors', signal: controller.signal });
        clearTimeout(timeoutId);
        return true;
    } catch (e) {
        return false;
    }
}

// Actualizar estado de una herramienta
async function verifyAndUpdate(cat, toolName, url, cardElement) {
    const statusSpan = cardElement.querySelector('.status');
    statusSpan.innerText = "🟡 verificando...";
    statusSpan.className = "status yellow";
    const isAlive = await checkUrl(url);
    if (isAlive) {
        statusSpan.innerText = "🟢 activo";
        statusSpan.className = "status green";
        const tool = toolsData[cat].find(t => t.name === toolName);
        if (tool) tool.status = "green";
    } else {
        statusSpan.innerText = "🔴 caído";
        statusSpan.className = "status red";
        const tool = toolsData[cat].find(t => t.name === toolName);
        if (tool) tool.status = "red";
    }
    localStorage.setItem("osint_custom_status", JSON.stringify(toolsData));
    showToast(`Verificado: ${toolName} → ${isAlive ? "activo" : "caído"}`, !isAlive);
}

// Renderizado principal
function render() {
    container.innerHTML = "";
    let categoriesToShow = (currentCategory === "all") ? categoriesOrder : [currentCategory];
    let visibleCount = 0;

    for (let cat of categoriesToShow) {
        let tools = toolsData[cat];
        if (!tools) continue;
        let filtered = tools;
        if (searchTerm) {
            filtered = tools.filter(t => t.name.toLowerCase().includes(searchTerm) || t.desc.toLowerCase().includes(searchTerm));
        }
        if (filtered.length === 0) continue;
        visibleCount += filtered.length;

        const catDiv = document.createElement("div");
        catDiv.className = "category";
        catDiv.innerHTML = `<h2>📁 ${cat}</h2><div class="tools-grid"></div>`;
        container.appendChild(catDiv);
        const grid = catDiv.querySelector(".tools-grid");

        filtered.forEach(tool => {
            const statusClass = tool.status === "green" ? "green" : (tool.status === "yellow" ? "yellow" : "red");
            const statusText = tool.status === "green" ? "🟢 activo" : (tool.status === "yellow" ? "🟡 inestable" : "🔴 caído");
            const card = document.createElement("div");
            card.className = "tool-card";
            card.innerHTML = `
                <div class="tool-name">
                    <span>🔧 ${tool.name}</span>
                    <span class="status ${statusClass}">${statusText}</span>
                </div>
                <div class="tool-desc">📄 ${tool.desc}</div>
                <div class="tool-link">🔗 <a href="${tool.url}" target="_blank" rel="noopener noreferrer">${tool.url}</a></div>
                <div class="tool-actions">
                    <button class="verify-btn">🔄 Verificar</button>
                </div>
            `;
            grid.appendChild(card);
            card.querySelector(".verify-btn").addEventListener("click", () => verifyAndUpdate(cat, tool.name, tool.url, card));
        });
    }
    statsSpan.innerText = `🔧 Herramientas: ${visibleCount} / ${totalTools}`;
    if (visibleCount === 0) container.innerHTML = "<div style='text-align:center; padding:40px;'>🔍 No hay coincidencias</div>";
}

// Persistencia en URL
function updateURL() {
    let params = new URLSearchParams();
    if (currentCategory !== "all") params.set("cat", currentCategory);
    if (searchTerm) params.set("search", searchTerm);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, "", newUrl);
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("cat");
    const search = params.get("search");
    if (cat && categoriesOrder.includes(cat)) {
        currentCategory = cat;
        document.querySelectorAll(".filter-btn").forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-category") === cat) btn.classList.add("active");
        });
    } else {
        currentCategory = "all";
        document.querySelectorAll(".filter-btn").forEach(btn => {
            if (btn.getAttribute("data-category") === "all") btn.classList.add("active");
            else btn.classList.remove("active");
        });
    }
    if (search) {
        searchTerm = search;
        searchInput.value = search;
    } else {
        searchTerm = "";
        searchInput.value = "";
    }
    render();
}

// Inicializar filtros
function initFilters() {
    filterDiv.innerHTML = `<button class="filter-btn active" data-category="all">📌 Todas</button>`;
    categoriesOrder.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "filter-btn";
        btn.setAttribute("data-category", cat);
        btn.innerText = cat;
        filterDiv.appendChild(btn);
    });
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.getAttribute("data-category");
            updateURL();
            render();
        });
    });
}

// Cambio de tema
function applyTheme(theme) {
    document.body.classList.remove("light-theme", "amber-theme");
    if (theme === "light") document.body.classList.add("light-theme");
    else if (theme === "amber") document.body.classList.add("amber-theme");
    localStorage.setItem("osint_theme", theme);
    document.querySelectorAll(".theme-btn").forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("data-theme") === theme) btn.classList.add("active");
    });
}

// Cargar preferencias guardadas
function loadPersisted() {
    const savedTheme = localStorage.getItem("osint_theme");
    if (savedTheme && ["dark","light","amber"].includes(savedTheme)) applyTheme(savedTheme);
    else applyTheme("dark");
    const savedStatus = localStorage.getItem("osint_custom_status");
    if (savedStatus) {
        try {
            const parsed = JSON.parse(savedStatus);
            for (let cat in parsed) {
                if (toolsData[cat]) {
                    for (let i=0; i<parsed[cat].length; i++) {
                        if (toolsData[cat][i] && toolsData[cat][i].name === parsed[cat][i].name) {
                            toolsData[cat][i].status = parsed[cat][i].status;
                        }
                    }
                }
            }
        } catch(e) {}
    }
    render();
}

// Eventos
searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value.toLowerCase();
    updateURL();
    render();
});
document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => applyTheme(btn.getAttribute("data-theme")));
});

// Inicialización
initFilters();
loadPersisted();
loadFromURL();
window.addEventListener("popstate", loadFromURL);
