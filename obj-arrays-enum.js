"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: "Ryota",
    age: 20,
    hobbies: ["Game", "Programming"],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
