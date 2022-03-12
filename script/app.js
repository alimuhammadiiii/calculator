const displayResult = document.querySelector(".calculator-screen");
const outPutOperate = document.querySelector(".data-calculation");
const numberData = document.querySelectorAll(".data-number");
const btnKeys = document.querySelector(".calculator-keys");
const historyMemory = document.querySelector(".sidebar");
const historyView = document.querySelector(".history-calculation");
const memoryView = document.querySelector(".memory-calculation");
let id = 0;
let memoryList = [];
let historyList = [];
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
      // calculator.secondNumber = null;
      calculator.displayValue = "0";
    }
    calculator.displayValue = "0";
    calculator.secondNumber === null
      ? (calculator.secondNumber = number)
      : (calculator.secondNumber += number);
    console.log("lez-mez");

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

const deleteLastCharacter = () => {
  displayResult.value = displayResult.value.substring(
    0,
    displayResult.value.length - 1
  );
  calculator.firstNumber = displayResult.value;
  calculator.displayValue = displayResult.value;

  // displayResult.val = displayResult.val().slice(0, -1);
  updateDisplay();
};

function inputDecimal() {
  if (!displayResult.value.includes(".")) {
    displayResult.value += ".";
  }
}

const positiveNegative = () => {
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
    } else {
      calculator.displayValue = calculator.firstNumber;
    }
    outPutOperate.innerHTML = ` ${calculator.firstNumber} ${calculator.operator} `;
  }
  calculator.waitingForSecondOperand = true;
  if (calculator.result !== null) {
    calculator.displayValue = calculator.result;
  }
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
  calculator.secondNumber = null;
  calculator.displayValue = calculator.result;

  // historyList.push(calculator.result, outPutOperate.innerHTML);
  // console.log(historyList);
  updateHistory();
  updateDisplay();
};

function updateHistoryView() {
  historyView.innerHTML = "";

  historyList.forEach((list) => {
    console.log(list);
    const lirrrr = document.createElement("li");
    lirrrr.innerHTML = `${list.operationHistory} <br> ${list.resultHistory}`;
    historyView.prepend(lirrrr);
  });
  console.log(historyView);
}

function updateHistory() {
  const objHistory = {
    idHistory: id++,
    resultHistory: calculator.result,
    operationHistory: outPutOperate.innerHTML,
  };
  historyList.push(objHistory);
  console.log(historyList);
  updateHistoryView();
}

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

  if (e.target.classList.contains("clear-result")) {
    console.log(e.target.value);
  }

  if (e.target.classList.contains("clear-all")) {
    console.log(e.target.value);
  }

  if (e.target.classList.contains("delete-number")) {
    console.log(e.target.value);
    deleteLastCharacter();
  }
});

historyMemory.addEventListener("click", (e) => {
  console.log("pashmak");
  if (e.target.classList.contains("item1")) {
    historyView.style.display = "block";
    historyView.textContent = "There's no history yet";
    memoryView.style.display = "none";
    console.log("karim");
  }

  if (e.target.classList.contains("item2")) {
    memoryView.style.display = "block";
    memoryView.textContent = "reeeeeeeeeeeeeedi";
    historyView.style.display = "none";
  }
});
