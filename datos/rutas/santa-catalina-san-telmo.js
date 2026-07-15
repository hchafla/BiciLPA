// datos/rutas/santa-catalina-san-telmo.js

// =========================================================================
// 1. INFORMACIÓN EDITORIAL Y SEMÁNTICA
// =========================================================================
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
    }
};

// =========================================================================
// 2. GEOMETRÍA Y GEODATOS (GeoJSON)
// =========================================================================
const datosRutasTrazados = {
    "santa-catalina-san-telmo": {
        "nombre": "Eje Central · Avenida Marítima",
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
                            [-15.4301501, 28.1405694],
                            [-15.429394, 28.1406435],
                            [-15.429268, 28.1400435],
                            [-15.4287135, 28.1401175],
                            [-15.4282431, 28.1403027],
                            [-15.4280078, 28.1402286],
                            [-15.4278566, 28.1398064],
                            [-15.4278398, 28.1395323],
                            [-15.4281339, 28.1391026],
                            [-15.4285203, 28.1385396],
                            [-15.4288732, 28.1379766],
                            [-15.4288816, 28.1372728],
                            [-15.428804, 28.1352003],
                            [-15.4288886, 28.1347899],
                            [-15.4291678, 28.134111],
                            [-15.4293993, 28.133432],
                            [-15.4295739, 28.1329321],
                            [-15.4296924, 28.1322307],
                            [-15.4296924, 28.1314697],
                            [-15.4296816, 28.1304601],
                            [-15.4296786, 28.1294319],
                            [-15.4295526, 28.1290571],
                            [-15.4294196, 28.1287444],
                            [-15.4285115, 28.1276009],
                            [-15.4275866, 28.1261564],
                            [-15.4261894, 28.1242532],
                            [-15.4255316, 28.1233377],
                            [-15.4246662, 28.1221225],
                            [-15.4238345, 28.1213485],
                            [-15.422797, 28.120614],
                            [-15.4214566, 28.1195628],
                            [-15.4207557, 28.1188008],
                            [-15.4219221, 28.1177266],
                            [-15.4187187, 28.1161],
                            [-15.4169265, 28.1137086],
                            [-15.4154792, 28.1117531],
                            [-15.4148242, 28.1108538],
                            [-15.4146036, 28.1105768],
                            [-15.4145863, 28.1102947],
                            [-15.4147242, 28.1101471],
                            [-15.4150687, 28.1100663],
                            [-15.4153202, 28.1100076],
                            [-15.415463, 28.1099417],
                            [-15.4157116, 28.1100809],
                            [-15.4159452, 28.1101177],
                            [-15.4161215, 28.1099417]
                        ]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "tipo": "advertencia",
                        "descripcion": "Cuidado con entrada y salida de coches + peatones cruzando el carril"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-15.4295016, 28.1330401]
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "tipo": "advertencia",
                        "descripcion": "Fin del carril bici"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-15.4161417, 28.1099303]
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
