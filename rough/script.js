// alert("connected")
/* let hold= document.getElementById("changeTextButton");
console.log(hold)
let hold2 = document.getElementById("myParagraph");
console.log(hold2) */
//Example -1
/* const originalText = document.getElementById("myParagraph").textContent;
let paragraph = document.getElementById("myParagraph");
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    console.log(paragraph);
    paragraph.textContent = "the paragraph is changed";
  });

document
  .getElementById("changeTextButton")
  .addEventListener("dblclick", function () {
    console.log("Doube-click detected");
    paragraph.textContent = originalText;
  });
 */
// let arr = [2,4,1,34,34,21,12,4,5,8,7,6]

// arr.sort()// this is wrong as sorting in array is done by strings
// console.log(arr)

/* document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});
 */

document.getElementById("teaList").addEventListener('click',function(Event){
  console.log(Event)
});