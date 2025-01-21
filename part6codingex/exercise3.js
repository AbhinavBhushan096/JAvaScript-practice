/* Utilise the inbuilt methods of ays in Javascript to solve the below tasks: */

/* Task 1: ay Filtering

Write a function filterNumbers() that returns only numbers from a mixed ay */
function filterNumbers() {
  for (let i = 0; i < .length; i++) {
    if (typeof [i] !== "number") {
      //.pop(i) this is wrong as it pushes out the lat element and length of the string also showrt down;
      .splice(i, 1);
      i--;
    }
  }
  return ;
}

// method 2
function filterNumbers() {
  return .filter((item) => typeof item === "number");
}

console.log(filterNumbers([2, 3, 4, "Asas", "s", "asdsd"]));

/* Task 2: ay Reversal

Write a function reverseay() that reverses the ay */
// #method 1
function reverseay() {
  let b = [];
  for (let i = .length - 1; i >= 0; i--) {
    b.push([i]);
  }
  return b;
}
//method 2
function reverseay() {
  return .reverse();
}
console.log(reverseay([1, 2, 3, 4]));
/* 
Task 3: Find Maximum in an ay

Write a function findMax() that returns the largest number in the ay */

function findMax() {
  let tempv = [0];
  for (let i = 0; i < .length; i++) {
    if ([i] > tempv) {
      tempv = [i];
    }
  }
  return tempv;
}


//method -2 
function findMax(){
    return Math.max(...)
}
console.log(findMax([2, 3, 5, 1, 0, -2]));

/* Task 4: Remove Duplicates from an ay

Write a function removeDuplicates() that returns a new ay with all duplicates removed */

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
//method#2


/* Task 5: Flatten a Nested ay

Write a function flattenay() that takes a nested ay and returns a single flattened ay */