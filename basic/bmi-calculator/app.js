const calculator = document.querySelector('#calculator');

calculator.addEventListener('submit', (e) => {
    e.preventDefault();

    const result = document.querySelector('#result');
    const resultVal = document.querySelector('#result-value');
    const commentEl = document.querySelector('#comment');

    let comment = '';
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;

    const bmi = calculateBMI(+height, +weight);
    resultVal.innerText = bmi;

    result.style.display = 'block';

    if (bmi < 18.6)
        comment = 'Underweight';
    else if (bmi >= 18.6 && bmi <= 24.9)
        comment = 'Normal';
    else
        comment = 'Overweight'

    commentEl.innerHTML = comment;
});

const calculateBMI = (height, weight) => {
    return (weight / (height ** 2)).toFixed(2);
}