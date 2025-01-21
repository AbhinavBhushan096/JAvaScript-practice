/* Playing with Types
Task 1:

Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

"123" -> 123 "abc" -> NaN " "-> 0
 */
// function stringToNumber(input) {
//     let isanumber = Number(input)
//     if (typeof isanumber === "number"|| isanumber === 0){   // always be true
//         return isanumber
//     }else{
//         return "Not an number"
//     }
// }
// console.log(stringToNumber("abc")) wrong approach
/* 
input.trim():

Removes leading and trailing whitespace. Without trimming, " " would be treated as 0 by Number(), which is often undesirable for this context.
If input.trim() results in an empty string, the function directly returns "Not a number".
*/
function stringToNumber(input) {
  if (input.trim() === "") {
    return "Not a number";
  }
  let isaNum = Number(input);

  if (!isNaN(isaNum)) {
    return isaNum;
  } else {
    return "Not a number";
  }
}
console.log(stringToNumber("    2232323 "));

/* 
Task 2:

Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
input - > boolean equivalent 
be - > flip


 */


function flipBoolean(input) {
  return !Boolean(input);
}
console.log(flipBoolean(true))

/* Task 3:

Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
 */
function whatAmI(input) {
    if (typeof input === "number"){
        return "I'm a number!"
    }else if (typeof input === "string") {
      return "I'm a string!";
    } else if (typeof input === "boolean") {
      return "I'm a boolean!";
    } else if (typeof input === null) {
      return "I'm a null";
    } else if (typeof input === "function") {
      return "I'm a function!";
    } else if (typeof input === "object") {
      return "I'm a object!";
    } else if (Array.isArray(input)) {
      return "I'm a array!";
    } else if (typeof input === "undefined") {
      return "I'm a undefined!";
    } else {
      return "I don't know";
    }

}

/* Task 4:

Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey. 
Remember, in JavaScript, 0, "", null, undefined, false, NaN, and a few others are falsey.
Here's the implementation of the `isItTruthy` function in JavaScript:

```javascript
function isItTruthy(input) {
    // Check if the input is truthy or falsey
    if (input) {
        return "It's truthy!";
    } else {
        return "It's falsey!";
    }
}

// Test cases
console.log(isItTruthy(true));         // Output: It's truthy!
console.log(isItTruthy(false));        // Output: It's falsey!
console.log(isItTruthy(123));          // Output: It's truthy!
console.log(isItTruthy(0));            // Output: It's falsey!
console.log(isItTruthy("hello"));      // Output: It's truthy!
console.log(isItTruthy(""));           // Output: It's falsey!
console.log(isItTruthy([]));           // Output: It's truthy!
console.log(isItTruthy({}));           // Output: It's truthy!
console.log(isItTruthy(null));         // Output: It's falsey!
console.log(isItTruthy(undefined));    // Output: It's falsey!
console.log(isItTruthy(NaN));          // Output: It's falsey!
```

### Explanation:
1. **Truthy and Falsey in JavaScript**:
   - A **truthy** value is a value that evaluates to `true` in a boolean context.
   - A **falsey** value is a value that evaluates to `false` in a boolean context.

2. **Falsey Values**:
   - `false`
   - `0`
   - `""` (empty string)
   - `null`
   - `undefined`
   - `NaN`

3. **Truthy Values**:
   - Everything else (non-zero numbers, non-empty strings, objects, arrays, etc.).

4. **`if (input)`**:
   - In the `if` statement, JavaScript implicitly converts `input` to a boolean.
   - If the value is truthy, the block executes `"It's truthy!"`.
   - If the value is falsey, the `else` block executes `"It's falsey!"`.

### Test Cases:
- `true`: Truthy → `"It's truthy!"`
- `false`: Falsey → `"It's falsey!"`
- `123`: Truthy → `"It's truthy!"`
- `0`: Falsey → `"It's falsey!"`
- `[]`: Truthy → `"It's truthy!"` (empty array is an object and truthy)
- `{}`: Truthy → `"It's truthy!"` (empty object is truthy)
- `null`: Falsey → `"It's falsey!"`
- `NaN`: Falsey → `"It's falsey!"`
*/

function isItTruthy(input) {
    if (input){
        return "It's truthy"
    }else {
        return "It's falsey"
    }
}
