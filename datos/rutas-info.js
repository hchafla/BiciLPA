// datos/rutas-info.js

/**
 * Información semántica y editorial de las rutas ciclistas de LPGC.
 * Los IDs coinciden exactamente con el atributo 'data-id' de tu HTML y tus trazados.
 */
const datosRutasInfo = {
    "santa-catalina-san-telmo": {
        eje: "central",
        titulo: "Eje Central · Avenida Marítima",
        subtitulo: "Parque Santa Catalina ⬌ Parque San Telmo",
        dificultad: "facil",
        distancia: "4,8 km",
        tiempo: "18-25 min",
        desnivel: "Llana",
        descripcion: "La principal columna vertebral del ciclismo urbano en Las Palmas de Gran Canaria. Conecta Santa Catalina con Triana, y viceversa de forma rápida, cómoda y completamente por carril bici, enlazando con estaciones de Sítycleta.",
        etiquetas: [
            "🚲 Ideal para principiantes",
            "🛣️ Carril bici segregado"
        ],
        consejos: [
            {
                icono: "🚲",
                titulo: "Ideal para iniciarse",
                texto: "Perfecta para estrenarse en la ciudad."
            },
            {
                icono: "⚠️",
                titulo: "Precaución en Alcaravaneras",
                texto: "Peatones cruzando el carril bici."
            },
            {
                icono: "❗",
                titulo: "Fin del carril bici",
                texto: "A la altura de la Biblioteca Pública del Estado el carril bici termina de forma abrupta."
            },
            {
                icono: "🌬️",
                titulo: "Viento",
                texto: "De cara en dirección norte."
            }
        ]
    },

    "castillo-mata-canodromo": {
        eje: "baja-alta",
        titulo: "Eje Ciudad Baja · Ciudad Alta",
        subtitulo: "Castillo de Mata ⮕ Parque del Canódromo",
        dificultad: "moderado",
        distancia: "3,9 km",
        tiempo: "12-13 min ⚡ · 20 min 🚲",
        desnivel: "+115 m",
        descripcion: "La forma más cómoda de conectar la ciudad baja con la ciudad alta siguiendo el itinerario ciclista existente. Une dos estaciones de eSítycleta mediante un recorrido continuo que evita las rampas más exigentes.",
        etiquetas: [
            "⚡ Ideal para eSítycleta",
            "⛰️ Pendiente moderada",
            "🛣️ Ciclovía 30 (calzada compartida)"
        ],
        consejos: [
            {
                icono: "⚡",
                titulo: "Asistencia eléctrica",
                texto: "Muy recomendable con bici eléctrica."
            },
            {
                icono: "🚲",
                titulo: "Con bici convencional",
                texto: "Requiere una condición física mínima, especialmente en la subida por el Paseo de San Antonio."
            },
            {
                icono: "🚦",
                titulo: "Vía compartida",
                texto: "Aunque el límite es de 30 km/h, mantén una posición visible en el carril."
            }
        ]
    },

    "canodromo-castillo-mata": {
        eje: "alta-baja",
        titulo: "Eje Ciudad Alta · Ciudad Baja",
        subtitulo: "Parque del Canódromo ⮕ Castillo de Mata",
        dificultad: "facil",
        distancia: "3,9 km",
        tiempo: "10-12 min",
        desnivel: "Descenso",
        descripcion: "Recorrido hacia ciudad baja. Gracias al descenso prácticamente continuo, permite llegar a Castillo de Mata de forma rápida y cómoda, siendo una opción ideal para bicicletas convencionales.",
        etiquetas: [
            "🚲 Descenso cómodo",
            "🛣️ Ciclovía 30 + Calzada + Carril bici"
        ],
        consejos: [
            {
                icono: "💡",
                titulo: "Atajo recomendado",
                texto: "El recorrido abandona momentáneamente el itinerario para bajar por la calle Pepe García Fajardo."
            },
            {
                icono: "⚠️",
                titulo: "Control de velocidad",
                texto: "Aunque la inercia te invite a acelerar, modera la velocidad."
            },
            {
                icono: "🚦",
                titulo: "Atención en las intersecciones",
                texto: "Los coches pueden no prever tu velocidad en descenso."
            }
        ]
    },
    "las-arenas-belen-maria": {
    eje: "norte",
    titulo: "Eje Norte · Avenida Marítima",
    subtitulo: "CC Las Arenas ⬌ Belén María (La Isleta)",
    dificultad: "facil",
    distancia: "4,2 km",
    tiempo: "15-20 min",
    desnivel: "Llana",
    descripcion: "Uno de los recorridos más cómodos de la ciudad para desplazarse en bicicleta. Une el CC Las Arenas con Guanarteme, Mesa y López, Santa Catalina y Belén María siguiendo casi en su totalidad carriles bici y vías ciclistas, conectando además con numerosas estaciones de Sítycleta y algunos de los principales puntos de interés de la ciudad.",
    etiquetas: [
        "🚲 Ideal para principiantes",
        "🌊 Recorrido junto al mar"
    ],
    consejos: [
        {
            icono: "🚲",
            titulo: "Ruta muy cómoda",
            texto: "Prácticamente todo el recorrido discurre por carril bici o vías ciclistas de baja dificultad."
        },
        {
            icono: "🚧",
            titulo: "Obras en Santa Catalina",
            texto: "Actualmente el carril bici permanece cortado. Sigue la acera bici de Secretario Artiles y continúa por Luis Morote."
        },
        {
            icono: "⚠️",
            titulo: "Fin temporal del carril bici",
            texto: "En la zona de Santa Catalina será necesario incorporarse a la calzada durante un pequeño tramo. Circula con precaución."
        },
        {
            icono: "🌬️",
            titulo: "Viento",
            texto: "Con alisio es habitual encontrar viento de cara en dirección hacia Belén María."
        }
    ]
};

// =========================================================================
// EXPOSICIÓN DE LA VARIABLE GLOBAL REQUERIDA POR EL HTML
// =========================================================================
// Mapea directamente el objeto al nombre exacto que espera el script del mapa.
const rutasInfo = datosRutasInfo;
