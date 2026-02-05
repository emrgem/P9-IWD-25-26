/**
 * Lesson 9C: Objects Mastery - Starter File
 * ==========================================
 * 
 * Today's Topics:
 *   1. Choosing the right data structure
 *   2. Arrays of Objects
 *   3. Three essential patterns: SUM, FILTER/COUNT, FIND BEST
 */

console.log("🎮 Lesson 9C: Objects Mastery 🎮");
console.log("================================");
console.log("");


// ============================================
// 📝 REVIEW QUESTION 1: SUM Pattern
// ============================================
// Calculate the TOTAL price of all products.
// Expected output: "Total: $1099"

console.log("--- Review Question 1: SUM Pattern ---");

let products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 75, inStock: true }
];

// YOUR CODE HERE:
// Hint: Start with total = 0, then loop and add each product.price




// ============================================
// 📝 REVIEW QUESTION 2: FILTER/COUNT Pattern
// ============================================
// Count how many products are IN STOCK.
// Expected output: "In stock: 2"

console.log("");
console.log("--- Review Question 2: FILTER/COUNT Pattern ---");

// Use the same products array from above

// YOUR CODE HERE:
// Hint: Start with count = 0, use if statement to check inStock




// ============================================
// 🎯 PATTERN #3: FIND BEST - Code Along
// ============================================
// Find the game with the HIGHEST rating.
// Expected output: "Best rated game: Zelda with 97/100"

console.log("");
console.log("--- Code Along: FIND BEST Pattern ---");

let games = [
    { title: "Zelda", rating: 97, price: 59 },
    { title: "Mario Kart", rating: 92, price: 49 },
    { title: "Minecraft", rating: 93, price: 29 },
    { title: "Elden Ring", rating: 96, price: 59 },
    { title: "Batman", rating: 100, price: 59 },
];

// CODE ALONG WITH TEACHER:
// Step 1: Start with the first game as our "best"
let bestGame = games[0]
console.log(`Starting King: ${bestGame.title}`) //Zelda
// Step 2: Loop through ALL games
for(let game of games){
    console.log(`Checking: ${game.title} (${game.rating})`)
    // Step 3: Inside loop - Compare: Is this game better than current best?
    if(game.rating > bestGame.rating){
        bestGame = game
        console.log(`New Best Found: ${game.title}`)
    }
}

// Step 4: After loop - Print the winner!
console.log(`Best rated Game: ${bestGame.title} with ${bestGame.rating}/100`)




// ============================================
// ✏️ YOUR TURN 1: Find the Shortest Movie
// ============================================
// Find the movie with the SHORTEST runtime.
// Expected output: "Shortest movie: Toy Story at 81 minutes"
//
// HINT: Same pattern as FIND BEST, but use < instead of >

console.log("");
console.log("--- Your Turn 1: Find Shortest Movie ---");

let movies = [
    { title: "Avengers: Endgame", runtime: 181, year: 2019 },
    { title: "Finding Nemo", runtime: 100, year: 2003 },
    { title: "The Dark Knight", runtime: 152, year: 2008 },
    { title: "Toy Story", runtime: 81, year: 1995 }
];

// YOUR CODE HERE:




// ============================================
// 📋 PATTERN REFERENCE (for your notes)
// ============================================
/*
 * PATTERN #1: SUM
 * ----------------
 * let total = 0;
 * for (let item of array) {
 *     total += item.property;
 * }
 * 
 * 
 * PATTERN #2: FILTER / COUNT
 * --------------------------
 * let count = 0;
 * for (let item of array) {
 *     if (item.property > someValue) {
 *         count++;
 *     }
 * }
 * 
 * 
 * PATTERN #3: FIND BEST (highest)
 * -------------------------------
 * let best = array[0];
 * for (let item of array) {
 *     if (item.property > best.property) {
 *         best = item;
 *     }
 * }
 * 
 * 
 * PATTERN #3: FIND BEST (lowest)
 * ------------------------------
 * let worst = array[0];
 * for (let item of array) {
 *     if (item.property < worst.property) {
 *         worst = item;
 *     }
 * }
 */


