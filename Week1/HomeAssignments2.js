function type(number) {
    if (number>0) {
        return "Positive"        
    }else if (number<0) {
        return "Negative"
    }else {
        return "Zero"
    }
}

let number=-3
let result=console.log(`Given number is ${type(number)}`)