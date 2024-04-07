// Using function command for sandwich, Mera roza hai :(
function make_sandwich(item) {
    console.log("Making a sandwich with:");
    item.forEach(function (element) { return console.log("- " + element); });
    console.log("Enjoy your sandwich!");
}
// Printing ingredients for sandwich
make_sandwich(["Chicken", "Cheese", "Lettuce"]);
make_sandwich(["Onion", "Tomato", "Kebab"]);
make_sandwich(["Peanut Butter", "Jelly"]);
