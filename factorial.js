
let a = parseInt(process.argv[2]);

let fact = 1;

// for(i=a;i>=1;i--){
//   fact= fact*i
//   console.log(fact);
// }

let i=a;
while(i>=1){
    fact=fact*i;
    console.log(fact);
    i--
}