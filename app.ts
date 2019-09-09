// number
let myAge: number = 25;
// myAge: 'Marta';

//  string
let myName: string = "Marta";
// myName = 30;

// boolean
let hasHobbyies: boolean = false;
// hasHobbyies = 1;

//assign types
let myRealAge: number;
myRealAge = 25;
// myRealAge= '25';

// array
let hobbies: any[] = ["cooking", "reading"];
hobbies = [100];
// hobbies = 100;

// tuples
let adress: [string, number] = ["street", 90];
//  adress = [60, 'street'];

// enum
enum Color {
  Red, // 0
  Orange, // 1
  Green // 2
}
let myColor: Color = Color.Orange;
console.log(myColor);

enum otherColor {
  Red, // 0
  Orange = 100, // 100
  Green, // 101
  Blue = 3, // 3
  Grey //4
}

// any
let car: any = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);

// function
function returnMyName(): string {
  return myName;
}
console.log(returnMyName());

//  void (jeżeli finkcja nic nie zwraca!)
function sayHello(): void {
  console.log("Hello");
  // return 'hello' (error, nie może byc return)
}

// argument type
function multiply(value1, value2): number {
  return value1 * value2;
}
console.log(multiply(1, "Max")); // NaN
//
function multiply2(value1: number, value2: number): number {
  return value1 * value2;
}
console.log(multiply2(1, 3));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply2;
console.log(myMultiply(2, 4));

// objects
let userData: { name: string; age: number } = {
  name: "Marta",
  age: 25
};
// userData = {
//     a: 'Marta',
//     b: 25
// };

//  complex object
let complex: { data: number[]; autput: (all: boolean) => number[] } = {
  data: [100, 1, 2],
  autput: function(all: boolean): number[] {
    return this.data;
  }
};
// complex = {};

// type alias
type Complex = { data: number[]; autput: (all: boolean) => number[] };

let complex2: Complex = {
  data: [100, 1, 2],
  autput: function(all: boolean): number[] {
    return this.data;
  }
};

// unin types
// może byc tylko jednym z podanych typów, dla tego boolean ma error
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finaleValue = 30;
if (typeof finaleValue == "number") {
  console.log("fianle value is a number");
}
