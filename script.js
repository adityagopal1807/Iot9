const answers = {
    q1: 'b',
    q2: 'a',
    q3: 'c',
    q4: 'a',
    q5: 'a',
    q6: 'b',
    q7: 'b',
    q8: 'b',
    q9: 'b',
    q10: 'b',
    q11: 'b',
    q12: 'a',
    q13: 'b',
    q14: 'a',
    q15: 'a',
    q16: 'c',
    q17: 'c',
    q18: 'b',
    q19: 'b',
    q20: 'b',
    q21: 'a',
    q22: 'b',
    q23: 'b',
    q24: 'c',
    q25: 'd'
};

function submitQuiz() {
    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        const feedbackElement = document.querySelector(`.${question} .feedback`);

        if (selectedOption) {
            if (selectedOption.value === answers[question]) {
                feedbackElement.textContent = "Correct!";
                score++;
            } else {
                feedbackElement.textContent = `Incorrect! The correct answer is: ${answers[question]}`;
            }
        } else {
            feedbackElement.textContent = "You did not answer this question.";
        }
    }

    alert(`Your final score is: ${score} out of ${totalQuestions}`);
}
