const userChoice1 = document.getElementById('User-choice')
const computerChoice1 = document.getElementById('Computer-choice')
const resultDisplay1 = document.getElementById('Result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let randomNumber
let result2

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice =e.target.id 
    userChoice1.innerHTML=userChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice(){

    randomNumber = Math.floor(Math.random() * possibleChoices.length)+1
   console.log (randomNumber)

    if (randomNumber === 1){
        computerChoice = 'Rock'
    }

    if (randomNumber === 2){
        computerChoice = 'Paper'
    }

    if (randomNumber === 3){
        computerChoice = 'Scissors'
    }

    computerChoice1.innerHTML = computerChoice
}

function getResult(){
    if(userChoice === computerChoice){
       result2 = 'Draw' 
    }

    if((userChoice === 'Rock'  && computerChoice === 'Scissors') || (userChoice === 'Paper'  && computerChoice === 'Rock') || (userChoice === 'Scissors'  && computerChoice === 'Paper'))
    {
        result2 = 'You win'
    }
    if((userChoice === 'Rock'  && computerChoice === 'Paper') || (userChoice === 'Paper'  && computerChoice === 'Scissors') || (userChoice === 'Scissors'  && computerChoice === 'Rock'))
    {
        result2 = 'computer win'
    }
    resultDisplay1.innerHTML = result2

}






















