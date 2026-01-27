// ============================================
// LESSON 07: Arrays - Code Writing Practice
// ============================================

// ============================================
// CHALLENGE 1: Get First and Last
// ============================================
// Write a function that returns a NEW array containing
// only the first and last elements of the input array.
//
// Hint: Use arr[0] for first, arr[arr.length - 1] for last
//       Return a new array: [first, last]
//
// Examples:
//   getFirstAndLast([1, 2, 3, 4, 5])     → [1, 5]
//   getFirstAndLast(["a", "b", "c"])     → ["a", "c"]
//   getFirstAndLast([10, 20])            → [10, 20]
//   getFirstAndLast([99])                → [99, 99]

//TODO1: // YOUR CODE HERE
function getFirstAndLast(arr){
    let first  = arr[0];
    let last  = arr[arr.length-1];
    let length = arr.length
    return [first, last, length]
}

// Test your function:

console.log("=== CHALLENGE 1: Get First and Last ===");
console.log(getFirstAndLast([1, 2, 3, 4, 5]));     // Expected: [1, 5]
console.log(getFirstAndLast(["a", "b", "c"]));     // Expected: ["a", "c"]
console.log(getFirstAndLast([10, 20]));            // Expected: [10, 20]
console.log(getFirstAndLast([99]));                // Expected: [99, 99]
console.log("");


// ============================================
// CHALLENGE 2: Safe Remove
// ============================================
// Write a function that removes an item from the array
// ONLY IF it exists. Returns true if removed, false if not found.
//
// Hint: Use indexOf() to find the position
//       Check if indexOf !== -1 before using splice
//       splice(index, 1) removes 1 item at that index
//
// IMPORTANT: If indexOf returns -1 and you splice at -1,
//            it removes the LAST item! Always check first!
//
// Examples:
//   let a = ["x", "y", "z"];
//   safeRemove(a, "y")  → true     // a becomes ["x", "z"]
//   safeRemove(a, "w")  → false    // a stays ["x", "z"]

//TODO2:// YOUR CODE HERE
function safeRemove(arr, item){
    let index = arr.indexOf(item)
    if (index === -1) return false
    arr.splice(index,1)
    return true
}    
    
    


// Test your function:
console.log("=== CHALLENGE 2: Safe Remove ===");
let testA = ["x", "y", "z"];
console.log(safeRemove(testA, "y"));  // Expected: true
console.log(testA);                    // Expected: ["x", "z"]
console.log(safeRemove(testA, "w"));  // Expected: false
console.log(testA);                    // Expected: ["x", "z"] (unchanged)

let testB = [10, 20, 30];
console.log(safeRemove(testB, 10));   // Expected: true
console.log(testB);                    // Expected: [20, 30]
console.log("");


// ============================================
// CHALLENGE 3: Swap First and Last
// ============================================
// Write a function that swaps the first and last elements
// of the array. Modifies the original array and returns it.
//
// Hint: You need a TEMPORARY variable to do a swap!
//       let temp = arr[0];
//       arr[0] = arr[last];
//       arr[last] = temp;
//
// Examples:
//   swapEnds([1, 2, 3, 4, 5])     → [5, 2, 3, 4, 1]
//   swapEnds(["a", "b", "c"])     → ["c", "b", "a"]
//   swapEnds([10, 20])            → [20, 10]
//   swapEnds([99])                → [99]  (single element)

TODO3: // YOUR CODE HERE

// Test your function:
console.log("=== CHALLENGE 3: Swap First and Last ===");
console.log(swapEnds([1, 2, 3, 4, 5]));     // Expected: [5, 2, 3, 4, 1]
console.log(swapEnds(["a", "b", "c"]));     // Expected: ["c", "b", "a"]
console.log(swapEnds([10, 20]));            // Expected: [20, 10]
console.log(swapEnds([99]));                // Expected: [99]
console.log("");


// ============================================
// CHALLENGE 4: Add If Not Exists
// ============================================
// Write a function that adds an item to the end of the array
// ONLY IF it doesn't already exist in the array.
// Returns true if added, false if already there.
//
// Hint: Use includes() to check if item exists
//       Use push() to add to the end
//
// Examples:
//   let inv = ["sword", "shield"];
//   addUnique(inv, "potion")  → true   // inv becomes ["sword", "shield", "potion"]
//   addUnique(inv, "sword")   → false  // inv unchanged (already has sword)

TODO4: // YOUR CODE HERE


// Test your function:
console.log("=== CHALLENGE 4: Add If Not Exists ===");
let inv = ["sword", "shield"];
console.log(addUnique(inv, "potion"));  // Expected: true
console.log(inv);                        // Expected: ["sword", "shield", "potion"]
console.log(addUnique(inv, "sword"));   // Expected: false
console.log(inv);                        // Expected: ["sword", "shield", "potion"] (unchanged)
console.log(addUnique(inv, "bow"));     // Expected: true
console.log(inv);                        // Expected: ["sword", "shield", "potion", "bow"]
console.log("");


// ============================================
// CHALLENGE 5: Format Inventory
// ============================================
// Write a function that returns a formatted string.
// If the array is empty, return "Empty".
// Otherwise, return items joined with " | " and wrapped
// with "[ " at the start and " ]" at the end.
//
// Hint: Check length === 0 for empty
//       Use join(" | ") to combine items
//       Use string concatenation to add the brackets
//
// Examples:
//   formatInventory([])                        → "Empty"
//   formatInventory(["sword"])                 → "[ sword ]"
//   formatInventory(["sword", "shield"])       → "[ sword | shield ]"
//   formatInventory(["a", "b", "c", "d"])      → "[ a | b | c | d ]"

TODO5: // YOUR CODE HERE

// Test your function:
console.log("=== CHALLENGE 5: Format Inventory ===");
console.log(formatInventory([]));                        // Expected: "Empty"
console.log(formatInventory(["sword"]));                 // Expected: "[ sword ]"
console.log(formatInventory(["sword", "shield"]));       // Expected: "[ sword | shield ]"
console.log(formatInventory(["a", "b", "c", "d"]));      // Expected: "[ a | b | c | d ]"
console.log("");

