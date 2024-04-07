// Creating multiple arrays
var current_users = ["Saboor", "Eric", "Bilal", "Amjad", "Sarim"];
var new_users = ["Suhaib", "Ali", "Asad", "Eric", "Saboor"];
//  Creating a program that determines if the new usernames are taken or not
new_users.forEach(function (user1) {
    // creating a variable for our own condition to avoid confusion
    var our_condition = current_users.some(function (user) { return user.toLowerCase() === user1.toLowerCase(); });
    // Printing the messages by using if-else statements
    if (our_condition) {
        console.log("\nThis Username \u001B[33m\"".concat(user1, "\" \u001B[0mis already taken, Enter a new Username!\n"));
    }
    else {
        console.log("\nThis Username \u001B[33m\"".concat(user1, "\"\u001B[0m is available!\n"));
    }
});
