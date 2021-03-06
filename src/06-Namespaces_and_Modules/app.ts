//  Namespaces

// element wyniesiony do osobnych plików.
// namespace MyMath {
//   const PI = 3.14;

//   export function calculateCircumference(diameter: number) {
//     return diameter * PI;
//   }

//   export function calculateRectangle(width: number, length: number) {
//     return width * length;
//   }
// }

// ///<reference path="circleMath.ts" />
// ///<reference path="rectangleMath.ts" />
// // ~/Pulpit/projects/TypeScript/max-TypeScript/src/Namespaces_and_Modules $ tsc app.ts --outFile app.js

// import CirlceMath = MyMath.Circle;

// const PI = 312;

// // console.log(MyMath.Circle.calculateCircumference(10));
// console.log(CirlceMath.calculateCircumference(10));
// console.log(MyMath.calculateRectangle(5, 10));
// console.log(PI);

//Modules
import { calculateCircumference2, PI2 } from "./math/circle";
import { calculateRectangle2 } from "./math/rectangle";

console.log(PI2);
console.log(calculateCircumference2(7));
console.log(calculateRectangle2(7, 7));
