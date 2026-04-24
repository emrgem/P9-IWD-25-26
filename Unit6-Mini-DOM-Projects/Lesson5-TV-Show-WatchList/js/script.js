// ========== EVENT LISTENERS ==========
searchBtn.addEventListener("click", fetchShows);

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        fetchShows();
    }
});


clearAllBtn.addEventListener("click", clearAllWatchlist)


//start the app: load saved watchlist
loadWatchlist()