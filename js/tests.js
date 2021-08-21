(() => {
    const questionButtonsList = document.getElementsByClassName('question__btn');

    for (let btn of questionButtonsList) {
        btn.addEventListener('click', () => {
            const id = btn.id.split('-')[2];
            const answer = document.getElementById(`question-answ-${id}`);

            if (btn.textContent.length === 14) {
                answer.style.display = 'inline';
                btn.textContent = 'Скрыть ответ';
            } else {
                answer.style.display = 'none';
                btn.textContent = 'Показать ответ';
            }
        });
    }
})();