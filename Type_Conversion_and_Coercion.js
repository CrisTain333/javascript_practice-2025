const username = "Alice";

// Implicit conversion (coercion) to string
const greeting = "Hello, " + username; // "Hello, Alice"
console.log(greeting);

// Explicit conversion to number
const ageString = "30";
const ageNumber = Number(ageString); // 30
console.log(ageNumber);

// Implicit conversion to number in arithmetic operation
const width = "5";
const height = "10";
const area = width * height; // 50
console.log(area);

// Explicit conversion to string
const score = 100;
const scoreString = String(score); // "100"
console.log(scoreString);

// Implicit conversion to boolean in conditional
const isActive = "true";
if (isActive) {
  console.log("The user is active."); // This will be logged
}

// Explicit conversion to boolean
const isMemberString = "false";
const isMemberBoolean = Boolean(isMemberString); // true

console.log(isMemberBoolean);

// Add explanatory comments about type conversion and coercion
// Type conversion refers to the process of converting a value from one type to another.
// This can be done explicitly by the programmer using functions like Number(), String(), and Boolean().
// Type coercion, on the other hand, is the automatic conversion performed by JavaScript
// when it encounters values of different types in operations. For example, when using the + operator
// with a string and a number, JavaScript coerces the number to a string to perform concatenation.
console.log(isMemberBoolean);
