import { refs } from "./refs";

const {questions} = refs;

const toggleAnswer = e => {
    const btn = e.target;
    if (btn.classList.contains('.questions__btn') || btn.closest('.questions__btn')) {
        const answer = btn.closest('.questions__item').querySelector('.questions__answer');
        if (answer) {
            answer.classList.toggle('open');
            if (btn.classList.contains('.questions__btn')) {
                btn.classList.toggle('active');
            } else if (btn.closest('.questions__btn')) {
                btn.closest('.questions__btn').classList.toggle('active');
            }
        }
    }
}

if (questions) {
    questions.addEventListener("click", toggleAnswer)
}