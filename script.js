// Открываем и закрываем меню на телефоне.
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', function () {
    menu.classList.toggle('open');
    const isOpen = menu.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.textContent = isOpen ? 'Закрыть ×' : 'Меню ☰';
});

// После выбора раздела закрываем меню.
menu.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        menu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Меню ☰';
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = 'Меню ☰';
        menuButton.focus();
    }
});
