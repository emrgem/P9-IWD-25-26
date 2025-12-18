console.log("📝 Lesson 02: Strings & String Methods");
console.log("=====================================");


// ============================================
// ⭐ CHALLENGE 1: String Length & Indexing
// ============================================
// .length tells you how many characters
// [index] accesses individual characters (starts at 0!)
// ============================================

console.log("");
console.log("⭐ CHALLENGE 1: Length & Indexing");
console.log("--------------------------------------");

// TODO 1.1: Create a variable called word with value "JavaScript"
// Then print its length using .length
// Expected output: "JavaScript" has 10 characters



// TODO 1.2: Print the FIRST character of word (index 0)
// Expected output: First character: J



// TODO 1.3: Print the LAST character using word.length - 1
// Expected output: Last character: t



// TODO 1.4: Print the character at index 4
// Expected output: Character at index 4: S



// TODO 1.5: Try to access index 100 - what happens?
// Print it and see what you get!



// ============================================
// ⭐ CHALLENGE 2: Case Conversion
// ============================================
// .toUpperCase() → ALL CAPS
// .toLowerCase() → all lowercase
// ============================================

console.log("");
console.log("⭐ CHALLENGE 2: Case Conversion");
console.log("--------------------------------------");

// TODO 2.1: Create a variable message = "hello gamers"
// Print it converted to uppercase
// Expected output: HELLO GAMERS



// TODO 2.2: Create a variable shout = "STOP SHOUTING!"
// Print it converted to lowercase
// Expected output: stop shouting!



// TODO 2.3: Print the original message variable again
// What do you notice? Did it change?
// Expected output: hello gamers (unchanged!)



// TODO 2.4: Now SAVE the uppercase version back to message
// Then print message to confirm it changed
// Hint: message = message.toUpperCase();
// Expected output: HELLO GAMERS



// ============================================
// ⭐⭐ CHALLENGE 3: trim() - Clean Up Input
// ============================================
// .trim() removes whitespace from both ends
// Great for cleaning user input!
// ============================================

console.log("");
console.log("⭐⭐ CHALLENGE 3: trim()");
console.log("--------------------------------------");

// TODO 3.1: Create a variable messyInput = "   gamer_pro_123   "
// Print it before and after using .trim()
// Expected output:
// Before trim: "   gamer_pro_123   "
// After trim: "gamer_pro_123"



// TODO 3.2: Create a variable rawUsername = "   PLAYER_ONE   "
// Chain .trim() and .toLowerCase() to clean it up
// Save the result to a new variable called cleanUsername
// Expected output: Clean username: player_one



// ============================================
// ⭐⭐ CHALLENGE 4: Searching Strings
// ============================================
// .includes() → returns true/false
// .indexOf() → returns position (or -1 if not found)
// ============================================

console.log("");
console.log("⭐⭐ CHALLENGE 4: Searching Strings");
console.log("--------------------------------------");

// TODO 4.1: Create a variable bio = "I love playing video games and coding"
// Check if it includes "games" and "sports"
// Expected output:
// Contains "games": true
// Contains "sports": false



// TODO 4.2: Find the position (index) of "playing" and "xyz" in bio
// Expected output:
// Position of "playing": 7
// Position of "xyz": -1



// TODO 4.3: Check if bio includes "GAMES" (uppercase)
// Why does it return false?
// Expected output: Contains "GAMES": false



// TODO 4.4: Fix the case-sensitivity issue
// Convert bio to lowercase first, THEN check for "games"
// Expected output: Contains "GAMES" (fixed): true



// ============================================
// ⭐⭐⭐ CHALLENGE 5: slice() - Extract Portions
// ============================================
// .slice(start, end) extracts a portion
// start = beginning index (included)
// end = ending index (NOT included)
// ============================================

console.log("");
console.log("⭐⭐⭐ CHALLENGE 5: slice()");
console.log("--------------------------------------");

