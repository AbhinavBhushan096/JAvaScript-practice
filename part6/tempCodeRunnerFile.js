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