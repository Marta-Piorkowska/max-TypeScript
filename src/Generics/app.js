//  simple generic
function echo(data) {
    return data;
}
console.log(echo('max'));
console.log(echo(25));
console.log(echo({ name: 'max', age: 25 }));
// better generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho('max').length);
console.log(betterEcho(25));
console.log(betterEcho({ name: 'max', age: 25 }));
// A built-in Generic
// array is a generic type by the default
var testResult = [1.2, 5, 66];
testResult.push(-2, 8);
console.log(testResult);
// Arrays
function printAll(arg) {
    arg.forEach(function (element) { return console.log(element); });
}
printAll(['apple', 'banana', 'orange']);
// Generic Types
var echo2 = betterEcho;
console.log(echo2('somethingggggg'));
// Generic Class
var SimpleClass = /** @class */ (function () {
    function SimpleClass() {
    }
    SimpleClass.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleClass;
}());
var simpleClass = new SimpleClass();
simpleClass.baseValue = 99;
simpleClass.multiplyValue = 1;
console.log(simpleClass.calculate());
var AdwancedClass = /** @class */ (function () {
    function AdwancedClass() {
    }
    AdwancedClass.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return AdwancedClass;
}());
var adwancedClass = new AdwancedClass();
simpleClass.baseValue = 99;
simpleClass.multiplyValue = 1;
console.log(simpleClass.calculate());
var SuperAdwancedClass = /** @class */ (function () {
    function SuperAdwancedClass() {
    }
    SuperAdwancedClass.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SuperAdwancedClass;
}());
var superEdwancedClass = new SuperAdwancedClass();
simpleClass.baseValue = '99';
simpleClass.multiplyValue = 1;
console.log(simpleClass.calculate());
