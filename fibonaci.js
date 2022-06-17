let a=1;
let b=1;

// for(let i=1;i<=10;i++){
//     console.log(a);
//     let c= a+b;
//     a=b;
//     b=c;
// }

let i=1;
while(i<=10){
    let c= a+b;
    console.log(a);
    a=b;
    b=c;
    i++
}