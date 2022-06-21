function leapyear(year){
    if(year %400 == 0 && year % 100 == 0 && year %4 == 0){
        return "It's a leap Year";
    }
    else{
        return "Not a leap Year";
    }

}
console.log(leapyear(2024));