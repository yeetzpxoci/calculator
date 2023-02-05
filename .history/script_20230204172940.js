function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+': result = add(a, b); break;
        case '-': result = subtract(a, b); break;
        case '*': result = multiply(a, b); break;
        case '/': result = divide(a, b); break;
    }
    return result;
}

var display_value = "";
var first_value = 0;
var second_value = 0;
var operator_clicked = false;

const display = document.getElementById("display")
display.innerHTML = ""

document.querySelectorAll(".number-button").forEach(function(element) {
    element.addEventListener("click", function () {
        display.innerHTML = display.innerHTML + this.innerHTML;  
    })
})

document.querySelectorAll(".operator-button").forEach(function (element) {
    element.addEventListener("click", function () {
        if (!operator_clicked ) {
            display.innerHTML = display.innerHTML + this.innerHTML;
        }
    })
})

document.querySelector(".clear-button").addEventListener("click", function () {
    display.innerHTML = ""
;})

document.querySelector(".delete-button").addEventListener("click", function () {
    display.innerHTML = display.innerHTML.slice(0, -1);
})

document.querySelectorAll(".operator-button").addEventListener("click", function () {
    if (display.innerHTML != "") {
        first_value = toString(display.innerHTML);
    }
})

