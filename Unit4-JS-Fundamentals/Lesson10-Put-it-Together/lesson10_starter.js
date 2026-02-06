// lesson10_starter.js - Consistent with Lesson 10 slide function names
// Unit 4 - Lesson 10: Putting It All Together

// ───────────────────────────────────────────────
// SAMPLE DATA (same as used in slides + a few extras)
// ───────────────────────────────────────────────

const players = [
  { name: "Alice", score: 2500, level: 15, active: true },
  { name: "Bob",   score: 1800, level: 12, active: false },
  { name: "Charlie", score: 3200, level: 18, active: true },
  { name: "Diana", score: 2100, level: 14, active: true },
  { name: "Evan",  score: 900,  level: 7,  active: true }
];

const items = [   // used in many slide examples
  { name: "Sword", price: 100, damage: 25 },
  { name: "Potion", price: 25, damage: 0 },
  { name: "Shield", price: 75, damage: 0 },
  { name: "Ring", price: 150, damage: 5 },
  { name: "Bow", price: 120, damage: 18 }
];

// ───────────────────────────────────────────────
// BUILD TOGETHER CHALLENGE 
// ───────────────────────────────────────────────

function getAverageScore(players) {
  // Average of all players.score
  if(players.length === 0) return 0
  let total = 0
  for(let player of players){
    total += player.score
  }
  let average = total / players.length
  return average

}

function getActivePlayers(players) {
  // Return array of only active players
  let active = []
  for(let player of players){
    // if(player.active === true)
    if(player.active){
      active.push(player)
    }
  }

  return active
}

function getTotalLevels(players) {
  // Sum of all players.level
}

function findPlayer(players, name) {
  // Return player object with matching name or null
}




// ───────────────────────────────────────────────
// TEST AREA - uncomment to check your work
// ───────────────────────────────────────────────


// console.log(getAverageScore([])); // returns 0
// console.log(getAverageScore(players)); 
console.log(getActivePlayers(players));
// console.log(getTotalLevels(players));
// console.log(findPlayer(players, "Charlie"));

