/* For Loops Syntax
for(initialization; condition; update){
    code to repeat
}
*/
//Counting From 0 - 5
for(let i = 0; i<5; i++) { //i++ => i+=1
    console.log(`The Number is: ${i}`)
}
console.log("==================")
//Counting From 1-10 inclusive
for(let i = 1; i<=10; i++) { 
    console.log(i)
}
console.log("==================")
//Counting From 1-100 inclusive by 10
for(let i = 1; i<=100; i+=10) { 
    console.log(i)
}

console.log("==================")
//Counting down from 20-10 by 1
for(let i = 20; i>10; i--){
    console.log(i)
}
console.log("==================")
//Counting down from 20-10 by 1
for(let i = 20; i>10; i--){
    console.log(i)
}

console.log("==================")
//Counting down from 20-10 by 2
for(let i = 20; i>10; i-=2){
    console.log(i)
}


// LOOPING THROUGH ARRAYS
let games = ["Mario", "Zelda", "Pokemon"]
// for(let i = 0; i<3; i++){ 
//     console.log(games[i])
// }
for(let i = 0; i<games.length; i++){ // games.length dynamically changes
    console.log(games[i])
}

games = ["Mario", "Pokemon"]
for(let i = 0; i<games.length; i++){ // games.length dynamically changes
    console.log(games[i])
}
console.log("==================")
games = ["Mario", "Zelda", "Pokemon"]
//for of loop
for(let game of games){
    console.log(game)
}

//Pattern : Sum all numbers
let scores = [85, 92, 78, 95, 88, 65];
let total = 0
for(let score of scores){
    total += score
}
console.log(`Total: ${total}`)
console.log(`Average: ${total/scores.length}`)

//Pattern: Find Maxium
let max = scores[0] // start with first item
for (let score of scores){
    if(score > max){
        max = score;
    }
}

console.log("High Score:", max)

scores = [85, 92, 78, 95, 88, 65];
//Pattern: Count Matches score>=70
let passing = 0;
for(let score of scores){
    if(score>=70){
        passing++;
    }
}

console.log("Passing Scores", passing)

//Pattern: Build a New Array
let prices = [10, 25, 15, 30]
let discounted = []

for(let price of prices){
    discounted.push(price * 0.8) //20% off
}
console.log(discounted)

//While Loop Syntax
/*
while(condition){
  //code to repeat
  //must eventually stop.
 }

*/
// count 1-10
let count = 1
while(count<11){
    console.log(count)
    count++;
}

//Loop CONTROL - break - stops the entire loop
let key = prompt("Enter a key to exit:")
while(key !== "q"){
    console.log(`You pressed ${key}`)
    key = prompt("Enter a key again to exit:")
}

console.log("You finally exited!")