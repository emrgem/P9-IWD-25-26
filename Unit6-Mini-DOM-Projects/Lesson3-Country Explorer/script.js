// --- Step 1: Select elements ---
const input      = document.querySelector("#country-input");
const searchBtn  = document.querySelector("#search-btn");
const results    = document.querySelector("#results");
const errorMsg   = document.querySelector("#error-msg");

// --- Step 4: Render countries as cards (Flag on the right) ---
const renderCountries = (countries) => {
    results.innerHTML = "";

    countries.forEach((country) => {
        const card = document.createElement("div");
        card.classList.add("country-card");

        card.innerHTML = `
            <div class="info">
                <h2>${country.name.common}</h2>
                <p>🏛️ <strong>Capital:</strong> ${country.capital ? country.capital[0] : "N/A"}</p>
                <p>🌏 <strong>Region:</strong> ${country.region}</p>
                <p>👥 <strong>Population:</strong> ${country.population.toLocaleString()}</p>
            </div>
            <div class="flag-container">
                <img src="${country.flags.png}" alt="${country.name.common} flag" />
            </div>
        `;

        results.appendChild(card);
    });
};

// --- Step 2, 5 & 6: Fetch function with error handling ---
const fetchCountry = async () => {
    const country = input.value.trim();
    if (!country) return;

    errorMsg.classList.add("hidden");

    try {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        const response = await fetch(url);

        if (!response.ok) throw new Error();

        const data = await response.json();
        renderCountries(data);

    } catch (err) {
        results.innerHTML = "";
        errorMsg.textContent = `❌ No country found for "${country}"`;
        errorMsg.classList.remove("hidden");
    }
};

// --- Step 3: Wire up events ---
searchBtn.addEventListener("click", fetchCountry);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") fetchCountry();
});
