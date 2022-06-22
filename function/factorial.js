//  Find Factorial of any number --> 
// function fact(num){
// let fact =1;
// for(let i=num; i>0;i--){
//     fact*=i;
// }
// return fact;
// }
// console.log(fact(5));


let factorial = ((function fact(num){
    let fact =1;
    for(let i=num; i>0;i--){
        fact*=i;
    }
    return fact;
    })(5));
    console.log(factorial);