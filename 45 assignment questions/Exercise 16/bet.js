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
