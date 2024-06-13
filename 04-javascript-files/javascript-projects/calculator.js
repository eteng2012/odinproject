function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

let firstNumberDone = false;
let secondNumberStarted = false;
let solutionShowing = false;

function operate (num1, operator, num2) {
    firstNumberDone = false;
    secondNumberStarted = false;
    solutionShowing = true;
    if (operator == "+") {
        return add(num1, num2);
    }
    else if (operator == "-") {
        return subtract(num1, num2);
    }
    else if (operator == "*") {
        return multiply(num1, num2);
    }
    else if (operator == "/") {
        return divide(num1, num2);
    }
    else {
        return null;
    }
}

let num1 = "";
let operator = "";
let num2 = "";

function addToOperation(char) {
    if (char == "+" || char == "-" || char == "*" || char == "/"){
        firstNumberDone = true;
        operator = char;
    }
    else {// number
        if (firstNumberDone) {
            if (secondNumberStarted == false) {
                secondNumberStarted = true;
                display.textContent = "";
            }
            num2 += char;
        }
        else {
            if (solutionShowing) {
                display.textContent = ""; 
                displayValue = 0;
                num1="";
                solutionShowing = false;
            }
            num1 += char;
        }
    }
}

const buttons = document.querySelector(".buttons");

for (let i=9; i>=0; i--) {
    const button = document.createElement("button");
    button.textContent = i;
    button.classList.add("number");
    button.addEventListener("click", () => {click(button)});
    buttons.insertBefore(button, buttons.firstChild);
}

const display = document.querySelector(".display");

let displayValue = 0;

const buttonList = document.querySelectorAll(".operator");

function click(button) {
    addToOperation(button.textContent);
    display.textContent = display.textContent + button.textContent; 
    displayValue += Number(button.textContent);
}

buttonList.forEach((button) => { button.addEventListener("click", () => 
{addToOperation(button.textContent);})});

const clearButton = document.querySelector(".Clear");
clearButton.addEventListener("click", () => {display.textContent = ""; displayValue = 0; num1="";});

const equalsButton = document.querySelector(".Equals");
equalsButton.addEventListener("click", () => {display.textContent = operate(Number(num1), operator, Number(num2)); console.log(num1);console.log(num2);console.log(operator);
    displayValue = operate(Number(num1), operator, Number(num2)); num1 = displayValue.toString(); num2 = "";console.log(num1);});
