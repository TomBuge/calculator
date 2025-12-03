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