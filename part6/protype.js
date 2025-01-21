let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer, //dunder proto
};
let tomHadware = {};

console.log(`computer `, computer.__proto__);
console.log(`lenovo `, lenovo.__proto__);

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};

Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));

console.log(object1.hasOwnProperty("toString"));

console.log(object1.hasOwnProperty('hasOwnProperty'))