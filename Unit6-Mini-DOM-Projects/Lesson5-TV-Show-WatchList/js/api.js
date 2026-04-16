// ========== FETCH FUNCTION ==========

function fetchShows() {
    // Get what user typed and remove extra spaces
    const query = searchInput.value.trim();
    
    // Don't search if empty
    if (query === "") {
        resultsContainer.innerHTML = '<div class="empty-state">Please enter a show name!</div>';
        return;
    }
    
    // Show loading message
    resultsContainer.innerHTML = '<div class="empty-state">Loading...</div>';
    
    // Build the URL
    const url = "https://api.tvmaze.com/search/shows?q=" + query;
    
    // Fetch the data
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayShows(data);
        });
}

// ========== DISPLAY FUNCTION (INCOMPLETE — NEEDS A LOOP!) ==========

function displayShows(data) {
    // Clear the container
    resultsContainer.innerHTML = "";
    
    // Check if we got results
    if (data.length === 0) {
        resultsContainer.innerHTML = '<div class="empty-state">No shows found. Try again!</div>';
        return;
    }
    
    // ⚠️ TODO: Add a loop here!
    // For now, we only show the FIRST show
    // console.log(data)
    for(let i = 0; i < data.length; i++){
        const show = data[i].show;
        // Get image (or placeholder)
        let imageUrl = "https://via.placeholder.com/300x200?text=No+Image";
        if (show.image && show.image.medium) {
            imageUrl = show.image.medium;
        }
        // Create a card
        const card = document.createElement("div");
        card.className = "show-card";
        card.innerHTML = `
            <img src="${imageUrl}" alt="${show.name}">
            <div class="info">
                <h3>${show.name}</h3>
            </div>
        `;
        // Add card to the page
        resultsContainer.appendChild(card);
    }
}