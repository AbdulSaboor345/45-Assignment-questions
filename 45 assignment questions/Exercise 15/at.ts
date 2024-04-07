
let guest_list = ["Alex" , "Dravid" , "Gayle"];

console.log( guest_list[0] , "cannot make it to dinner.");

guest_list.splice(0,1,'Cillian');
 
guest_list.forEach(guest => console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`));

