var square = x => x * x;
console.log(square(9));


/*
 in ES5 ‘this’ referred to the parent of the function, 
 in ES6, arrow functions use lexical scoping — 'this' refers to it's current surrounding scope and no further.

 in regular function 'arguments' referred to the arguemnts passed to function 
 in arrow function, 'arguments' referred to the global arguemnts object.
*/
var user = {
    name: 'Andrew',
    sayHi: () => {
        // this.name = 'Ben'  // Try this!
        console.log(arguments);    // print global arguments
        // arrow function does NOT bind to "this" key word
        console.log(`Hi. I'm ${this.name}`);   // this.name is undefined!
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);   // this is user obj, this.name is "Andrew"
    }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
 