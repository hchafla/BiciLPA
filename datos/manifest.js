// =========================================================================
// CONTENEDORES GLOBALES ÚNICOS (Evita errores de redeclaración "const")
// =========================================================================
window.rutasInfo = window.rutasInfo || {};
window.rutasTrazados = window.rutasTrazados || {};

// =========================================================================
// 🛒 REGISTRO DE RUTAS Activas
// Cuando crees una nueva ruta (ej. "datos/rutas/mi-nueva-ruta.js"), 
// solo tienes que añadir el string con su nombre exacto a esta lista.
// =========================================================================
const rutas = [
    "santa-catalina-san-telmo",
    "castillo-mata-canodromo",
    "canodromo-castillo-mata",
    "las-arenas-belen-maria"
    // "mi-nueva-ruta" <-- Añade las nuevas rutas aquí
];

// =========================================================================
// CARGADOR DINÁMICO Y SECUENCIAL
// =========================================================================
const cargarScriptsRutas = async () => {
    const cargarScript = (nombre) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = `datos/rutas/${nombre}.js`;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error(`Error cargando la ruta: ${nombre}`));
            document.head.appendChild(script);
        });
    };

    try {
        // Carga todos los archivos .js de la lista en paralelo
        await Promise.all(rutas.map(nombre => cargarScript(nombre)));
        
        // Emite un evento global indicando al mapa que ya puede renderizar de forma segura
        const eventoDataListo = new CustomEvent("rutasCargadas");
        document.dispatchEvent(eventoDataListo);
    } catch (error) {
        console.error("Fallo crítico al cargar los datos de las rutas:", error);
    }
};

// Iniciar el proceso de inyección de scripts
cargarScriptsRutas();
