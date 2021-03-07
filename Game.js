//random guess number
let random = Math.floor(Math.random() * 101);
console.log(random);

let user_answer = document.getElementById("userguess");//guess of the user
let submit =  document.getElementById("submitguess");
let result =  document.getElementById("guess-result");
let attempts =  document.getElementById("attempts");
let no_attempts =  document.getElementById("attempts1");
let user_guesses = document.getElementById("prev_guess");
let messages = document.getElementById("message");
let guess;
let guesscount = 0
let prev_guesses = []

//submit bttn when user's guess is more than 0 and less than 100
const submitAnswer = () =>{
    if(parseInt(user_answer.value) > 0 && parseInt(user_answer.value) < 100){
       
        validateGuess(parseInt(user_answer.value));
        document.getElementById("guess-result").style.display = "block"; 
        prev_guesses.push(parseInt(user_answer.value))
        guesscount++
        attempts.innerHTML = `${10 - guesscount}`
        no_attempts.innerHTML = `${10 - guesscount}`
        user_guesses.innerHTML = `${prev_guesses}`
        checkGuess(parseInt(user_answer.value))
        document.getElementById("message").style.display = "block"; 
    }
    else{
        alert("Guess a number between 1 - 100")
    }
}

const validateGuess = (guess)=>{
        if(guesscount === 9){
            showMessage(`GameOver! The Guess Number was ${random}`)
            endGame()
        }
        else{
            checkGuess(guess);
        }
    
}
//check the guess whether high, low, or correct
const checkGuess=(guess)=>{
    if( guess === random){
       showMessage("Guessed Correctly.Congratulations!!!")
       document.getElementById("message").style.backgroundColor="rgb(7, 99, 7)"
       endGame();
    }
    else if(guess > random){
        showMessage("Its too high, Try Again!")
        document.getElementById("message").style.backgroundColor="#be1919"
    }
    else if(guesscount === 10){
            showMessage(`GAME OVER! The Guess Number was ${random}`)
            document.getElementById("message").style.backgroundColor="#be1919"
            endGame()
    }
    else {
        showMessage("Its too low, Try Again!")
        document.getElementById("message").style.backgroundColor="#df4f4f"
    }
   
}

const endGame = () => {
    submit.disabled = true;
    document.getElementById("newgame").style.display = "block"; 
  
}
//function for displaying message
const showMessage = (message) => {
    messages.innerHTML = `${message}`
}

const newGame = () => {
    document.getElementById("newgame").style.display = "none"; 
    document.getElementById("guess-result").style.display = "none"; 
    document.getElementById("message").style.display = "none"; 
    submit.disabled = false;
    guesscount = 0
    prev_guesses = [];
    guess= " "
    window.location.reload();
}

window.onload = function(){
    document.getElementById("newgame").style.display = "none"; 
    document.getElementById("guess-result").style.display = "none"; 

}