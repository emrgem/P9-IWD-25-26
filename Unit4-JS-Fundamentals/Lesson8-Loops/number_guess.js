// // Generate random number 1-10
// let secret = Math.floor(Math.random() * 10) + 1;
// let guess = 0;

// // Loop until correct
// while (guess !== secret) {
//     // Get input (convert string to number)
//     guess = Number(prompt("Guess 1-10:"));
    
//     // Give hints
//     if (guess < secret) {
//         alert("Too low! Try again.");
//     } else if (guess > secret) {
//         alert("Too high! Try again.");
//     }
// }

// // Winner!
// alert("🎉 You win! It was " + secret);


// Alternative Solution
let secret = Math.floor(Math.random() * 2) + 1 
while(true){
    let guess = Number(prompt("Guess 1-10:"))
    if(guess < secret){
        alert("Too low! Try again")
    }else if(guess > secret){
        alert("Too high! Try again")
    }else {
        //correct guess
        alert("You win! It was" + secret)
        break
    }
}
