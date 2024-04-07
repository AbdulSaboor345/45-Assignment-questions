// Using function & return command to make an object for the artist and his album
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Assigning values to variables to avoid complicating 
var album1 = make_album("Artist no.1", "Album title 1", 10);
var album2 = make_album("Artist no.2", "Album title 2", 5);
var album3 = make_album("Artist no.3", "Album title 3");
// Printing the object
console.log(); // Line Break
console.log(album1);
console.log(); // line Break
console.log(album2);
console.log(); // Line Break
console.log(album3);
console.log(); // Line Break
