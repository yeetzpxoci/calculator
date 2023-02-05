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

var first_value = 0;
var second_value = 0;
var current_operator = "";
var transformed = false;
var floating_point = false;

const display = document.getElementById("display")
display.innerHTML = ""

document.querySelectorAll(".number-button").forEach(function(element) {
    element.addEventListener("click", function () {
        if (this.style.transform != "rotate(180deg)") {
            this.style.transform = "rotate(180deg)";
        } else {
            this.style.transform = "rotate(0deg)";
        }
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
        if (this.style.transform != "rotate(180deg)") {
            this.style.transform = "rotate(180deg)";
        } else {
            this.style.transform = "rotate(0deg)";
        }

        if (current_operator === "") {
            first_value = parseFloat(display.innerHTML);
            display.innerHTML = this.innerHTML;
        } else {
            display.innerHTML = this.innerHTML;
        }
        current_operator = display.innerHTML;
    })
})

document.querySelector(".clear-button").addEventListener("click", function () {
    if (!transformed) {
        this.style.transform = "rotate(180deg)";
        transformed = true;
    } else {
        this.style.transform = "rotate(0deg)";
        transformed = false;
    }
    
    display.innerHTML = ""
    var first_value = 0;
    var second_value = 0;
    var current_operator = "";
;})

document.querySelector(".delete-button").addEventListener("click", function () {
    display.innerHTML = display.innerHTML.slice(0, -1);
})

document.querySelector(".floating-point").addEventListener("click", function () {
    if (!floating_point) {
        display.innerHTML = display.innerHTML + this.innerHTML;
        floating_point = true;
    }
})

document.querySelector(".equal-button").addEventListener("click", function () {
    if (current_operator !== "") {
        second_value = parseFloat(display.innerHTML);
        if (current_operator === "/" && second_value == 0) {
            prompt("Error: division by 0 is undefined.");
            display.innerHTML = "";
        } else {
            display.innerHTML = String(Math.round(operate(current_operator, first_value, second_value) * 100) / 100);
        }
    }
    current_operator = "";
})


