import throttle from "lodash.throttle";

const header = document.querySelector('#header');

let scrollPosition = window.scrollY;

const showHeader = () => {
    if (header) {
        const newScrollPosition = window.scrollY;
        if (newScrollPosition < scrollPosition || scrollPosition === 0) {
            header.classList.add('shown');
        } else {
            header.classList.remove('shown');
        }
        scrollPosition = newScrollPosition;
    }
}


window.addEventListener("scroll", throttle(() => showHeader(), 300))
