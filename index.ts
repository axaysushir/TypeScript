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
