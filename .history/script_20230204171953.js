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

const display = document.getElementById("display")
display.innerHTML = ""

document.querySelectorAll(".number-button").forEach(function(element) {
    element.addEventListener("click", function () {
        display.innerHTML = display.innerHTML + this.innerHTML  
    })
})

