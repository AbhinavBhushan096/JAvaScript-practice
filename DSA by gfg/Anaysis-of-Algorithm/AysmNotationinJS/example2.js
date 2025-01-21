function search(arr, x) {
  let n = arr.length;
  for (let i = 0; i < n; i++) if (arr[i] === x) return true;
  return false;
}

let arr = [2,3,4,5,6,7]
console.log(search(arr,9))
