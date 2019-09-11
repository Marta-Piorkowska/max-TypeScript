// Exercise 1 - How was your TypeScript Class?

class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

let carrr = new Car("BMW");
carrr.honk();
console.log(carrr.acceleration);
carrr.accelerate(50);
console.log(carrr.acceleration);

// Exercise 2 - Two objects, based on each other ...

class baseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends baseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

let rectangle = new Rectangle();
rectangle.length = 10;
rectangle.width = 1.5;
console.log(rectangle.calcSize());

// // Exercise 3
class Person4 {
  _firstName: string = "nic";
  enumerable: boolean = true;
  configurable: boolean = true;

  get firstName() {
    return this._firstName;
  }

  set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = "BuBu";
    }
  }
}

let person4 = new Person4();

console.log(person4.firstName);
person4.firstName = "Ma";
console.log(person4.firstName);
person4.firstName = "Maximilian";
console.log(person4.firstName);
