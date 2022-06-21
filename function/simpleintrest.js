// Function to calculate simple intrest

function getIntrest(principal,rate,time){
    let simpleIntrest = (principal*rate*time)/100;
    return simpleIntrest;
}
console.log(getIntrest(2000,4,3));