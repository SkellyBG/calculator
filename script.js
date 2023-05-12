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

let storedNum = 0;
let operator = '=';
let displayedNum = 0;

const populateDisplay = function populateDisplay(digit) {
    displayedNum = displayedNum * 10 + digit;
    updateDisplay();
};

const updateDisplay = function updateDisplay() {
    const display = document.querySelector(".display");
    display.textContent = displayedNum.toString();
};

const changeOperator = function(newOperator) {
    storedNum = calculate(storedNum, displayedNum, operator);
    operator = newOperator;
    displayedNum = 0;

    
};

const calculate = function(num1, num2, operator) {
    switch(operator) {
        case '+': return add(num1, num2);
        case '-': return subtract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
        case '=': return num2;
        default: return NaN;
    } 
};

const operate = function() {
    storedNum = calculate(storedNum, displayedNum, operator);
    operator = "=";

    displayedNum = storedNum;
    updateDisplay();
    displayedNum = 0;
};

const clear = function() {
    storedNum = 0;
    operator = "=";
    displayedNum = 0;
    updateDisplay();
};

document.querySelector(".num-1").addEventListener("click", function(){populateDisplay(1);});
document.querySelector(".num-2").addEventListener("click", function(){populateDisplay(2);});
document.querySelector(".num-3").addEventListener("click", function(){populateDisplay(3);});
document.querySelector(".num-4").addEventListener("click", function(){populateDisplay(4);});
document.querySelector(".num-5").addEventListener("click", function(){populateDisplay(5);});
document.querySelector(".num-6").addEventListener("click", function(){populateDisplay(6);});
document.querySelector(".num-7").addEventListener("click", function(){populateDisplay(7);});
document.querySelector(".num-8").addEventListener("click", function(){populateDisplay(8);});
document.querySelector(".num-9").addEventListener("click", function(){populateDisplay(9);});
document.querySelector(".num-0").addEventListener("click", function(){populateDisplay(0);});

document.querySelector(".equal").addEventListener("click", function(){operate();});
document.querySelector(".add").addEventListener("click", function(){changeOperator("+");});
document.querySelector(".subtract").addEventListener("click", function(){changeOperator("-");});
document.querySelector(".multiply").addEventListener("click", function(){changeOperator("*");});
document.querySelector(".divide").addEventListener("click", function(){changeOperator("/");});
document.querySelector(".clear").addEventListener("click", clear);

