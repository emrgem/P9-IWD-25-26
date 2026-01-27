// ============================================
// ✅ LESSON 04: Booleans & Logical Operators
// ============================================
// 
// Today you'll learn:
// - Boolean values (true/false)
// - Comparison operators (===, !==, >, <, >=, <=)
// - Logical operators (&&, ||, !)
// - Combining conditions for game logic
//
// ============================================

console.log("✅ Lesson 04: Booleans & Logic");
console.log("==============================");
console.log("");


// ============================================
// PART A: Boolean Basics
// ============================================

console.log("📋 PART A: Boolean Basics");
console.log("-------------------------");


// --------------------------------------------
// ⭐ CHALLENGE 1: Creating Booleans
// --------------------------------------------

// TODO 1.1: Create a boolean variable isGameOver set to false



// TODO 1.2: Create a boolean variable hasKey set to true



// TODO 1.3: Create a boolean variable isLoggedIn set to true



// TODO 1.4: Print all three variables with labels
// Expected output:
// Game Over: false
// Has Key: true
// Logged In: true



// --------------------------------------------
// ⭐ CHALLENGE 2: Boolean Naming
// --------------------------------------------

console.log("");

// Create boolean variables for these game states:
// TODO 2.1: Player can jump (true)



// TODO 2.2: Sound is enabled (false)



// TODO 2.3: Player has completed the tutorial (true)



// TODO 2.4: Print all with descriptive messages
// Expected output:
// Can Jump: true
// Sound Enabled: false
// Tutorial Complete: true



// ============================================
// PART B: Comparison Operators
// ============================================

console.log("");
console.log("⚖️ PART B: Comparison Operators");
console.log("--------------------------------");


// --------------------------------------------
// ⭐ CHALLENGE 3: Basic Comparisons
// --------------------------------------------

// TODO 3.1: Create a variable playerLevel = 15



// TODO 3.2: Check if playerLevel is greater than 10
// Print the result
// Expected output: Level > 10: true



// TODO 3.3: Check if playerLevel is exactly equal to 15 (use ===)
// Expected output: Level === 15: true



// TODO 3.4: Check if playerLevel is less than or equal to 20
// Expected output: Level <= 20: true



// TODO 3.5: Check if playerLevel is NOT equal to 1 (use !==)
// Expected output: Level !== 1: true



// --------------------------------------------
// ⭐⭐ CHALLENGE 4: Predict the Output
// --------------------------------------------

console.log("");
console.log("🔮 Predict these outputs BEFORE uncommenting!");

// TODO 4.1: Uncomment each line one at a time
// First PREDICT, then check!

// console.log(10 > 5);        // Prediction: ___
// console.log(10 === "10");   // Prediction: ___ (strict equality!)
// console.log(5 >= 5);        // Prediction: ___
// console.log(3 !== 3);       // Prediction: ___
// console.log(7 < 7);         // Prediction: ___



// --------------------------------------------
// ⭐⭐ CHALLENGE 5: Game Requirement Checks
// --------------------------------------------

console.log("");

// Set up game variables
// TODO 5.1: Create these variables:
// - playerGold = 250
// - itemPrice = 100
// - playerAge = 16
// - minimumAge = 13



// TODO 5.2: Check if player can afford the item (gold >= price)
// Expected output: Can afford item: true



// TODO 5.3: Check if player meets age requirement (age >= minimum)
// Expected output: Meets age requirement: true



// TODO 5.4: Check if player has EXACTLY 250 gold
// Expected output: Has exactly 250 gold: true



// ============================================
// PART C: Logical Operators
// ============================================

console.log("");
console.log("🔗 PART C: Logical Operators");
console.log("----------------------------");


// --------------------------------------------
// ⭐⭐ CHALLENGE 6: AND Operator (&&)
// --------------------------------------------

// TODO 6.1: Create these variables:
// - health = 100
// - hasWeapon = true



// TODO 6.2: Check if player can attack (health > 0 AND hasWeapon)
// Store result in canAttack variable
// Expected output: Can attack: true



