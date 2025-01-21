// ⁡⁢⁣⁢Largest Element in the Array⁡
/* 
ip: arr=[10,5,20,8]
op: 2//ides of the element

ip: arr=[30]
op:0

ip: arr=[20,8,40,10,40]
op:2
*/
//naive sol -> check one by one
function findMax(arr) {
    for (let i = 0; i < arr.length; i++) {
        let flag =true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] < arr[j]){
                flag =false
                break}
        }
        if (flag === true)
            return i;
    }
    return -1;
}

let arr = [10, 5, 20, 8];
console.log(findMax(arr))
console.log(largeElement(arr));


/* 
    idea 
        a[i]<= alargest // ignore
        a[i]>= alargest //
*/

function largeElement(array) {
  let temparr = array[0];
  for (let i = 1; i < array.length; i++) {
    if (temparr < array[i]) {
      temparr = array[i];
    }
  }
  return temparr;
}