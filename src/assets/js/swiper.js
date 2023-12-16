import Swiper from "swiper";
import { Autoplay, Pagination, EffectFade, Navigation, Scrollbar } from 'swiper/modules';

function swiperSlider() {
    const bigSlider = document.querySelector('[data-slider="big-slider"]');
    const teamSlider = document.querySelector('[data-slider="team-slider"]');
    const partnersSlider = document.querySelector('[data-slider="partners-slider"]');
    if (bigSlider) {
        const slider = new Swiper('[data-slider="big-slider"]', {
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
        });
    }
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