{
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };
  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
  };

  type Combinable = string | number;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;

  function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
      return a.toString() + b.toString();
    }
    return a + b;
  }

  type UnknownEmployee = Admin | Employee;

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("name" + emp.name);
    if ("privileges" in emp) {
      console.log("privileges:" + emp.privileges);
    }
    if ("startDate" in emp) {
      console.log("startDate:" + emp.startDate);
    }
  }

  printEmployeeInformation(e1);

  class Car {
    drive() {
      console.log("driving");
    }
  }

  class Truck {
    drive() {
      console.log("Driving Truck ...");
    }

    loadCargo(amount: number) {
      console.log("loading cargo... " + amount);
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }

  useVehicle(v1);
  useVehicle(v2);

  interface Bard {
    type: "bard";
    flyingSpeed: number;
  }

  interface Horse {
    type: "horse";
    groundSpeed: number;
  }

  type Animal = Bard | Horse;

  function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
      case "bard":
        speed = animal.flyingSpeed;
        break;
      case "horse":
        speed = animal.groundSpeed;
    }
  }

  moveAnimal({ type: "bard", flyingSpeed: 20 });
}

const names: Array<string> = [];

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

function merge<T extends object,U>(objA:T, objB: U) {
  return Object.assign(objA, objB);
}


const mergedObj = merge({name:"Max"},{age:20}) ;

interface Lengthy {
  length:number
}

function countAndPrint<T extends Lengthy >(element:T){
  let descriptionText = "Got no value";
  if(element.length === 1){
    descriptionText = "Got 1 value"
  }else if (element.length > 1){
    descriptionText = "Got "+ element.length + "elements"
  }
   return [element,descriptionText];
}


console.log(countAndPrint("Hi there!"))

