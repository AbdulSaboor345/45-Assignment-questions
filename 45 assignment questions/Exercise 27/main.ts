console.log("\nGAME: Player has to shoot green,yellow & red aliens!");

let alienColor = "Green";   
let alienColor2 = "yellow";

// first version

console.log("\nPlayer has shot a Green alien!");

if (alienColor === "Green"){
console.log("\nPlayer just earned 5 points.")
}
else if(alienColor ==="yellow"){
    console.log("Player just earned 10 points.")
}
else{
    console.log("Player just earned 15 points.");
}

// second version

console.log("\nPlayer has shot a yellow alien!");

if(alienColor2 === "Green"){
    console.log("Player just earned 5 points.")
}
else if(alienColor2 === "yellow"){
    console.log("\nPlayer just earned 10 points.")
}
 else{
    console.log("Player just earned 15 points.")
 }
// third version

console.log("\nPlayer has shot a red alien!");

if(alienColor2 === "Green"){
    console.log("Player just earned 5 points.")
}
else if(alienColor === "yellow"){
    console.log("Player just earned 10 points")
}
else{
    console.log("\nPlayer just earned 15 points!\n")
}