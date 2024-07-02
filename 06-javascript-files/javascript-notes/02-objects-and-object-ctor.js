// Define Object

// Best to use object literal syntax
    const myObject = {
        property: 'Value!',
        otherProperty: 77,
        "obnoxious property": function() {
        // do stuff!
        }
    };

// Two ways to get info out of object
    // Dot Notaion
        myObject.property; // 'Value!'

    // bracket notation
        myObject["obnoxious property"]; // [Function]

    // Need bracket when name has space or when using variable as string for property name



// Object as Design Pattern

// Can group variables under object, like player stats under player object



// Object Constructors

// Use ctor to make new object, dont need to manually define
// Use functions, this.___
    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
        this.sayName = function() {
            console.log(this.name)
        };
    }
// Use new keyword
    const player = new Player('steve', 'X');
    console.log(player.name); // 'steve'
    player.sayName();



// Prototype

// All JS objects have prototype
// Prototype is another object that original inherits from, has all of prototype's methods/properties

// To access prototype, use Object.getPrototypeOf()
    Object.getPrototypeOf(player1) === Player.prototype;
    // Player.prototype is property of object ctor

// To define new properties on prototype, use:
    Player.prototype.sayHello = function() {
        console.log("Hello, I'm a player!");
    };
    player1.sayHello();

// .__proto__ property of obj also gets prototype, but not recommended, same as [[Prototype]]



// Prototypal Inheritance

// Purpose of prototype is to
    // 1. Define property/function in one place to save memory
    // 2. Prototypal Inheritance, player1 inherits from Player object

// This means that all objects have .valueOf function, as all objects inherit from base Object.prototype

// Use .hasOwnProperty('name') to see if defined in self or prototype

// Inheritance in a chain to save memory

// Each object can have one unique prototype object

// Use prototype to set object inheritance, Object.setPrototypeOf(object, prototype)
    // Remember functions are objects, also ctor
    function Person(name) {
        this.name = name;
    }
    function Player(name, marker) {
        this.name = name;
        this.marker = marker;
    }
    Object.setPrototypeOf(Player.prototype, Person.prototype);
    Object.getPrototypeOf(Player.prototype); // returns Person.prototype

// FOR PERFORMANCE, MAKE SURE TO SET PROTOTYPES BEFORE MAKING INSTANCES OF OBJECTS

// If use Player.prototype = Person.prototype;, will set to prototype itself and not a copy
    // If then another object set with = and modify prototype, the first object will be affected

// Can use for..in loop to iterate over properties in element
    for(let prop in rabbit) alert(prop);
    // Not for elements in array, just for object properties

    

// In browser, global object == window

// More with: https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/