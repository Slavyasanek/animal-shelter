import { refs } from "./refs";

const { mobileMenu, mobileMenuBtn, body, header } = refs;

const hideMenu = () => {
    body.classList.remove('lock');
    mobileMenuBtn.classList.remove('close');
    mobileMenu.classList.remove('shown');
    // header.classList.remove('header--white-back');
}

const toggleMenu = () => {
    const isMenuOpen = mobileMenu.classList.contains('shown');
    if (!isMenuOpen) {
        body.classList.add('lock');
        mobileMenuBtn.classList.add('close');
        mobileMenu.classList.add('shown');
        header.classList.add('header--white-back');
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