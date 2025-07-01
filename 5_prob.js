// Data Types + Type System
// Primitive Data Types
// Reference Data Types

// Primitive Data Types

// . String → Text
// "hello" , 'Sheryians'
// . Number → Any numeric value
// 3 , -99 , 3.14
// . Boolean → True or false
// true , false
// . Undefined → Variable declared but not assigned
// let x; → x is undefined

let x;
console.log(x); //Undefined

// . Null → Intentional empty value
let a = null;
a = 20;
// . Symbol → Unique identifier (rarely used)

let obj = {
  _id: 1,
  name: "Bisu",
  age: 20,
};
let u1 = Symbol("_id");
obj[u1] = "001";
console.log(obj);


// . BigInt → Very large integers
// 123456789012345678901234567890n
let z=Number.MAX_SAFE_INTEGER;
console.log(z);

z=z+1;
console.log(z);

z=9007199254740992n+1n;
console.log(z);






// Reference Data Types

// Object → { name: "Harsh", age: 26 }
// Array → [10, 20, 30]
// Function → function greet() {}


// typeof Operator

typeof "Sheryians" // "string"
typeof 99 // "number"
typeof true // "boolean"
typeof undefined // "undefined"
typeof null // "object" ← known bug
typeof [] // "object"
typeof {} // "object"
typeof function(){} // "function"



// Type Coercion (Auto-Conversion)

"5" + 1 // "51" → number converted to string
"5" - 1 // 4 → string converted to number
true + 1 // 2
null + 1 // 1
undefined + 1 // NaN



typeof NaN // "number"
console.log(0/0);
