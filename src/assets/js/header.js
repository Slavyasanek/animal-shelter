import throttle from "lodash.throttle";
import { refs } from "./refs";

const { header } = refs;
let scrollPosition = window.scrollY;

const showHeader = () => {
    if (header) {
        const newScrollPosition = window.scrollY;
        if (newScrollPosition > 0) {
            header.classList.add('header--white-back');
        } else {
            header.classList.remove('header--white-back')
        }
        if (newScrollPosition < scrollPosition || scrollPosition === 0) {
            header.classList.add('shown');
        } else {
            header.classList.remove('shown');
        }
        scrollPosition = newScrollPosition;
    }
}


window.addEventListener("scroll", throttle(() => showHeader(), 300))
