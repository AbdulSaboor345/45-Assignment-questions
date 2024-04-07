
// Using function command to show magicians names 

function show_magicians(magicians: string[]){
    magicians.forEach(magi => console.log(magi));
}

// Using function command to make them great

function make_great(magicians: string[]){
   return magicians.map(magi => `The Great ${magi}`)
}

// Making multiple arrays for diff purposes

let magicians_names = ["Harry Potter" , "Derren Brown" , "Dynamo" , "Shin Lim" , "David Blaine"]
let great_magicians = make_great(magicians_names);

// Print each magician name

console.log(great_magicians);