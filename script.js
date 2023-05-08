const add = function add(num1, num2) {
    return num1 + num2;
};

const subtract = function subtract(num1, num2) {
    return num1 - num2;
};

const multiply = function multiply(num1, num2) {
    return num1 * num2;
};

const divide = function divide(num1, num2) {
    return num1 / num2;
};

let num1;
let operator;
let num2;

const operate = function(num1, num2, operator) {
    switch(operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case 'x':
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        default: 
    }
};

