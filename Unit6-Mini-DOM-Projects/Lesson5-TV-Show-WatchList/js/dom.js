// DOM element selections
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");
const resultsContainer = document.querySelector("#results");
const watchListContainer = document.querySelector("#watchlist-container")

//Global Data
let watchlist = []  //saved shows
let  currentResults = [] //remember last search


// LOCAL STORAGE FUNCTIONS
function loadWatchlist(){
    const saved = localStorage.getItem("tvWatchList")
    if(saved !== null){
        watchlist = JSON.parse(saved)
    }
    renderWatchList()
}

function saveWatchList(){
    localStorage.setItem("tvWatchList", JSON.stringify(watchlist))
}