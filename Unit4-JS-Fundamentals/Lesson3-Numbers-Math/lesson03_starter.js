// ============================================
// 🎲 LESSON 03: Numbers & Math
// ============================================
// 
// Today you'll learn:
// - Math.round(), Math.floor(), Math.ceil()
// - Math.max(), Math.min(), Math.abs()
// - Math.random() for random numbers
// - Building dice rollers and game mechanics!
//
// ============================================

console.log("🎲 Lesson 03: Numbers & Math");
console.log("============================");
console.log("");


// ============================================
// PART A: The Math Object
// ============================================

console.log("📐 PART A: The Math Object");
console.log("--------------------------");


// --------------------------------------------
// ⭐ CHALLENGE 1: Rounding Methods
// --------------------------------------------

// TODO 1.1: Use Math.round() to round 4.7 to the nearest whole number
// Expected output: Rounded: 5
let number = 4.7
let rounded = Math.round(number) 
console.log(`The number ${number} is rounded to ${rounded}`)


// TODO 1.2: Use Math.floor() to round 4.9 DOWN
// Expected output: Floored: 4
number = 4.9
let floored = Math.floor(number)
console.log(`Number ${number } Floored: ${floored}`)


// TODO 1.3: Use Math.ceil() to round 4.1 UP
// Expected output: Ceiling: 5



// --------------------------------------------
// ⭐ CHALLENGE 2: Finding Values
// --------------------------------------------

console.log("");

// TODO 2.1: Use Math.max() to find the largest of 23, 67, 45, 89, 12
// Expected output: Highest: 89

let highest = Math.max(23, 67, 45, 89, 12);
console.log(`Highest: ${highest}`);

// TODO 2.2: Use Math.min() to find the smallest of 23, 67, 45, 89, 12
// Expected output: Lowest: 12
let lowest = Math.min(23, 67, 45, 89, 12);
console.log(`Lowest: ${lowest}`);


// TODO 2.3: Use Math.abs() to find the absolute value of -42
// Expected output: Absolute value: 42
let absolute = Math.abs(-42);
console.log(`Absolute value: ${absolute}`);


// ============================================
// PART B: Random Numbers
// ============================================

console.log("");
console.log("🎲 PART B: Random Numbers");
console.log("-------------------------");

console.log(Math.random())

// --------------------------------------------
// ⭐ CHALLENGE 3: Understanding Math.random()
// --------------------------------------------

// TODO 3.1: Generate and print a random decimal (0 to 0.999...)
// Just use Math.random() by itself
// Expected output: A decimal like 0.7234...



// TODO 3.2: Generate a random decimal from 0 to 9.999...
// Multiply Math.random() by 10
// Expected output: A decimal like 7.234...



// --------------------------------------------
// ⭐⭐ CHALLENGE 4: Dice Roller
// --------------------------------------------

console.log("");

// THE MAGIC PATTERN: Math.floor(Math.random() * n) + 1
// This gives you a random integer from 1 to n

// TODO 4.1: Roll a 6-sided die (1 to 6)
// Use: Math.floor(Math.random() * 6) + 1
// Expected output: 🎲 You rolled a [1-6]!



// TODO 4.2: Roll a 20-sided die (D20)
// Expected output: 🎲 D20: [1-20]



// --------------------------------------------
// ⭐⭐ CHALLENGE 5: Random Range
// --------------------------------------------

console.log("");

// FORMULA: Math.floor(Math.random() * (max - min + 1)) + min
// This gives you a random integer from min to max (inclusive)

// TODO 5.1: Generate a random number between 10 and 20
// let min = 10;
// let max = 20;
// Expected output: Random 10-20: [10-20]



// ============================================
// PART C: Game Examples
// ============================================

console.log("");
console.log("🎮 PART C: Game Examples");
console.log("------------------------");


// --------------------------------------------
// ⭐⭐ CHALLENGE 6: Loot Drop
// --------------------------------------------

// TODO 6.1: Generate random gold between 10 and 50
// Use the min-max formula!
// Expected output: 💰 You found [10-50] gold!



// --------------------------------------------
// ⭐⭐⭐ CHALLENGE 7: Critical Hit System
// --------------------------------------------

console.log("");

// TODO 7.1: Create a damage calculator
// - Set baseDamage to 25
// - Generate a random decimal for criticalChance
// - If criticalChance > 0.9 (10% chance), double the damage!
// - Print the result
// Expected output: 💥 CRITICAL! 50 damage! OR Hit for 25 damage.



// --------------------------------------------
// ⭐⭐⭐ CHALLENGE 8: Price Rounding
// --------------------------------------------

console.log("");

// TODO 8.1: Round a price to 2 decimal places
// let price = 19.567;
// Use the formula: Math.round(price * 100) / 100
// Expected output: Rounded price: $19.57



// TODO 8.2: Use toFixed() to format the same price
// Remember: toFixed() returns a STRING!
// Expected output: Formatted price: $19.57



// --------------------------------------------
// 🌟 BONUS: Complete Battle Turn
// --------------------------------------------

console.log("");
console.log("🌟 BONUS: Complete Battle Turn");
console.log("------------------------------");

// Create a battle turn that includes:
// 1. Roll a D20 to hit (need 10+ to hit)
// 2. If hit, calculate damage: base 10 + random 1-6 bonus
// 3. If roll is exactly 20, it's a critical hit - double damage!
// 4. Display all results

// Expected output examples:
// 🎯 Attack roll: 15 - HIT!
// ⚔️ Damage: 10 + 4 = 14
//
// 🎯 Attack roll: 7 - MISS!
//
// 🎯 Attack roll: 20 - CRITICAL HIT!
// 💥 Damage: 28 (doubled!)



// ============================================
// ✅ CHECKLIST
// ============================================
// [ ] Challenge 1: Used round, floor, ceil
// [ ] Challenge 2: Used max, min, abs
// [ ] Challenge 3: Generated random decimals
// [ ] Challenge 4: Built dice rollers
// [ ] Challenge 5: Used min-max formula
// [ ] Challenge 6: Created loot drop
// [ ] Challenge 7: Built critical hit system
// [ ] Challenge 8: Rounded prices
// [ ] Bonus: Complete battle turn
// ============================================

console.log("");
console.log("============================");
console.log("🏆 Lesson 03 Complete!");
console.log("Run multiple times to see random results change!");
