function sum(a,b){
    return a+b;
}

function add(sum){    //Higher Order Function
    return sum(4,7);  
}
console.log(add(sum)); 

//Higher Order Function --> Function that takes another function as an argument;