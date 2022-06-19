// Find Quotient and Reminder

let number = parseInt(process.argv[2]);

let quotient = Math.floor(number/10);
let reminder = number%10;

console.log("Quotient = "+quotient, "Reminder = " +reminder);