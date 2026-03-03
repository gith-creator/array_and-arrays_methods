//1 .Write a function that takes an array of numbers and returns the sum of all the numbers.
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

//2 .Write a function that takes an array and returns the largest number in the array.
function largestNumber(arr) {
  return Math.max(...arr);
}

