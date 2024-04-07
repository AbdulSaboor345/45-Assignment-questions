// Creating an array
var ordinalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using for-loop to assign ordinals to their correct numbers
for (var _i = 0, ordinalNumbers_1 = ordinalNumbers; _i < ordinalNumbers_1.length; _i++) {
    var num = ordinalNumbers_1[_i];
    var ordinalendings = void 0;
    if (num === 1) {
        ordinalendings = "st";
    }
    else if (num === 2) {
        ordinalendings = "nd";
    }
    else if (num === 3) {
        ordinalendings = "rd";
    }
    else if (num >= 4) {
        ordinalendings = "th";
    }
    // printing the code
    console.log("".concat(num).concat(ordinalendings));
}
