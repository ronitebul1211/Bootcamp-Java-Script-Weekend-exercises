`use-strict`

/**
  Well met with Fibonacci bigger brother, AKA Tribonacci.
  As the name may already reveal, it works basically like a Fibonacci, 
  but summing the last 3 (instead of 2) numbers of the sequence to generate the next. 
  So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
  [1, 1 ,1, 3, 5, 9, 17, 31, ...]
  But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] 
  basically shifts the common Fibonacci sequence by once place, 
  you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
  [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
  Well, you may have guessed it by now, but to be clear: 
  you need to create a fibonacci function that given a signature array/list, returns the n elements 
  signature included of the so seeded sequence. Signature will always contain 3 numbers; 
  n will always be a non-negative number; if n == 0, then return an empty array and be ready for anything else which is not clearly specified ;)
 */

/**
 * This function check for the validation of Tribonacci signature with the following conditions:
 * signature include 3 element
 * each element is an integer in range of 0-1 include
 * elements in ascending order 
 * @param {number[]} signature - signature included one of the seeded sequence [0,0,1] [0,1,1] [1,1,1]
 * @return {boolean} - true for valid, false for invalid 
 */
const isValidTribonacciSignature = (signature) => {
  return signature.length === 3 
  && signature.every((element, i, srcArray) => {
    return Number.isInteger(element) 
          && element <= 1
          && element >= 0
          && signature.every((element, index, srcArray) => index === 0 || element >= srcArray[index-1]);
        })
 }

 /**
 * get Tribonacci number, by its signature and element position
 * @param {Number[]} signature - signature included one of the seeded sequence [0,0,1] [0,1,1] [1,1,1]
 * @param {number} num - position in number: 1 -> 0, 2-> 1, 3 -> 1, 4 -> 2  
 */
const getTribonacciByElement = (signature ,elementNumber) => { 
  
  if (isValidTribonacciSignature(signature)){
    const elementIndex = elementNumber-1;
    let tribonacciArray = signature;

    for (let i = 3; i <= elementIndex; i++){
      tribonacciArray.push(tribonacciArray[i - 1] + tribonacciArray[i-2] + tribonacciArray[i-3]);
    }
    return tribonacciArray[elementIndex]
  }
  return null; 
}
//TEST
console.log(getTribonacciByElement([1,1,1], 5));


