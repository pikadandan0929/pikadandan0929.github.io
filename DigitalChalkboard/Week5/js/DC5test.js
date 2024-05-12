// Function to check the trivia question
function checkTriviaAnswer() {
    const answer = document.getElementById('trivia-answer').value.trim();
    const responseElement = document.getElementById('trivia-response');
    const correctAnswer = "Paris";
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        responseElement.textContent = `Correct! The correct answer is ${answer}`;
    } else {
        responseElement.textContent = `Incorrect. The correct answer isn't ${answer}. Try another time!`;
    }
}

// Function to check if a number is odd or even
function checkNumber() {
    const numInput = document.getElementById('number-input').value;
    const num = parseInt(numInput);
    const responseElement = document.getElementById('number-response');
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
        const isEven = num % 2 === 0;
        responseElement.innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;
    } else {
        responseElement.innerText = "Please enter a valid 5-digit number.";
    }
}

// Function to handle Enter key press for both trivia and number check
function handleEnter(event, type) {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default form submission
        if (type === 'trivia') {
            checkTriviaAnswer();
        } else if (type === 'number') {
            checkNumber();
        }
    }
}
