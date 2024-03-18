var wins = 0;
var losses = 0;
var ties = 0;

function playRound() {
    var userInput = document.getElementById('userInput').value.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        var computerChoice = generateComputerChoice();
        var result = determineWinner(userInput, computerChoice);
        displayRoundResults(userInput, computerChoice, result);
        updateFinalOutcome(result);
    } else {
        alert('Please enter a valid choice: rock, paper, or scissors');
    }
}

function generateComputerChoice() {
    var choices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        ties++;
        return 'Tie';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        wins++;
        return 'Win';
    } else {
        losses++;
        return 'Loss';
    }
}

function displayRoundResults(userChoice, computerChoice, result) {
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `User Choice: ${userChoice}<br>Computer Choice: ${computerChoice}<br>Result: ${result}`;
}

function updateFinalOutcome(result) {
    var finalOutcomeElement = document.getElementById('finalOutcome');
    finalOutcomeElement.innerHTML = `Wins: ${wins}<br>Losses: ${losses}<br>Ties: ${ties}`;
    if (result === 'Win') {
        finalOutcomeElement.innerHTML += "<br>Congratulations! You won!";
    } else if (result === 'Loss') {
        finalOutcomeElement.innerHTML += "<br>Sorry! Computer won.";
    } else {
        finalOutcomeElement.innerHTML += "<br>It's a tie!";
    }
}

