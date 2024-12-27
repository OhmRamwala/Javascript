// Number Guessing Game [Professional Method]

// this generates a random number using math library
let x = Math.floor((Math.random() * 100) + 1);
let guess
let count = 0;
console.log(x)
do{
    guess = prompt("Guess the Number!")
    if(guess!=x){
        alert("You guessed it wrong try again!")
    }
    count++;
}while(x!=guess)
alert("Wohoo! You guessed the correct number "+ x + " in only " + count+" tries")
