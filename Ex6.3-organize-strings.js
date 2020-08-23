`use-strict`
/**
  Take 2 strings s1 and s2 including only letters from ato z. 
  Return a new sorted string, the longest possible, containing distinct letters,

  each taken only once - coming from s1 or s2.

  Examples:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"
  a = "abcdefghijklmnopqrstuvwxyz"
  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

 const getDistinctLetters = (string1, string2) => {
   
  const charArray = (string1 + string2).split('');

  return charArray.reduce((uniqueCharArray, currentChar) => {
    return uniqueCharArray.includes(currentChar) 
    ? uniqueCharArray 
    : [...uniqueCharArray, currentChar];
  }, []).sort().join('');
 }

 console.log(getDistinctLetters("xyaabbbccccdefww", "xxxxyyyyabklmopq"));