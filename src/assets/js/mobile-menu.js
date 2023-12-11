const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const body = document.body;

const hideMenu = () => {
    body.classList.remove('lock');
    mobileMenuBtn.classList.remove('close');
    mobileMenu.classList.remove('shown');
}

const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('shown');
    if (!isMenuOpen) {
        body.classList.add('lock');
        mobileMenuBtn.classList.add('close');
        mobileMenu.classList.add('shown');
    } else if (isMenuOpen) {
        hideMenu()
    }
}

const resizeMenuObserver = e => {
    if (!e.matches) return;
    hideMenu();
}

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', toggleMenu);
}

window.matchMedia('(min-width: 1200px)').addEventListener('change', resizeMenuObserver)