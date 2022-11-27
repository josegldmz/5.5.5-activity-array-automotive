//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
}

loadPassenger(num) {
    if(this.passenger < this.maxPassenger) {
        if((num + this.passenger) <= this.maxPassenger){
            this.passenger = num;
            return this.passenger + 'is the current occupancy';
        }
        else {
            console.log("There is no remaining passenger space in the " + this.make + " " + this.model)
        }
    }
}

start() {
    if(this.fuel>0) {
        this.started = true;
        console.log('Car has fuel')
    }
    else {
        this.started = false;
        console.log('No fuel')
    }
}

checkService() {
    if(this.mileage > 30000) {
        return this.sheduleService = true;
        console.log('Service needed.')
    }
    else{
        return this.scheduleService = false;
        console.log(`Your mileage is ${this.mileage}.`)
    }
}

start()
loadPassenger()
checkService()



let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)
