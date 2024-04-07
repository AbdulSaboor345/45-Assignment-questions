// Using function command to show magicians names 
function show_magicians(magicians) {
    magicians.forEach(function (magi) { return console.log(magi); });
}
// Using function command to make them great
function make_great(magicians) {
    return magicians.map(function (magi) { return "The Great ".concat(magi); });
}
// Making multiple arrays for diff purposes
var magicians_names = ["Harry Potter", "Derren Brown", "Dynamo", "Shin Lim", "David Blaine"];
// Making a copy of Original Array through .slice() function
var copy_magicians_names = magicians_names.slice();
// modifying the copied array to include "the great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
// Printing both original and copied
console.log(); // Line Break
console.log("\x1b[33m" + "Original Array:" + "\x1b[0m");
show_magicians(magicians_names);
console.log(); // Line Break
console.log("\x1b[33m" + "Copied Array:" + "\x1b[0m");
show_magicians(copy_great_magicians);
console.log(); // Line Break
