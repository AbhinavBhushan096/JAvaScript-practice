function sayHello() {
  console.log("I would like to say hello");
}

setTimeout(() => {
    sayHello();
}, 4000);

console.log("hello World")

for (let index = 0; index < 10; index++) {
  console.log(index);
}
