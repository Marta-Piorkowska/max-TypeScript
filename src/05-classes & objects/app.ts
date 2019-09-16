class Person {
  name: string;
  private type: string;
  protected age: number;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}
const personn = new Person("Max", "max");
console.log(personn);
console.log(personn.name, personn.username);
personn.printAge();
// person.setType('Cool guy'); // won't work with private method

// Inheritance
class Max extends Person {
  // name = "Max";

  constructor(username: string) {
    super("Max", username);
    this.age = 25;
  }
}
const max = new Max("max");
console.log(max);

// getters & setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}
let plant = new Plant();
console.log(plant.species);
plant.species = "ab";
console.log(plant.species);
plant.species = "green plant";
console.log(plant.species);

// Static Properties and Methods //umożliwiają pobranie własnośći z klasy bez potrzeby tworzenia jej instancji lub roszerzania
class Helpers {
  static PI: number = 3.14;
  static clacCircumference(diameter: number) {
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(2 * Helpers.clacCircumference(8));

// Abstract Classes // można dziedziczyć, ale nie można ich instancjonować.
abstract class Project {
  projectName: string = "Some project";
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string) {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT project");
console.log(newProject);

//  Private Constructors
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("the only one");
    }
    return OnlyOne.instance;
  }
}
// let wrong = new OnlyOne('the only one');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'something';
