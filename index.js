var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    return UserAccount;
}());
var user = new UserAccount('jhon', 2, 'user@email.com');
// function for union type
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    else
        return obj;
}
var object = backpack.get();
backpack.add(23);
function logPoint(p) {
    console.log(p.x + ", " + p.y);
}
var point = { x: 14, y: 25 };
logPoint(point); // logs "14, 25"
var point2 = { x: 12, y: 3, z: 9 };
logPoint(point2); // logs "12, 3"
var VirtualPoint = /** @class */ (function () {
    function VirtualPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    return VirtualPoint;
}());
var newPoint = new VirtualPoint(12, 45);
logPoint(newPoint);
// if the object or class has all the required properties, typescript will say they match, regardless of the
// implementation details
var myuser = {
    name: 'kayla'
};
myuser.name = 'anjali';
var myUnchangedUser = {
    name: 'sabrina'
};
myUnchangedUser.name = 'Ritika';
var exampleUsers = [{ name: 'jhon' }, { name: 'Fesha' }];
// enums in TypeScript
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["circle"] = 0] = "circle";
    ShapeKind[ShapeKind["square"] = 1] = "square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.circle,
    radius: 100
};
var E;
(function (E) {
    E[E["foo"] = 0] = "foo";
    E[E["bar"] = 1] = "bar";
})(E || (E = {}));
function f(x) {
    if (x !== E.foo || x !== E.bar) {
        // This condition will always return 'true' since the types 'E.foo' and 'E.bar' have no overlap.
    }
}
// enum at compile time
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["error"] = 0] = "error";
    LogLevel[LogLevel["warn"] = 1] = "warn";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["debug"] = 3] = "debug";
})(LogLevel || (LogLevel = {}));
function printImportant(key, message) {
    var num = LogLevel[key];
    if (num <= LogLevel.warn) {
        console.log('Log level key is:', key);
        console.log('Log level value is:', num);
        console.log('Log level message is:', message);
    }
}
printImportant("error", 'this is error message');
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: 'Create new Project',
    description: 'Create project Python / Django'
};
var todo2 = updateTodo(todo1, {
    description: 'Install dependencies'
});
console.log(todo2);
