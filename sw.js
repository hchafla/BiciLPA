const CACHE_NAME = 'bicilpa-v1';

// Páginas y recursos básicos que se guardan para que la app abra
// aunque no haya conexión (no incluye los datos de rutas, que se
// cargan siempre desde la red porque pueden cambiar).
const ARCHIVOS_BASICOS = [
    './index.html',
    './rutas.html',
    './normativa.html',
    './talleres.html',
    './contacto.html',
    './favicon/favicon-32x32.png',
    './favicon/favicon-192x192.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ARCHIVOS_BASICOS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((nombres) =>
            Promise.all(
                nombres
                    .filter((nombre) => nombre !== CACHE_NAME)
                    .map((nombre) => caches.delete(nombre))
            )
        )
    );
    self.clients.claim();
});

// Estrategia: red primero, y si falla (sin conexión), se sirve
// la copia en caché si existe.
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    event.respondWith(
        fetch(event.request)
            .then((respuesta) => {
                const copia = respuesta.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copia));
                return respuesta;
            })
            .catch(() => caches.match(event.request))
    );
});
