const optionsRef = document.querySelector('.filter__options');

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

if (optionsRef) {
    optionsRef.addEventListener("click", toggleOptions)
}