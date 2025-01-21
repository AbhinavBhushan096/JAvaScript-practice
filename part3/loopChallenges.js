/* 
1. Write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum`.
*/

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}
console.log(sum);

/* 
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let i = 5;
let countdown = [];
while (i >= 1) {
  countdown.push(i);
  i--;
}
console.log(countdown); //we can also count from 1 to 5 then reverse the array using reverse

/* 
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`. 
   Store each tea type in an array named `teaCollection`.
*/

let teaCollection = [];
let tea;

do {
  tea = prompt('Enter you favourite tea type (type "stop" to finish)');
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");
console.log(teaCollection);

/* 
4. Write a `do while` loop that adds numbers from 1 to 3 and stores the result in a variable named `total`.
1+2+3=6
*/ 1;
let i = 1;
let total = 0;
do {
  total += i;
  i++;
} while (i < 4);
console.log(total);

/* 
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` by 2 and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers =[]
let multiplies = [2,4,6]
for (l =0 ; l < multiplies.length; l++) {
    multipliedNumbers.push(multiplies[l]*2)
    
}
console.log(multipliedNumbers)

/* 
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let city = ["Paris", "New York", "Tokyo", "London"];
let cityList = []
for (let i=0;i<city.length;i++) {
    cityList.push(city[i])

}
console.log(cityList)