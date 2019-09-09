// let & const
var variable = "Test";
variable = "Another value";
console.log(variable);
var maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99; // error, wartość const nie może ulegać zmianie
// Block scope
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//  arrow functions
var addNumbers = function (nr1, nr2) {
    return nr1 + nr2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (nr1, nr2) { return nr1 * nr2; };
console.log(multiplyNumbers(10, 3));
// arrow functions defoult parameters
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log(start);
};
countdown();
// spread operator - rozpakowuje tablice
var numbers = [1, 99, 30, -5];
console.log(Math.max(33, 2, -3, 99));
console.log(Math.max.apply(Math, numbers));
// rest operator - tworzy tablicę
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Marta", 1, 2, 3, 4, 5, 6));
// Destructuring Arrays
var myHobbies = ["coocking", "reading"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// Destructuring Objects
var myData = { userName: "Max", age: 27 };
var userName = myData.userName, age = myData.age;
console.log(userName, age);
// Template Literals
var someName = "Max";
var greeting = "This is heading!\nI'm " + someName + ".\nThis is cool!";
console.log(greeting);
