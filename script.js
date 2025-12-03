const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

let firstNum;
let secondNum;
let operator;

const operate = (firstNum, secondNum, operator) => {
    switch (operator) {
    case "+":
        return add(firstNum, secondNum);
    case "-": 
        return subtract(firstNum, secondNum);
    case "*":
        return multiply(firstNum, secondNum);
    case "/":
        return divide(firstNum, secondNum);
    } 
};

let displayNumber = "0"; 
const display = document.querySelector(".display");
display.textContent = displayNumber;
const numberButtons = document.querySelectorAll(".number");
const pressNumberButton = numberButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (displayNumber === "0") {
            displayNumber = btn.textContent;
            display.textContent = displayNumber;
            console.log(displayNumber);
        }
        else {
            displayNumber += btn.textContent;
            display.textContent += btn.textContent;
            console.log(displayNumber);
        }
    }) 
        
});

const clearButton = document.querySelector("#clear");
const pressClearButton = clearButton.addEventListener("click", () => {
    displayNumber = "0";
    display.textContent = displayNumber;
});


// create display variable 
// add event listen to all buttons
// if button has class number get button content 
// if display variable is empty, store button content. 
// if display var already has a number, concatenate 

