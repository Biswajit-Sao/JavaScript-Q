// Scope in Real Life

//Global Scope
//Function Scope
//Block Scope

var a=20; //Global Scope

function abc(){ //Function Scope
    let a=20;
    const b=30;
    console.log(a); // ✅ 20
    console.log(b); // ✅ 30
}
{ //Block Scope
    var x = 5;
    let y = 10;
    const z = 15;
}

{
var x = 5;
let y = 10;
const z = 15;
}
console.log(x); // ✅ 5
console.log(y); // ❌ ReferenceError
console.log(z); // ❌ ReferenceError