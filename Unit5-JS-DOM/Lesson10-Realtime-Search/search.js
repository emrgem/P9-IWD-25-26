const searchInput = document.querySelector("#search")
searchInput.addEventListener("input", (e) =>{
    // console.log(`User Typed: "${e.target.value}"`)
    const searchTerm = e.target.value
    // console.log(searchTerm)
    
})

const filterTodos = (searchTerm) => {
    const term = searchTerm.toLowerCase().trim()
    //empty search = show all
    if(term === ""){
        renderTodos(todos)
        return
    }
    
}