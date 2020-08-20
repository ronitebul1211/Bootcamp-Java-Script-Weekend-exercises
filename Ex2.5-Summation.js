`use-strict`

/**
  Write a program that finds the summation of every number from 1 to num. 
  The number will always be a positive integer greater than 0.
  For example:
  summation(2) -> 3
  1 + 2
 */

 const summation = (number) => {
  let summation = 0;
  for(let i = 1; i <= number; i++){
    summation += i;
  }
  return summation;
 }

 //TEST
 console.log(summation(5));