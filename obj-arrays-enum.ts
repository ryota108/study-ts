enum Role {ADMIN, READ_ONLY, AUTHOR};

const person:{
    name:string,
    age:number,
    hobbies:string[],
    role:any,
} = {
    name:"Ryota",
    age:20,
    hobbies:["Game","Programming"],
    role:Role.ADMIN
}

let favoriteActivities: any[];
favoriteActivities = ["Sports"]


console.log(person.name)

