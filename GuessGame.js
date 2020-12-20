
let random = Math.floor(Math.random() * 101);
console.log(random);

let user_answer = document.getElementById("userguess");
let submit =  document.getElementById("submitguess");
let result =  document.getElementById("guess-result");
let attempts =  document.getElementById("attempts");
let user_guesses = document.getElementById("prev_guess");
let messages = document.getElementById("message");

let guess;
let guesscount = 0
let prev_guesses = []



const submitAnswer = () =>{

    submit.addEventListener('click', function(e){
        e.preventDefault();
        guess = parseInt(user_answer.value)
        validateGuess(guess);
    });
}
   

const validateGuess = (guess)=>{
    console.log(guess)

    if(guess <= 1 || guess >= 100){
        alert("Guess a number between 1 - 100")
    }
    else{
        checkGuess()
        prev_guesses.push(guess)
        console.log(prev_guesses)
        if(guesscount > 10){
            showGuesses(guess)
            showMessage(`GameOver! The Guess Number was ${random}`)
            endGame()
        }
        else{
            showGuesses(guess)
            checkGuess();
        }
    }
}

const checkGuess=()=>{
    if(random === guess){
       showMessage("Guessed Correctly")
       endGame();
    }
    else if(guess > random){
        showMessage("Its too high, Try Again!")
    }
    else{
        showMessage("Its too low, Try Again!")
    }
}

const showMessage = (message) => {
    guess = " "
    messages.innerHTML = `${message}`
    
  
}

const showGuesses = (guess) => {
    guess = " "
   // user_guesses.innerHTML += `${guess}`
    guesscount++
    attempts.innerHTML = `${10 - guesscount}`
   
}

const endGame = () => {
    guess = "";
    document.getElementById("newgame").style.display = "block"; 
}

