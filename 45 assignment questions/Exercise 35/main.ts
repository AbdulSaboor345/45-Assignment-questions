
// Creating an array
let petAnimals = ["Rabbit" , "Cat" , "Parrot"]

// giving a header
console.log("\x1b[33m" + "\nStatements about each animals:\n" + "\x1b[0m")

// Using for-loop to print a statement about each of these animals
for(let pets of petAnimals){
    switch(pets){
        case "Rabbit":
            console.log("\x1b[33m" + "\nRabbit:" + "\x1b[0m")
        console.log(`A ${pets} is a cute little creature.`)
        break;
        case "Cat":
            console.log("\x1b[33m" + "\nCat:" + "\x1b[0m")
            console.log(`A ${pets} would make a great companion.`)
            break;
            case "Parrot":
                console.log("\x1b[33m" + "\nParrot:" + "\x1b[0m")
                console.log(`A ${pets} is a colourful and intellident bird.\n`)
                break;
    }
}
// making a header
console.log("\x1b[33m" + "Additional Message:" + "\x1b[0m")

// Printing an additional message
console.log("Any of these animals would make a great pet!\n");