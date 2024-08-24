javascript
// script.js
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    try {
        // Replace '**' with '^' for exponentiation
        let expression = display.value.replace(/\*\*/g, '^');
        // Evaluate the expression
        let result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

