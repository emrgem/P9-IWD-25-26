// ============================================
// UNIT 4 LESSON 07: Arrays - Starter File

// Instructions: Follow along with the lesson and complete each section.
// Run your code frequently to test your work!

// ============================================
// PART A: CREATING ARRAYS
// ============================================

// TODO 1: Create an array of 4 hero names (strings)
// Expected: ["Mario", "Link", "Samus", "Kirby"] or your own heroes
let heroes = ["Mario", "Link", "Samus", "Kirby"]

//First Element
console.log(`First Element: ${heroes[0]}`)
//Third Element
console.log(`Third Element: ${heroes[2]}`)

// TODO 2: Create an array of 5 high scores (numbers)
// Expected: [1500, 1200, 1000, 800, 500]


// TODO 3: Create an empty array for inventory
let inventory = []
inventory.push("Sword") // add to the end
inventory.unshift("Bow") //add to the beginning

inventory.pop() //remove the last one
inventory.shift() //remove the first one
// Log all your arrays
console.log("--- My Arrays ---");
// console.log("Heroes:", heroes);
// console.log("High Scores:", highScores);
// console.log("Inventory:", inventory);


// ============================================
// PART B: ACCESSING ELEMENTS
// ============================================

// TODO 4: Log the FIRST hero


// TODO 5: Log the LAST hero (use .length - 1)
console.log(`Last Hero: ${heroes[heroes.length-1]}`)

// TODO 6: Log how many heroes there are
number_of_heroes = heroes.length
console.log(`Number of Heroes: ${number_of_heroes}`)

// TODO 7: Log the THIRD high score (remember: index starts at 0!)

// #### ACCESSING INVALID INDEX
console.log(heroes[10]) // undefined
console.log(heroes[-1]) // undefined - negative indices wont work

// ============================================
// PART C: MODIFYING ELEMENTS
// ============================================

// TODO 8: Change the first hero to "Super Mario"
heroes[0] = "Super Mario"
console.log(heroes[0]) // Mario became Super Mario
// TODO 9: Change the last high score to 600


// Log the modified arrays
console.log("\n--- Modified Arrays ---");
// console.log("Heroes:", heroes);
// console.log("High Scores:", highScores);


// ============================================
// PART D: PUSH AND POP
// ============================================

console.log("\n--- Push and Pop ---");

// TODO 10: Add "sword" to the inventory using push()
heroes.push("Batman") //push adds to the end
heroes.pop() // remove last element

// TODO 11: Add "shield" and "potion" to inventory (one push with multiple items)


// TODO 12: Remove the last item from inventory using pop()
// Store the removed item in a variable and log it



// ============================================
// PART E: UNSHIFT AND SHIFT
// ============================================

console.log("\n--- Unshift and Shift ---");

// TODO 13: Add "legendary armor" to the BEGINNING of inventory


// TODO 14: Remove the FIRST item from inventory
// Store it in a variable and log what was removed



// ============================================
// PART F: SEARCHING ARRAYS
// ============================================

console.log("\n--- Searching Arrays ---");

// TODO 15: Check if inventory includes "sword" (use includes())


// TODO 16: Find the position of "shield" in inventory (use indexOf())


// TODO 17: Check if inventory includes "bow" - should be false



// ============================================
// PART G: SLICE AND SPLICE
// ============================================

console.log("\n--- Slice and Splice ---");

let testArray = ["a", "b", "c", "d", "e"];

// TODO 18: Use slice() to get elements at index 1, 2, 3 (not including 4)
// Store in a variable called 'sliced'


// TODO 19: Log both testArray and sliced to prove slice doesn't modify original


// Create a new array for splice practice
let spliceTest = ["red", "green", "blue", "yellow", "purple"];

// TODO 20: Use splice() to remove "green" and "blue" (2 items starting at index 1)


// TODO 21: Log spliceTest to see how it changed



// ============================================
// PART H: JOIN
// ============================================

console.log("\n--- Join ---");

let words = ["JavaScript", "is", "fun"];

// TODO 22: Join the words with a space and log the result


// TODO 23: Join your inventory items with " | " and log it



// ============================================
// CHALLENGE: BUILD A MINI INVENTORY SYSTEM
// ============================================

console.log("\n========== INVENTORY CHALLENGE ==========");

// Create a simple inventory system with these features:
// - An array to store items
// - A maximum of 4 items allowed
// - Functions to: addItem, removeItem, showInventory

// TODO 24: Create the inventory array and MAX_ITEMS constant


// TODO 25: Create the showInventory() function
// Should display "Inventory empty!" if empty
// Otherwise show: "Inventory (X/4): item1, item2, ..."


// TODO 26: Create the addItem(item) function
// Should check if inventory is full
// Should check if item already exists
// Should add item if checks pass


// TODO 27: Create the removeItem(item) function
// Should check if item exists
// Should remove item if it exists


// Test your system:
console.log("\n--- Testing Inventory System ---");
// showInventory();       // Should show empty
// addItem("sword");      // Should add
// addItem("shield");     // Should add
// addItem("potion");     // Should add
// showInventory();       // Should show 3 items
// addItem("sword");      // Should say "already have"
// removeItem("shield");  // Should remove
// showInventory();       // Should show 2 items


// ============================================
// BONUS CHALLENGES (If you finish early)
// ============================================

// BONUS 1: Create a function that finds and returns the highest score
// from the highScores array without using Math.max()


// BONUS 2: Create a function that reverses an array
// WITHOUT using the built-in .reverse() method


// BONUS 3: Create a function that removes all occurrences of an item
// (not just the first one)


console.log("\n========== END OF LESSON 07 ==========");
