import Swiper from "swiper";
import {Autoplay} from 'swiper/modules'
function swiperSlider() {
    const heroSlider = document.querySelectorAll('[data-slider="big-slider"]');
    if (heroSlider) {
        const slider = new Swiper('.swiper', {
            modules: [Autoplay],
            // loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                waitForTransition: false,
            },
            speed: 3000,
        })
    }
}
window.addEventListener('load', swiperSlider);