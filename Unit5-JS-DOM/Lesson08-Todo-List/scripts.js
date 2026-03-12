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



// ============================================
// PART 3: Complete & Delete
// ============================================
