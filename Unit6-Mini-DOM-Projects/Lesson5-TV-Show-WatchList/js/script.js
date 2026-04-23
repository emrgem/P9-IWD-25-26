// ========== EVENT LISTENERS ==========
searchBtn.addEventListener("click", fetchShows);

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        fetchShows();
    }
});



//start the app: load saved watchlist
loadWatchlist()