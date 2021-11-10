interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

type Person1 = {
  name: string;
  age: number;
};

let student: Person1 = {
  name: "Manh",
  age: 21,
};
console.log(greet(student));

//! Property Modifiers
interface PaintOptions {
  person: Person;
  xPos?: number;
  yPos?: number;
}

//! Property readonly
interface SomeType {
  readonly prop: string;
}

function doSomething(obj: SomeType) {
  // We can read from 'obj.prop'.
  console.log(`prop has the value '${obj.prop}'.`);

  // But we can't re-assign it.
}
//! Extending Types
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;
