// function isPalindrome(str) {
//     //Step 1: Convert string to array
//     let chars = str.split("") //['r', 'a', 'c', 'e', 'c', 'a', 'r']
//     //Step2: Reverse array
//     let reversed = []
//     for (let i = chars.length - 1; i >= 0; i--) {
//         reversed.push(chars[i])
//     }
//     //Step3: Convert back to string
//     let reversedStr = reversed.join("")
//     //Step 4 Compare and return boolean
//     return reversedStr === str
// }

// //Alternative Solution:Compare Characters directly
// function isPalindrome(str) {
//     let reversed = ""
//     for (let char of str) {
//         reversed = char + reversed
//     }
//     return reversed === str
// }


// console.log(isPalindrome("hello"))
// console.log(isPalindrome("madam"))
// console.log(isPalindrome("racecar"))
// console.log(isPalindrome("bergentech"))


function isPalindromeArray(arr) {
    let results = []
    for (let str of arr) {
        let reversed = ""
        for (let char of str) {
            reversed = char + reversed
        }
        results.push(reversed===str)
    }

    return results
}

console.log(isPalindromeArray(["hello", 'racecar', 'madam']))