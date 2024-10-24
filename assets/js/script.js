const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classicList.toggle('change');

    if(menuHamburguer.classic.contains('change')) {
        nav.computedStyleMap.display = 'block';
    } else {
        AnimationEvent.style.display = 'none';
    }
}
