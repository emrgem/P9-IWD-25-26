// ============================================
// TODO LIST - LESSON 8 STARTER CODE
// ============================================
//SELECT the form, input, and list
const form = document.querySelector("#form")
const input = document.querySelector("#input")
const todoList = document.querySelector("#todos")

// ============================================
// PART 1: Create and Append
// ============================================
// Adds new todos from the form
form.addEventListener("submit", (e) => {
    e.preventDefault() // stop the refresh
    const todoText = input.value.trim()
    // console.log(`Adding todo: ${todoText}`)
    // STEP 1: CREATE
    const todoItem = document.createElement("li")
    // STEP 2: CONFIGURE
    todoItem.innerText = todoText
    //todoItem.classList.add("todo-item") //we can also add classes
    // STEP 3: APPEND
    todoList.appendChild(todoItem)
    //clear the input for next time
    input.value = ""

})


// ============================================
// PART 2: Arrays & Loops
// ============================================

//Reusable Function
function createTodo(text){
    const item = document.createElement("li")
    item.innerText = text
    return item //Return created element
}

const todosData = [
    "Buy groceries",
    "Walk the dog",
    "Finish homework"
]

// for (const todoText of todosData){
//     //Use 3-step pattern to create an element
//     const todoItem = document.createElement("li")
//     todoItem.innerText = todoText
//     todoList.appendChild(todoItem)
// }

//DISPLAY STARTER TODOS
for (const todoText of todosData){
    // const item = createTodo(todoText)
    // todoList.appendChild(item)
    todoList.appendChild(createTodo(todoText))
}


// ============================================
// PART 3: Complete & Delete
// ============================================
