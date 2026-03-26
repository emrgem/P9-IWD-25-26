// ============================================
// UNIT 5, LESSON 09: Local Storage
// ============================================

const form = document.querySelector("#form")
const input = document.querySelector("#input")
const todoList = document.querySelector("#todos")

// ============================================
// STEP 1: Change todosData to a let array
// ============================================
let todos = []

// ============================================
// STEP 2: Write the Save Function
// ============================================
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

// HELPER FUNCTIONS
function showEmptyState() {
    todoList.innerHTML = '<li class="empty-state">No todos yet. Add one above! 👆</li>'
}

function clearEmptyState() {
    const empty = todoList.querySelector('.empty-state')
    if (empty) empty.remove()
}

// ============================================
// STEP 3: Save When Adding a Todo
// ============================================
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const text = input.value.trim()
    if (text === "") return
    
    clearEmptyState()
    todos.push(text)
    // Re-render with the current search filter (or show all)
    if (typeof filterTodos === "function") {
        filterTodos(currentSearchTerm)
    } else {
        renderTodos(todos)
    }
    saveTodos()
    input.value = ""
})

// ============================================
// STEP 4: Save When Deleting a Todo
// ============================================
function createTodo(text) {
    const item = document.createElement("li")
    item.innerText = text

    // Click to toggle completed
    item.addEventListener('click', () => {
        item.classList.toggle("completed")
    })

    // Right‑click to delete
    item.addEventListener("contextmenu", (e) => {
        e.preventDefault()

        // Remove from the array
        const index = todos.indexOf(text)
        if (index > -1) todos.splice(index, 1)
        saveTodos()

        // Re‑apply the current search filter
        if (typeof filterTodos === "function") {
            filterTodos(currentSearchTerm)
        } else {
            renderTodos(todos)
        }
    })

    return item
}

// ============================================
// STEP 5: Load from localStorage on Page Start
// ============================================
const saved = localStorage.getItem("todos")
if (saved) {
    todos = JSON.parse(saved)
}

// ============================================
// STEP 6: Render the Loaded Todos
// ============================================
function renderTodos(todosToRender) {
    todoList.innerHTML = ""
    if (todosToRender.length === 0) {
        showEmptyState()
    } else {
        for (const text of todosToRender) {
            todoList.appendChild(createTodo(text))
        }
    }
}

// ✅ Initial display – render the loaded todos
renderTodos(todos)