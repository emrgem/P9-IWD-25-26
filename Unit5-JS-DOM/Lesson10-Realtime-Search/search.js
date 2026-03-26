const searchInput = document.querySelector("#search")

const filterTodos = (searchTerm) => {
    const term = searchTerm.toLowerCase().trim()
    //empty search = show all
    if(term === ""){
        renderTodos(todos)
        return
    }

    //Filter pattern 
    const filtered = []
    for (const text of todos){
        if (text.toLowerCase().includes(term)){
            filtered.push(text)
        }
    }

    renderTodos(filtered)
}

//Wire up the input event
searchInput.addEventListener("input", (e) =>{
    // console.log(`User Typed: "${e.target.value}"`)
    const searchTerm = e.target.value
    // console.log(searchTerm)
    filterTodos(searchTerm)
    
})