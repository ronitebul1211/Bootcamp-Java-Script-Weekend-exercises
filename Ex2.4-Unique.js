`use-strict`

/**
  There is an array with some numbers. All numbers are equal except for one. Try to find it!
  findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
  It’s guaranteed that array contains at least 3 numbers.
 */

 const findUnique = (numArray) => {
  
  const firstNumOccurrenceCount = numArray.filter((number) => number === numArray[0]).length;

  return firstNumOccurrenceCount === 1
  ? numArray[0]
  : numArray.find((number) => number !== numArray[0]);
 }
//TEST
 console.log(findUnique([ 1, 1, 1, 1, 1, 2 ]));