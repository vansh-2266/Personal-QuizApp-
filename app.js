const correctAnswer = ['A', 'C', 'C', 'A', 'B'];

const form = document.querySelector('.quiz-form');

const resultt = document.querySelector('.score-showing');

form.addEventListener('submit', e=> {
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value  , form.q2.value, form.q3.value, form.q4.value, form.q5.value ];

    //check answers
    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 20;
        }
    });

    // console.log(score);

    scrollTo(0,0);

    resultt.textContent = `You Know Vansh -> ${score}% . ❤️ `;
   
    resultt.setAttribute('class', 'text-danger display-6');

});





