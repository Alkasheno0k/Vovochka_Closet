self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('vovochka-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/img/banner.jpg',
                // добавьте другие ресурсы
            ]);
        })
    );
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}
</script>
<!-- В начало <body> -->
<div class="animated-bg">
    <svg width="100%" height="120" viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60 Q480 120 960 60 T1920 60 V120 H0 V60 Z" fill="#6ec1e4">
            <animate attributeName="d" dur="6s" repeatCount="indefinite"
                values="M0 60 Q480 120 960 60 T1920 60 V120 H0 V60 Z;
                        M0 80 Q480 40 960 80 T1920 80 V120 H0 V80 Z;
                        M0 60 Q480 120 960 60 T1920 60 V120 H0 V60 Z"/>
        </path>
    </svg>
</div>
<style>
.animated-bg {
    position: fixed;
    left: 0; top: 0; width: 100vw; z-index: 0;
    pointer-events: none;
}
body, main, header, footer { position: relative; z-index: 1; }
</style>
<section class="about-team">
    <h2>О нас</h2>
    <div class="team-list">
        <div class="team-card">
            <img src="img/team1.jpg" alt="Анна, директор">
            <h3>Анна</h3>
            <p>Директор магазина</p>
        </div>
        <div class="team-card">
            <img src="img/team2.jpg" alt="Игорь, логист">
            <h3>Игорь</h3>
            <p>Логист</p>
        </div>
        <div class="team-card">
            <img src="img/team3.jpg" alt="Мария, консультант">
            <h3>Мария</h3>
            <p>Онлайн-консультант</p>
        </div>
    </div>
    <p>Мы — команда, которая любит детей и заботится о вашем удобстве!</p>
</section>