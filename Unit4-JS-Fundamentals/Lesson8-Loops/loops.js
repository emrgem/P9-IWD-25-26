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