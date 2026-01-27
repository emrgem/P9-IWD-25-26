// ============================================
// LESSON 06: FUNCTIONS (DAY 1) - CODE ALONG
// ============================================
// Follow along with the slides and type the code BELOW each comment

console.log("🎮 Starting Lesson 06: Functions (Day 1)");

// ==================== PART A: WHY FUNCTIONS? ====================

console.log("\n📦 PART A: Why Functions?");

// The Problem: Repeating code
console.log("====================");
console.log("Welcome to GameHub!");
console.log("====================");

// ==================== PART B: CREATING FUNCTIONS ====================

console.log("\n📝 PART B: Creating Functions");

// Define a function called 'greet' that shows the welcome message
function greet(){
    console.log("==============");
    console.log("Welcome to BT!");
    console.log("==============");
}

// Call the 'greet' function twice
greet();
greet();

// Define a function called 'startGame' that shows game startup messages
function startGame(){
    console.log("🎮GAME STARTING...");
    console.log("Loading Assets...");
    console.log("Preparing world..");
    console.log("✅Ready to play!");
}

// Call the 'startGame' function
startGame();

// ==================== PART C: PARAMETERS ====================

console.log("\n📥 PART C: Parameters");

// Define a function WITHOUT parameters called 'greetPlayer'


// Call 'greetPlayer' (it always says the same thing)


// Define a function WITH one parameter called 'greetPlayerByName'
function greetPlayerByName(name){
    console.log(`Hello, ${name}!`)
}

// function greetPlayerByName(){
//     let name = prompt("Enter your name:") 
//     console.log(`Hello, ${name}!`)
// }

// Call 'greetPlayerByName' with different names
greetPlayerByName("Mike")
greetPlayerByName("Alisha")

// Define a function with TWO parameters called 'showPlayerStats'

let student = "Safiyya";
function showPlayerStats(name, score){
    console.log(`I can see ${student} from inside the function`)
    console.log(`Player: ${name}`)
    console.log(`Score: ${score}`)
    console.log("----------------")
    student = "Hannah"
    console.log(`I can see ${student} from inside the function`)
}
// Call 'showPlayerStats' with different player data
showPlayerStats("Abel", 1500)
showPlayerStats("Orlando", 1800)
showPlayerStats(student, 2000)

// Define a function using template literals called 'greetPlayerBetter'


// Call 'greetPlayerBetter' with a name


// ==================== GAME EXAMPLE ====================

console.log("\n⚔️ Game Example: Attack Function");

// Define a function called 'attackEnemy' with two parameters


// Call 'attackEnemy' with different enemies and damage values


// Define 'attackEnemyBetter' using template literals


// Call 'attackEnemyBetter'


// ==================== ORDER MATTERS EXAMPLE ====================

console.log("\n⚠️ Remember: Order Matters!");

// Define a function called 'introducePlayer' with name and level parameters


// Call 'introducePlayer' with correct order


// Call 'introducePlayer' with wrong order (see what happens)


// ==================== COMMON MISTAKE ====================

console.log("\n🚫 Common Mistake: Forgetting ()");

// Define a function called 'celebrate'


// WRONG: Try calling it without parentheses (just type: celebrate)


// CORRECT: Call it with parentheses


