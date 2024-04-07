// creating an array
var favPizzas = ["Chicken Tikka", "Fajita", "Cheesy Supreme"];
//for the purpose of line break
console.log();
// heading
console.log("\x1b[33m" + "My Favourite Pizza Flavours:" + "\x1b[0m");
// Using for-loop for describing the love of pizza :)
for (var _i = 0, favPizzas_1 = favPizzas; _i < favPizzas_1.length; _i++) {
    var pizza = favPizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza!"));
}
// not printing the additional msg in the loop because it would have been printed 3 times
// Printing an additional message for the love of pizza :)
console.log("\x1b[33m" + "\nExpressing the love for Pizza:" + "\x1b[0m");
console.log("Pizza is love!\n");
