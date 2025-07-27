// '11' is a string, but it contains a valid number
// isNaN('11') tries to convert it to a number → becomes 11
// 11 is a valid number, so isNaN('11') returns false

var a = isNaN('11');
console.log(a); // Output: false


// 2 - 10 = -8, which is a valid number
// isNaN(-8) checks if -8 is "Not a Number" → it's a number
// So isNaN(2 - 10) returns false

var b = isNaN(2 - 10);
console.log(b); // Output: false
