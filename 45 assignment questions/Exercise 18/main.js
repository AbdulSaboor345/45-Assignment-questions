var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesTovisit = ["Japan", "India", "Dubai", "Saudia"];
console.log("Original Order:", countriesTovisit);
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort()); //the 3 dots used for copy
console.log("Still in original order:", countriesTovisit);
console.log("Reverse Alphabetical Order:", __spreadArray([], countriesTovisit, true).reverse());
console.log("Still in original order:", countriesTovisit);
console.log("Original Array Reversed:", countriesTovisit.reverse()); //no need for copy,change orig.array
console.log("Back to Original Order:", countriesTovisit.reverse());
console.log("Original Array in Alphabetical Order:", countriesTovisit.sort());
console.log("Original Array in Reverse Alphabetical Order:", countriesTovisit.reverse());
