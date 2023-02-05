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
var current_operator = "";

const display = document.getElementById("display")
display.innerHTML = ""

document.querySelectorAll(".number-button").forEach(function(element) {
    element.addEventListener("click", function () {
        if (display.innerHTML === current_operator) {
            display.innerHTML = "";
            display.innerHTML = display.innerHTML + this.innerHTML;  
        } else {
            display.innerHTML = display.innerHTML + this.innerHTML;  
        }
    })
})

document.querySelectorAll(".operator-button").forEach(function (element) {
    element.addEventListener("click", function () {
        first_value = parseInt(display.innerHTML);
        display.innerHTML = "";
        
        if (current_operator === "") {
            display.innerHTML = display.innerHTML + this.innerHTML;
        } else {
            display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1) + this.innerHTML
        }
        current_operator = this.innerHTML;
    })
})

document.querySelector(".clear-button").addEventListener("click", function () {
    display.innerHTML = ""
;})

document.querySelector(".delete-button").addEventListener("click", function () {
    display.innerHTML = display.innerHTML.slice(0, -1);
})

document.querySelector(".floating-point").addEventListener("click", function () {
    display.innerHTML = display.innerHTML + this.innerHTML;
})

document.querySelector(".equal-button").addEventListener("click", function () {
    if (current_operator !== "") {
        second_value = parseInt(display.innerHTML);
        display.innerHTML = String(operate(current_operator, first_value, second_value));
    }
})


