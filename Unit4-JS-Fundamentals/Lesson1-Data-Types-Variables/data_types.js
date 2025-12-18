//Primitive Data Types
// 1. Strings
let firstName = "John";
let lastName = 'Smith';
let message = `Hello`;
console.log(message + firstName + lastName);
console.log(message + " " + firstName + " " +lastName);
console.log(message , firstName , lastName);

//Template Literals `${variable}` - works only with backticks
console.log(`Message:${message}, Name:${firstName} ${lastName}`)
console.log('Message:${message}, Name:${firstName} ${lastName}')

//2. Numbers
let integer = 67;
let decimal = 3.14;
let negative = -1;
let zero = 0;
console.log(integer + "5")

//3. Booleans
let isLoggedIn = true;
let hasPermission = true;

// Undefined and Null: Empty or missing values
let undefinedVariable;  // variable declared but not assigned
let emptyValue = null; //Intentionally empty value

//typeof function
console.log(typeof message)
console.log(`Data Type of ${message}: ${typeof message}`)
console.log(`Data Type of ${integer}: ${typeof integer}`)
console.log(`Data Type of ${isLoggedIn}: ${typeof isLoggedIn}`)
console.log(`Data Type of ${undefinedVariable}: ${typeof undefinedVariable}`)


// let number = prompt("Enter a Number:")
// console.log(number * 5);
// console.log(`Data Type of ${number}: ${typeof number}`)

//Console.log Methods
console.info("Info Message");
console.warn("Warning Message");
console.error("Error Message");

const item = "book";
const price = 29.99
const quantity = 2;
//Multiline string with embedded expressions
console.log(`
        Order Summary:
        Item: ${item}
        Price:$${price}
    `)

