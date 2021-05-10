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