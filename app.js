"use strict";
let user1;
user1 = {
    name: "Ryota",
    age: 20,
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
};
user1.greet("Hi");
