/*
============================================================
🎮 LESSON 05 DAY 1 ACTIVITY: Player Rank System
============================================================
⏱️  Time: 10-15 minutes
🎯 Skills: if, else, else if

You're building a ranking system for GameHub!
Players earn ranks based on their stats.

🏆 RANKS:
   - Legend    (1000+ points)
   - Diamond   (750-999 points)  
   - Platinum  (500-749 points)
   - Gold      (250-499 points)
   - Silver    (100-249 points)
   - Bronze    (below 100 points)

============================================================
*/

// ============================================================
// CHALLENGE 1: Basic Rank Assignment (3 minutes)
// ============================================================
// Assign the correct rank based on the player's points
// Use if, else if, and else statements

let playerPoints = 650;
let rank;

// TODO: Write your if/else if/else chain here
// Check from HIGHEST to LOWEST!

if (playerPoints >= 1000) {
    rank = "🏆 Legend";
} 
// 👇 ADD MORE CONDITIONS HERE 👇




// Don't change this line - it shows your result!
console.log(`Player Rank: ${rank}`);
console.log(`Points: ${playerPoints}`);
console.log("----------------------------");


// ============================================================
// CHALLENGE 2: Rank with Bonus Message (4 minutes)
// ============================================================
// Now add a personalized message based on how close they are
// to the next rank!

let player2Points = 480;
let player2Rank;
let message;

// TODO: Assign the rank AND a helpful message
// Example messages:
// - "Only X points to [next rank]!"
// - "You're at the top!"
// - "Keep grinding!"

// Your code here:




console.log(`Player 2 Rank: ${player2Rank}`);
console.log(`Message: ${message}`);
console.log("----------------------------");


// ============================================================
// CHALLENGE 3: Win Streak Bonus (4 minutes)
// ============================================================
// Players get bonus ranks if they have a win streak!
// - 10+ wins in a row = +1 rank level
// - But Legend is still the max!

let player3Points = 400;  // Would normally be Gold
let winStreak = 12;       // 10+ win streak!
let player3Rank;
let bonusApplied = false;

// TODO: 
// 1. First determine the base rank from points
// 2. If winStreak >= 10, upgrade to the next rank
// 3. Set bonusApplied to true if they got upgraded

// Your code here:




console.log(`Player 3 Base Points: ${player3Points}`);
console.log(`Win Streak: ${winStreak}`);
console.log(`Final Rank: ${player3Rank}`);
console.log(`Bonus Applied: ${bonusApplied}`);
console.log("----------------------------");


// ============================================================
// 🌟 BONUS CHALLENGE: Rank Badge Generator (if time permits)
// ============================================================
// Create a function-like structure that outputs a full badge

let badgePoints = 825;
let badgeUsername = "ProGamer99";
let badgeRank;
let badgeColor;
let badgeStars;

// TODO: Based on points, set:
// - badgeRank (the rank name)
// - badgeColor (Legend=purple, Diamond=cyan, Platinum=white, 
//               Gold=gold, Silver=silver, Bronze=brown)
// - badgeStars (Legend=5, Diamond=4, Platinum=3, Gold=2, Silver=1, Bronze=0)

// Your code here:




console.log("===== PLAYER BADGE =====");
console.log(`👤 ${badgeUsername}`);
console.log(`🏆 ${badgeRank}`);
console.log(`🎨 Color: ${badgeColor}`);
console.log(`⭐ ${"★".repeat(badgeStars)}${"☆".repeat(5-badgeStars)}`);
console.log("========================");


// ============================================================
// 🎯 REFLECTION QUESTIONS (Think about these!)
// ============================================================
/*
1. Why do we check for the HIGHEST values first in our conditions?

2. What would happen if we checked (points >= 100) before 
   (points >= 1000)?

3. How could you modify this to handle negative points?

*/
