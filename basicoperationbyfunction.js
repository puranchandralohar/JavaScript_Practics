function basicoperation(number1,number2){
    let add = number1 + number2;
    let sub = number1 - number2;
    let mul = number1 * number2;
    let div = number1 / number2;
    let mod = number1 % number2;
    
    return "Addition ="+add+" Subtraction ="+sub+
            " Multiplication ="+mul+" Division = "+div+
            " Reminder = "+mod;

}
let result = basicoperation(20,5);
console.log(result);