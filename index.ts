interface User{ 
    name: string
    id: number
    email: string
    phone: number
    address: string
}


class UserAccount {
    name: string
    id:  number
    email: string

    constructor(name: string, id: number, email: string) {
        this.name = name
        this.id = id
        this.email = email
    }
}
const user: User = new UserAccount('jhon', 2, 'user@email.com')
// console.log(user);


// Unions
type Mybool = true | false

type windowState = 'open' | 'close' | 'minimized'
type lockState = 'locked' | 'unlocked'

// function for union type
function getLength(obj: string | string[]) {
    return obj.length
}

function wrapInArray(obj: string | string[]) {
    if (typeof obj === 'string') {
        return [obj]
    } else return obj
}

// Generics

// Generics provide variables to types. A common example is an array. An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.

type StringArray = Array<string>
type NumArray = Array<number>
type ObjectWithNameArray = Array<{name: string}>

interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}

declare const backpack: Backpack<string>

const object = backpack.get()
backpack.add(23)
backpack.add(34)
backpack.add(35)

// Structural type system
interface Point {
    x: number
    y: number
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);   
}

const point = {x: 14, y: 25}
logPoint(point) // logs "14, 25"

const point2 = {x: 12, y: 3, z: 9}
logPoint(point2) // logs "12, 3"

class VirtualPoint {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x= x
        this.y = y
    }
}
const newPoint = new VirtualPoint(12, 45)
logPoint(newPoint)

// if the object or class has all the required properties, typescript will say they match, regardless of the
// implementation details

const myuser = {
    name: 'kayla'
}
myuser.name = 'anjali'

const myUnchangedUser = {
    name: 'sabrina'
} as const

myUnchangedUser.name = 'Ritika'

const exampleUsers = [{name: 'jhon'}, {name: 'Fesha'}] as const

// enums in TypeScript
enum Direction {
    Up,
    Down,
    Left, 
    Right,
}

enum ShapeKind {
    circle, 
    square
}

interface Circle {
    kind: ShapeKind.circle
    radius: number
}

let c: Circle = {
    kind: ShapeKind.circle,
    radius: 100
}

enum E {
    foo,
    bar
}

function f(x: E) {
    if (x !== E.foo || x !== E.bar) {
        // This condition will always return 'true' since the types 'E.foo' and 'E.bar' have no overlap.
    }
}

// enum at compile time
enum LogLevel {
    error,
    warn,
    info,
    debug
}

type LogLevelString =  keyof typeof LogLevel;

function printImportant(key: LogLevelString, message: string) {
    const num = LogLevel[key]
    if (num <= LogLevel.warn) {
        console.log('Log level key is:', key);
        console.log('Log level value is:', num);
        console.log('Log level message is:', message);    
    }
}
printImportant("error", 'this is error message')

// utility types
// Partial<Type>
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
interface Todo { 
    title: string
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate}
}

const todo1 = {
    title: 'Create new Project',
    description: 'Create project Python / Django'
}

const todo2 = updateTodo(todo1, {
    description: 'Install dependencies'
})

console.log(todo2)

// Required<Type>

interface Props {
    a?: number;
    b?: string
}
const obj: Props = {a: 5}
const obj2: Required<Props> = {a: 5} // property b is missing here

// Readonly<Type>

// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

interface data {
    title: string;
  }
  
const readit: Readonly<data> = {
    title: "Delete inactive users",
};
  
readit.title = "Hello"; // readonly


// Object types
interface PaintOptions {
    shape: Shape;
    xPos?: number;
    yPos?: number;
  }

function paintShape(opts: paintOperations) {

}

const shape = getShape()
paintShape({shape})
paintShape({shape, xPos: 100})

// read only peroperty
interface Sometype {
    readonly prop: string
}

function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
  
    // But we can't re-assign it.
    obj.prop = "hello";
//   Cannot assign to 'prop' because it is a read-only property.
}

interface Person {
    name: string
    age: number
}
interface readonlyperson {
    readonly name: string
    readonly age: number
}
let writableperson: Person = {
    name: 'Hello',
    age: 23
}

let readonlyperosn: readonlyperson = writableperson

console.log(readonlyperson.age) // 23
writableperson.age++
console.log(readonlyperson.age) // 24

export interface StringValidator {
    isAcceptable(s: string) : boolean;
}