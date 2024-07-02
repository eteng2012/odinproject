// Getters and Setters

// Two types of object properties
    // Data properties is a key associated with value
    // Accessor properties are functions that get and set value, look like regular properties in external code

// Denoted by get and set
    let obj = {
        get propName() {
        // getter, the code executed on getting obj.propName
        },
    
        set propName(value) {
        // setter, the code executed on setting obj.propName = value
        }
    };

// On the outside, accessor property looks like regular properties
    let user = {
        get fullName() {
        return `...`;
        }, 
        set fullName(value) {
            [this.name, this.surname] = value.split(" ");
        }
    };
    
    user.fullName = "Test"; // Error (property has only a getter)

    // .fullName is virtual property, readable and writable

// Descriptors for accessor properties different from data, no value or writable
    // Only has get, set, enumerable, configurable
    // Because no value/writable, in order to give objects new accessors, use Object.defineProperty
    // Object.defineProperty(obj, 'new function'), {list of accessors})
    Object.defineProperty(user, 'fullName', {
        get() {
          return `${this.name} ${this.surname}`;
        },
      
        set(value) {
          [this.name, this.surname] = value.split(" ");
        }
    });

// Properties can only be accessor and have get/set or be data and have value
    // Error: Invalid property descriptor.
    Object.defineProperty({}, 'prop', {
        get() {
        return 1
        },
    
        value: 2
    });

// Smarter getter/setter
    // They can be wrappers over "real" property values to control operations
    // Example: to stop too short names, in setter can return error if too short, else use this.
    let user = {
        get name() {
          return this._name;
        },
      
        set name(value) {
          if (value.length < 4) {
            alert("Name is too short, need at least 4 characters");
            return;
          }
          this._name = value;
        }
    };
    // Underscore in this._ means labeled as private, not enforced
    // Also allows name to be accessor, this._name to be value

    // If old code uses property that was replaced with new one, but calculable from new, can use getter for that
    function User(name, birthday) {
        this.name = name;
        this.birthday = birthday;
      
        // age is calculated from the current date and birthday
        Object.defineProperty(this, "age", {
          get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
          }
        });
    }



// Class Basic Syntax

// Already know about new function and factory/IIFE
// Class is more advanced, new features for OOP

// Syntax is:
    class MyClass {
        // class methods
        constructor() { }
        method1() { }
        method2() { }
        method3() { }
    }
    // Use new MyClass() to make new object
    // constructor() called when use new

// So far, we have seen object literals (objects within an object, comma list, predefined), 
        // object constructors (use ctor and new to make object, defined by input)
        // factory function (return object literal with functions and vars, uses closure to access)
    // Now we have class

// What is class?
    // Kind of a function
    // class User {} makes function named user, result of class declaration
        // This function is equivalent to the constructor
    // Stores class methods in User.prototype
        // Therefore, access to prototype methods, inheritance

// Why is this not syntactic sugar?
    // We can technically do same with with object constructors, constructor function
        function User(name) {
            this.name = name;
        }
        // a function prototype has "constructor" property by default,
        // so we don't need to create it
        
        // 2. Add the method to prototype
        User.prototype.sayHi = function() {
            alert(this.name);
        };
        
        // Usage:
        let user = new User("John");
        user.sayHi();
    
    // Class seems like way to combine ctor with prototype methods
    // However, important differences include:
        // Constructor object made by class labeled by [[IsClassConstructor]]: true
            // When print out, labeled as class User ...
            // Must be called with new
        // Non-enumerable, all methods have enumerable flag set to false
            // Good as when do for...in loop to get class elements, usually don't want class methods
        // Always in use strict mode, stop errors from being silent, optimized
            // Usually need to place at beginning of script or function

// Class Expression
    // Classes can be defined in other expression, returned, assigned, etc.
    // Example class expression:
        let User = class {
            sayHi() {
            alert("Hello");
            }
        };
    // Names class expression
        let User = class MyClass {
            sayHi() {
                alert(MyClass); // MyClass name is visible only inside the class
            }
        };
        
        new User().sayHi(); // works, shows MyClass definition
        
        alert(MyClass); 
    // Need User() because class is function
    // Below is class factory function, uses closure
        function makeClass(phrase) {
            // declare a class and return it
            return class {
            sayHi() {
                alert(phrase);
            }
            };
        }
        
        // Create a new class
        let User = makeClass("Hello");
        
        new User().sayHi(); // Hello

