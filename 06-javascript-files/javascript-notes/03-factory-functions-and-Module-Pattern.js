// Scoping

// Scoping is where variable is avaliable
    // Not declared in function (outside {}) means global scope
    // Else locally scoped

// var is function scoped
// let and const are block scoped
    // Block scope = scoped to be in closes set of {}



// Closures

// Can return function from function
    // Returns reference to that function
// Variables in outer function can be accessed by returned function

// Closure = function and surrounding state where function declared (outer function)
    // Surrounding state = lexical environment

// Returned functions allowed to use variables in its closure



// Issue with Ctors

// While look like functions, do not behave like them
// If use without new keyword, errors hard to track down
// instanceof checks if ctor's prototype in objects entire prototype chain, don't know if made from that ctor



// Factory Functions

// These fix those ctor problems

// These use closures
    // Instead of new, these set up and return new object when call function
    // DOESN'T USE PROTOTYPE, performance penalty
        // This means there is no prototype that all the objects can refer back to 
            // toggleRead defined for each one rather than once
    const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
    }
    // hey, this is a constructor - 
    // then this can be refactored into a factory!
    
    function createUser (name) {
    const discordName = "@" + name;
    return { name, discordName };
    }
    // and that's very similar, except since it's just a function,
    // we don't need a new keyword

// Object Shorthand
    // { name, discordName } assignes a name variable to value in name, discordName...
    // Can do console.log({ name, age, color }); to print variable name and value together

// Destructuring
    // Allows extraction of values from object or array
    // Extract property into variable of same name
        // Object extraction
        const obj = { a: 1, b: 2 };
        const { a, b } = obj;
        // Array extraction
        [a, b, ...rest] = [10, 20, 30, 40, 50];



// Private Variables and Functions

// Can use closure to make private variables
    // Can't be accessed by object instance

// To do this, make the factory function return a function that accesses copy of private variable
// Then, define the variable in the factory function and do not pass into object shorthand
    function createUser (name) {
        const discordName = "@" + name;
    
        let reputation = 0;
        const getReputation = () => reputation;
        const giveReputation = () => reputation++;
    
        return { name, discordName, getReputation, giveReputation };
    }

// Prototypal Inheritance with Factories

// Can nest another factory into a factory and call it, extract variables, then return object shorthand
    function createPlayer (name, level) {
        const { getReputation, giveReputation } = createUser(name);
    
        const increaseLevel = () => level++;
        return { name, getReputation, giveReputation, increaseLevel };
    }

// Can also use Object.assign(target, source1, ...) to extract variables
    function createPlayer (name, level) {
        const user = createUser(name);
    
        const increaseLevel = () => level++;
        return Object.assign({}, user, { increaseLevel });
    }



// The Module Pattern - IIFEs

// Can use factory functions to wrap variables and functions into one object
    // Then immediately calling it, called Immediately Invoked Function Expression
    const calculator = (function () {
        const add = (a, b) => a + b;
        const sub = (a, b) => a - b;
        const mul = (a, b) => a * b;
        const div = (a, b) => a / b;
        return { add, sub, mul, div };
    })();
        
    calculator.add(3,5); // 8
    calculator.sub(6,2); // 4
    calculator.mul(14,5534); // 77476

    // This is opposed to previous format of setting variable to reference factory
        const josh = createUser("josh");
    
    // In this, the parenthesis around the function() wrap the definition into a function, the () after it calls it
        // The immediate call allows inside functions to be used

    // This is useful because of encapsulation
        // Selective access, allows for namespacing (avoiding naming collisions)
        // Example: If make multiple add functions, will not have confusion