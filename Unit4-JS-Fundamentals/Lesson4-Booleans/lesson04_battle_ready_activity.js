/*
╔═══════════════════════════════════════════════════════════════════════════════╗
║                        ⚔️ BATTLE READY CHECKER ⚔️                              ║
║                         Lesson 04 Activity                                     ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║  Use comparisons and logical operators to check if warriors are battle-ready! ║
║  Open the Console (F12 → Console) to see your outputs.                        ║
║  ⏱️ Time: 20 Minutes                                                           ║
╚═══════════════════════════════════════════════════════════════════════════════╝
*/


// ══════════════════════════════════════════════════════════════════════════════
//                           📋 LESSON 4 QUICK REFERENCE
// ══════════════════════════════════════════════════════════════════════════════

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│ COMPARISON OPERATORS (return true or false)                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│   ===    Equal to              5 === 5    → true                            │
│   !==    Not equal to          5 !== 3    → true                            │
│   >      Greater than          10 > 5     → true                            │
│   <      Less than             3 < 8      → true                            │
│   >=     Greater or equal      5 >= 5     → true                            │
│   <=     Less or equal         3 <= 2     → false                           │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ LOGICAL OPERATORS (combine conditions)                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│   &&     AND     Both must be true         true && true   → true            │
│                                            true && false  → false           │
│                                                                             │
│   ||     OR      At least one must be true false || true  → true            │
│                                            false || false → false           │
│                                                                             │
│   !      NOT     Flips the value           !true  → false                   │
│                                            !false → true                    │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ BOOLEAN NAMING CONVENTIONS                                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│   is...    → isAlive, isReady, isGameOver                                   │
│   has...   → hasWeapon, hasKey, hasPermission                               │
│   can...   → canAttack, canEnter, canAfford                                 │
└─────────────────────────────────────────────────────────────────────────────┘
*/


console.log("═══════════════════════════════════════════════════════════════");
console.log("⚔️  BATTLE READY CHECKER - Activity Results");
console.log("═══════════════════════════════════════════════════════════════");


// ══════════════════════════════════════════════════════════════════════════════
//                         🎮 WARRIOR SETUP (Given to you!)
// ══════════════════════════════════════════════════════════════════════════════

// Your warrior's stats - DON'T CHANGE THESE
const warriorName = "ShadowStrike";
let health = 75;
let stamina = 40;
let level = 12;
let gold = 250;

let hasWeapon = true;
let hasArmor = true;
let hasPotion = false;
let isBanned = false;
let isStunned = false;

// Game constants
const MIN_ARENA_LEVEL = 10;
const MIN_QUEST_LEVEL = 5;
const POTION_COST = 50;

console.log("\n📊 WARRIOR STATS:");
console.log(`   Name: ${warriorName} | Level: ${level}`);
console.log(`   Health: ${health} | Stamina: ${stamina} | Gold: ${gold}`);
console.log(`   Has Weapon: ${hasWeapon} | Has Armor: ${hasArmor} | Has Potion: ${hasPotion}`);


// ══════════════════════════════════════════════════════════════════════════════
//                  CHALLENGE 1: Simple Comparisons
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n──────────────────────────────────────");
console.log("🎯 CHALLENGE 1: Simple Comparisons");
console.log("──────────────────────────────────────");

// TODO 1a: Create 'isAlive' - true if health is greater than 0


// TODO 1b: Create 'isHighLevel' - true if level is greater than or equal to 10


// TODO 1c: Create 'needsHealing' - true if health is less than 50


// TODO 1d: Create 'isFullHealth' - true if health equals 100 (use ===)


// Log your results:
// console.log(`Is Alive: ${isAlive}`);                 // Expected: true
// console.log(`Is High Level: ${isHighLevel}`);       // Expected: true
// console.log(`Needs Healing: ${needsHealing}`);      // Expected: false
// console.log(`Is Full Health: ${isFullHealth}`);     // Expected: false


// ══════════════════════════════════════════════════════════════════════════════
//                  CHALLENGE 2: AND (&&) Operator
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n──────────────────────────────────────");
console.log("🔗 CHALLENGE 2: AND (&&) Operator");
console.log("──────────────────────────────────────");

// Remember: && means BOTH conditions must be true

// TODO 2a: Create 'canFight' - true if health > 0 AND stamina > 0


