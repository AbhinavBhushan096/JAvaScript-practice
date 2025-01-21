//number
let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(typeof balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());
console.log(typeof anotherBalance);

// boolean

let isActive = true;
let isreallyActive = new Boolean(true); //not recommended

console.log(typeof isActive);
console.log(typeof isreallyActive);

// null and undefined

let firstname = null;
let lastname = undefined;
console.log(firstname);
console.log(lastname);

//string

let mystring = "hello";
let myStingOne = "hola";
let username = "abhinav";

let oldGreet = mystring + " abhinav";

console.log(oldGreet);

let greetMessage = `hello ${username} !`;
let demone = ` helo ${2 ** 2}`;
console.log(greetMessage);
console.log(demone);

//Symbol
let sm1 = Symbol("a"); //its a unique value
let sm2 = Symbol("a"); // it's also a unique value

console.log(sm1 == sm2);
console.log(sm1);
