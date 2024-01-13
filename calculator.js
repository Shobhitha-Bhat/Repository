let currentInput = "";
let operator = "";
let result = "";

function appendCharacter(char) {
  currentInput += char;
  document.getElementById("display").value = currentInput;
}

function setOperator(op) {
  operator = op;
  currentInput += " " + operator + " ";
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  result = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    result = eval(currentInput);
    document.getElementById("display").value = result;
    currentInput = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
