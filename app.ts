const person:{
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string]
} = {
    name:"Ryota",
    age:20,
    hobbies:["Game","Programming"],
    role:[2,"author"]
}

let favoriteActivities: any[];


console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby)
}