interface NamePerson {
  firstName: string;
  age?: number; //może być ale nie musi
  [propName: string]: any; //jeżeli możliwe, że dodamu jakąś wartość ale nie wiemy jak się będzie nazywać itp
  greet(lastName: string): void; // funkcja
}

function greet2(person5: NamePerson) {
  console.log("hello , " + person5.firstName);
}

function changeName(person5: NamePerson) {
  person5.firstName = "Anna";
}

const person5 = {
  firstName: "Max",
  greet(lastName: string) {
    console.log("hi my name is " + this.firstName + " " + lastName);
  }
};

// greet2({ firstName: "Ann", age: 50, hobbies: ["coocking", "sport"] });
changeName(person5);
greet2(person5);
person5.greet("Sialala");

// Using Interfaces with Classes

class Person6 implements NamePerson {
  firstName: string;
  lastName: string;
  age?: number;
  greet(lastName: string) {
    console.log("hi my name is " + this.firstName + " " + lastName);
  }
}
const myPerson6 = new Person6();
myPerson6.firstName = "Marta";
myPerson6.lastName = "Pióro";
greet2(myPerson6);
myPerson6.greet(myPerson6.lastName);

// Interfaces and Function Types

interface DoubleValueFunc {
  (number1: number, number2: number): number:
}

let myDoubleValueFunction: DoubleValueFunc;
myDoubleValueFunction = function (value1: number, value2: number): number {
  return (value1 + value2) * 2;
}

console.log(myDoubleValueFunction(20, 50));

// Interface Inheritance
interface agePerson extends NamePerson {
  age: number;
}

const oldPerson: agePerson = {
  age: 25,
  firstName: 'marta',
  greet(lastName: string) {
    console.log("hello!");
  }
}

console.log(oldPerson);
