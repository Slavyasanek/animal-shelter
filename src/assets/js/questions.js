import { refs } from "./refs";

const { questions } = refs;

const toggleAnswer = e => {
    if (e.target.closest('.questions__item')) {
        const card = e.target.closest('.questions__item');
        const answer = card.querySelector('.questions__answer');
        if (answer) {
            answer.classList.toggle('open');
            const btn = card.querySelector('.questions__btn');
            btn.classList.toggle('active');
        }
    }
}

if (questions) {
    questions.addEventListener("click", toggleAnswer)
}