"use strict";
{
    let add;
    add = (n1, n2) => {
        return n1 + n2;
    };
    class Person {
        constructor(n) {
            this.age = 30;
            this.name = n;
        }
        greet(phrase) {
            console.log(phrase + "" + this.name);
        }
    }
    let user1;
    user1 = {
        name: "Ryota",
        age: 20,
        greet(phrase) {
            console.log(phrase + "" + this.name);
        }
    };
    user1.greet("Hi");
}
