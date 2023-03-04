"use strict";
{
    const e1 = {
        name: "Max",
        privileges: ["create-server"],
        startDate: new Date()
    };
    function add(a, b) {
        if (typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }
    function printEmployeeInformation(emp) {
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
        loadCargo(amount) {
            console.log("loading cargo... " + amount);
        }
    }
    const v1 = new Car();
    const v2 = new Truck();
    function useVehicle(vehicle) {
        vehicle.drive();
        if (vehicle instanceof Truck) {
            vehicle.loadCargo(1000);
        }
    }
    useVehicle(v1);
    useVehicle(v2);
}
