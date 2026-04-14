// ============================================
// Recipe Finder — Solution
// API: TheMealDB — https://www.themealdb.com/api/json/v1/1/search.php?s=...
// ============================================

// --- Step 1: Select elements ---
const input   = document.querySelector("#search-input");
const results = document.querySelector("#results");
const status  = document.querySelector("#status");

// --- State for debounce timer ---
let searchTimer;

// --- Step 4: Render function ---
const renderRecipes = (meals) => {
    results.innerHTML = "";

    meals.forEach((meal) => {
        // Build the ingredients list (strIngredient1..20)
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ing = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ing && ing.trim() !== "") {
                ingredients.push(`${measure.trim()} ${ing.trim()}`);
            }
        }

        const card = document.createElement("div");
        card.classList.add("recipe-card");

        card.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <h2>${meal.strMeal}</h2>
            <p class="meta">🌍 ${meal.strArea}  ·  🍴 ${meal.strCategory}</p>
            <div class="details">
                <h3>Ingredients</h3>
                <ul>${ingredients.map(i => `<li>• ${i}</li>`).join("")}</ul>
                <h3>Instructions</h3>
                <p>${meal.strInstructions}</p>
            </div>
        `;

        // Click to expand/collapse
        card.addEventListener("click", () => {
            card.classList.toggle("expanded");
        });

        results.appendChild(card);
    });
};

// --- Step 3: Fetch function ---
const fetchRecipes = async (query) => {
    status.textContent = "Loading... 🔄";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    const response = await fetch(url);
    const data = await response.json();

    // TheMealDB returns { meals: null } when no matches!
    if (data.meals === null) {
        results.innerHTML = "";
        status.textContent = `❌ No recipes found for "${query}"`;
        return;
    }

    status.textContent = `✅ Found ${data.meals.length} recipe${data.meals.length === 1 ? "" : "s"}`;
    renderRecipes(data.meals);
};

// --- Step 2 & 5: Debounced search on "input" event ---
input.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    // Clear the old timer — user is still typing
    clearTimeout(searchTimer);

    if (query === "") {
        results.innerHTML = "";
        status.textContent = "";
        return;
    }

    // Start a new 500ms timer
    searchTimer = setTimeout(() => {
        fetchRecipes(query);
    }, 500);
});
