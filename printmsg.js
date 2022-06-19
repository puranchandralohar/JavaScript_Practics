let number = parseInt(process.argv[2]);

if(number>=1 && number<=100){
    if(number%15==0){
        console.log("HelloWorld")
    }else if(number%5==0){
        console.log("World")
    }else if(number%3==0){
        console.log("Hello")
    }else{
        console.log(number);
    }
}else{
    console.log("Greater than 100")
}

