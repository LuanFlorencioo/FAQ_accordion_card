const allQuestions = Array.from(document.querySelectorAll('.question'))
const allAnswer = Array.from(document.querySelectorAll('.answer'));
const allArrow = Array.from(document.querySelectorAll('img.arrow'))

function handleClick(e) {
    const localClick = e.target.localName;

    if (localClick === 'dt') {
        const question = e.target;
        const answer = e.target.nextElementSibling;
        const arrow = e.target.lastChild;

        if (question.classList.contains('active')) {

            [question, answer, arrow].forEach(item => item.classList.toggle('active'));

        } else {

            allQuestions.forEach(question => question.classList.remove('active'));
            allAnswer.forEach(answer => answer.classList.remove('active'));
            allArrow.forEach(arrow => arrow.classList.remove('active'));

            [question, answer, arrow].forEach(item => item.classList.toggle('active'));

        }

    } else {
        const arrow = e.target;
        const question = e.path[1];
        const answer = e.path[1].nextElementSibling;

        if (arrow.classList.contains('active')) {

            [question, answer, arrow].forEach(item => item.classList.toggle('active'));

        } else {

            allQuestions.forEach(question => question.classList.remove('active'));
            allAnswer.forEach(answer => answer.classList.remove('active'));
            allArrow.forEach(arrow => arrow.classList.remove('active'));

            [question, answer, arrow].forEach(item => item.classList.toggle('active'));

        }
        document.querySelector('h1').classList.toggle('active')
    }
}

allQuestions.forEach((item) => {
    item.addEventListener('click', handleClick)
})

if (document.body.clientWidth > 1001.5) {
    const getImg = document.querySelector('.illustration img');
    getImg.setAttribute('src', '../images/illustration-box-desktop.svg');

}