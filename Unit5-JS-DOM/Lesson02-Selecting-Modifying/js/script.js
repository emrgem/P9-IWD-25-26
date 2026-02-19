/**
 * Unit 5, Lesson 02: Selecting & Modifying Elements
 * ===================================================
 */

console.log("🔍 Lesson 5.2: Selecting & Modifying Elements 🔍");
console.log("=================================================");
console.log("");


// ============================================
// 💻 CODE-ALONG STEP 1: Select & Store
// ============================================

console.log("--- Step 1: Select & Store Elements ---");

// SOLUTION:
// Select SINGLE elements
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const logo = document.querySelector('.logo');

// Select MULTIPLE elements (NodeList — like an array!)
const navLinks = document.querySelectorAll('.main-nav a');
const featureCards = document.querySelectorAll('.feature-card');

// Verify
console.log('Hero title:', heroTitle);
console.log('Nav links found:', navLinks.length);
console.log('Feature cards found:', featureCards.length);

/*
 * TEACHING NOTES — STEP 1:
 * 
 * PACING: ~3 min
 * 
 * KEY POINTS:
 * - Show that console.log of an element reveals the actual DOM node
 * - Hover over logged element in console → highlights on page!
 * - .length on NodeList — "Just like arrays from Unit 4"
 * - Use const (not let) since the element reference won't change
 *   "The element won't change, but its CONTENT will — that's fine"
 */


// ============================================
// 💻 CODE-ALONG STEP 2: Template Literals
// ============================================

console.log("");
console.log("--- Step 2: Dynamic Content ---");

// SOLUTION:
const playerName = 'Alex';
heroTitle.textContent = `Welcome, ${playerName}!`;
heroSubtitle.textContent = `Join the ultimate gaming community, ${playerName}.`;

console.log('Hero personalized for: ' + playerName);

/*
 * TEACHING NOTES — STEP 2:
 * 
 * PACING: ~3 min
 * 
 * UNIT 4 CONNECTIONS:
 * - const variable → same as Unit 4
 * - Template literals with ${} → same backtick syntax
 * - "You learned these in Unit 4. Now they update the REAL page!"
 * 
 * WOW MOMENT: The hero section changes to show a name.
 * "Imagine this is a logged-in user. The page is personalized!"
 */


// ============================================
// 💻 CODE-ALONG STEP 3: Update Attributes
// ============================================

console.log("");
console.log("--- Step 3: Update Attributes ---");

// SOLUTION:
const aboutImage = document.querySelector('.about-image img');
aboutImage.src = 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600';
aboutImage.alt = 'Competitive esports tournament';

console.log('Image updated!');
console.log('New alt text: ' + aboutImage.alt);

/*
 * TEACHING NOTES — STEP 3:
 * 
 * PACING: ~3 min
 * 
 * VISUAL PAYOFF: The about-section image actually changes!
 * - Show the Elements panel — src and alt both updated
 * - "We changed a REAL image on a REAL page with JavaScript"
 * 
 * NOTE: Uses an Unsplash URL so the image visibly changes.
 * If no internet, demo with a placeholder or local image.
 */


// ============================================
// 💻 CODE-ALONG STEP 4: Handle Null
// ============================================

console.log("");
console.log("--- Step 4: Safe Selection ---");

// SOLUTION:
const ghost = document.querySelector('.alien-spaceship');
console.log('Ghost element:', ghost);  // null

if (ghost) {
    ghost.textContent = 'Found aliens!';
} else {
    console.log('No aliens found — element is null');
}
