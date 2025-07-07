// Control Flow

// 🧱 if, else if, else

let marks = 78;
if (marks >= 90) {
console.log("A");
} else if (marks >= 75) {
console.log("B");
} else {
console.log("C");
}

// 🌀 switch-case

let fruit = "apple";
switch (fruit) {
case "banana":
console.log("Yellow");
break;
case "apple":
console.log("Red");
break;
default:
console.log("Unknown");
}


// 🔁 Early Return Pattern

function checkAge(age) {
if (age < 18) return "Denied";
return "Allowed";
}
console.log(checkAge(17));