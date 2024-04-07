
// Creating an array
let ordinalNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9]

// Using for-loop to assign ordinals to their correct numbers
for(let num of ordinalNumbers){
    let ordinalendings: string;
    if(num === 1){
        ordinalendings = "st"
    }
    else if (num === 2){
        ordinalendings = "nd"
    }
    else if (num === 3){
        ordinalendings = "rd"
    }
    else if(num >= 4) {
        ordinalendings = "th"
    }
// printing the code

console.log(`${num}${ordinalendings}`);
}
