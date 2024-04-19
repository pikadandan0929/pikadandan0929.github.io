// Function to check first question
function checkTriviaAnswer() {
    const answer = document.getElementById('triviaAnswer').value.trim();
    const responseElement = document.getElementById('triviaResponse');
    const correctAnswer = "Paris";
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        responseElement.textContent = `Correct! The correct answer is ${answer}`;
    } else {
        responseElement.textContent = `Incorrect. The correct answer isn't ${answer}. Try another time!`;
    }
}

function checkNumber() {
    const numInput = document.getElementById('numberInput').value;
    const num = parseInt(numInput);
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
      const isEven = num % 2 === 0;
      document.getElementById('numberResult').innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;
    } else {
      document.getElementById('numberResult').innerText = "Please enter a valid 5-digit number.";
    }
  }


document.addEventListener('DOMContentLoaded', () => {
    const triviaInput = document.getElementById("triviaAnswer");
    triviaInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        checkTrivia();
      }
    });
  
    const numberInput = document.getElementById("numberCheck");
    numberInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        checkNumber();
      }
    });
  });



