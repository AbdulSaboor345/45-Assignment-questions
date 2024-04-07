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
var great_magicians = make_great(magicians_names);
// Print each magician name
console.log(great_magicians);
