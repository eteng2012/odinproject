// Functions
// Parameters between parentheses, arguments are the actual values passed in
function favoriteAnimal(animal) {
    return animal + " is my fav"
}

console.log(favoriteAnimal("Goat"))

// Sometimes parameters are optional
// Can set default parameters with function(input = "hello")

// Anonymous functions are functions without name
/*
    (function() { alert("hello"); });
*/
// Often seen when function expects to recieve another function as parameter
// Function parameter often passed as anonymous
// Example: function("hello", function(event) {...;});

// Arrow functions is same but use =>
// Example: function("hello", (event) => {...;});
// Dont need parenthesis around event if only one parameter

// Function Scope
// Variables in function in its own scope, other functions can't reach

// Return values important to output from functions



// Function Basic Rules

// Function can access local variables and variables outside function
// Can modify outside variables
// Function first uses local, then outer

// If argument not provided, parameter defaults to undefined, will use default value
// Can check undefined with ===, or can do text = text || "none" as defaults to false

// Name function with its action

// I think continue skips the loop? like break?



// Function Expression

// Can create function and put it into variable
// let hello = function() { alert("hello"); };
// alert( hello ) will print function code
// hello() will run the function
// Can copy function expression into other variables

// Callback Functions are functions passed into function that are expected to be called back later if needed

// Function Declarations are processed before code executed while Func Expressions are not
// Function Declaration only visible inside code block it resides
// Function Expression is variable so probably same