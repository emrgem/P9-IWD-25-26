// ============================================
// UNIT 5, LESSON 04: Events — Making Things Clickable
// ============================================
console.log("🖱️ Lesson 5.4: Events 🖱️");
console.log("====================================");

const themeBtn = document.querySelector('#theme-toggle')
console.log(`Theme Button Found: ${themeBtn}`)

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
// STEP 1: Wire Up Dark Mode Button
// ============================================
// The toggleDarkMode function already exists from Lesson 03.
// Use addEventListener to make the button trigger it on click.
themeBtn.addEventListener('click', toggleDarkMode)
// Remember: NO parentheses on the function name!
//   ✅ addEventListener('click', toggleDarkMode)
//   ❌ addEventListener('click', toggleDarkMode())



// ============================================
// STEP 2: Get Started Button
// ============================================
// 1. Select the "Get Started" button (class: btn-primary)
const getStartedBtn = document.querySelector('.btn-primary')

// 2. Write a function called handleGetStarted that:
function handleGetStarted(){
    console.log('Get started button was clicked!')
    const community = document.querySelector("#community")
    console.log(community)
    community.scrollIntoView({behavior:'smooth'})
    console.log("Scrolled to Community!")
}
//    - Selects the features section (#features)
//    - Scrolls to it using: element.scrollIntoView({ behavior: 'smooth' })
//    - Logs "Scrolled to features!"

// 3. Add a click event listener
getStartedBtn.addEventListener('click', handleGetStarted)


// ============================================
// STEP 3: Feature Card Click
// ============================================
// 1. Select the FIRST element with class "feature-card"
const firstCard = document.querySelector(".feature-card")
// 2. Write a function called handleCardClick that:
//    - Takes an "event" parameter
//    - Logs "Card clicked!"
//    - Logs event.target to see what was clicked
//    - Logs event.target.textContent
//    - Toggles the 'active' class on the card
function handleCardClick(event){
    console.log("Card clicked!")
    console.log(event)
    console.log("Clicked Element:",event.target)
    console.log("Text:",event.target.textContent)
}

// 3. Add a click event listener
firstCard.addEventListener('click', handleCardClick)


// ============================================
// STEP 4: Logo Click Easter Egg
// ============================================
// 1. Select the element with class "logo"
const logo = document.querySelector('.logo');
// 2. Write a function called handleLogoClick that:
//    - If the logo text is "🎮 GameHub" → change to "⚡ GameHub Pro"
//    - Otherwise → change back to "🎮 GameHub"
//    - Log "Logo toggled!"
function handleLogoClick() {
    if (logo.textContent === '🎮 GameHub') {
        logo.textContent = '⚡ GameHub Pro';
    } else {
        logo.textContent = '🎮 GameHub';
    }
    console.log('Logo toggled!');
}
// 3. Add a click event listener
logo.addEventListener('click', handleLogoClick);
console.log('Logo click listener added!');





// ============================================
// 🏆 CHALLENGES — Try These on Your Own!
// ============================================

// CHALLENGE 1: Hero Title Click
// - Select .hero-title
// - On click, change its text to "You Clicked Me! 🎉"
// - Use a named handler function called handleTitleClick

console.log("");
console.log("--- Challenge 1: Hero Title Click ---");


// SOLUTION:
const heroTitle = document.querySelector('.hero-title');


function handleTitleClick() {
    heroTitle.textContent = 'You Clicked Me! 🎉';
    console.log('Hero title clicked!');
}


heroTitle.addEventListener('click', handleTitleClick);




// CHALLENGE 2: About Image Click (uses event.target)
// - Select the image inside .about-image
// - On click, log event.target.alt to the console
// - Then change the alt text to "Image was clicked!"
// - Use a named handler function called handleImageClick
console.log("");
console.log("--- Challenge 2: About Image Click ---");


// SOLUTION:
const aboutImg = document.querySelector('.about-image img');


function handleImageClick(event) {
    console.log('Current alt:', event.target.alt);
    aboutImg.alt = 'Image was clicked!';
    console.log('New alt:', aboutImg.alt);
}


aboutImg.addEventListener('click', handleImageClick);



// CHALLENGE 3 ⭐: Subtitle Toggle
// - Select .hero-subtitle
// - On click, toggle between two messages:
//     "Join the community!" ↔ "Welcome back, gamer! 🎮"
// - Log the new text each time
// - Use a named handler function called handleSubtitleClick

// SOLUTION:
const heroSubtitle = document.querySelector('.hero-subtitle');

function handleSubtitleClick() {
    if (heroSubtitle.textContent === 'Join the community!') {
        heroSubtitle.textContent = 'Welcome back, gamer! 🎮';
    } else {
        heroSubtitle.textContent = 'Join the community!';
    }
    console.log('Subtitle now:', heroSubtitle.textContent);
}


heroSubtitle.addEventListener('click', handleSubtitleClick);