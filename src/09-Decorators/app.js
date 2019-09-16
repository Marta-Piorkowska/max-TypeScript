// Creating a Class Decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// dekorator
function logged(constructiorFn) {
    console.log(constructiorFn);
}
;
// klasa do której jest dołączony dekorator
var Brother = /** @class */ (function () {
    function Brother() {
        console.log('Hi!');
    }
    Brother = __decorate([
        logged
    ], Brother);
    return Brother;
}());
// Factorie
function logging(value) {
    return value ? logged : null;
}
;
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike = __decorate([
        logging(true)
    ], Bike);
    return Bike;
}());
// Advanced
function printable(constructionFn) {
    constructionFn.prototype.print = function () {
        console.log(this);
    };
}
var Flower = /** @class */ (function () {
    function Flower() {
        this.name = 'Monstera Deliciosa Alba';
    }
    Flower = __decorate([
        logging(true),
        printable
    ], Flower);
    return Flower;
}());
var flower = new Flower;
flower.print();
// Method Decorators
// Property Decorators
function editable(value) {
    return function (target, propName, description) {
        description.writable = value;
    };
}
function overwritable(value) {
    return function (target, ptopName) {
        var descriptor = {
            writable: value
        };
        return descriptor;
    };
}
var Monstera = /** @class */ (function () {
    function Monstera(name) {
        this.monsteraName = name;
    }
    Monstera.prototype.calcMonstera = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true) // Property Decorators
    ], Monstera.prototype, "monsteraName", void 0);
    __decorate([
        editable(false) // Method Decorators
    ], Monstera.prototype, "calcMonstera", null);
    return Monstera;
}());
var monstera = new Monstera('Alba');
monstera.calcMonstera();
monstera.calcMonstera = function () {
    console.log(3500);
};
monstera.calcMonstera();
// Parameter Decorators
function printInfo(target, methodName, paramindex) {
    console.log("Target: ", target);
    console.log("methodName: ", methodName);
    console.log("paramindex: ", paramindex);
}
var Horse = /** @class */ (function () {
    function Horse(name) {
        this.name = name;
    }
    Horse.prototype.printAllHorses = function (mode, printAll) {
        if (printAll) {
            console.log(50);
        }
        else {
            console.log(7);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Horse.prototype, "printAllHorses", null);
    return Horse;
}());
var horse = new Horse('Dumka');
horse.printAllHorses("anything", true);
horse.printAllHorses("anything", false);
