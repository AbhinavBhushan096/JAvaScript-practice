// check if a number is greater than another number

let num1 = 3;
let num2 = 8;
 
console.log("i am regular upper bottom code");
if (num1 > num2) {
  console.log("num1 is greater than num1");
} else {
  console.log("nope num1 is not greater");
}

// console.log("i am regular bottom code");

// check if a strig is equal to other string

let username = "chai";
let anotherusername = "chai";
//'=' assigne the value to the other
if (username != anotherusername) {
  console.log("Pick another username");
}else {
  console.log("you username is available")
}


// check if a variable is number or not 

let score = '44' ;
// if array is used against number it will give false as it is essetially a object
if (typeof score === "number"){
  console.log("yep this is a number ");
} else {
  console.log("No that is not a number")
}

// check if a boolean value is true or false 

let isTrue = false

if (isTrue) {
  console.log("It is true")
} else {
  console.log("It is False")
}

// check if the array is empty or not 

let items = ["item1"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty")
}

if (2 == '1'){
  console.log(true)
}else{
  console.log(false)
} 