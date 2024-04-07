
// creating an array

let userNames:string[] = []

// Using else-if method to print a msg that we need more users

    if(userNames.length === 0){
        console.log("\x1b[33m" + `\nWe need to find some users!\n` + "\x1b[0m")
    }
    else{

// Using else-if and foreach loop on array to print a special msg to admin and an ordinary msg to other users

userNames.forEach(users =>{
    if(users === "Admin"){
        console.log("\x1b[33m" + `\nHello ${users}, Would you like to see a status report?\n` + "\x1b[0m")
    }
    else{
        console.log(`\nHello ${users}, Thank you for logging in again!\n`)
    }
})
    }

