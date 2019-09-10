// Exercise 1 - How was your TypeScript Class?
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var carrr = new Car("BMW");
carrr.honk();
console.log(carrr.acceleration);
carrr.accelerate(50);
console.log(carrr.acceleration);
// Exercise 2 - Two objects, based on each other ...
var baseObject = /** @class */ (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(baseObject));
var rectangle = new Rectangle();
rectangle.length = 10;
rectangle.width = 1.5;
console.log(rectangle.calcSize());
// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
var Person4 = /** @class */ (function () {
    function Person4() {
        this._firstName = "nic";
        this.enumerable = true;
        this.configurable = true;
    }
    Object.defineProperty(Person4.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "BuBu";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person4;
}());
var person4 = new Person4();
console.log(person4.firstName);
person4.firstName = "Ma";
console.log(person4.firstName);
person4.firstName = "Maximilian";
console.log(person4.firstName);
