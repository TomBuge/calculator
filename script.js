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
    switch (operator) {
    case "+":
        result = add(firstNum, secondNum);
        return result;
    case "-": 
        result = subtract(firstNum, secondNum);
        return result;
    case "X":
        result = multiply(firstNum, secondNum);
        return result;
    case "/":
        result = divide(firstNum, secondNum);
        return result; 
    } 
};

let displayNumber = "0"; 
const display = document.querySelector(".display");
display.textContent = displayNumber;
const numberButtons = document.querySelectorAll(".number");
const pressNumberButton = numberButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (result) reset();                        
        if (displayNumber === "0" || display.textContent === result) {              
            display.textContent = "";
            displayNumber = btn.textContent;
            display.textContent = displayNumber;
           
        }
        else {                  
            displayNumber += btn.textContent;
            display.textContent = displayNumber;  
        }
    })        
});

const operatorButtons = document.querySelectorAll(".operator");
const pressOperatorButton = operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
          if (firstNum && displayNumber) { 
            secondNum = displayNumber;
            display.textContent = operate(firstNum, secondNum, operator);
            firstNum = result;
            operator = btn.textContent;
            displayNumber = "";
            result = "";
            console.log(operator);
    }

        else if (result) {
            firstNum = result;
            result = "";
            displayNumber = "";
            operator = btn.textContent;
        }
    
        else { 
            firstNum = displayNumber; 
            displayNumber = "";   
            operator = btn.textContent;
            console.log(operator);
        }
    })
});

const clearButton = document.querySelector("#clear");
const pressClearButton = clearButton.addEventListener("click", () => {
    reset();
    display.textContent = 0;
});

const equalsButton = document.querySelector("#equals");
const pressEqualsButton = equalsButton.addEventListener("click" , () => {
    if (firstNum && displayNumber) {
        secondNum = displayNumber;
        display.textContent = operate(firstNum, secondNum, operator);
        displayNumber = "";
        
        
       
    }
})

const decimalButton = document.querySelector('#decimal-point');
const pressDecimal = decimalButton.addEventListener("click", () => {
    if (displayNumber.includes(".")) {}
    else if (!firstNum) {
        displayNumber += "."
        display.textContent = displayNumber;
  }
});

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
}


