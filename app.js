// number
var myAge = 25;
// myAge: 'Marta';
//  string
var myName = "Marta";
// myName = 30;
// boolean
var hasHobbyies = false;
// hasHobbyies = 1;
//assign types
var myRealAge;
myRealAge = 25;
// myRealAge= '25';
// array
var hobbies = ["cooking", "reading"];
hobbies = [100];
// hobbies = 100;
// tuples
var adress = ["street", 90];
//  adress = [60, 'street'];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Orange"] = 1] = "Orange";
    Color[Color["Green"] = 2] = "Green"; // 2
})(Color || (Color = {}));
var myColor = Color.Orange;
console.log(myColor);
var otherColor;
(function (otherColor) {
    otherColor[otherColor["Red"] = 0] = "Red";
    otherColor[otherColor["Orange"] = 100] = "Orange";
    otherColor[otherColor["Green"] = 101] = "Green";
    otherColor[otherColor["Blue"] = 3] = "Blue";
    otherColor[otherColor["Grey"] = 4] = "Grey"; //4
})(otherColor || (otherColor = {}));
// any
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// function
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//  void (jeżeli finkcja nic nie zwraca!)
function sayHello() {
    console.log("Hello");
    // return 'hello' (error, nie może byc return)
}
// argument type
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(1, "Max")); // NaN
//
function multiply2(value1, value2) {
    return value1 * value2;
}
console.log(multiply2(1, 3));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply2;
console.log(myMultiply(2, 4));
// objects
var userData = {
    name: "Marta",
    age: 25
};
// userData = {
//     a: 'Marta',
//     b: 25
// };
//  complex object
var complex = {
    data: [100, 1, 2],
    autput: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 1, 2],
    autput: function (all) {
        return this.data;
    }
};
// unin types
// może byc tylko jednym z podanych typów, dla tego boolean ma error
var myRealRealAge = 27;
myRealRealAge = "27";
// myRealRealAge = true;
// check types
var finaleValue = 30;
if (typeof finaleValue == "number") {
    console.log("fianle value is a number");
}
