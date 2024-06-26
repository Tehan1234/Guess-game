
let randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0;
const maxAttempts = 3;

function guess() {
    let userGuess = parseInt(document.getElementById("txtGuess").value);
    let result = document.getElementById("result");
    attempts++;

    if (attempts <= maxAttempts) {
        if (userGuess < randomNumber) {
            alert("The answer is greater than your guess.");
        } else if (userGuess > randomNumber) {
            alert("The answer is less than your guess.");
        } else {
            alert("Congratulations! You are the winner!");
            return; // Exit the function if the user guesses correctly
        }

        if (attempts === maxAttempts) {
            alert("Your time is over. The correct number was " + randomNumber);
            setTimeout(function() {
                location.reload();
            }, 1000);
        }
    } else {
        alert("Your time is over. The correct number was " + randomNumber);
        setTimeout(function() {
            location.reload();
        }, 1000); 
    }
}
