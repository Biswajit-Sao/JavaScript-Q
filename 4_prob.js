// Hoisting
// var is hoisted and set to undefined
// let and const are hoisted but not initialized — so accessing them early gives
// ReferenceError

// var a=undefined

console.log(a); // undefined
var a = 10;

console.log(b); // ❌ ReferenceError
let b = 20;