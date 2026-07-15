// datos/rutas/canodromo-castillo-mata.js

// =========================================================================
// 1. INFORMACIÓN EDITORIAL Y SEMÁNTICA
// =========================================================================
const datosRutasInfo = {
    "canodromo-castillo-mata": {
        eje: "alta-baja",
        titulo: "Eje Ciudad Alta · Ciudad Baja",
        subtitulo: "Parque del Canódromo ⮕ Castillo de Mata",
        dificultad: "facil",
        distancia: "3,9 km",
        tiempo: "10-12 min",
        desnivel: "-115 m",
        descripcion: "El sentido inverso de bajada desde el Parque del Canódromo hasta la zona del Castillo de Mata. Una ruta rápida y cómoda para descender de Ciudad Alta a Ciudad Baja aprovechando el desnivel favorable de la ciudad.",
        etiquetas: [
            "📉 Descenso continuo",
            "🚲 Apto para cualquier bicicleta",
            "🛣️ Ciclovía 30 (calzada compartida)"
        ],
        consejos: [
            {
                icono: "📉",
                titulo: "Controla la velocidad",
                texto: "El desnivel es favorable, modera tu velocidad en las bajadas pronunciadas."
            },
            {
                icono: "🚦",
                titulo: "Tráfico compartido",
                texto: "Recuerda que circulas por ciclovía compartida con vehículos a un máximo de 30 km/h."
            },
            {
                icono: "🛑",
                titulo: "Intersecciones",
                texto: "Presta especial atención en los cruces y pasos de peatones durante el descenso."
            }
        ]
    }
};

// =========================================================================
// 2. GEOMETRÍA Y GEODATOS (GeoJSON)
// =========================================================================
const datosRutasTrazados = {
    "canodromo-castillo-mata": {
        "nombre": "Canódromo - Castillo de Mata",
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
                            [-15.4339968, 28.1126453],
                            [-15.4337656, 28.1122906],
                            [-15.4335847, 28.1120468],
                            [-15.4334443, 28.11119413],
                            [-15.4333359, 28.1117861],
                            [-15.4332735, 28.1117378],
                            [-15.4330772, 28.1118367],
                            [-15.4314167, 28.1127184],
                            [-15.4295387, 28.1136917],
                            [-15.4305561, 28.1151986],
                            [-15.4301404, 28.115819],
                            [-15.4300942, 28.1159632],
                            [-15.4299913, 28.116508],
                            [-15.4299085, 28.1166896],
                            [-15.4297805, 28.1168814],
                            [-15.4295939, 28.1170714],
                            [-15.4294092, 28.1172174],
                            [-15.429264, 28.1172921],
                            [-15.4289608, 28.1173141],
                            [-15.4286799, 28.1172276],
                            [-15.4285337, 28.1170986],
                            [-15.4284105, 28.116934],
                            [-15.428347, 28.1168203],
                            [-15.4282604, 28.1166234],
                            [-15.4282797, 28.1164995],
                            [-15.4282932, 28.1162611],
                            [-15.4283124, 28.116032],
                            [-15.4283201, 28.1158165],
                            [-15.4283201, 28.115657],
                            [-15.4282951, 28.1156111],
                            [-15.4282393, 28.1155789],
                            [-15.4281816, 28.1155636],
                            [-15.4281104, 28.1155517],
                            [-15.4280142, 28.1155433],
                            [-15.4279103, 28.1155331],
                            [-15.4278564, 28.1155127],
                            [-15.4278602, 28.1153023],
                            [-15.4278468, 28.1151292],
                            [-15.4277967, 28.1148983],
                            [-15.4277313, 28.1146557],
                            [-15.4276582, 28.1143977],
                            [-15.4276159, 28.1142229],
                            [-15.4275678, 28.1140141],
                            [-15.4274946, 28.1137409],
                            [-15.4274273, 28.1135576],
                            [-15.4274365, 28.1134134],
                            [-15.4272734, 28.1132946],
                            [-15.4271329, 28.113113],
                            [-15.4269078, 28.1128635],
                            [-15.4266807, 28.112631],
                            [-15.4264152, 28.1123458],
                            [-15.4260932, 28.1119967],
                            [-15.4258238, 28.1117353],
                            [-15.4256198, 28.1115605],
                            [-15.4253581, 28.1113314],
                            [-15.4245615, 28.110639],
                            [-15.4242267, 28.110347],
                            [-15.4243922, 28.1101179],
                            [-15.4237341, 28.1099855],
                            [-15.4234936, 28.1098158],
                            [-15.4232473, 28.1096495],
                            [-15.4230126, 28.1094577],
                            [-15.4227663, 28.1092405],
                            [-15.42257, 28.109064],
                            [-15.4224069, 28.1089116],
                            [-15.4222087, 28.1087843],
                            [-15.4220932, 28.1087164],
                            [-15.4221951, 28.1086621],
                            [-15.42187, 28.1085619],
                            [-15.4217815, 28.1084805],
                            [-15.4217142, 28.1083905],
                            [-15.4216507, 28.1082853],
                            [-15.42165, 28.1082835]
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
