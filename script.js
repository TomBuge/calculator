const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let secondNum;
let operator;
let result;

const operate = (firstNum, secondNum, operator) => {
    firstNum = +firstNum;
    secondNum = +secondNum;
    if (operator === "*") operator = "X";

    switch (operator) {
    case "+":
        result = add(firstNum, secondNum);
        return roundResult(result);
    case "-": 
        result = subtract(firstNum, secondNum);
        return roundResult(result);
    case "X":
        result = multiply(firstNum, secondNum);
        return roundResult(result);
    case "/":
        result = divide(firstNum, secondNum);
        return roundResult(result); 
    } 
};

let displayNumber = "0"; 
const display = document.querySelector(".display");
display.textContent = displayNumber;
const numberButtons = document.querySelectorAll(".number");
const pressNumberButton = numberButtons.forEach(btn => {
    btn.addEventListener("click", () => pressNumber(btn.textContent)) 
});

const operatorButtons = document.querySelectorAll(".operator");
const pressOperatorButton = operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => pressOperator(btn.textContent))
});

const clearButton = document.querySelector("#clear");
const pressClearButton = clearButton.addEventListener("click", reset);

const equalsButton = document.querySelector("#equals");
const pressEqualsButton = equalsButton.addEventListener("click" , () => pressEquals());

const decimalButton = document.querySelector('#decimal');
const pressDecimalButton = decimalButton.addEventListener("click", () => pressDecimal());

const deleteButton = document.querySelector("#del");
const pressDeleteButton = deleteButton.addEventListener("click", () => pressDelete());

const plusMinus = document.querySelector('#plus-minus'); 
const pressPlusMinus = plusMinus.addEventListener("click", () => {
    
    if (result) {
        result = -result;
        display.textContent = result;
    }
    
    else if (displayNumber) {
            displayNumber = +displayNumber;
            console.log("displayNumber before flip:", displayNumber);
            displayNumber = -displayNumber;
            display.textContent = displayNumber;
    }
});
  

function reset() {
    display.textContent = "";
    operator = "";
    firstNum = "";
    secondNum = "";
    displayNumber = "";
    result = "";
    display.textContent = 0;
}

function pressNumber(inputNumber) {
    if (result) reset();                        
        if (displayNumber === "0" || display.textContent === result) {              
            display.textContent = "";
            displayNumber = inputNumber;
            display.textContent = displayNumber;          
        }
        else {                  
            displayNumber += inputNumber;
            display.textContent = displayNumber;  
        }
}

function pressOperator(input) {
    if (firstNum && displayNumber) { 
            secondNum = displayNumber;
            display.textContent = operate(firstNum, secondNum, operator);
            firstNum = result;
            operator = input;
            displayNumber = "";
            result = "";
            console.log(operator);
    }

        else if (result) {
            firstNum = result;
            result = "";
            displayNumber = "";
            operator = input;
        }
    
        else { 
            firstNum = displayNumber; 
            displayNumber = "";   
            operator = input;
            console.log(operator);
        }
}

function pressEquals() {
        if (firstNum && displayNumber) {
        secondNum = displayNumber;
        display.textContent = operate(firstNum, secondNum, operator);
        displayNumber = "";       
    }
}

function pressDecimal() {
        if (displayNumber.includes(".")) {}
    else {
        displayNumber += "."
        display.textContent = displayNumber;
  }
}

function pressDelete() {
     if (displayNumber && displayNumber !== 0) {
        displayNumber = displayNumber.slice(0, -1);
        display.textContent = displayNumber;    
    }
    if (!displayNumber) display.textContent = 0;

    if (result) reset();
}


document.addEventListener("keydown", handleKey)

function handleKey(e) {
    const key = e.key;

    if (!isNaN(key)) {
        pressNumber(key);
    }

    if (key === "+" || key === "-" || key === "/" || key === "*") {
        pressOperator(key);
    }

    if (key === "Enter") pressEquals();
    if (key === ".") pressDecimal();
    if (key === "Backspace") pressDelete();
    if (key.toLowerCase() === "c") reset();


}

function roundResult(num) {
    if (Number.isInteger(num)) return num;
    return Number(num.toFixed(9));
}