// TODO 6.3: Now change health to 0 and check again
// Expected output: Can attack: false



// --------------------------------------------
// ⭐⭐ CHALLENGE 7: OR Operator (||)
// --------------------------------------------

console.log("");

// TODO 7.1: Create these variables:
// - hasMembership = false
// - hasDayPass = true



// TODO 7.2: Check if player can enter (membership OR day pass)
// Store result in canEnter variable
// Expected output: Can enter: true



// TODO 7.3: Set both to false and check again
// Expected output: Can enter: false



// --------------------------------------------
// ⭐⭐ CHALLENGE 8: NOT Operator (!)
// --------------------------------------------

console.log("");

// TODO 8.1: Create variable isPaused = true



// TODO 8.2: Use NOT to check if game is running (!isPaused)
// Expected output: Game is running: false



// TODO 8.3: Create isInvisible = false
// Check if player is visible (!isInvisible)
// Expected output: Player is visible: true



// ============================================
// PART D: Combining Operators
// ============================================

console.log("");
console.log("🎮 PART D: Combining Operators");
console.log("------------------------------");


// --------------------------------------------
// ⭐⭐⭐ CHALLENGE 9: Complex Conditions
// --------------------------------------------

// TODO 9.1: Create these game state variables:
// - playerLevel = 10
// - hasGuildMembership = true
// - goldAmount = 500
// - questsCompleted = 5



// TODO 9.2: Can enter dungeon?
// Requirements: Level >= 10 AND has guild membership
// Expected output: Can enter dungeon: true



// TODO 9.3: Can buy legendary weapon?
// Requirements: (Level >= 15 AND gold >= 1000) OR questsCompleted >= 10
// Expected output: Can buy legendary weapon: false



// TODO 9.4: Is eligible for bonus?
// Requirements: Level >= 5 AND (gold >= 500 OR questsCompleted >= 5)
// Expected output: Eligible for bonus: true



// --------------------------------------------
// ⭐⭐⭐ CHALLENGE 10: Access Control System
// --------------------------------------------

console.log("");

// TODO 10.1: Create these variables:
// - username = "player123"
// - isAdmin = false
// - accountAge = 30  (days)
// - hasVerifiedEmail = true



// TODO 10.2: Can post comments?
// Requirements: (accountAge >= 7 AND hasVerifiedEmail) OR isAdmin
// Expected output: Can post comments: true



// TODO 10.3: Can moderate content?
// Requirements: isAdmin AND accountAge >= 30
// Expected output: Can moderate: false



// TODO 10.4: Check if username exists (is not empty string)
// Hint: An empty string "" is falsy
// Expected output: Has username: true



// ============================================
// 🌟 BONUS: Character Status Checker
// ============================================

console.log("");
console.log("🌟 BONUS: Character Status Checker");
console.log("-----------------------------------");

// Create a complete character status system!

// TODO BONUS 1: Create character stats
// - charHealth = 75
// - charMaxHealth = 100
// - charMana = 0
// - charMaxMana = 50
// - charIsAlive = true
// - charHasPotion = true
// - charInCombat = false



// TODO BONUS 2: Check various conditions:

// Is character healthy? (health > maxHealth / 2)
// Expected: Is healthy: true



// Can cast spell? (mana >= 10 AND isAlive AND NOT inCombat)
// Expected: Can cast spell: false (no mana!)



// Needs healing? (health < maxHealth / 2 AND hasPotion)
// Expected: Needs healing: false



// Is in danger? (health < 25 OR (inCombat AND health < 50))
// Expected: Is in danger: false



// ============================================
// ✅ CHECKLIST
// ============================================
// [ ] Part A: Created boolean variables
// [ ] Part B: Used all comparison operators
// [ ] Part C: Used AND, OR, NOT operators
// [ ] Part D: Combined multiple conditions
// [ ] Bonus: Built character status checker
// ============================================

console.log("");
console.log("==============================");
console.log("🏆 Lesson 04 Complete!");
