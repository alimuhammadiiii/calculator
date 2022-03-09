const displayResult = document.querySelector(".calculator-screen");
const outPutOperate = document.querySelector(".data-calculation");
const numberData = document.querySelectorAll(".data-number");
const btnKeys = document.querySelector(".calculator-keys");
const calculator = {
  displayValue: "0",
  firstNumber: null,
  secondNumber: null,
  waitingForSecondOperand: false,
  equal: false,
  operator: null,
};

const inputDigit = (number) => {
  if (calculator.waitingForSecondOperand === true) {
    displayResult.value = "";
    calculator.secondNumber === null
      ? (calculator.secondNumber = number)
      : (calculator.secondNumber += number);

    displayResult.value = calculator.secondNumber;
  } else if (calculator.firstNumber === null) {
    calculator.displayValue = number;
    displayResult.value = calculator.displayValue;
  } else {
    calculator.displayValue += number;
    displayResult.value = calculator.displayValue;
  }
};

function inputDecimal() {
  if (!displayResult.value.includes(".")) {
    displayResult.value += ".";
  }
}

const positiveNegative = () => {
  // debugger;
  if (displayResult.value.includes("-")) {
    let digit = String(displayResult.value);
    displayResult.value = digit.replace("-", "");

    console.log(aminKoni, "positive");
  } else {
    displayResult.value += "-";
  }
};

const operatorVal = (operatorValue) => {
  if (operatorValue === "numberPow2") {
    let result = parseFloat(Math.pow(displayResult.value, 2));
    outPutOperate.innerHTML = `sqr(${displayResult.value}) `;
    displayResult.value = result;
  } else if (operatorValue === "numberPow3") {
    let result = parseFloat(Math.pow(displayResult.value, 3));
    outPutOperate.innerHTML = `sqr(${displayResult.value}) `;
    displayResult.value = result;
  } else if (operatorValue === "sqrt") {
    console.log("hello");
    let result = parseFloat(Math.sqrt(displayResult.value));
    outPutOperate.innerHTML = `√(${displayResult.value})`;
    displayResult.value = result;
  } else if (operatorValue === "1/x") {
    let result = parseFloat(1 / displayResult.value);
    outPutOperate.innerHTML = `1/(${displayResult.value})`;
    displayResult.value = result;
  } else {
    calculator.operator = operatorValue;
    outPutOperate.innerHTML = ` ${calculator.displayValue} ${calculator.operator} `;
  }

  calculator.firstNumber = displayResult.value;
  calculator.waitingForSecondOperand = true;
};

const resultOperator = () => {
  outPutOperate.innerHTML += `${calculator.secondNumber} =`;
  displayResult.value = "";
  if (calculator.operator === "+") {
    let result =
      parseFloat(calculator.displayValue) + parseFloat(calculator.secondNumber);
    displayResult.value = result;
  } else if (calculator.operator === "-") {
    let result =
      parseFloat(calculator.displayValue) - parseFloat(calculator.secondNumber);
    displayResult.value = result;
  } else if (calculator.operator === "×") {
    let result =
      parseFloat(calculator.displayValue) * parseFloat(calculator.secondNumber);
    displayResult.value = result;
  } else if (calculator.operator === "÷") {
    let result =
      parseFloat(calculator.displayValue) / parseFloat(calculator.secondNumber);
    displayResult.value = result;
  }
};

function updateDisplay() {
  displayResult.value = "";
  displayResult.value = calculator.displayValue;
}

btnKeys.addEventListener("click", (e) => {
  if (e.target.classList.contains("data-number")) {
    inputDigit(e.target.value);
    // updateDisplay();
  }

  if (e.target.classList.contains("decimal")) {
    console.log(e.target.value);
    inputDecimal();
  }

  if (e.target.classList.contains("operator")) {
    console.log(e.target.value);
    operatorVal(e.target.value);
    // updateDisplay();
  }

  if (e.target.classList.contains("result")) {
    console.log(e.target.value);
    resultOperator();
  }

  if (e.target.classList.contains("positive-negative")) {
    console.log(e.target.value);
    positiveNegative();
  }

  if (e.target.classList.contains("clear-all")) {
    console.log(e.target.value);
  }

  if (e.target.classList.contains("all-clear")) {
    console.log(e.target.value);
  }

  if (e.target.classList.contains("delete-number")) {
    console.log(e.target.value);
  }
});
