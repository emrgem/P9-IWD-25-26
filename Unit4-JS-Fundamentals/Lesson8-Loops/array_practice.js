/**************************************************
 * Unit 4 – Arrays, Loops, Functions
 * Activities 6–10 (STARTER FILE)
 *
 * Instructions:
 * - Use loops and conditionals only
 * - Do NOT modify the original arrays
 **************************************************/

/* ------------------------------------------------
 * Activity 6: filterEvens
 * Returns a new array containing only even numbers
 * Example:
 * filterEvens([1, 2, 3, 4]) → [2, 4]
 * ------------------------------------------------ */
function filterEvens(numbers) {
    // TODO:
    // 1. Create an empty array
    let evens = []
    // 2. Loop through numbers
    for(let num of numbers){
        //is it even?
        if(num % 2 === 0){
            //add to the basket
            evens.push(num)
        }
    }
    // 3. If the number is even, add it to the new array
    // 4. Return the new array
    return evens
}


/* ------------------------------------------------
 * Activity 7: findIndex
 * Returns the index of target, or -1 if not found
 * Example:
 * findIndex(["a", "b", "c"], "b") → 1
 * ------------------------------------------------ */
function findIndex(arr, target) {
    // TODO:
    // 1. Loop through the array using an index
    // 2. If arr[i] matches target, return i
    // 3. If loop finishes without finding target, return -1
}


/* ------------------------------------------------
 * Activity 8: containsItem
 * Returns true if target exists in the array, false otherwise
 * Example:
 * containsItem([1, 2, 3], 2) → true
 * ------------------------------------------------ */
function containsItem(arr, target) {
    // TODO:
    // 1. Loop through the array
    // 2. If any item matches target, return true
    // 3. If loop finishes, return false
}


/* ------------------------------------------------
 * Activity 9: reverseArray
 * Returns a new array with elements reversed
 * Do NOT use reverse()
 * Example:
 * reverseArray([1, 2, 3]) → [3, 2, 1]
 * ------------------------------------------------ */
function reverseArray(arr) {
    // TODO:
    // 1. Create an empty array
    // 2. Loop through arr backwards
    // 3. Push each item into the new array
    // 4. Return the new array
}


/* ------------------------------------------------
 * Activity 10: removeDuplicates
 * Returns a new array with duplicates removed
 * Keep the FIRST occurrence only
 * Example:
 * removeDuplicates([1, 2, 2, 3]) → [1, 2, 3]
 * ------------------------------------------------ */
function removeDuplicates(arr) {
    // TODO:
    // 1. Create an empty array
    // 2. Loop through arr
    // 3. Only add the item if it is NOT already in the new array
    // 4. Return the new array
}


/* ------------------------------------------------
 * OPTIONAL TESTING AREA
 * Uncomment tests as you finish each function
 * ------------------------------------------------ */

console.log(filterEvens([1, 2, 3, 4, 5, 6]));
console.log(filterEvens([1, 3, 5]));
console.log(filterEvens([10, 13, 15, 20]));
// console.log(findIndex(["a", "b", "c"], "b"));
// console.log(containsItem([1, 2, 3], 4));
// console.log(reverseArray([1, 2, 3]));
// console.log(removeDuplicates([1, 2, 2, 3, 3]));
