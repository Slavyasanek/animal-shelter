import Swiper from "swiper";
import { Autoplay, Pagination, EffectFade, Navigation, Scrollbar } from 'swiper/modules';

const fullWSlider = (el) => {
    const elExs = document.querySelector(el);
    if (elExs) {
        const slider = new Swiper(el, {
            modules: [Pagination, EffectFade, Autoplay],
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
        });
    }
}

function swiperSlider() {
    const teamSlider = document.querySelector('[data-slider="team-slider"]');
    const partnersSlider = document.querySelector('[data-slider="partners-slider"]');
    fullWSlider('[data-slider="big-slider"]');
    fullWSlider('[data-slider="athome-slider"]');
    if (teamSlider) {
        const slider = new Swiper('[data-slider="team-slider"]', {
            modules: [Navigation],
            slidesPerView: 4,
            spaceBetween: 20,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        });
    }
    if (partnersSlider) {
        const slider = new Swiper('[data-slider="partners-slider"]', {
            modules: [Scrollbar],
            slidesPerView: 2,
            spaceBetween: 16,
            speed: 1000,
            scrollbar: {
                el: '.swiper-scrollbar',
                dragSize: 80
            },
            breakpoints: {
                1200: {
                    slidesPerView: 4,
                    spaceBetween:  24
                }
            }
        })
    }
}
window.addEventListener('load', swiperSlider);