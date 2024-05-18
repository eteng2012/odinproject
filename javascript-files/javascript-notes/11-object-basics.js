// Objects

// Store keyed collections of various data
// Created with {}, inside brackets can be optional list of properties
// Property is key value pair, key always string

// Object Constructor syntax: let user = new Object();
// Object Literal syntax: let user = {};
// Both make empty objects, usually {} used, called object literal

// Can put properties into {}
/* let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
}; */
// key: value,

// Access with dot notation: alert( user.name )

// Can add by dot notation: user.isAdmin = true;
// Now has 3 properties

// Delete: delete user.age;

// Multi-word property names must be quoted: "likes trees": true

// Comma separates properties, can have comma at end

// Can also access with square brackets, necessary for multi-word properties
// user["likes trees"] = false;
// Also allows for expressions in [] / using variables in []
// Variable can be calculated at runtime or from user input

// Can compute property names from variables, must use [] in property declaration
// Example: let fruit = prompt(); ... [fruit]: 5, ..., object will have input as property key name
// [fruit + "Computers"]: 5

// Usually when making objects, will use varaibles to set property name/value
/* function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John */

// Instead of name: name, can just write name as shorthand

// No limitations on names for properties, can use let, return, for, if, etc.

// Reading in non-existent property returns undefined
// Can check with == undefined or "key" in object (return true if object.key exists)

// for (let key in object) gives indices for each element in object, do object[key] to access

// When iterate through, integer-named properties are sorted at front, rest in creation order
// Integer-named = can be converted from string to num



// Advanced Array Magic

// Arrays can manipulate data in powerful ways

// .map(calllback) takes in callback function, automatically applies that function to array
// Returns new array, does not modify old
// Example: const mappedArr = arr.map((num) => num + 1);
// FOR ARROW FUNCTION, DON'T NEED RETURN STATEMENT???

// .filter(callback) returns new array with only items that returned true on callback

// .reduce(callback, initalValue), callback must take in two argments instead of one like prev two
// First argument is accumulator, current value of result at that point in loop
// Example: if want to calculate sum of values, first arg will be the sum so far
// First time through, value set to initialValue or first element in arr if no initialValue
// Second argument is the current value, item currently being iterated on
// Second argument in .reduce is initialValue, in case don't want initial to be first value in arr
/* const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1); */
// total initialized as 1