// TODO 5.1: Create a variable language = "JavaScript"
// Use slice to extract "Java" (indexes 0-3)
// Expected output: Java



// TODO 5.2: Use slice to extract "Script" (index 4 to end)
// Hint: slice(4) goes from index 4 to the end
// Expected output: Script



// TODO 5.3: Use slice with a NEGATIVE index to get the last 3 characters
// Hint: slice(-3) gets the last 3
// Expected output: ipt



// TODO 5.4: Create a variable email = "player@gamehub.com"
// Extract just the domain (everything after @)
// Hint: Use indexOf("@") to find where @ is, then slice from there + 1
// Expected output: Domain: gamehub.com



// ============================================
// ⭐⭐⭐ CHALLENGE 6: replace() - Swap Text
// ============================================
// .replace(old, new) replaces FIRST occurrence only
// .replaceAll(old, new) replaces ALL occurrences
// ============================================

console.log("");
console.log("⭐⭐⭐ CHALLENGE 6: replace()");
console.log("--------------------------------------");

// TODO 6.1: Create a variable sentence = "I like cats. Cats are awesome!"
// Use .replace() to change "cats" to "dogs"
// Notice: Does it replace both?
// Expected output: I like dogs. Cats are awesome!



// TODO 6.2: Now use .replaceAll() to replace all "cats" with "dogs"
// Note: replaceAll is case-sensitive!
// Expected output: I like dogs. Cats are awesome!
// (Still doesn't replace "Cats" because of capitalization!)



// TODO 6.3: Create a variable comment = "This game is so bad, really bad!"
// Use replaceAll to censor the word "bad" with "***"
// Expected output: This game is so ***, really ***!



// ============================================
// ⭐⭐⭐⭐ CHALLENGE 7: Method Chaining
// ============================================
// Chain multiple methods together!
// Each method returns a string, so you can call another method on it
// ============================================

console.log("");
console.log("⭐⭐⭐⭐ CHALLENGE 7: Method Chaining");
console.log("--------------------------------------");

// TODO 7.1: Create a variable dirtyEmail = "   PLAYER@GameHub.COM   "
// Chain .trim() and .toLowerCase() to clean it
// Save to cleanEmail and print it
// Expected output: Clean email: player@gamehub.com



// TODO 7.2: Create a variable title = "   my awesome game   "
// Trim it, save to formatted, and print it with its length
// Expected output: Title: "my awesome game" (15 characters)



// TODO 7.3: Create a variable input = "   HELLO WORLD   "
// Chain 3 methods: trim(), toLowerCase(), and replace("world", "gamers")
// Expected output: hello gamers



// ============================================
// ⭐⭐⭐⭐ CHALLENGE 8: Real World Problems
// ============================================
// Apply what you've learned to solve real problems!
// ============================================

console.log("");
console.log("⭐⭐⭐⭐ CHALLENGE 8: Real World Problems");
console.log("--------------------------------------");

// TODO 8.1: USERNAME VALIDATOR
// Create a variable rawUser = "   Game Master   "
// - Trim it and convert to lowercase (save as cleanUser)
// - Check if it contains a space (save as hasSpaces)
// - Print the username and whether it's valid (no spaces = valid)
// Expected output:
// Username: "game master"
// Valid (no spaces): false



// TODO 8.2: EXTRACT FIRST NAME
// Create a variable fullName = "John Smith"
// - Find where the space is using indexOf
// - Use slice to get everything BEFORE the space
// Expected output: First name: John



// TODO 8.3: GET FILE EXTENSION
// Create a variable filename = "game_screenshot.png"
// - Find where the dot is using indexOf
// - Use slice to get everything AFTER the dot
// Expected output: File extension: png



// TODO 8.4: CREATE INITIALS
// Create a variable name = "Alex Johnson"
// - Get the first character (index 0)
// - Find where the space is, then get the character right after it
// - Combine them into initials
// Expected output: Initials: AJ
