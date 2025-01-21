let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
//we cannot create the copies of it we solved the problem by learning the constructor function
console.log(car.start());

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
console.log(john.name);

Array.prototype.abhinav = function () {
  return `custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.abhinav());

let myNewArray = [1, 2, 3, 4, 5, 6];
console.log(myNewArray.abhinav());

class Vehicle {
  //method
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle{
    drive (){
        return `${this.make}: this is an inheritance example `
    }
}

let myCar = new Car("Toyota", "Corolla");
// console.log(myCar.start());
// console.log(myCar.drive())

let vehOne = new Vehicle ("Toyota","Corolla");
console.log(vehOne.make);

//Encapsulation

class BankAccount {
  #balance = 0//ensures the balance is not directly or modifiable from the outside class

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance (){
    return `$ ${this.#balance}`
  }

}
let account = new BankAccount();
// console.log(account.#balance)
console.log(account.getBalance());


//Abstraction It hides the complicated details

class CoffeMachine{
  start(){
    // Call DB
    // filter value
    return `Starting the Machine..`
  }

  brewCoffee (){
    // complex calculation
    return `Brewing coffee`
  }

  pressStartButton(){
    let msg1 = this.start();
    let msg2 = this.brewCoffee();
    return `${msg1} + ${msg2}`
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());

//Polymorphism -> It is the ability of something to have or to be displayed in more than one form



class Bird {
  fly(){
    return `Flying.....`;
  }
}

class Penguin extends Bird {
  fly(){
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//static method
class Calculator {
  static add(a,b){
    return a+b
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2,3))

console.log(Calculator.add(2,3))


//Getters and Setters

class Employee {
  #salary
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in Negative");
      
    }
    this.name = name 
    this.#salary = salary  // _ doesn't have any mean   
  }

  get salary(){
    return `You are not allowed to see salary`
  }

  set salary(value){
    if(value<0){
      console.error("Invalid Salary")
    }else {
      this._salary = value;
    }
  }
}

let emp = new Employee("Alice",-50000)
console.log(emp._salary)

 