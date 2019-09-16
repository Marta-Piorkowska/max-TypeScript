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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var personn = new Person("Max", "max");
console.log(personn);
console.log(personn.name, personn.username);
personn.printAge();
// person.setType('Cool guy'); // won't work with private method
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    // name = "Max";
    function Max(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.age = 25;
        return _this;
    }
    return Max;
}(Person));
var max = new Max("max");
console.log(max);
// getters & setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "ab";
console.log(plant.species);
plant.species = "green plant";
console.log(plant.species);
// Static Properties and Methods //umożliwiają pobranie własnośći z klasy bez potrzeby tworzenia jej instancji lub roszerzania
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.clacCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(2 * Helpers.clacCircumference(8));
// Abstract Classes // można dziedziczyć, ale nie można ich instancjonować.
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Some project";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);
//  Private Constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne("the only one");
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('the only one');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'something';
