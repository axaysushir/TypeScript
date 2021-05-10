var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    return UserAccount;
}());
var user = new UserAccount('jhon', 2, 'user@email.com');
console.log(user);
