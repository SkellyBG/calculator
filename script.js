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

let num1 = 0;
let operator = '+';
let num2 = 0;


document.querySelector(".num-1").addEventListener("click", function(){populateDisplay(1);})
document.querySelector(".num-2").addEventListener("click", function(){populateDisplay(2);})
document.querySelector(".num-3").addEventListener("click", function(){populateDisplay(3);})
document.querySelector(".num-4").addEventListener("click", function(){populateDisplay(4);})
document.querySelector(".num-5").addEventListener("click", function(){populateDisplay(5);})
document.querySelector(".num-6").addEventListener("click", function(){populateDisplay(6);})
document.querySelector(".num-7").addEventListener("click", function(){populateDisplay(7);})
document.querySelector(".num-8").addEventListener("click", function(){populateDisplay(8);})
document.querySelector(".num-9").addEventListener("click", function(){populateDisplay(9);})
document.querySelector(".num-0").addEventListener("click", function(){populateDisplay(0);})

const populateDisplay = function populateDisplay(digit) {
    const display = document.querySelector(".display");
    let num = Number.parseInt(display.textContent);
    num = num * 10 + digit;
    display.textContent = num.toString();
};

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

