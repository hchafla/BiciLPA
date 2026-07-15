// datos/rutas/castillo-mata-canodromo.js
(function () {
    "use strict";

    const datos = {
        id: "castillo-mata-canodromo",
        eje: "baja-alta",
        titulo: "Castillo de Mata ⮕ Parque del Canódromo",
        subtitulo: "",
        dificultad: "moderado",
        distancia: "3,9 km",
        tiempo: "12-13 min ⚡ · 20 min 🚲",
        desnivel: "+115 m",
        descripcion: "La forma más cómoda de subir desde Ciudad Baja hasta Ciudad Alta utilizando el itinerario ciclista existente. Conecta dos estaciones de eSítycleta evitando las rampas más duras de otros accesos.",
        etiquetas: [
            "⚡ Ideal para eSítycleta",
            "⛰️ Subida constante",
            "🛣️ Ciclovía 30"
        ],
        consejos: [
            {
                icono: "⚡",
                titulo: "Asistencia eléctrica",
                texto: "Muy recomendable con bici eléctrica"
            },
            {
                icono: "🚲",
                titulo: "Con bici convencional",
                texto: "La subida es continua pero asumible si tienes un mínimo de forma física. Puedes tomártela con calma"
            },
            {
                icono: "🚗",
                titulo: "Comparte la calzada",
                texto: "Circulas por calles 30 junto a otros vehículos. Mantén una posición visible y evita pegarte al borde derecho"
            }
        ],
        geojson: {
            type: "FeatureCollection",
            features: [
                {
                    type: "Feature",
                    properties: { tipo: "linea" },
                    geometry: {
                        type: "LineString",
                        coordinates: [
                            [-15.421768, 28.108054],
[-15.4216718, 28.1080759],
[-15.4215972, 28.108002],
[-15.4215941, 28.1079061],
[-15.4217649, 28.1077883],
[-15.4218799, 28.1077335],
[-15.4220041, 28.1076732],
[-15.4220973, 28.1076102],
[-15.4222122, 28.1074513],
[-15.4223022, 28.1072897],
[-15.4223426, 28.1071609],
[-15.4223861, 28.1071089],
[-15.4225103, 28.1071281],
[-15.4225916, 28.1072],
[-15.4225849, 28.1073089],
[-15.4225538, 28.1074842],
[-15.4223807, 28.1084919],
[-15.4224022, 28.1085796],
[-15.422464, 28.1086792],
[-15.4225823, 28.1088002],
[-15.4228592, 28.109016],
[-15.4242088, 28.1098649],
[-15.4258192, 28.1108182],
[-15.4262171, 28.111117],
[-15.4266096, 28.1115651],
[-15.4268032, 28.1117311],
[-15.4270209, 28.1118853],
[-15.4272387, 28.1120465],
[-15.4274484, 28.112222],
[-15.4276608, 28.1124093],
[-15.427814, 28.1125966],
[-15.4280777, 28.1130215],
[-15.4282901, 28.1133654],
[-15.4283896, 28.113529],
[-15.4287418, 28.1140839],
[-15.4288063, 28.1140957],
[-15.4295375, 28.1137045],
[-15.4298279, 28.1141123],
[-15.4313195, 28.1133223],
[-15.4334463, 28.1121875],
[-15.4336157, 28.1121733],
[-15.4337904, 28.1122065]
                        ]
                    }
                }
            ]
        }
    };

    // Asignación al loader de rutas.html para renderizado inmediato
    window.rutaActivaDatos = datos;
})();
