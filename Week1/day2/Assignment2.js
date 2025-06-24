let input ="Yesoth Kumar"
let length = input.length
let reverseString = ""

for (i=length-1;i>=0;i--)
{
        reverseString = reverseString.concat(input.charAt(i))
}

console.log(reverseString)

let reversed=input.split('').reverse().join('')
console.log(reversed)