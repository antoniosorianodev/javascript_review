"use strict"

// 1.) Declare and assign values to 3 variables using each of the following keywords let, const, and var.
let x = 1;
const y = 2;
var z = 3;

// 2.) Use console.log() to display the value of the variables in the browser's console.
console.log(x, y, z);

// 3.) Change the value of the variables declared with the let and var. Print their new value to the console with console.log()
x *= 10;
z *= 10;

// 4.) What happens if you try to change the value of the variable declared with the const and print its new value to the console?

// z *= 10;
//
// console.log(z);

// Lines 17-19 are commented out so this script can still run. The console yells at you for trying to change the value of a constant.

// 5.) Why might you choose to use the const keyword?

// You would do this almost as a safety net. Const ensures that your variable has only one value, and that that value is the first one it receives at instanciation.
// If a value that should never be changed is instead defined by let or var, javascript will implement that change and potentially ruin your code.


// 6.) What is one reason it not best practice to use the var keyword?

// Scope is the big reason. While let and const are block-scoped, var is function-scoped and this can lead to unintended effects if you are unaware of this.
// For instance, if a variable is defined in an if statement using var, it is possible to interact with that variable outside of the if statement. This can lead
// to overwriting the value for an existing var variable with the same name or accessing things outside of the scope of what you intended.