"use strict";
// Using the function command to make large shirts
function make_shirt(size = "Large", printMessage = "I love Typescript!") {
    console.log(`\nCreating a ${size} size shirt with the message: "\x1b[33m ${printMessage} \x1b[0m"\n`);
}
// Assigning variables by default values
make_shirt();
// Assigning variables with medium size and default msg
make_shirt("Medium");
// Assigning variables with different size & msg
make_shirt("Extra Large", "Hello world!");
