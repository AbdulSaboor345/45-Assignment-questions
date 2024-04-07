let countriesTovisit: string[] = ["Japan" , "India" , "Dubai" , "Saudia" ];

console.log("Original Order:" , countriesTovisit);

console.log("Alphabetical Order:" , [...countriesTovisit].sort());//the 3 dots used for copy

console.log("Still in original order:" , countriesTovisit);

console.log("Reverse Alphabetical Order:" , [...countriesTovisit].reverse());

console.log("Still in original order:" , countriesTovisit);

console.log("Original Array Reversed:" , countriesTovisit.reverse());//no need for copy,change orig.array

console.log("Back to Original Order:" , countriesTovisit.reverse());

console.log("Original Array in Alphabetical Order:" , countriesTovisit.sort());

console.log("Original Array in Reverse Alphabetical Order:", countriesTovisit.reverse());


