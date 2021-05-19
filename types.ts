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