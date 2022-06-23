
function sum(number,total){
    // console.log(number);
    if(number>1){
        total = total + number;
        return sum(number-1,total);
    }

    return total;
}
console.log(sum(5,1));