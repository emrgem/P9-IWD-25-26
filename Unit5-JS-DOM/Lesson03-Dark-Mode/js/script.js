// ============================================
// UNIT 5, LESSON 03: Styles & Classes
// ============================================
console.log("🎨 Lesson 5.3: Styles & Classes 🎨");
console.log("====================================");


// ============================================
// STEP 1: Select the Theme Toggle Button
// ============================================
// Use querySelector to grab the button by its ID
const themeBtn = document.querySelector('#theme-toggle')
console.log(`Theme Button Found: ${themeBtn}`)


// ============================================
// STEP 2: Write the toggleDarkMode Function
// ============================================
// This function should:
//   1. Toggle the 'dark-mode' class on document.body
//   2. If dark mode is active → change button text to '☀️ Light Mode'
//   3. If dark mode is off → change button text to '🌙 Dark Mode'

function toggleDarkMode() {
    // TODO: Toggle the 'dark-mode' class on document.body
    document.body.classList.toggle('dark-mode')

    // TODO: Use if/else to check if dark mode is active
    if (document.body.classList.contains('dark-mode')){
        themeBtn.textContent = "☀️Light Mode"
        console.log("Switched to Dark Mode")
    }else {
        themeBtn.textContent = "🌙Dark Mode"
    }
    // TODO: Update themeBtn.textContent based on the mode

}


// ============================================
// STEP 3: Test It!
// ============================================
// Type toggleDarkMode() in the console to test
// Call it once  → page goes dark
// Call it again → page goes light
// toggleDarkMode()
// toggleDarkMode()