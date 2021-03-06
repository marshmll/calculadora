class Calculator {

	constructor(previousOperandTextElement, currentOperandTextElement) {

		this.previousOperandTextElement = previousOperandTextElement;

		this.currentOperandTextElement = currentOperandTextElement;

		this.currentOperand = null;

		this.equalWasClicked = false;

		this.clear();

	}

	clear() {

		this.currentOperand = '';

		this.previousOperand = '';

		this.operation = undefined;

	}

	delete() {

		this.currentOperand = this.currentOperand.toString().slice(0, -1);

	}

	appendNumber(number) {

		if (number === '.' && this.currentOperand.includes(".")) return;

		this.currentOperand += number.toString();

	}

	chooseOperation(operation) {

		if (this.currentOperand === '') return;

		if (this.previousOperand !== '') {

			this.compute();

		}

		this.operation = operation;

		this.previousOperand = this.currentOperand;

		this.currentOperand = '';

	}

	compute() {

		let computation;

		const prev = parseFloat(this.previousOperand);

		const current = parseFloat(this.currentOperand);

		if (isNaN(prev) || isNaN(current)) return;

		switch (this.operation) {

			case "+":
				computation = prev + current;
				break;

			case "-":
				computation = prev - current;
				break;

			case "*":
				computation = prev * current;
				break;

			case "÷":
				computation = prev / current;
				break;

			default:
				return;

		}
		this.currentOperand = computation;

		this.operation = undefined

		this.previousOperand = '';

	}

	getDisplayNumber(number) {

		const stringNumber = number.toString();

		const integerDigits = parseFloat(stringNumber.split(".")[0]);

		const decimalDigits = stringNumber.split(".")[1];

		let integerDisplay;

		if (isNaN(integerDigits)) {

			integerDisplay = '';

		}

		else {

			integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 }).replace(",", " ");

		}

		if (decimalDigits != null) {

			return `${integerDisplay}.${decimalDigits}`;

		}
		return integerDisplay;

	}

	updateDisplay() {

		this.currentOperandTextElement.innerHTML = this.getDisplayNumber(this.currentOperand);

		if (this.operation != null) {

			this.previousOperandTextElement.innerHTML =
				`${this.getDisplayNumber(this.previousOperand)} ${this.operation} ${this.getDisplayNumber(this.currentOperand)}`;

		}

		else {

			this.previousOperandTextElement.innerHTML = '';

		}

	}

}