// test for equality and inequality with strings

let num = 10;
console.log("5*2 is equal to 2*5");
console.log(num == 10);
console.log("\n 5*2 is equal to 50");
console.log(num != 10);

// Test for lowercase function

let uppercase_apple:string = "APPLE"; 
let Fruit = "apple";
console.log("\n apple is equal to APPLE(after converting to lowercase)");
console.log(uppercase_apple.toLowerCase() == Fruit );

// Numerical test involving equality and inequality, greater than and less than,greater than or equal to,and less than or equal to
// remember var num = 10

console.log("\n 10 is equal to 10");
console.log(num == 10);

console.log("\n 10 is equal to 23");
console.log(num != 10);

console.log("\n 10 is greater than 5 ");
console.log(num > 5);

console.log("\n 10 is less than 23");
console.log(num < 23);

console.log("\n  10 is greater than or equal to 5");
console.log(num >= 5);

console.log("\n 10 is less than or equal to 5");
console.log(num <= 5);

// Tests using "and" "or" operators
//And(&&)

console.log("\n 20 is not equal to 10 and 20 is greater than 10");
console.log(20 != num && 20 > num);

console.log("\n 20 is not equal to 10 and 20 is greater than 30");
console.log(20 != num && 20 > 30);

//Or(||)

console.log("\n 20 is greater than 10 or 20 is equal to 10");
console.log(20 > num || 20 == 20);

console.log("\n 5 is greater than 10 or 5 is equal to 10");
console.log(5 > num || 5 == num);

// Test whether an item is in an array

let Vehicles:string [] = ["Bus","Car","Plane","Ship"];

console.log("Ship is included in my vehicles array");
console.log(Vehicles.includes("Ship"));

// Test whether an item is not included in an array

console.log("Ship is not included in my vehicles array");
console.log(!Vehicles.includes("Ship"));