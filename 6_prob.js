// Operators 

// ➕ Arithmetic Operators
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(2 ** 3); // 8

// 🧮 Assignment Operators

// = // assigns value
// += // a += b => a = a + b
// -= // a -= b
// *=, /=, %=

// 🧾 Comparison Operators

// == // equal (loose)
// === // equal (strict – value + type)
// != // not equal (loose)
// !== // not equal (strict)
// > < >= <=

console.log(5 == "5"); // true
console.log(5 === "5"); // false


// ✅ Logical Operators


// && // AND – both must be true
// || // OR – either one true
// ! // NOT – negates truthiness


// 🌀 Unary Operators

// + // tries to convert to number
// - // negates
// ++ // increment
// -- // decrement
// typeof // returns data type



// ❓ Ternary Operator (Conditional)

// condition ? valueIfTrue : valueIfFalse

let score = 80;
let grade = score > 50 ? "Pass" : "Fail";



// 🧪 typeof Operator

typeof 123 // "number"
typeof "hi" // "string"
typeof null // "object" (JS bug)
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"

