function greet2(person5) {
    console.log("hello , " + person5.firstName);
}
function changeName(person5) {
    person5.firstName = "Anna";
}
var person5 = {
    firstName: "Max",
    greet: function (lastName) {
        console.log("hi my name is " + this.firstName + " " + lastName);
    }
};
// greet2({ firstName: "Ann", age: 50, hobbies: ["coocking", "sport"] });
changeName(person5);
greet2(person5);
person5.greet("Sialala");
// Using Interfaces with Classes
var Person6 = /** @class */ (function () {
    function Person6() {
    }
    Person6.prototype.greet = function (lastName) {
        console.log("hi my name is " + this.firstName + " " + lastName);
    };
    return Person6;
}());
var myPerson6 = new Person6();
myPerson6.firstName = "Marta";
myPerson6.lastName = "Pióro";
greet2(myPerson6);
myPerson6.greet(myPerson6.lastName);
var myDoubleValueFunction;
myDoubleValueFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleValueFunction(20, 50));
var oldPerson = {
    age: 25,
    firstName: 'marta',
    greet: function (lastName) {
        console.log("hello!");
    }
};
console.log(oldPerson);
