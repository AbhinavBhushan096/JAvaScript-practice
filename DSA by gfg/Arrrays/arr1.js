let arr = [10,20,35,45]
console.log(arr[0])
console.log(arr[1])
console.log(arr.length)
console.log(arr[arr.length-1]);
console.log(arr)

let arr2 = [10,20]
arr2.push(40)
arr2.push(50)// it pushes to the last index
arr2.unshift(5)//it pushes to the starting of the elment
arr2[1]=30
arr2[9]=100//automatically resizes the array
console.log(arr2)

//Removal of Items
let arr3=[10,20,30,40]
arr3.pop();//removes the last element of the array
arr3.shift();//remove first elemnt of the array
console.log(arr3)
