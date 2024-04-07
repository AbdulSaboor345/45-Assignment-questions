// Using function command to print magicians names in an array
function show_magicians(magicians) {
    magicians.forEach(function (magi) { return console.log(magi); });
}
;
// Making an array of magicians names
var magicians_names = ["Harry Potter", "Derren Brown", "Dynamo", "Shin Lim", "David Blaine"];
// Call the function to print each magician name
show_magicians(magicians_names);
