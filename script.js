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
        if (operator && firstNum && !secondNum) {
            display.textContent = "";
            secondNum = btn.textContent;
            display.textContent = secondNum;
            displayNumber = "";
            console.log(`secondNum ${secondNum}`);
        }
        else if (operator && secondNum) {
            secondNum += btn.textContent;
            display.textContent = secondNum;
            console.log(`secondNum ${secondNum}`);
        }
          
        else if (displayNumber === "0" || display.textContent === result) {
            displayNumber = btn.textContent;
            display.textContent = displayNumber;
            console.log(displayNumber);
        }
        else {
            displayNumber += btn.textContent;
            display.textContent = displayNumber;
            console.log(displayNumber);
        }
    }) 
        
});

const operatorButtons = document.querySelectorAll(".operator");
const pressOperatorButton = operatorButtons.forEach(btn => {
    btn.addEventListener("click", () => {
          if (firstNum && secondNum) {
            display.textContent = operate(firstNum, secondNum, operator);
            firstNum = result;
            operator = btn.textContent;
            secondNum = "";
            result = "";
            console.log(operator);
    }
    
    // if user has two nums plus operator, then presses another operator, display result.
    // then asign result to firstNum, and reset secondNum and result
    
        else { 
            firstNum = displayNumber;
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
    if (firstNum && secondNum) {
        display.textContent = operate(firstNum, secondNum, operator);
       
    }
})

function reset() {
    display.textContent = "";
    operator = "";
    firstNum = "";
    secondNum = "";
    displayNumber = "";
    result = "";
}


// when an operator is pressed, copy displayNumber to firstNum 
// store operator in var operator. 
// if user presses operator again, store new value in operator
// user then enters second number. 
// when user presses equals, copy displayNumber to secondNum 
// and execute operate() 
// display.content = results
//  


// create display variable 
// add event listen to all buttons
// if button has class number get button content 
// if display variable is empty, store button content. 
// if display var already has a number, concatenate 

