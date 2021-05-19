// conditional types

interface Animal {
    live() : void;
}

interface Dog extends Animal {
    woof(): void;
}

type ex1 = Dog extends Animal ? number: string; // number

type ex2 = RegExp extends Animal ? number : string; // string

// Conditional types take a form that looks a little like conditional expressions (condition ? trueExpression : falseExpression) in JavaScript:

// with generics
interface idlabel {
    id: number;
}
interface namelabel {
    name: string;
}

function createLabel(id: number): idlabel;
function createLabel(name: string): namelabel;
function createLabel(nameOrid: number | string): idlabel | namelabel {
    throw "unimplemented"
}