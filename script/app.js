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
  result: null,
};

const inputDigit = (number) => {
  if (calculator.waitingForSecondOperand === true) {
    if (calculator.result !== null) {
      calculator.firstNumber = calculator.result;
      calculator.secondNumber = null;
      calculator.displayValue = "0";
    }
    calculator.displayValue = "0";
    calculator.secondNumber === null
      ? (calculator.secondNumber = number)
      : (calculator.secondNumber += number);

    calculator.displayValue = calculator.secondNumber;
  } else if (calculator.firstNumber === null) {
    calculator.firstNumber = number;
    calculator.displayValue = calculator.firstNumber;
  } else {
    calculator.firstNumber += number;
    calculator.displayValue = calculator.firstNumber;
  }

  console.log(
    "first",
    calculator.firstNumber,
    "secound",
    calculator.secondNumber
  );
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
    calculator.result = parseFloat(Math.pow(calculator.displayValue, 2));
    outPutOperate.innerHTML = `sqr(${calculator.displayValue}) `;
  } else if (operatorValue === "numberPow3") {
    calculator.result = parseFloat(Math.pow(calculator.displayValue, 3));
    outPutOperate.innerHTML = `sqr(${calculator.displayValue}) `;
  } else if (operatorValue === "sqrt") {
    calculator.result = parseFloat(Math.sqrt(calculator.displayValue));
    outPutOperate.innerHTML = `√(${calculator.displayValue})`;
  } else if (operatorValue === "1/x") {
    calculator.result = parseFloat(1 / calculator.displayValue);
    outPutOperate.innerHTML = `1/(${calculator.displayValue})`;
  } else {
    calculator.operator = operatorValue;
    if (calculator.result !== null) {
      calculator.firstNumber = calculator.result;
    }
    outPutOperate.innerHTML = ` ${calculator.firstNumber} ${calculator.operator} `;
  }
  calculator.waitingForSecondOperand = true;
  calculator.displayValue = calculator.result;
  updateDisplay();
};

const resultOperator = () => {
  outPutOperate.innerHTML += `${calculator.secondNumber} =`;

  if (calculator.operator === "+") {
    calculator.result =
      parseFloat(calculator.firstNumber) + parseFloat(calculator.secondNumber);
  } else if (calculator.operator === "-") {
    calculator.result =
      parseFloat(calculator.firstNumber) - parseFloat(calculator.secondNumber);
  } else if (calculator.operator === "×") {
    calculator.result =
      parseFloat(calculator.firstNumber) * parseFloat(calculator.secondNumber);
  } else if (calculator.operator === "÷") {
    calculator.result =
      parseFloat(calculator.firstNumber) / parseFloat(calculator.secondNumber);
  }
  calculator.displayValue = calculator.result;
  updateDisplay();
};

function updateDisplay() {
  // if (calculator.displayValue === "0" || calculator.displayValue === "") {
  //   displayResult.value = "0";
  // }
  displayResult.value = "0";
  displayResult.value = calculator.displayValue;
}
updateDisplay();

btnKeys.addEventListener("click", (e) => {
  if (e.target.classList.contains("data-number")) {
    inputDigit(e.target.value);
    updateDisplay();
  }

  if (e.target.classList.contains("decimal")) {
    console.log(e.target.value);
    inputDecimal();
  }

  if (e.target.classList.contains("operator")) {
    console.log(e.target.value);
    operatorVal(e.target.value);
    updateDisplay();
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
