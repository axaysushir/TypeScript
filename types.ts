// conditional types

interface Animal {
    live() : void;
}

interface Dog extends Animal {
    woof(): void;
}

type ex1 = Dog extends Animal ? number: string; // number

type ex2 = RegExp extends Animal ? number : string; // string

// Conditional types take a form that looks a little like conditional expressions 
// (condition ? trueExpression : falseExpression) in JavaScript:

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


// export declarations
// Any declaration (such as a variable, function, class, type alias, or interface) 
// can be exported by adding the export keyword.

import {StringValidator} from './index'

export const numberRegExp = /^[0-9]+$/

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegExp.test(s)
    }
}

// export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };
// re export 
export class ParseIntBasedZipCodeValidator {
    isAcceptable(s: string) {
      return s.length === 5 && parseInt(s).toString() === s;
    }
  }
  // Export original validator but rename it
// export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";

interface User {
    id: number
    firstname: string
    lastname: string
    role:string
}
// function updateuser(id: number, update: Partial<User>) {
//     const user = getUser(id)
//     const newUser = {...user, ...update}
//     saveUser(id, newUser)
// }

// function createUuser(id: number, create: Partial<User>) {
//     const user = getUser(id)
//     const newUser = {...user, ...create}
//     saveUser(id, newUser)
// }