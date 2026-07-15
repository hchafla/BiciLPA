// datos/rutas/castillo-mata-canodromo.js

// =========================================================================
// 1. INFORMACIÓN EDITORIAL Y SEMÁNTICA
// =========================================================================
const datosRutasInfo = {
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
    }
};

// =========================================================================
// 2. GEOMETRÍA Y GEODATOS (GeoJSON)
// =========================================================================
const datosRutasTrazados = {
    "castillo-mata-canodromo": {
        "nombre": "Castillo de Mata - Parque del Canódromo",
        "geojson": {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "tipo": "linea"
                    },
                    "geometry": {
                        "type": "LineString",
                        "coordinates": [
                            [-15.4217744, 28.1080794],
                            [-15.4216924, 28.1080764],
                            [-15.4216036, 28.10798],
                            [-15.4216002, 28.1079228],
                            [-15.4217719, 28.1078323],
                            [-15.4218017, 28.1077781],
                            [-15.421952, 28.1077118],
                            [-15.4220443, 28.1076546],
                            [-15.4221263, 28.1075883],
                            [-15.422561, 28.1074496],
                            [-15.4223005, 28.1073321],
                            [-15.422321, 28.1071905],
                            [-15.4223927, 28.1071031],
                            [-15.4225226, 28.1071423],
                            [-15.4225738, 28.1072327],
                            [-15.422567, 28.1073834],
                            [-15.4225362, 28.107531],
                            [-15.4224987, 28.1077269],
                            [-15.4224679, 28.1079318],
                            [-15.4224269, 28.1081397],
                            [-15.4224098, 28.1083085],
                            [-15.4223791, 28.1084983],
                            [-15.4224132, 28.1086249],
                            [-15.4224952, 28.1087243],
                            [-15.4226387, 28.10869],
                            [-15.422789, 28.1089955],
                            [-15.4230179, 28.1091432],
                            [-15.4232878, 28.1093089],
                            [-15.4235406, 28.1094837],
                            [-15.4238959, 28.1096886],
                            [-15.4242239, 28.1098724],
                            [-15.4245416, 28.1100683],
                            [-15.4248764, 28.1102491],
                            [-15.4254126, 28.1105694],
                            [-15.4258841, 28.1108557],
                            [-15.4262018, 28.1111178],
                            [-15.4264615, 28.1114101],
                            [-15.4269944, 28.1118712],
                            [-15.4272643, 28.1120791],
                            [-15.4275752, 28.1123382],
                            [-15.4278006, 28.1126004]
                        ]
                    }
                }
            ]
        }
    }
};

// =========================================================================
// 3. EXPOSICIÓN DE VARIABLES GLOBALES (Para el mapa)
// =========================================================================
const rutasInfo = datosRutasInfo;

const rutasTrazados = (() => {
    const procesadas = {};
    for (const key in datosRutasTrazados) {
        if (Object.prototype.hasOwnProperty.call(datosRutasTrazados, key)) {
            const geojson = datosRutasTrazados[key].geojson;
            const lineaFeature = geojson.features.find(f => f.properties && f.properties.tipo === "linea");
            if (lineaFeature && lineaFeature.geometry && lineaFeature.geometry.coordinates) {
                procesadas[key] = lineaFeature.geometry.coordinates.map(coord => [coord[1], coord[0]]);
            } else {
                procesadas[key] = [];
            }
        }
    }
    return procesadas;
})();
