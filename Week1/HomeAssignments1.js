/*
//    Assignment Details:
//    Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the number is odd and `"Even"` if the number is even.
//    Assignment Requirements:
//    1. Create a function named `isOddOrEven` that takes a number as a parameter
//    2. Declare and initialize the variable
//    3. Use a conditional statement to check if the number is divisible by 2
//    4. Call the function and print the result
*/

let number = 6;

function isOddOrEven(number){
    if (number > 0){
        return("ODD")
    }else {
        return("EVEN")   
}
}
let result=console.log(`Given number ${number} is ${isOddOrEven(number)}`)
