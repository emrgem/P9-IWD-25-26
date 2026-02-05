/**
 * ============================================
 * LESSON 9A: OBJECTS - STARTER FILE
 * Creating, Accessing, and Modifying
 * ============================================
 */

console.log("=== LESSON 9A: OBJECTS ===\n");


// ============================================
// PART 1: CREATING OBJECTS
// ============================================
console.log("--- Part 1: Creating Objects ---");

// EXAMPLE:
let player = {
    name: "Hero",
    health: 100,
    level: 5,
    weapon: "Sword"
};
console.log(player);


// ✏️ YOUR TURN 1: Create an object called 'game' with:
// - title: "Minecraft"
// - year: 2011  
// - rating: 9.5
// - isMultiplayer: true

let game = {
    title: "Minecraft",
    year: 2011,
    rating: 9.5,
    isMultiplayer: true
};

console.log(game)
console.log(game.title)
console.log(game.rating)

// ============================================
// PART 2: DOT NOTATION
// ============================================
console.log("\n--- Part 2: Dot Notation ---");

// EXAMPLE:
let enemy = {
    name: "Dragon",
    health: 500,
    damage: 75
};
console.log(enemy.name);    // "Dragon"
console.log(enemy.health);  // 500


// ✏️ YOUR TURN 2a: Print the enemy's damage

console.log(enemy.damage)

// ✏️ YOUR TURN 2b: Print a sentence using player:
// "[name] is level [level] with a [weapon]"
console.log(`${player.name} is level ${player.level} with a weapon ${player.weapon}`)



// ============================================
// PART 3: BRACKET NOTATION
// ============================================
console.log("\n--- Part 3: Bracket Notation ---");

// EXAMPLE:
let item = {
    "item name": "Health Potion",
    "power-level": 50
};
console.log(item["item name"]);    // "Health Potion"


// ✏️ YOUR TURN 3a: Use a VARIABLE to access a property
// Create variable 'prop' with value "damage"
// Print enemy's damage using bracket notation
let prop = "damage"
console.log(enemy[prop])


// ✏️ YOUR TURN 3b: Create an object with a space in the property name
// Then print that property using bracket notation
let song = {
    "song title": "Bohemian Rhapsody",
    "artist name": "Queen"
}
console.log(song["song title"])



// ============================================
// PART 4: MODIFYING OBJECTS
// ============================================
console.log("\n--- Part 4: Modifying Objects ---");

// EXAMPLE:
let hero = {
    name: "Knight",
    health: 100
};
hero.health = 75;          // CHANGE
hero.weapon = "Sword";     // ADD
console.log(hero);


// ✏️ YOUR TURN 4: Using the hero object above:
// - Change the health to 50
hero.health = 50
// - Add a 'shield' property with value "Iron Shield"
hero.shield = "Iron Shield"
// - Print the updated hero
console.log(hero)



// ============================================
// PART 5: DELETING PROPERTIES
// ============================================
console.log("\n--- Part 5: Delete ---");

// EXAMPLE:
let character = {
    name: "Mage",
    health: 80,
    tempBuff: true
};
delete character.tempBuff;
console.log(character);


// ✏️ YOUR TURN 5: Create a 'student' object with: name, grade, nickname
// Then DELETE the nickname property
// Print the result

let student = {
    name: "Anthony",
    grade: 9,
    nickname: "Ace"
};
delete student.nickname;
console.log(student);


console.log("\n=== LESSON 9A COMPLETE! ===");
