// ============================================
// UNIT 5, LESSON 04: Events Sandbox
// ============================================
console.log("🎯 Events Sandbox loaded!");


// ============================================
// STEP 1: First Event Listener
// ============================================
// Select the #grandparent element
// Add a "click" event listener using an arrow function
// Inside: console.log("Grandparent clicked!")
const grandparent = document.querySelector("#grandparent")
grandparent.addEventListener('click', (e) => {
    console.log("Grandparent Clicked!")
    console.log(e)
    console.log(e.type)
    console.log(e.target)

})


// ============================================
// STEP 2: Explore the Event Object
// ============================================
// Update your grandparent listener to also log:
//   - e (the full event object — expand it in the console!)
//   - e.type (should be "click")
//   - e.target (the element you clicked)



// ============================================
// STEP 3: Bubbling — All Three Boxes
// ============================================
// Select #parent and #child
// Add click listeners to all three boxes
// Each should log its own name: "Grandparent!", "Parent!", "Child!"
// Then click the GREEN child and watch the console...
// What order do they log? Why?
const parent = document.querySelector("#parent")
const child = document.querySelector("#child")
parent.addEventListener('click', (e) => {
    console.log("Parent")
})
child.addEventListener('click', (e) => {
    e.stopPropagation()
    console.log("Child")
})

// ============================================
// STEP 4: Button — Say Hello
// ============================================
// Select #btn-hello and #output
// Add a click listener to the button
// On click: change output.textContent to "Hello! 👋 You clicked the button!"
const btnHello = document.querySelector("#btn-hello");
const output = document.querySelector("#output");

btnHello.addEventListener("click", () => {
    output.textContent = "Hello! 👋 You clicked the button!";
});



// ============================================
// STEP 5: Button — Click Counter
// ============================================
// Select #btn-count
// Create a variable: let clickCount = 0
// Add a click listener that:
//   - Increments clickCount by 1
//   - Updates output.textContent to show the count
//   - Use a template literal: `Click count: ${clickCount}`



// ============================================
// STEP 6: Button — Change Color
// ============================================
// Select #btn-color
// Add a click listener that:
//   - Uses e.target to change the button's own background color
//   - Toggle between its original color (#9b59b6) and "orange"
//   - Update the output text to "Color changed!"



// ============================================
// STEP 7: Cards — Multiple Elements
// ============================================
// Select ALL .card elements with querySelectorAll
// Select #status
// Use .forEach() to loop through each card:
//   cards.forEach((card) => { ... })
// Inside, add a click listener to each card that:
//   1. Removes 'active' from ALL cards (inner forEach)
//   2. Adds 'active' to the clicked card only
//   3. Gets the genre text: card.querySelector("p").textContent
//   4. Updates status to: "Selected: [genre]"



// ============================================
// 🏆 CHALLENGES
// ============================================

// CHALLENGE 1: Box Click Reporter
// Select all three boxes using: "#grandparent, #parent, #child"
// Use forEach to add a click listener to each
// Inside: e.stopPropagation() to prevent bubbling
// Log: "You clicked: [id]" using e.target.id
// Update output text to: "Clicked: [id]"



// CHALLENGE 2: Double-Click Reset
// Add a "dblclick" listener to #status
// On double-click:
//   - Remove 'active' from all cards
//   - Reset status text to "No card selected"
//   - Log "Cards reset!"



// CHALLENGE 3 ⭐: Keyboard Card Selector
// Add a "keydown" listener to document
// If the key is 1, 2, 3, or 4:
//   - Convert key to number: const num = Number(e.key)
//   - Remove 'active' from all cards
//   - Convert NodeList: const cardArray = [...cards]
//   - Add 'active' to cardArray[num - 1]
//   - Update status with the genre name