// TODO 2b: Create 'isFullyEquipped' - true if hasWeapon AND hasArmor


// TODO 2c: Create 'canAffordPotion' - true if gold >= POTION_COST AND hasPotion is false
//          (Why buy a potion if you already have one?)


// Log your results:
// console.log(`Can Fight: ${canFight}`);               // Expected: true
// console.log(`Fully Equipped: ${isFullyEquipped}`);   // Expected: true
// console.log(`Can Afford Potion: ${canAffordPotion}`);// Expected: true


// ══════════════════════════════════════════════════════════════════════════════
//                  CHALLENGE 3: OR (||) Operator
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n──────────────────────────────────────");
console.log("⚡ CHALLENGE 3: OR (||) Operator");
console.log("──────────────────────────────────────");

// Remember: || means AT LEAST ONE condition must be true

// TODO 3a: Create 'hasProtection' - true if hasArmor OR hasPotion


// TODO 3b: Create 'canSurvive' - true if health > 50 OR hasPotion


// TODO 3c: Create 'meetsQuestRequirement' - true if level >= MIN_QUEST_LEVEL OR gold >= 500
//          (High-level OR rich players can do the quest)


// Log your results:
// console.log(`Has Protection: ${hasProtection}`);             // Expected: true
// console.log(`Can Survive: ${canSurvive}`);                   // Expected: true
// console.log(`Meets Quest Requirement: ${meetsQuestRequirement}`); // Expected: true


// ══════════════════════════════════════════════════════════════════════════════
//                  CHALLENGE 4: NOT (!) Operator
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n──────────────────────────────────────");
console.log("🔄 CHALLENGE 4: NOT (!) Operator");
console.log("──────────────────────────────────────");

// Remember: ! flips true to false and false to true

// TODO 4a: Create 'isNotBanned' - the opposite of isBanned


// TODO 4b: Create 'canMove' - true if NOT isStunned


// TODO 4c: Create 'needsPotion' - true if NOT hasPotion


// Log your results:
// console.log(`Is Not Banned: ${isNotBanned}`);   // Expected: true
// console.log(`Can Move: ${canMove}`);             // Expected: true
// console.log(`Needs Potion: ${needsPotion}`);     // Expected: true


// ══════════════════════════════════════════════════════════════════════════════
//                  CHALLENGE 5: Combining Operators
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n──────────────────────────────────────");
console.log("🏆 CHALLENGE 5: Combining Operators");
console.log("──────────────────────────────────────");

// Now let's combine everything!

// TODO 5a: Create 'canEnterArena' - true if:
//          level >= MIN_ARENA_LEVEL AND hasWeapon AND NOT isBanned


// TODO 5b: Create 'canAttack' - true if:
//          stamina > 10 AND hasWeapon AND NOT isStunned


// TODO 5c: Create 'shouldRetreat' - true if:
//          health < 30 OR (stamina < 10 AND NOT hasPotion)
//          HINT: Use parentheses to group conditions


// Log your results:
// console.log(`Can Enter Arena: ${canEnterArena}`);   // Expected: true
// console.log(`Can Attack: ${canAttack}`);             // Expected: true
// console.log(`Should Retreat: ${shouldRetreat}`);     // Expected: false


// ══════════════════════════════════════════════════════════════════════════════
//                  CHALLENGE 6: Battle Ready Final Check!
// ══════════════════════════════════════════════════════════════════════════════

console.log("\n══════════════════════════════════════");
console.log("⚔️  CHALLENGE 6: FINAL BATTLE CHECK");
console.log("══════════════════════════════════════");

// TODO 6: Create 'isBattleReady' - true if ALL of these are true:
//         - canFight (from Challenge 2)
//         - isFullyEquipped (from Challenge 2)
//         - canEnterArena (from Challenge 5)
//         - canMove (from Challenge 4)


// Log the final result:
// console.log(`\n🎮 ${warriorName} Battle Ready: ${isBattleReady}`);

// BONUS: Uncomment this to see a message based on the result!
// if (isBattleReady) {
//     console.log("✅ WARRIOR IS READY FOR BATTLE!");
// } else {
//     console.log("❌ WARRIOR IS NOT READY!");
// }


console.log("\n═══════════════════════════════════════════════════════════════");
console.log("🏁 END OF ACTIVITY");
console.log("═══════════════════════════════════════════════════════════════");
