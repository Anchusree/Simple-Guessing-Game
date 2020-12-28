
let random = Math.floor(Math.random() * 101);
console.log(random);

let user_answer = document.getElementById("userguess");
let submit =  document.getElementById("submitguess");
let result =  document.getElementById("guess-result");
let attempts =  document.getElementById("attempts");
let no_attempts =  document.getElementById("attempts1");
let user_guesses = document.getElementById("prev_guess");
let messages = document.getElementById("message");

let guess;
let guesscount = 0
let prev_guesses = []



const submitAnswer = () =>{

    if(parseInt(user_answer.value) > 0){
        submit.addEventListener('click', function(e){
            e.preventDefault();
            //guess = parseInt(user_answer.value)
           
        });
        validateGuess(user_answer.value);
        console.log(user_answer.value)

        document.getElementById("guess-result").style.display = "block"; 


        prev_guesses.push(parseInt(user_answer.value))
        console.log(prev_guesses)
    
      
        guesscount++
        attempts.innerHTML = `${10 - guesscount}`
        no_attempts.innerHTML = `${10 - guesscount}`
        user_guesses.innerHTML = `${prev_guesses}`
        checkGuess(user_answer.value)
       // document.getElementById("message").style.display = "block"; 
    }
   
}

const validateGuess = (guess)=>{

    if(guess < 1 || guess > 100){
        alert("Guess a number between 1 - 100")
        
    }
    else{
        if(guesscount === 10){
            showMessage(`GameOver! The Guess Number was ${random}`)
            endGame()
        }
        else{
            checkGuess(guess);
        }
    }
   

}

const checkGuess=(guess)=>{
    if(random == guess){
       showMessage("Guessed Correctly.Congratulations!!!")
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
    guess = ''
    messages.innerHTML = `${message}`

    if(message === "Guessed Correctly.Congratulations!!!"){
        messages.style.background = "green" 
        messages.style.fontSize = "60px"
    }
    else if(message === "Its too high, Try Again!"){
        messages.style.background = "red" 
    }
    else{
        messages.style.background = "red" 
    }

}

const endGame = () => {
    guess = "";
    submit.disabled = true;
    document.getElementById("newgame").style.display = "block"; 
}

const newGame = () => {
    document.getElementById("newgame").style.display = "none"; 
    document.getElementById("guess-result").style.display = "none"; 
    document.getElementById("message").style.display = "none"; 
    submit.disabled = false;
    guesscount = 0
    prev_guesses = []
    checkGuess()
}

window.onload = function(){
    document.getElementById("newgame").style.display = "none"; 
    document.getElementById("guess-result").style.display = "none"; 

}

