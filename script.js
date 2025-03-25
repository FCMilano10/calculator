// script.js
let display = document.getElementById("display");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;
        
        // Handle trigonometric functions
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        
        // Handle exponentiation
        expression = expression.replace(/\^/g, '**');

        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}
