const allQuestions = Array.from(document.querySelectorAll('.question'));
const allAnswers = Array.from(document.querySelectorAll('.answer'));
const allArrows = Array.from(document.querySelectorAll('img.arrow'));

function accordionEffect(e) {
    const localClick = e.target.localName;

    if (localClick === 'dt') {
        const question = e.target;
        const answer = e.target.nextElementSibling;
        const arrow = e.target.lastChild;

        if (question.classList.contains('active')) {
            [question, answer, arrow].forEach(item => item.classList.toggle('active'));
        }
        else {
            [allQuestions, allAnswers, allArrows].forEach(item => item.forEach(items => items.classList.remove('active')));
            [question, answer, arrow].forEach(item => item.classList.toggle('active'));
        }
    }
    else {
        const arrow = e.target;
        const question = e.path[1];
        const answer = e.path[1].nextElementSibling;

        if (arrow.classList.contains('active')) {
            [question, answer, arrow].forEach(item => item.classList.toggle('active'));
        }
        else {
            [allQuestions, allAnswers, allArrows].forEach(item => item.forEach(items => items.classList.remove('active')));
            [question, answer, arrow].forEach(item => item.classList.toggle('active'));
        }
    }
}

allQuestions.forEach(item => item.addEventListener('click', accordionEffect));