// LESSON 01: The Bridge
// ============================================

console.log("🎮 GameHub JS is connected!");
console.log("============================");
console.log("");


// ============================================
// 👨‍💻 CODE-ALONG: First DOM Manipulation
// ============================================
// Follow along with the teacher!

console.log("--- Code-Along: First DOM Changes ---");

// Step 1: SELECT an element from the page
// document.querySelector() uses CSS selectors — just like Unit 2!
let heroTitle = document.querySelector(`.hero-title`)

// Step 2: Verify it worked — log it to the console
// console.log(heroTitle)

// Step 3: CHANGE the text!
// Use .textContent to replace what's inside the element
heroTitle.textContent = "JavaScript is Controlling the page!"



// Step 4: Change more things!
// Try the subtitle and logo too
let logo = document.querySelector('.logo')
logo.textContent = "⚡GameHub Pro"

//Check how many links there are
let navLinks = document.querySelectorAll('.main-nav a')
console.log(`Number of nav links: ${navLinks.length}`)
console.log(navLinks)

// ============================================
// ✏️ CHALLENGE 1: Change the Section Title
// ============================================
// Select the element with class "section-title"
// (it currently says "Amazing Features")
// Change its text to: "GameHub Superpowers"
//
// Expected result: The heading in the Features section changes!

console.log("");
console.log("--- Challenge 1: Change Section Title ---");

// YOUR CODE HERE:




// ============================================
// ✏️ CHALLENGE 2: Personalize the Hero
// ============================================
// 1. Create a variable called playerName with YOUR name
// 2. Select the hero title (class: hero-title)
// 3. Set its textContent using a template literal:
//    `Welcome to GameHub, ${playerName}!`
//
// UNIT 4 SKILL: Template literals with ${variable}
//
// Expected result: Hero title says "Welcome to GameHub, [your name]!"

console.log("");
console.log("--- Challenge 2: Personalize the Hero ---");

// YOUR CODE HERE:




// ============================================
// ✏️ CHALLENGE 3: Count Page Elements
// ============================================
// 1. Select ALL elements with class "feature-card" 
//    using querySelectorAll
// 2. Store the result in a variable called allCards
// 3. Use .length to count them
// 4. console.log: "GameHub has X feature cards"
//
// HINT: querySelectorAll returns a list with a .length
//       property — just like arrays from Unit 4!
//
// Expected output: "GameHub has 3 feature cards"

console.log("");
console.log("--- Challenge 3: Count Page Elements ---");

// YOUR CODE HERE:





// ============================================
// 📋 QUICK REFERENCE
// ============================================
/*
 * SELECTING ELEMENTS:
 * -------------------
 * document.querySelector('.class')     → ONE element (first match)
 * document.querySelector('#id')        → ONE element by ID
 * document.querySelector('tag')        → ONE element by tag name
 * document.querySelectorAll('.class')  → ALL matching elements (NodeList)
 * 
 * 
 * CHANGING CONTENT:
 * -----------------
 * element.textContent = 'new text';    → Changes the text inside
 * 
 * 
 * KEY RULES:
 * ----------
 * • Always use defer in your script tag
 * • querySelector uses CSS selector syntax (same as Unit 2!)
 * • querySelectorAll returns a list (like an array)
 * • .textContent changes what the user sees on the page
 * • JavaScript changes the DOM, not your HTML file
 */
