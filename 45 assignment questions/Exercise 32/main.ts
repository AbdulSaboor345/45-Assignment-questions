
// Creating multiple arrays

let current_users = ["Saboor" , "Eric" , "Bilal" , "Amjad" , "Sarim" ]

let new_users = ["Suhaib" , "Ali" , "Asad" , "Eric" , "Saboor"]

//  Creating a program that determines if the new usernames are taken or not

new_users.forEach(user1 =>{

    // creating a variable for our own condition to avoid confusion

let our_condition = current_users.some(user => user.toLowerCase() === user1.toLowerCase())

// Printing the messages by using if-else statements

    if(our_condition){
console.log(`\nThis Username \x1b[33m"${user1}" \x1b[0mis already taken, Enter a new Username!\n`)
    }
    else{
        console.log(`\nThis Username \x1b[33m"${user1}"\x1b[0m is available!\n`)
    }
})
