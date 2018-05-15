var obj = {
    name: "ben"
};
// obj -> string
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name": "Ben", "age": 99}';
// string -> obj
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
