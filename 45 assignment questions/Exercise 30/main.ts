
// creating an array

let userNames:string[] = ["Eric" , "Saboor" , "Sarim" , "Admin" , "Hashir"]

// Using else-if and foreach loop on array to print a special msg to admin and an ordinary msg to other users

userNames.forEach(users =>{
    if(users === "Admin"){
        console.log("\x1b[33m" + `\nHello ${users}, Would you like to see a status report?\n` + "\x1b[0m")
    }
    else{
        console.log(`\nHello ${users}, Thank you for logging in again!\n`)
    }
})