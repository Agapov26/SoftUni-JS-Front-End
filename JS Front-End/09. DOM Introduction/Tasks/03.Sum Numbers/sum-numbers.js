function calc() {
    const num1element = document.querySelector('#num1');
    const num2element = document.querySelector('#num2');
    const sumElement = document.querySelector('#sum');

    sumElement.value = Number(num1element.value) + Number(num2element.value)
}