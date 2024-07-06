const randomNumber = Math.floor(Math.random()*100+1)

const userInput = document.querySelector('.guessField')
const submit = document.querySelector('.guessSubmit')

const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')

const lowOrHigh = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1


let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){
    if(guess <= 0 || guess > 100 || isNaN(guess)){
        alert("Please Enter a valid Number: ")        
    }else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess > randomNumber){
        displayMessage(`Number too high - `)
    }else if(guess < randomNumber){
        displayMessage(`Number too low - `)
    }else{
        displayMessage(`You have guessed it right`)
    }
}

function displayGuess(guess){
    userInput.value = ' '
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function newGame(){

}
function endGame(){

}



