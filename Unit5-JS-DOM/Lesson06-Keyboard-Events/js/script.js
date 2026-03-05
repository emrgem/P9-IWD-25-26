// ============================================
// UNIT 5, LESSON 06: Keyboard Events
// ============================================
const themeBtn = document.querySelector('#theme-toggle');
// console.log('Theme button found:', themeBtn);

document.addEventListener("keydown", (e) => {
    console.log(e)
    console.log(`Key: "${e.key}" | Code: "${e.code}" Shift: "${e.shiftKey}"`)
})


function toggleDarkMode() {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // Check if dark mode is now active and update button text
    if (document.body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Light Mode';
        console.log('Switched to DARK mode');
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
        console.log('Switched to LIGHT mode');
    }
}


// ============================================
// STEP 1: Press "D" for Dark Mode
// ============================================
document.addEventListener("keydown", (e) =>{
    if((e.key === "d" || e.key === "D") && (e.key === "a" || e.key === "A") ){
        toggleDarkMode()
        console.log("Dark mode toggled with keyboard!")
    }
    // // if((e.key === "d" || e.key === "D") && e.shiftKey === true){
    // if((e.key === "d" || e.key === "D") && e.shiftKey){
    //     toggleDarkMode()
    //     console.log("Dark mode toggled with keyboard!")
    // }
})


// ============================================
// STEP 2: Arrow Keys Navigate Cards
// ============================================



// ============================================
// STEP 3: Escape Key Deselects All
// ============================================



// ============================================
// STEP 4: Number Keys Jump to Cards
// ============================================



// ============================================
// 🏆 CHALLENGES
// ============================================

// CHALLENGE 1: "S" Scrolls to Features
// - Keydown on document
// - If "s" or "S": scroll #features into view (smooth)



// CHALLENGE 2: Enter Key on Active Card
// - Keydown on document
// - If "Enter" AND currentIndex >= 0:
//   - Get the active card's h3 and p text
//   - Log: "Opening: [title] — [description]"



// CHALLENGE 3 ⭐: Keyboard Help Overlay
// - Create a <div> with JS (document.createElement)
// - Fill it with shortcut descriptions (innerHTML)
// - Style it as a fixed overlay (initially display: "none")
// - Append to body
// - On keydown "?": toggle display between "none" and "block"

