// function fact(num,facto){
//     if(num>0){
//         facto=facto*num;
//         // console.log(num);
//         // console.log(facto);
//         return fact(num-1,facto);       
//     }
//     return facto;
// }
// console.log(fact(5,1));


function fact(num,facto){
    if(num>0){
        facto=num*facto;
        // console.log(num);
        return fact(num-1,facto);
    }
    return facto;
}
console.log(fact(4,1));
console.log(fact(5,1));
console.log(fact(6,1));