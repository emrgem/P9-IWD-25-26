// ============================================
// UNIT 5, LESSON 09: Local Storage
// ============================================
//SELECT the form, input, and list
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const todoList = document.querySelector("#todos")

// ============================================
// STEP 1: Change todosData to a let array
// ============================================
let todos = [
    // "Buy groceries",
    // "Walk the dog",
    // "Finish homework"
]

// ============================================
// STEP 2: Write the Save Function
// ============================================
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

//HELPER FUNCTIONS
function showEmptyState(){
    todoList.innerHTML = '<li class="empty-state">No todos yet. Add one above! 👆</li>'
}

function clearEmptyState(){
    const empty = todoList.querySelector('.empty-state')
    if(empty) empty.remove()
}



// ============================================
// STEP 3: Save When Adding a Todo
// ============================================
// In your form submit handler, AFTER todoList.appendChild:
form.addEventListener("submit", (e) => {
    e.preventDefault() // stop the refresh
    const text = input.value.trim()
    if (text === "") return
    clearEmptyState() //remove empty-state li before adding anything to the array
    todos.push(text) // Add to the array
    todoList.appendChild(createTodo(text))
    saveTodos() // save to the local storage
    input.value = ""
})



// ============================================
// STEP 4: Save When Deleting a Todo
// ============================================
// In your contextmenu handler, AFTER item.remove():
function createTodo(text){
    const item = document.createElement("li")
    item.innerText = text
    
    //NEW: Click to toggle completed class
    item.addEventListener('click', (e) => {
        item.classList.toggle("completed")
    })
    
    //NEW: Right-Click to delete
    item.addEventListener("contextmenu", (e) => {
        e.preventDefault() //Stops the browser menu
        item.remove() //removes the item from DOM
        //remove from the array too
        const index = todos.indexOf(text) //finds the index of the text
        if(index > -1) todos.splice(index,1)//removes from the array
        saveTodos() //overwrite the array with the updated values
        if(todoList.children.length === 0){
            showEmptyState()
        }

    })
    return item //Return created element
}


// ============================================
// STEP 5: Load from localStorage on Page Start
// ============================================
// Replace the old startup loop with:

const saved = localStorage.getItem("todos")
if (saved){
    todos = JSON.parse(saved) //turn the JSON string into array
}

// ============================================
// STEP 6: Render the Loaded Todos
// ============================================

function renderTodos(todosToRender){
    todoList.innerHTML = ""
    if(todos.length === 0){
        showEmptyState()
    }else {
        for(const text of todosToRender){
            todoList.appendChild(createTodo(text))
        }
    }
}


