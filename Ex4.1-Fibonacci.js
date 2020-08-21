`use-strict`
// function fibonacci(n){
//   let fibonacciArray = [0, 1];
//   for (let i = 2; i < n + 1; i++){
//     fibonacciArray.push(fibonacciArray[i - 2] + fibonacciArray[i -1]);
//   }
//  return fibonacciArray[n];
// }
// console.log(fibonacci(2));
/**
 Write a function to return an n element in Fibonacci sequence
  So what is a Fibonacci sequence? According to Wikipedia:
  “In mathematics, the Fibonacci numbers are the numbers in the following integer sequence, 
  called the Fibonacci sequence, and characterized by the fact that every number after the first two is the sum of the two preceding ones.”
  Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like this:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
  or this:
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …

 */


/**
 * get fibonacci number, by its element position (0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144) 
 * @param {number} num - position in number: 1 -> 0, 2-> 1, 3 -> 1, 4 -> 2  
 */
const getFibonacciByElement = (elementNumber) => { // element 3: (2) => fibonacciArray[2]
  
  const elementIndex = elementNumber-1;
  let fibonacciArray = [0, 1];

  for (let i = 2; i <= elementIndex; i++){
    fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i-2]);
  }
  return fibonacciArray[elementIndex];
}
//TEST
console.log(getFibonacciByElement(4));