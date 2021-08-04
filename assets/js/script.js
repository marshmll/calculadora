const numberButtons = document.querySelectorAll('.number');

const operationButtons = document.querySelectorAll('.operation');

const equalsButton = document.querySelector('.equals');

const deleteButton = document.querySelector('.delete');

const clearButton = document.querySelector('.clear');

const previousOperandTextElement = document.querySelector('.prev-operand');

const currentOperandTextElement = document.querySelector('.curr-operand');


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerHTML);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.innerHTML);
    calculator.chooseOperation(button.innerHTML);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});

clearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});