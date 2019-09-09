// let & const

let variable = "Test";
variable = "Another value";
console.log(variable);

const maxLevel = 100;
console.log(maxLevel);
// maxLevel = 99; // error, wartość const nie może ulegać zmianie

// Block scope
function reset() {
  // console.log(variable);
  let variable = null;
  console.log(variable);
}
reset();
console.log(variable);

//  arrow functions
const addNumbers = function(nr1: number, nr2: number): number {
  return nr1 + nr2;
};
console.log(addNumbers(10, 3));

const multiplyNumbers = (nr1: number, nr2: number) => nr1 * nr2;
console.log(multiplyNumbers(10, 3));

// arrow functions defoult parameters
const countdown = (start: number = 10): void => {
  while (start > 0) {
    start--;
  }
  console.log(start);
};
countdown();

// spread operator - rozpakowuje tablice
const numbers = [1, 99, 30, -5];
console.log(Math.max(33, 2, -3, 99));
console.log(Math.max(...numbers));

// rest operator - tworzy tablicę
function makeArray(name: string, ...args: number[]) {
  return args;
}
console.log(makeArray("Marta", 1, 2, 3, 4, 5, 6));

// Destructuring Arrays
const myHobbies = ["coocking", "reading"];
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

// Destructuring Objects
const myData = { userName: "Max", age: 27 };
const { userName, age } = myData;
console.log(userName, age);

// Template Literals
const someName = "Max";
const greeting = `This is heading!
I'm ${someName}.
This is cool!`;

console.log(greeting);
