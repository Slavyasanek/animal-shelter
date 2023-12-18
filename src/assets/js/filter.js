import { refs } from "./refs";

const {filterOptions, filter, filterBtnOpen, filterBtnClose, body, mobileMenuBtn, header} = refs;

const toggleOptions = e => {
    const btn = e.target;
    if (btn.classList.contains('filter__expand') || btn.closest('.filter__expand')) {
        const list = btn.closest('.filter__block').querySelector('.js-expand-list');
        if (list) {
            list.classList.toggle('hidden');
            if (btn.classList.contains('filter__expand')) {
                btn.classList.toggle('active');
            } else if (btn.closest('.filter__expand')) {
                btn.closest('.filter__expand').classList.toggle('active');
            }
        }
    }
}

const openFilter = () => {
    filter.classList.add('open');
    body.classList.add('lock');
    mobileMenuBtn.disabled = true;
    header.classList.add('shown');
    if (filterBtnClose) {
        filterBtnClose.addEventListener("click", closeFilter);
    }
}

const closeFilter = () => {
    filter.classList.remove('open');
    body.classList.remove('lock');
    mobileMenuBtn.disabled = false;
    filterBtnClose.removeEventListener("click", closeFilter)
}

const resizeObserver = e => {
    if (!e.matches) return;
    closeFilter();
}

if (filterOptions) {
    filterOptions.addEventListener("click", toggleOptions)
}

if (filter && filterBtnOpen) {
    filterBtnOpen.addEventListener("click", openFilter)
}

window.matchMedia('(min-width: 1200px)').addEventListener('change', resizeObserver)
