const searchInput = document.querySelector("#search")

// Store the current search term globally
let currentSearchTerm = ""

const filterTodos = (searchTerm) => {
    currentSearchTerm = searchTerm          // remember for later use
    const term = searchTerm.toLowerCase().trim()
    
    // empty search = show all
    if (term === "") {
        renderTodos(todos)
        return
    }
    
    // filter using the global todos array
    const filtered = todos.filter(text => text.toLowerCase().includes(term))
    renderTodos(filtered)
}

// Wire up the input event
searchInput.addEventListener("input", (e) => {
    filterTodos(e.target.value)
})