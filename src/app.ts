// type AddFn = (a: number, b: number) => number;
interface AddFn {
  // interface for the function
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string; //optional propery, doesnt have to be defined in the class
}
// INTERFACE can inherit multiple INTERFACES, classes only 1
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  //   outputName = "value";
  age = 31;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
        console.log("Hi");
        
    }
  }
}

let user1: Greetable;

user1 = new Person("Zorana");
// user1 = new Person(); able to call without name value
// user1.name = "Manu"; error because it's readonly
console.log(user1);

user1.greet("Hi there - I am");
