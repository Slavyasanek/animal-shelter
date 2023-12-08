import Swiper from "swiper";
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
function swiperSlider() {
    const heroSlider = document.querySelectorAll('[data-slider="big-slider"]');
    if (heroSlider) {
        const slider = new Swiper('.swiper', {
            modules: [Pagination, EffectFade, Autoplay],
            // loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
                waitForTransition: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            speed: 1000,
        })
    }
}
window.addEventListener('load', swiperSlider);