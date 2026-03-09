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
const allCards = document.querySelectorAll('.feature-card')
let currentIndex = -1 //-1 means no card is selected yet
document.addEventListener("keydown", (e) => {
    if(e.key === 'ArrowRight'){
        currentIndex = (currentIndex + 1) % allCards.length
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + allCards.length) % allCards.length
    }else {
        return // Not an arrow key - exit early
    }

    //update the cards
    allCards.forEach((c) => c.classList.remove("active")) //clear active card
    allCards[currentIndex].classList.add("active")
})



// ============================================
// STEP 3: Escape Key Deselects All
// ============================================
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        allCards.forEach((c) => c.classList.remove("active"));
        currentIndex = -1;
        console.log("All cards deselected");
    }
});


// ============================================
// STEP 4: Number Keys Jump to Cards
// ============================================
document.addEventListener("keydown", (e) => {
    const num = Number(e.key);

    if (num >= 1 && num <= allCards.length) {
        currentIndex = num - 1;

        allCards.forEach((c) => c.classList.remove("active"));
        allCards[currentIndex].classList.add("active");

        const title = allCards[currentIndex].querySelector("h3").textContent;
        console.log(`Card ${num}: ${title}`);
    }
});


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

