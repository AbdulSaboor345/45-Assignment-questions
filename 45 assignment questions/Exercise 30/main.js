// creating an array
var userNames = ["Eric", "Saboor", "Sarim", "Admin", "Hashir"];
// Using else-if and foreach loop on array to print a special msg to admin and an ordinary msg to other users
userNames.forEach(function (users) {
    if (users === "Admin") {
        console.log("\x1b[33m" + "\nHello ".concat(users, ", Would you like to see a status report?\n") + "\x1b[0m");
    }
    else {
        console.log("\nHello ".concat(users, ", Thank you for logging in again!\n"));
    }
});
