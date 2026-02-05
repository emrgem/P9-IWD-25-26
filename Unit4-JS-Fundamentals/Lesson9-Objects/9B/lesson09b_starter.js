/**
 * ============================================
 * LESSON 9B: OBJECTS - STARTER FILE
 * Methods, Nested Objects, Arrays of Objects
 * ============================================
 */

console.log("=== LESSON 9B: OBJECTS ===\n");


// ============================================
// PART 1: OBJECT METHODS
// ============================================
console.log("--- Part 1: Methods ---");

// EXAMPLE:
let warrior = {
    name: "Knight",
    health: 100,
    
    takeDamage(amount) {
        this.health -= amount;
        console.log(this.name + " took " + amount + " damage! HP: " + this.health);
    }
};
warrior.takeDamage(25);


// ✏️ YOUR TURN 1: Add a 'heal' method to this object
// The method should: add amount to this.health, then print a message
let paladin = {
    name: "Paladin",
    health: 50,
    
    // Add heal(amount) method here:
    heal(amount){
        this.health += amount
        console.log(this.name + " healed! HP: " + this.health)
    }
    
};

// Uncomment to test:
paladin.heal(30);  // Should print "Paladin healed! HP: 80"
paladin.heal(100);  // Should print "Paladin healed! HP: 180"


// ✏️ YOUR TURN 2: Create a 'calculator' object with:
// - add(a, b) method that returns a + b
// - subtract(a, b) method that returns a - b




// Uncomment to test:
// console.log(calculator.add(10, 5));       // 15
// console.log(calculator.subtract(10, 5));  // 5


// ============================================
// PART 2: NESTED OBJECTS
// ============================================
console.log("\n--- Part 2: Nested Objects ---");

// EXAMPLE:
let character = {
    name: "Mage",
    stats: {
        health: 80,
        mana: 150
    },
    equipment: {
        weapon: "Staff",
        armor: "Robe"
    }
};
console.log(character.stats.health);      // 80
console.log(character.equipment.weapon);  // "Staff"




// ✅ YOUR TURN 3a: Print the mana value
console.log(character.stats.mana);  // 150

// ✅ YOUR TURN 3b: Print the armor value
console.log(character.equipment.armor);  // "Robe"

// ✅ YOUR TURN 3c: Change mana to 100, print stats
character.stats.mana = 100;
console.log(character.stats);  // { health: 80, mana: 100 }




// ============================================
// PART 3: ARRAYS OF OBJECTS
// ============================================
console.log("\n--- Part 3: Arrays of Objects ---");

// EXAMPLE:
let enemies = [
    { name: "Goblin", health: 30 },
    { name: "Orc", health: 50 },
    { name: "Dragon", health: 200 }
];

console.log(enemies[0].name);    // "Goblin"
console.log(enemies[2].health);  // 200

for (let enemy of enemies) {
    console.log(enemy.name + ": " + enemy.health + " HP");
}


// ✏️ YOUR TURN 4: Create an 'inventory' array with 3 item objects
// Each item should have: name, quantity
let inventory = [
    {name:"Sword", quantity:1},
    {name:"Potion", quantity:5},
    {name:"Arrow", quantity:20},
]


// Loop through and print each item:

for(let item of inventory){
    console.log(`You have ${item.quantity} ${item.name}s`)
}


// ✏️ YOUR TURN 5: Calculate the TOTAL health of all enemies
// Hint: Start with total = 0, loop through, add each enemy.health

let totalHealth = 0
for(let enemy of enemies){
    totalHealth += enemy.health
}
console.log("Total enemy Health: " + totalHealth)


// ============================================
// CHALLENGE
// ============================================
console.log("\n--- Challenge ---");

// 🏆 CHALLENGE: Create a complete game character with:
// - Properties: name, health, gold
// - Method: getStatus() - prints all stats nicely
// - Method: collectGold(amount) - adds gold and prints message




// Test your character:
// gameChar.getStatus();
// gameChar.collectGold(50);
// gameChar.getStatus();


console.log("\n=== LESSON 9B COMPLETE! ===");
