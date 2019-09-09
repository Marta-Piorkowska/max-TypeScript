// number
let myAge: number = 25;
// myAge: 'Marta';

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
