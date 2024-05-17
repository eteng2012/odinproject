// Make array with array literal: const cars = ["boop", "doop"];
// Common practice to use const
// Can do const cars = []; cars[0] = "boop";
// Can use new: const cars = new Array("boop", "doop");
// toString() turns array into string separated by comma
// Can access array with array name: document.getElementById("demo").innerHTML = cars;

// Arrays are objects, but objects use names to access members
// Object: const person = {firstName:"John", lastName:"Doe", age:46};, person.firstName
// Can have objects, functions, arrays in array

// .length gives length, .sort() sorts
// Can use array.forEach(function) to run function for each element
// .push adds to end, can also do array[array.length] = "hello"
// If index outside of range, can create undefined holes

// Javascript does not support arrays with named indices (hashes)
// Use objects for names indices, using strings as element names

// For new: arr = new Array(1,2) has two elements, but arr = new Array(5) has five elements

// Use Array.isArray() to check if object is array
// Also can do: arr_name instanceof Array



// Basic Methods
// length, toString, at
// .join() = join elements into string, like toString but can specify separator, .join(" * ");
// .pop(), .push adds/removes from end
// .shift() removes first element, shifts others down
// .unshift("hello") adds to beginning, shifts
// delete arr[0] deletes at index, can leave undefined holes
// arr.concat(arr2, arr3) combines arrays, can also take strings as argument
// copyWithin() copies array elements to another position in array
// Example: copyWithin(2, 0) copies all elements starting from 0 onto index 2,
// Example: copyWithin(2, 0, 2) copies all elements from 0 to 2 onto index 2
// This overwrites existing values and does not add/change array length
// .flat() flattens array so sub-arrays concatenated to specified depth (how many layers of arr in arr are concatenated)



// Loops
// For - Of Loop: for (const cat of cats) { console.log(cat); }

// .map(function) to do something to each item of collection
// Ex: const upperCats = cats.map(toUpper);
// .filter(function), can check T/F with function for each item, return container with only T
// Ex: const filtered = cats.filter(lCat); function lCat(cat) { return cat.startsWith("L"); }
// Usually use function expressions for these two: filtered = cats.filter((cat) => cat.startsWith("L"));

// Standard For Loop: for (initalizer; condition; final-expression)

// Can exit loops with break
// Can skip remainder of loop iteration with continue

// while (condition)
// do { } while (condition) is same but is always executed once, check is at end

// Test Driven Development (TDD)
// Practice of writing automated tests to describe how code work before writing code

// Git Fork to make copy of Git page, git clone ssh-link of fork to clone onto local