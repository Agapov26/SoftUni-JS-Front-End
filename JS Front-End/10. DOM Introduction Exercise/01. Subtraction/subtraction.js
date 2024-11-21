function subtract() {
    
    const inputElFirst = document.querySelector('#firstNumber');
    const inputElSecond = document.querySelector('#secondNumber');
    const resultEl = document.querySelector('#result');

    console.log(inputElFirst);

    const result = Number(inputElFirst.value) - Number(inputElSecond.value);

    const text = 'David' + ' ' + 'Core';

    resultEl.textContent = result;
}