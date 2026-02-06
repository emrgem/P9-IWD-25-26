// reference_patterns.js -
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
// EXAMPLE SOLUTIONS FROM SLIDES
// ───────────────────────────────────────────────

// Example 1 - Find Max pattern
function findTopPlayer(players) {
    if (players.length === 0) return null;
    
    let top = players[0];
    
    for (let player of players) {
        if (player.score > top.score) {
            top = player;
        }
    }
    
    return top;  // returning whole object (slides showed .name, but object is more flexible)
}

// Example 2 - Filter pattern
function getAffordable(items, maxPrice) {
    let affordable = [];
    
    for (let item of items) {
        if (item.price <= maxPrice) {
            affordable.push(item);
        }
    }
    
    return affordable;
}

// Example 3 - Sum / Accumulator pattern
function calculateTotal(items) {
    let total = 0;
    
    for (let item of items) {
        total += item.price;
    }
    
    return total;
}

// Example 4 - Search pattern
function findByName(items, searchName) {
    for (let item of items) {
        if (item.name === searchName) {
            return item;
        }
    }
    return null;
}

// Example 5 - Count pattern
function countHighLevel(players, minLevel) {
    let count = 0;
    
    for (let player of players) {
        if (player.level >= minLevel) {
            count++;
        }
    }
    
    return count;
}

// ───────────────────────────────────────────────
// TEST / DEMO SECTION - uncomment to run
// ───────────────────────────────────────────────

/*
console.log("findTopPlayer:", findTopPlayer(players)?.name);                    // Charlie
console.log("getAffordable(80):", getAffordable(items, 80).map(i => i.name));  // ["Potion", "Shield"]
console.log("calculateTotal:", calculateTotal(items));                         // 470
console.log("findByName Potion:", findByName(items, "Potion")?.name);          // Potion
console.log("findByName Axe:", findByName(items, "Axe"));                      // null
console.log("countHighLevel 15+:", countHighLevel(players, 15));
*/