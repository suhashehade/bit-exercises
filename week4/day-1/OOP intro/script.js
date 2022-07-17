// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs;
//         this.children =  [];
       
//     }
//     giveBirth(name){
//         this.children.push(name);
//     }
// }

// const dog = new Animal("Boby", 4);
// console.log(dog.name);
// let cat = new Animal("Puss" , 4);
// cat.giveBirth("Dolly")
// console.log(cat.children);


// class Human{
//     constructor(name, age, isFriendly){
//         this.name = name;
//         this.age = age;
//         this.isFriendly = isFriendly;
//     }
// }

// const human = new Human("Aya", 23, true);
// console.log(human.name);
// console.log(human.age);
// if(human.isFriendly){
//     console.log(human.name + " is friendly");
// }



// class Vehicle{
//     constructor(x, y, speed){
//         this.x = x;
//         this.y = y;
//         this.speed = speed;
//         Vehicle.carsSold ++;
//     }

//     static getInfo(){
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }

//     static calculateMoney(){
//         let money = Vehicle.carsSold * 30000;
//         console.log("we've gain: "+ money +  " dollars as we've sold " + Vehicle.carsSold + " vehicles.");
//     }
// }

// Vehicle.carsSold = 0;
// let car1 = new Vehicle(100, 50, 90);
// let car2 = new Vehicle(300, 100, 50);
// let car3 = new Vehicle(300, 100, 50);


// Vehicle.getInfo();
// Vehicle.calculateMoney();


class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x;
        this.y = y;
        this._speed = speed;
        this._fuel = fuel;
    }

     set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed;
    }

    get speed(){
        return this._speed;
    }

    set fuel(fuel){
        if(fuel < 0 || fuel > 150){
            return console.log("The fuel must be greater than 0 and less than 150");
        }
        this._fuel = fuel;
        
    }

    get fuel(){
        return this._fuel;
    }
}

const c =  Vehicle()
c.x = 3
c.y = 1
// c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
// console.log(c.speed) // prints undefined
c.fuel = -1;
console.log(c.fuel);



