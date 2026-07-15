// =========================================================================
// 📑 MANIFIESTO DE RUTAS DEFINITIVO
// Este archivo actúa como índice. Al añadir una ruta aquí, se creará el botón.
// El archivo .js detallado solo se descargará cuando el usuario haga clic.
// 
// Valores válidos para el campo "eje":
// - "central"
// - "norte"
// - "baja-alta"
// - "alta-baja"
// =========================================================================
const rutasManifest = {
  "santa-catalina-san-telmo": {
    "titulo": "Santa Catalina a San Telmo",
    "eje": "central"
  },
  "castillo-mata-canodromo": {
    "titulo": "Castillo de Mata a Canódromo",
    "eje": "baja-alta"
  },
  "canodromo-castillo-mata": {
    "titulo": "Canódromo a Castillo de Mata",
    "eje": "alta-baja"
  },
  "las-arenas-belen-maria": {
    "titulo": "Las Arenas a Belén María",
    "eje": "norte"
  }

  // =======================================================================
  // 💡 PLANTILLA PARA AÑADIR NUEVAS RUTAS (Copiar y pegar abajo)
  // =======================================================================
  /*
  ,"id-de-tu-nueva-ruta": {
    "titulo": "Nombre Visible en el Botón",
    "eje": "central"
  }
  */
};
