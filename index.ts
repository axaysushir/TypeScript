interface User{ 
    name: string
    id: number
    email: string
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

// Structural typr system
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