const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `portfolio-${CACHE_VERSION}`;

// Resources to cache
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/manifest.json',
    '/offline.html',
    // Add other critical assets
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// Activate and clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(name => name.startsWith('portfolio-') && name !== CACHE_NAME)
                        .map(name => caches.delete(name))
                );
            })
            .then(() => self.clients.claim())
    );
});

// Network-first strategy with cache fallback
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                // Cache successful responses
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => cache.put(event.request, responseClone));
                }
                return response;
            })
            .catch(() => {
                // Fallback to cache
                return caches.match(event.request)
                    .then(response => response || caches.match('/offline.html'));
            })
    );
});

// Handle background sync
self.addEventListener('sync', event => {
    if (event.tag === 'sync-forms') {
        event.waitUntil(syncForms());
    }
});

// Background sync function
async function syncForms() {
    try {
        const formData = await getStoredFormData();
        if (formData.length > 0) {
            await Promise.all(formData.map(data => submitForm(data)));
            await clearStoredFormData();
        }
    } catch (error) {
        console.error('Background sync failed:', error);
    }
}