// Can compute the names of functions with [...]
    class User {

        ['say' + 'Hi']() {
        alert("Hello");
        }
    
    }
    
    new User().sayHi();



// Class Fields
    // Syntax to add properties to class
    // Use "=" to set key to value
    // These are set in individual objects, not on the class.prototype
    // Can assign values using expression/function call
        class User {
            name = prompt("Name, please?", "John");
        }
        // Assigns name based on input, defaults to John



// Losing "this"
    // this. can be lost when passing object's functions into eventListeners etc. rather than class
    // Can defining wrapper function:
        setTimeout(function() {
            user.sayHi(); // Hello, John!
        }, 1000);
    
    // Can also use .bind
        let user = {
            firstName: "John"
        };
        
        function func() {
            alert(this.firstName);
        }
        
        let funcUser = func.bind(user);
        funcUser();
        // This defines this of funcUser to be user, special version of func function
    
    // In classes, can also do class field
        class Button {
            constructor(value) {
            this.value = value;
            }
            click = () => {
            alert(this.value);
            }
        }

        // click makes a new function for every instance of button
        // Kind of like bind for every instance of class?



// Can use extends keyword to make subclasses
    // Works on any constructor callable with new and has prototype
    // Prototype for parent must be Object or null
    // Right hand of extends does not need to be identifier, can use expression
        // Can use mix-ins
            class SomeClass extends class {
            constructor() {
                console.log("Base class");
            }
            } {
            constructor() {
                super();
                console.log("Derived class");
            }
            }
            
            new SomeClass();
            // Base class
            // Derived class
        // Base class can return anything from ctor, derived must return object or undefined
            // Parent class ctor returns object, that object used as this value for dervied class
            // When making ctor for derived class, need to call super() to run ctor for parent

    // Extending null makes object that don't inherit from Object.prototype
        // However, must return the object in ctor
            class NullClass extends null {
                constructor() {
                // Using new.target allows derived classes to
                // have the correct prototype chain
                return Object.create(new.target.prototype);
                }
            }
            
            const proto = Object.getPrototypeOf;
            console.log(proto(proto(new NullClass()))); // null
    
    // Classes can't inherit from regular objects (non-constructable)
        // Instead, use Object.setPrototypeOf(class.prototype, object);
            const Animal = {
                speak() {
                console.log(`${this.name} makes a noise.`);
                },
            };
            
            class Dog {
                constructor(name) {
                this.name = name;
                }
            }
            
            Object.setPrototypeOf(Dog.prototype, Animal);
        
    // Can also extend some built-in objects

    // If extend from Object, same as not writing extends at all but also inherits static methods
        // If use super(input) in constructor for derived class, input ignored
            // Therefore, will not create number if ctor with number
            // Need wrapping function name (input) { return new Object(input) }, then extend from name



// Species
    // Species pattern allows returning of parent object when using methods that return default ctor
    class MyArray extends Array {
        // Overwrite species to the parent Array constructor
        static get [Symbol.species]() {
          return Array;
        }
      }
      
      const a = new MyArray(1, 2, 3);
      const mapped = a.map((x) => x * x);
      
      console.log(mapped instanceof MyArray); // false
      console.log(mapped instanceof Array); // true

    
    
// Mix-ins
    // Abstract subclasses, they are templates for classes
    // Class can only have one superclass, can't have multiple inheritance
    // Therefore, need to provide one superclass with all inheritances
        // To do this, use mix-in to combine classes
            const calculatorMixin = (Base) =>
                class extends Base {
                calc() {}
            };
          
            const randomizerMixin = (Base) =>
                class extends Base {
                randomize() {}
            };

            class Foo {}
            class Bar extends calculatorMixin(randomizerMixin(Foo)) {}

            // Base now has all three



// Don't always want inheritance
    // Liskov substitution principle = subclass should be substitutable for superclass
    // Example is ReadOnlyMap and Map that calls set() in ctor
    // Should use composition instead
        // Means class has reference to object of other class, uses that object as implementation detail
            // Use Map as object in ReadOnlyMap



// Private Properties
    // Use # prefix on name, can not be called #constructor
    // Object from same class can read private of same class



// Static
    // Means thing is defined to the class itself, not instances of class
    // Can not run function on instance, must run on class itself

    // Use super. to get variable of parent class

    // Can either call static property through classname.varname or this.constructor.varname