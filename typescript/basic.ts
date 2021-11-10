// let userName: string = "Jack";
let hasLoggedIn: boolean = false;

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

// greet("Manh",new Date());

//! String, number and boolean
const userName: string = "Manh";

let age: number = 21;

let isChecked: boolean = false;

//! Array

const numbers: number[] = [1, 2, 3, 4, 5];

for (let i: number = 0; i < numbers.length; i++) {
  // console.log(numbers[i]);
}

//! Function
function showName(name: string): void {
  console.log("My name is " + name);
}

const getAge: (age: number) => string = (age: number) => {
  return `Age is ${age}`;
};

// console.log(getAge(12));

const names: string[] = ["Alice", "Bob", "Eve"];
// names.forEach(function (s: string) {
//   console.log(s.toUpperCase());
// });

//! Object

// function printCoord(pt: { x: number; y?: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 3 });

//! UnionType
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

//! Type Alias
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

//! InterfaceType
interface IPoint {
  x: number;
  y: number;
}

function printICoord(pt: IPoint) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

//! Type Assertions
// const myButton = <HTMLElement>document.getElementById("button");
// const myButton1 = document.getElementById("button") as HTMLElement;
//! LiteralType

function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}

printText("name", "left");

function liveDangerously(x?: number | null) {
  // No error
  console.log(x?.toFixed());
}

liveDangerously()