//Get form elements 
const contactForm = document.querySelector("#contact-form")
const feedback = document.querySelector("#form-feedback")

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log("Form Submitted - no refresh!")

    // 2 - Get user input (trimmed)
    const name = document.querySelector("#name-input").value.trim() 
    const email = document.querySelector("#email-input").value.trim() 
    const message = document.querySelector("#message-input").value.trim() 
    console.log(`Name:${name} | Email: ${email} | Message: ${message}`)

    // 3 - Gate 1: Name can not be empty
    if(!name){ //name.length === 0
        feedback.textContent = "❌ Please Enter Your Name!"
        feedback.style.color = "E74C3C"
        return //stop further checks
    }

    // 4 - Gate 2: Email has @
    if(!email.includes("@")){
        feedback.textContent = "❌ Please enter a valid email!"
        feedback.style.color = "E74C3C"
        return
    }

    // 5 - Gate3: Message Long Enough at least 10 char
    if (message.length < 10) {
        feedback.textContent = "❌ Message must be at least 10 characters!";
        feedback.style.color = "#e74c3c";
        return;
    }

    //All gates are passed
    feedback.textContent = `✅ Thanks, "${name}! We got your message.`
    feedback.style.color = "#2ECC71"
    contactForm.reset(); // clears all the input fields

})