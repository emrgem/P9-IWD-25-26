


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
        
        let isSaved = false
        for(let j = 0; j < watchlist.length; j++){
            if(watchlist[j].id === show.id){
                isSaved = true
                break
            }
        }
        
        
        const heartIcon = isSaved ? "❤️ Saved" : "🤍 Save"
        // Create a card
        const card = document.createElement("div");
        card.className = "show-card";
        card.innerHTML = `
            <img src="${imageUrl}" alt="${show.name}">
            <div class="info">
                <h3>${show.name}</h3>
                <button class="heart-btn"> ${heartIcon} </button>
            </div>
        `;
        // Add card to the page
        resultsContainer.appendChild(card);

        const heartBtn = card.querySelector(".heart-btn")
        heartBtn.addEventListener("click", function(){
            toggleWatchlist(show)
        })
    }
}





function renderWatchList(){
    if(!watchlist){
        watchListContainer.innerHTML= `
        <div class="empty-state"> No saved shows yet! Click 💓to add! </div>      
        `
        return
    }

    watchListContainer.innerHTML= ""
    for(let i = 0; i<watchlist.length; i++){
        const show = watchlist[i]
        let imageUrl = show.image || "https://placehold.co/300x200?text=No+Image"
        //Design the show card
        const card = document.createElement("div")
        card.className = "watchlist-card"
        card.innerHTML = `
        <img src="${imageUrl}" alt="${show.name}">
        <div class="info">
            <h3>${show.name}</h3>
            <button class="heart-btn">💓 Saved</button>
        </div>
        `
        watchListContainer.appendChild(card)
    }
}

// Toggle Watchlist
function toggleWatchlist(show){
    let found = false
    for(let i = 0; i < watchlist.length; i++){
        if(watchlist[i].id === show.id){
            found = true
            break
        }
    }
    if(found){
        const newWatchlist = []
        for(let i = 0; i<watchlist.length; i++){
            if(watchlist[i].id !== show.id){
                newWatchlist.push(watchlist[i])
            }
        }
        watchlist = newWatchlist
    }else {
        let imageUrl = null
        if(show.image){
            imageUrl = show.image.medium || show.image.original
            watchlist.push({
                id: show.id,
                name: show.name,
                image: imageUrl
            })
        }
    }
    saveWatchList()
    renderWatchList()
}