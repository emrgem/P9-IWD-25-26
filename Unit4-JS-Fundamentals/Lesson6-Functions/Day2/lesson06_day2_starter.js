/*
============================================================
🎮 LESSON 06 DAY 2: Return Values & Scope
============================================================
Complete the 5 tasks below (~10 minutes)
============================================================
*/

// ============================================
// TASK 1: Fix This Function (1 min)
// ============================================
// Problem: This function shows the answer but returns undefined!
// Fix it by changing console.log to return

function double(num) {
    // console.log(num * 2);  // ← Change this line to use return
    return num * 2;
}

// Test — should print 10, not undefined:
// double(5);
let result = double(5);
console.log(double(10));
console.log("Task 1:", result);


// ============================================
// TASK 2: Damage Calculator (2 min)
// ============================================
// Create a function that RETURNS base * multiplier

function calculateDamage(base, multiplier) {
    return base * multiplier;
}

// Tests:
console.log("Task 2a:", calculateDamage(25, 2));   // Expected: 50
console.log("Task 2b:", calculateDamage(30, 1.5)); // Expected: 45


// ============================================
// TASK 3: Grade Calculator (3 min)
// ============================================
// Return the letter grade based on score
// 90+ = "A", 80+ = "B", 70+ = "C", 60+ = "D", below = "F"

function getGrade(score) {
    // Your code here (use if statements with return)
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

// Tests:
console.log("Task 3a:", getGrade(95));  // Expected: A
console.log("Task 3b:", getGrade(82));  // Expected: B
console.log("Task 3c:", getGrade(71));  // Expected: C
console.log("Task 3d:", getGrade(65));  // Expected: D
console.log("Task 3e:", getGrade(55));  // Expected: F


// ============================================
// TASK 4: Scope Practice (2 min)
// ============================================
// This code has a bug! The global health never changes.
// Fix the takeDamage function so it modifies the GLOBAL health.
// HINT: Remove 'let' to use the global variable instead of creating a local one.

let health = 100;

function takeDamage(amount) {
    // let health = health - amount;  // ← Bug: creates local variable!
    health = health - amount;  // ← Bug: creates local variable!
    console.log("Health now:", health);
}

// Test — health should decrease:
console.log("Task 4 - Before:", health);  // 100
takeDamage(30);
console.log("Task 4 - After:", health);   // Should be 70, not 100!


// ============================================
// TASK 5: Arrow Function (2 min)
// ============================================
// Convert this traditional function to an arrow function

// Traditional version:
// function triple(n) {
//     return n * 3;
// }

// Write the arrow version here:
// const triple = (n) => {
//     return n * 3;
// }

//Arrow Shorthand (one-liner)
const triple = n => n * 3;

// Test:
console.log("Task 5a:", triple(7));  // Expected: 21
console.log("Task 5b:", triple(10));  // Expected: 30


// ============================================
// 🎉 BONUS: If you finish early
// ============================================
// Create an arrow function called 'isAlive' that:
// - Takes health as a parameter
// - Returns true if health > 0, false otherwise

const isAlive = health => health > 0 ;

console.log("Bonus a:", isAlive(50));  // true
console.log("Bonus b:", isAlive(0));   // false
