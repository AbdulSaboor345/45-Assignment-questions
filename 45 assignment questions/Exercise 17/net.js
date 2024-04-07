var guest_list = ["Alex", "Dravid", "Gayle"];
console.log(guest_list[0], "cannot make it to dinner.");
guest_list.splice(0, 1, 'Cillian');
console.log("Great news! We found a bigger dinner table!");
guest_list.unshift("Lara");
guest_list.push("Sachin");
var middle_index = Math.floor(guest_list.length / 2);
guest_list.splice(middle_index, 0, 'Salah');
console.log("Updated List of Our Guest");
guest_list.forEach(function (guest) { return console.log("Dear ".concat(guest, ", I would be honored to have you join me for dinner.")); });
console.log("Unfortunately, new dinner table wont arrive in time for the dinner,I can invite only 2 people for dinner.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry, ".concat(remove_guest, " I cant invite you to dinner this time"));
}
console.log("Invitations to the remaining peoples!");
guest_list.forEach(function (last) { return console.log("Luckily ".concat(last, " , you are still invited to dinner!")); });
guest_list.pop();
guest_list.pop();
console.log("Empty List", guest_list);
