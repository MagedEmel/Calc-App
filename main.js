const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        if (button.hasAttribute('data-number')) {
            handleNumber(button.getAttribute('data-number'));
        } else if (button.hasAttribute('data-operator')) {
            handleOperator(button.getAttribute('data-operator'));
        } else if (button.id === 'equals') {
            calculate();
        } else if (button.id === 'clear') {
            clearDisplay();
        }
    });
});

function handleNumber(number) {
    if (currentInput.length < 10) {
        currentInput += number;
        display.innerText = currentInput;
    }
}

function handleOperator(op) {
    if (currentInput !== '') {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString().slice(0, 10);  // Limiting the result length to 10 digits
    operator = '';
    previousInput = '';
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
}
