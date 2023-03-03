{
  interface AddFn {
   (a:number,b:number):number
  }

let add:AddFn;

add = (n1:number,n2 :number)=> {
    return n1 + n2;
}

interface Named {
    readonly name: string;
    outputName?:string;
}

interface Greetable extends Named{
    greet(phrase:string) :void;
}

class Person implements Greetable {
    name: string
    age = 30

    constructor(n:string){
        this.name = n
    }

    greet(phrase: string){
        console.log(phrase + "" + this.name)
    } 
}
let user1 :Person;

user1 = {
    name:"Ryota",
    age:20,
    greet(phrase) {
        console.log(phrase + ""  + this.name)
    }
}

user1.greet("Hi")

}