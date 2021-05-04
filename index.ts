interface User{ 
    name: string
    id: number
}

// const user: User = {
//     name: 'jack',
//     id: 1
// }

class UserAccout {
    name: string
    id:  number

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}
const user: User = new UserAccout('jhon', 2)