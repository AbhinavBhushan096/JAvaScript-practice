function getSum(arr) {
  let sum = 0; // Declare and initialize sum inside the function
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      continue; // Skip even indices
    }
    sum += arr[i]; // Add the value at odd index to sum
  }

  return sum; // Return the total sum after the loop
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getSum(arr)); // Output: 25 (2 + 4 + 6 + 8 + 10)
