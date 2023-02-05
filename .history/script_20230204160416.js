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

function get_input() {
    const a = prompt("Enter first number: ");
    const b = prompt("Enter second number: ");
    console.log(divide(a, b))
    return divide(a, b);
}