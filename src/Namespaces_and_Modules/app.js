"use strict";
//  Namespaces
Object.defineProperty(exports, "__esModule", { value: true });
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
var circle_1 = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
console.log(circle_1.PI2);
console.log(circle_1.calculateCircumference2(7));
console.log(rectangle_1.calculateRectangle2(7, 7));
