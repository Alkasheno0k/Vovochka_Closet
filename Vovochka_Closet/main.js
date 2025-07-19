document.getElementById('nav-toggle').onclick = function() {
    document.getElementById('main-nav').classList.toggle('open');
};

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}
// Пример использования: showToast('Товар добавлен в корзину!');

const toTopBtn = document.getElementById('to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
});
toTopBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});