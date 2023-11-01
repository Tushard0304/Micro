let currentInput = '';
let currentResult = 0;

// function to display the numbers including edge cases

function DisplayButton(value) {
    if (currentInput === '' && ['*', '+', '/'].includes(value)) {  // Edge cases
        return;
    }
    currentInput += value;
    document.getElementById('output').value = currentInput;

}

// Function to reset at 0 when clicked on reset button

function Reset() {
    currentInput = '';
    document.getElementById('output').value = '0';
}

// Final calculations 

function FinalResult() {
    try {
        const Result = eval(currentInput);
        const TwodecimalPlaces = Number(Result.toFixed(2))  // For updating the Answers upto only two decimal places
        document.getElementById('output').value = TwodecimalPlaces;
        currentInput = TwodecimalPlaces.toString();
    } catch (error) {
        document.getElementById('output').value = 'Error';
    }
}

// To Delete the numbers from right side one by one 

function Delete() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('output').value = currentInput;
}