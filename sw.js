self.addEventListener('install', function (event) {
    caches.open('sw-cashe').then(function (cache) {
      return cache.add('index.html',
        'Batchub.js', 'assets/Batchub_Translations.csv',
        // Fonts
        'assets/game_over.ttf', 'assets/neutra_text_bold.otf', 'assets/open_dyslexic_bold.otf',
        'assets/open_dyslexic_regular.otf',
        // Libraries
        'libraries/Button.js', 'libraries/Collision.js', 'libraries/ColorHandler.js', 'CookieMonster.js',
        'Misc.js', 'NumberPad.js', 'libraries/p5.min.js', 'libraries/Scenes.js', 'libraries/Translator.js'
        );
    });
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response {
            return response || fetch(event.request);
        }))
    );
});