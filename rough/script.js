// alert("connected")
/* let hold= document.getElementById("changeTextButton");
console.log(hold)
let hold2 = document.getElementById("myParagraph");
console.log(hold2) */
document.getElementById("changeTextButton").addEventListener('click',function () {
    let paragraph = document.getElementById("myParagraph")
    console.log(paragraph)
});


let arr = [2,4,1,34,34,21,12,4,5,8,7,6]

arr.sort()// this is wrong as sorting in array is done by strings
console.log(arr)